const siteUrl = 'https://indivirtuseco.com';
const siteLogo = `${siteUrl}/logo.png`;
const link = '/group-of-companies';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Group of Companies | Indivirtus Ecological Services',
    description:
      'Explore the Indivirtus Group of Companies, delivering innovative ecological, healthcare, and sustainability solutions globally.',
    keywords: [
      'indivirtus group',
      'group of companies',
      'ecological services',
      'healthcare solutions',
      'sustainability',
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
      title: 'Group of Companies | Indivirtus Ecological Services',
      description:
        'Learn about the Indivirtus Group, offering cutting-edge solutions in ecological services, healthcare, and sustainability.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Group of Companies | Indivirtus Ecological Services',
      description:
        'Learn about the Indivirtus Group, offering cutting-edge solutions in ecological services, healthcare, and sustainability.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'PageView',
    eventAction: 'View',
    eventLabel: 'Group of Companies',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['company_overview'],
      certification: 'ISO 14001',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Group of Companies',
    description:
      'The Indivirtus Group of Companies provides a diverse range of services in ecological consulting, healthcare, and sustainable technologies worldwide.',
    serviceType: 'Business Group Services',
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
      name: 'Group Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Ecological Consulting',
          description: 'Expert consulting for environmental impact and sustainability projects.',
        },
        {
          '@type': 'Offer',
          name: 'Healthcare Solutions',
          description: 'Innovative healthcare services and technologies for global markets.',
        },
        {
          '@type': 'Offer',
          name: 'Sustainable Technologies',
          description: 'Cutting-edge solutions for sustainable business practices.',
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
        name: 'What is the Indivirtus Group of Companies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Indivirtus Group of Companies is a conglomerate offering services in ecological consulting, healthcare solutions, and sustainable technologies globally.',
        },
      },
      {
        '@type': 'Question',
        name: 'What industries does the Indivirtus Group serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The group serves industries including environmental consulting, healthcare, and sustainable technology development, with a global presence.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact the Indivirtus Group?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can contact us at +91-9131925456 or visit our office at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India, 160059.',
        },
      },
    ],
  },
};
