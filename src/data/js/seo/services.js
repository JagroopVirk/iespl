const siteUrl = 'https://indivirtuseco.com';
const siteLogo = siteUrl + '/logo.png';
const link = '/services';

export default {
  pageLink: `${siteUrl}${link}`, //managed with const
  meta: {
    title: 'Services | Indivirtus Ecological Services',
    description:
      'Explore the comprehensive services offered by Indivirtus Ecological Services, including ecological consulting, sustainability solutions, and environmental impact assessments.',
    keywords: [
      'indivirtus services',
      'ecological consulting',
      'sustainability solutions',
      'environmental impact assessment',
      'green services',
    ],
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
      url: `${siteUrl}${link}`,
      site_name: 'Indivirtus Ecological Services Pvt Ltd',
      image: siteLogo,
      title: 'Services | Indivirtus Ecological Services',
      description:
        'Discover the range of services provided by Indivirtus Ecological Services to support sustainability and ecological innovation.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Services | Indivirtus Ecological Services',
      description:
        'Discover the range of services provided by Indivirtus Ecological Services to support sustainability and ecological innovation.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'PageView',
    eventAction: 'View',
    eventLabel: 'Services',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['services_page'],
      certification: 'ISO 14001',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Ecological Services',
    description:
      'Indivirtus Ecological Services offers a wide range of professional services focused on ecological consulting, sustainability solutions, and environmental impact assessments.',
    serviceType: 'Ecological and Sustainability Services',
    provider: {
      '@type': 'Organization',
      name: 'Indivirtus',
      url: siteUrl, // Consistent with siteUrl
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
      name: 'Services Offered',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Ecological Consulting',
          description: 'Expert guidance for sustainable environmental practices and project planning.',
        },
        {
          '@type': 'Offer',
          name: 'Sustainability Solutions',
          description: 'Innovative solutions to promote sustainability across various industries.',
        },
        {
          '@type': 'Offer',
          name: 'Environmental Impact Assessment',
          description: 'Comprehensive assessments to ensure environmentally responsible project outcomes.',
        },
        {
          '@type': 'Offer',
          name: 'Sustainable Development Projects',
          description: 'Initiatives focused on sustainable practices for communities and businesses.',
        },
        {
          '@type': 'Offer',
          name: 'Healthcare Solutions',
          description: 'Integrated healthcare services aligned with sustainability goals.',
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
        name: 'What services does Indivirtus Ecological Services offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer ecological consulting, sustainability solutions, environmental impact assessments, sustainable development projects, and healthcare solutions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can Indivirtus help with sustainability projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our sustainability solutions provide innovative strategies and practices to support environmentally friendly project development.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I request a service from Indivirtus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Visit our services page at https://indivirtuseco.com/services or contact us at +91-9131925456 for more information.',
        },
      },
    ],
  },
};
