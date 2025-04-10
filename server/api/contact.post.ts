import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { honeypot, firstName, lastName, email, phone, subject, message } = body;

  // Vérification du honeypot
  if (honeypot) {
    console.warn('Tentative de bot détectée.');
    return { success: false, message: 'Bot détecté.' };
  }

  // Validation des champs obligatoires
  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !subject || !message?.trim()) {
    console.warn('Tentative d\'envoi de formulaire incomplet');
    return { success: false, message: 'Tous les champs obligatoires doivent être remplis.' };
  }

  // Validation de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: 'Format d\'email invalide.' };
  }

  // Validation du téléphone (si présent)
  if (phone?.trim()) {
    const cleanedPhone = phone.replace(/[\s.-]/g, '');
    const frenchPhoneRegex = /^(?:(?:\+33)|0)([1-9]\d{8})$/;
    if (!frenchPhoneRegex.test(cleanedPhone)) {
      return { success: false, message: 'Format de numéro de téléphone invalide.' };
    }
  }

  try {
    const data = await resend.emails.send({
      from: 'Lucas <contact@lucaschedhomme.com>',
      to: ['lucas.chedhomme424@gmail.com'],
      subject: `Nouveau message depuis le portfolio - ${subject}`,
      replyTo: email,
      html: `
        <h1>Message de ${firstName} ${lastName}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || 'Non renseigné'}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error(error);
    return { success: false, error };
  }
});
