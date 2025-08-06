// src/scripts/gtmPush.js
export default function gtmPush({
  event = 'Service Inquiry',
  eventCategory = 'Default Category',
  eventLabel = 'Default Label',
  serviceTier = '',
  regulatoryLevel = '',
}) {
  if (!window.gtmPushExecuted) {
    console.log('GtmPush Props:', {
      event,
      eventCategory,
      eventLabel,
      serviceTier,
      regulatoryLevel,
    });

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event,
      eventCategory,
      eventLabel,
      serviceTier,
      regulatoryLevel,
      debugId: 'GtmPush-JS-' + Date.now(),
    });

    window.gtmPushExecuted = true;

    // Reset flag on page navigation (for SPA)
    window.addEventListener('popstate', () => {
      window.gtmPushExecuted = false;
    });
  }
}
