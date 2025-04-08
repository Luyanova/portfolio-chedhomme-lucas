<template>  
    <div>
        <section class="flex flex-col lg:flex-row px-4 lg:px-10 pt-10 2xl:pt-20 pb-40 gap-8 lg:gap-30 2xl:gap-20 2xl:h-[90vh]">
            <div class="w-full h-auto sm:w-1/3 lg:w-3/4 lg:h-full 2xl:w-1/4">
                <NuxtImg
                    src="/img/contact/lucasChedhomme.jpg" 
                    alt="Lucas Chedhomme" 
                    class="w-full h-auto object-cover rounded-xs" 
                    loading="lazy"
                    format="webp"
                    quality="50"
                />
            </div>
            <div class="flex flex-col gap-10">
                <div class="flex flex-col gap-2">
                <h2 class="text-primary-500 font-['Owners_Wide'] text-4xl sm:text-5xl 2xl:text-6xl font-bold italic leading-[120%]">
                    On discute ?
                </h2>

                <p class="text-grey-500 font-['Satoshi_Variable'] text-base sm:text-lg 2xl:text-xl font-normal leading-[150%] tracking-[0.64px]">
                    Une idée en tête ? Un projet ? Ou juste envie de dire bonjour ? N'hésitez pas à me contacter, je serai ravi d'échanger avec vous !
                </p>
                </div>
           

            <form class="flex flex-col gap-8" autocomplete="on" @submit.prevent="submitForm">
                <div class="flex flex-col gap-10">
                    <!-- Sujet du contact -->
                    <div class="relative">
                        <select v-model="formData.subject" class="w-full px-4 py-4 text-grey-600 border border-gray-300 rounded-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 appearance-none font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]">
                            <option value="" disabled selected>Sujet du contact</option>
                            <option value="photographie">Photographie</option>
                            <option value="web">Web</option>
                            <option value="ecole">École</option>
                            <option value="autre">Autre</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center px-4  pointer-events-none">
                            <ArrowDownVertical class="w-4 h-4" />
                        </div>
                    </div>

                    <div class="flex flex-col gap-4 sm:flex-row">
                        <!-- Prénom -->
                        <input 
                            v-model="formData.firstName" 
                            type="text" 
                            name="firstName"
                            autocomplete="given-name"
                            placeholder="Prénom" 
                            class="w-full px-4 py-4 text-grey-600 border border-gray-300 rounded-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]"
                        >

                        <!-- Nom -->
                        <input 
                            v-model="formData.lastName" 
                            type="text" 
                            name="lastName"
                            autocomplete="family-name"
                            placeholder="Nom" 
                            class="w-full px-4 py-4 text-grey-600 border border-gray-300 rounded-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]"
                        >
                    </div>

                    <div class="flex flex-col gap-4 sm:flex-row">
                        <!-- Email -->
                        <div class="flex flex-col sm:w-1/2">
                            <input 
                                v-model="formData.email"    
                                type="email" 
                                name="email"
                                autocomplete="email"
                                placeholder="Email" 
                                class="w-full px-4 py-4 text-grey-600 border border-gray-300 rounded-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]"
                                :class="{ 'border-[#F2120A]': emailError }"
                                @blur="markAsTouched('email')"
                            >
                            <p v-if="emailError" class="mt-1 text-[#F2120A] font-['Satoshi_Variable'] text-sm 2xl:text-base">
                                {{ emailError }}
                            </p>
                        </div>

                        <!-- Numéro de téléphone -->
                        <div class="flex flex-col sm:w-1/2">
                            <input 
                                v-model="formData.phone" 
                                type="tel"
                                name="phone" 
                                autocomplete="tel"
                                placeholder="Numéro de téléphone" 
                                class="w-full px-4 py-4 text-grey-600 border border-gray-300 rounded-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]"
                                :class="{ 'border-[#F2120A]': phoneError }"
                                @blur="markAsTouched('phone')"
                            >
                            <p v-if="phoneError" class="mt-1 text-[#F2120A] font-['Satoshi_Variable'] text-sm 2xl:text-base">
                                {{ phoneError }}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Message -->
                <textarea 
                    v-model="formData.message" 
                    name="message"
                    placeholder="Votre message" 
                    rows="2" 
                    class="w-full px-4 py-4 text-grey-600 border border-gray-300 rounded-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]"
                />

                <!-- Submit Button -->
                <div class="flex justify-end mt-2">
                    <ButtonPrimary :icon="ArrowUp" type="submit" :disabled="!isFormValid">
                        Envoyer
                    </ButtonPrimary>
                </div>
            </form>
        </div>
        </section>

        <section>
            <div class="flex flex-col px-4 lg:px-10 py-10 h-[80vh] lg:h-screen bg-grey-800 justify-end">
                <div class="flex flex-col gap-6">
                    <NuxtLink to="https://www.linkedin.com/in/lucas-chedhomme-395520283/" target="_blank" class="flex gap-6 items-end transition-all duration-300 hover:text-primary-500 hover:-translate-y-[10px] group">
                        <ArrowUp class="w-6 h-6 transition-colors duration-300" :stroke="'#fafafa'" :class-name="'group-hover:[&>path]:stroke-primary-500'" />
                        <p class="text-grey-50 font-['Satoshi_Variable'] text-4xl 2xl:text-5xl font-normal leading-[77%] tracking-[0.856px] group-hover:text-primary-500">Linkedin</p>
                    </NuxtLink>
                    <NuxtLink to="https://www.instagram.com/lucaschedh.design/" target="_blank" class="flex gap-6 items-end transition-all duration-300 hover:text-primary-500 hover:-translate-y-[10px] group">
                        <ArrowUp class="w-6 h-6 transition-colors duration-300" :stroke="'#fafafa'" :class-name="'group-hover:[&>path]:stroke-primary-500'" />
                        <p class="text-grey-50 font-['Satoshi_Variable'] text-4xl 2xl:text-5xl font-normal leading-[77%] tracking-[0.856px] group-hover:text-primary-500">Instagram</p>
                    </NuxtLink>
                    <NuxtLink to="mailto:contact@lucaschedhomme.com" target="_blank" class="flex gap-6 items-end transition-all duration-300 hover:text-primary-500 hover:-translate-y-[10px] group">
                        <ArrowUp class="w-6 h-6 transition-colors duration-300" :stroke="'#fafafa'" :class-name="'group-hover:[&>path]:stroke-primary-500'" />
                        <p class="text-grey-50 font-['Satoshi_Variable'] text-4xl 2xl:text-5xl font-normal leading-[77%] tracking-[0.856px] group-hover:text-primary-500">E-mail</p>
                    </NuxtLink>
                    <NuxtLink to="https://www.behance.net/lucaschedh" target="_blank" class="flex gap-6 items-end transition-all duration-300 hover:text-primary-500 hover:-translate-y-[10px] group">
                        <ArrowUp class="w-6 h-6 transition-colors duration-300" :stroke="'#fafafa'" :class-name="'group-hover:[&>path]:stroke-primary-500'" />
                        <p class="text-grey-50 font-['Satoshi_Variable'] text-4xl 2xl:text-5xl font-normal leading-[77%] tracking-[0.856px] group-hover:text-primary-500">Behance</p>
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import ArrowUp from '~/components/icons/ArrowUp.vue'
import ArrowDownVertical from '~/components/icons/ArrowDownVertical.vue'
import { ref, computed } from 'vue'

// Définir les méta-données SEO de la page
useSeoMeta({
  title: 'Contact - Portfolio de Lucas Chedhomme',
  description: 'Vous avez un projet ou une question? Contactez Lucas Chedhomme, développeur web et créateur digital basé à Lille.',
  ogTitle: 'Contact - Portfolio de Lucas Chedhomme',
  ogDescription: 'Vous avez un projet ou une question? Contactez Lucas Chedhomme, développeur web et créateur digital basé à Lille.',
  ogImage: '/img/contact/lucasChedhomme.jpg',
  ogType: 'profile',
  twitterCard: 'summary_large_image',
})

const formData = ref({
    subject: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
})

const touched = ref({
    email: false,
    phone: false
})

// Validation functions
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

const isValidPhone = (phone) => {
    if (!phone) return true // Empty phone is valid (optional field)
    
    // First, remove any spaces, dots, or dashes that might be in the number
    const cleanedPhone = phone.replace(/[\s.-]/g, '')
    
    // Check for French format: +33 followed by 9 digits or 0 followed by 9 digits
    // The first digit after the prefix must be between 1-9
    const frenchPhoneRegex = /^(?:(?:\+33)|0)([1-9]\d{8})$/
    
    return frenchPhoneRegex.test(cleanedPhone)
}

// Computed validation errors
const emailError = computed(() => {
    if (!touched.value.email || !formData.value.email) return ''
    return !isValidEmail(formData.value.email) ? 'Format d\'email invalide' : ''
})

const phoneError = computed(() => {
    if (!touched.value.phone || !formData.value.phone) return ''
    return !isValidPhone(formData.value.phone) ? 'Format de numéro invalide' : ''
})

// Mark fields as touched when they lose focus
const markAsTouched = (field) => {
    touched.value[field] = true
}

// Check if form is valid
const isFormValid = computed(() => {
    return formData.value.subject && 
           formData.value.firstName && 
           formData.value.lastName && 
           formData.value.email && 
           formData.value.message && 
           !emailError.value && 
           (!formData.value.phone || !phoneError.value) // Phone is optional but if provided must be valid
})

const submitForm = () => {
    // Mark all fields as touched on submit attempt
    touched.value.email = true
    touched.value.phone = true
    
    // Only submit if no validation errors
    if (!emailError.value && !phoneError.value) {
        console.log('Form submitted:', formData.value)
    }
}
</script>

