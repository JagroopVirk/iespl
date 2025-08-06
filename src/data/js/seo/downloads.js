const siteUrl = 'https://indivirtuseco.com';
const siteLogo = `${siteUrl}/logo.png`;
const link = '/downloads';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Download Our Brochure | Indivirtus Ecological Services',
    description:
      'Download the Indivirtus Ecological Services brochure to learn about our sustainable solutions and services.',
    keywords: [
      'indivirtus brochure',
      'download brochure',
      'ecological services',
      'sustainability',
      'environmental consulting',
    ],
    twitterHandle: '@indivirtus',
    url: siteUrl,
    logo: siteLogo,
    type: 'website',
    canonicalUrl: `${siteUrl}${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
      googlebot: 'index, follow',
    },
    ogTags: {
      type: 'website',
      url: `${siteUrl}${link}`,
      site_name: 'Indivirtus Ecological Services Pvt Ltd',
      image: siteLogo,
      title: 'Download Our Brochure | Indivirtus Ecological Services',
      description: 'Get our brochure to explore Indivirtus Ecological Services’ sustainable solutions and offerings.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Download Our Brochure | Indivirtus Ecological Services',
      description: 'Get our brochure to explore Indivirtus Ecological Services’ sustainable solutions and offerings.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'PageView',
    eventAction: 'View',
    eventLabel: 'Downloads',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['brochure_download'],
      certification: 'ISO 14001',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Ecological Services Brochure',
    description:
      'Download the official brochure for Indivirtus Ecological Services to discover our sustainable environmental solutions.',
    serviceType: 'Brochure Download',
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
      name: 'Brochure Download',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Indivirtus Ecological Services Brochure',
          description:
            'Download our comprehensive brochure detailing our ecological consulting and sustainability services.',
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
        name: 'How can I download the Indivirtus Ecological Services brochure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Visit our downloads page at https://indivirtuseco.com/downloads to access and download our official brochure.',
        },
      },
      {
        '@type': 'Question',
        name: 'What information is included in the Indivirtus brochure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The brochure provides details on our ecological consulting services, sustainability solutions, and company mission.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who can I contact for more information about the brochure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For inquiries, contact us at +91-9131925456 or visit our office at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India, 160059.',
        },
      },
    ],
  },
};
