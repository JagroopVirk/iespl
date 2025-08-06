const siteUrl = 'https://indivirtuseco.com';
const siteLogo = siteUrl + '/logo.png';
const link = '/';

export default {
  pageLink: `${siteUrl}${link}`, //managed with const
  meta: {
    title: '',
    description: '',
    keywords: [],
    twitterHandle: '@indivirtus',
    url: siteUrl,
    logo: siteLogo,
    type: 'website',
    canonicalUrl: `${siteUrl}${link}`, //managed with const
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
      googlebot: 'index, follow',
    },
    ogTags: {
      type: 'website',
      url: siteUrl,
      site_name: 'Indivirtus Ecological Services Pvt Ltd',
      image: siteLogo,
      title: ' | Indivirtus Ecological Services',
      description: '',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: ' | Indivirtus Ecological Services',
      description: '',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: '',
    eventAction: '',
    eventLabel: '',
    customDimensions: {},
    dataLayerPush: {
      reportType: [],
      certification: '',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: '',
    description: '',
    serviceType: '',
    provider: {
      '@type': 'Organization',
      name: 'Indivirtus',
      url: 'https://www.indivirtuseco.com',
      logo: 'https://www.indivirtuseco.com/logo.png',
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
      serviceUrl: `${siteUrl}${link}`, //managed with const
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
      name: '',
      itemListElement: [
        {
          '@type': 'Offer',
          name: '',
          description: '',
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
        name: '',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '',
        },
      },
    ],
  },
};
