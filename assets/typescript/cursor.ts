import '../css/cursor.css';

interface CursorOptions {
  size?: {
    default: number;
    hover: number;
  };
  offset?: {
    x: number;
    y: number;
  };
  svg?: string;
}

const defaultOptions: CursorOptions = {
  size: {
    default: 40,
    hover: 60
  },
  offset: {
    x: 25,
    y: 25
  },
  svg: `
    <svg xmlns="http://www.w3.org/2000/svg" width="83" height="84" viewBox="0 0 83 84" fill="none">
  <path d="M0 3.54062e-06H6V81H0V3.54062e-06Z" fill="#0AF29D"/>
  <path d="M0 6V3.54062e-06L81 0V6L0 6Z" fill="#0AF29D"/>
  <path d="M2 7.24268L6.24264 3.00004L82.3818 79.1392L78.1392 83.3818L2 7.24268Z" fill="#0AF29D"/>
</svg>
  `
};

export const setCursor = (element: HTMLElement, options: CursorOptions = {}) => {
  const finalOptions = { ...defaultOptions, ...options };
  
  // Créer l'élément curseur personnalisé s'il n'existe pas
  let cursorElement = document.querySelector('.custom-cursor');
  if (!cursorElement) {
    cursorElement = document.createElement('div');
    cursorElement.className = 'custom-cursor';
    document.body.appendChild(cursorElement);
  }

  // Ajouter la classe pour désactiver le curseur natif
  element.classList.add('custom-cursor-container');

  // Ajouter les styles au curseur personnalisé
  const cursor = cursorElement as HTMLElement;
  cursor.style.width = `${finalOptions.size!.default}px`;
  cursor.style.height = `${finalOptions.size!.default}px`;

  // Insérer le SVG
  cursor.innerHTML = finalOptions.svg!;

  // Fonction pour mettre à jour la position du curseur
  const updateCursorPosition = (e: MouseEvent) => {
    cursor.style.left = `${e.clientX + finalOptions.offset!.x}px`;
    cursor.style.top = `${e.clientY + finalOptions.offset!.y}px`;
  };

  // Fonction pour gérer l'entrée de la souris sur l'élément
  const handleMouseEnter = () => {
    cursor.style.display = 'block';
    cursor.style.opacity = '1';
    cursor.style.width = `${finalOptions.size!.hover}px`;
    cursor.style.height = `${finalOptions.size!.hover}px`;
  };

  // Fonction pour gérer la sortie de la souris de l'élément
  const handleMouseLeave = () => {
    cursor.style.opacity = '0';
    setTimeout(() => {
      if (cursor.style.opacity === '0') {
        cursor.style.display = 'none';
      }
    }, 300);
    cursor.style.width = `${finalOptions.size!.default}px`;
    cursor.style.height = `${finalOptions.size!.default}px`;
  };

  // Ajouter les écouteurs d'événements
  element.addEventListener('mousemove', updateCursorPosition);
  element.addEventListener('mouseenter', handleMouseEnter);
  element.addEventListener('mouseleave', handleMouseLeave);

  // Retourner une fonction de nettoyage
  return () => {
    element.removeEventListener('mousemove', updateCursorPosition);
    element.removeEventListener('mouseenter', handleMouseEnter);
    element.removeEventListener('mouseleave', handleMouseLeave);
    element.classList.remove('custom-cursor-container');
    if (cursorElement && cursorElement.parentNode) {
      cursorElement.parentNode.removeChild(cursorElement);
    }
  };
};

export default {
  setCursor,
};

