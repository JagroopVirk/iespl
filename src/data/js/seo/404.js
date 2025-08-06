const siteUrl = 'https://indivirtuseco.com';
const siteLogo = `${siteUrl}/logo.png`;
const link = '/404';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Page Not Found | Indivirtus Ecological Services',
    description:
      'Oops! The page you’re looking for doesn’t exist. Explore Indivirtus Ecological Services for sustainability and ecological consulting solutions.',
    keywords: ['404 error', 'indivirtus', 'page not found', 'ecological services', 'sustainability'],
    twitterHandle: '@indivirtus',
    url: siteUrl,
    logo: siteLogo,
    type: 'website',
    canonicalUrl: `${siteUrl}${link}`,
    robotsMeta: {
      index: false, // Prevent indexing of 404 page
      follow: false,
      nocache: true,
      googlebot: 'noindex, nofollow',
    },
    ogTags: {
      type: 'website',
      url: `${siteUrl}${link}`,
      site_name: 'Indivirtus Ecological Services Pvt Ltd',
      image: siteLogo,
      title: 'Page Not Found | Indivirtus Ecological Services',
      description:
        'The page you’re looking for is not available. Visit our homepage to learn about our ecological and sustainability services.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Page Not Found | Indivirtus Ecological Services',
      description:
        'The page you’re looking for is not available. Visit our homepage to learn about our ecological and sustainability services.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'PageView',
    eventAction: 'View',
    eventLabel: '404 Error',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['404_error'],
      certification: 'ISO 14001',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Ecological Services 404',
    description:
      'Page not found. Explore Indivirtus Ecological Services for innovative ecological consulting and sustainability solutions.',
    serviceType: 'Navigation Support',
    provider: {
      '@type': 'Organization',
      name: 'Indivirtus',
      url: siteUrl,
      logo: siteLogo,
      sameAs: [
        'https://www.linkedin.com/company/indivirtus-group-of-companies',
        'https://twitter.com/indivirtus',
        'https://www.facebook.com/Indivirtus',
        'https://www.instagram.com/indivirtus_healthcare',
      ],
    },
    areaServed: {
      '@type': 'Country',
      name: 'Global',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${siteUrl}${link}`,
      servicePhone: '+91-9131925456',
      servicePostalAddress: {
        '@type': 'PostalAddress',
        streetAddress: '522, Taj Plaza, TDI city, Sector 118',
        addressLocality: 'Mohali',
        addressRegion: 'Punjab',
        postalCode: '160059',
        addressCountry: 'India',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Navigation Assistance',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Website Navigation Support',
          description:
            'Assistance to find the right resources on our website for ecological and sustainability services.',
        },
      ],
    },
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why am I seeing a 404 error on the Indivirtus website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A 404 error means the page you’re looking for doesn’t exist. Try visiting our homepage at https://indivirtuseco.com to explore our services.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I find the right page on the Indivirtus website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use the navigation menu on our homepage or contact us at +91-9131925456 for assistance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who can I contact for help with the Indivirtus website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Contact us at +91-9131925456 or visit our office at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India, 160059.',
        },
      },
    ],
  },
};
