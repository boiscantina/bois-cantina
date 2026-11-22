// Helper liviano para enviar eventos de clics e interacciones a Google Analytics 4 (G-MKD913NKDE) y GTM
export function trackEvent(eventName, params = {}) {
  try {
    if (typeof window === 'undefined') return;

    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }
  } catch {
    // Nunca romper la navegación si el usuario tiene bloqueador de anuncios
  }
}
