import { useEffect } from 'react';

const GtmPush = ({
  event = 'Service Inquiry',
  eventCategory = 'Default Category',
  eventLabel = 'Default Label',
  serviceTier = '',
  regulatoryLevel = '',
}) => {
  useEffect(() => {
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
        debugId: 'GtmPush-JSX-' + Date.now(), // Unique ID for debugging
      });

      window.gtmPushExecuted = true;
    }
  }, []);

  return null;
};

export default GtmPush;
