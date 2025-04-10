export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    const cursorElement = document.querySelector('.custom-cursor');
    if (cursorElement) {
      cursorElement.style.display = 'none';
    }
  });
}); 
