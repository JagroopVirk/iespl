const siteUrl = 'https://indivirtuseco.com';
const siteLogo = `${siteUrl}/logo.png`;
const link = '/';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Indivirtus Ecological Services | Sustainable Solutions',
    description:
      'Indivirtus Ecological Services provides sustainable environmental solutions globally, specializing in ecological consulting and green technologies.',
    keywords: ['ecological services', 'sustainability', 'environmental consulting', 'green technology'],
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
      url: siteUrl,
      site_name: 'Indivirtus Ecological Services Pvt Ltd',
      image: siteLogo,
      title: 'Indivirtus Ecological Services | Sustainable Solutions',
      description:
        'Indivirtus Ecological Services offers innovative environmental solutions to promote sustainability worldwide.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Indivirtus Ecological Services | Sustainable Solutions',
      description:
        'Indivirtus Ecological Services offers innovative environmental solutions to promote sustainability worldwide.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'PageView',
    eventAction: 'View',
    eventLabel: 'Homepage',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['ecological_report'],
      certification: 'ISO 14001',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Ecological Services',
    description: 'Providing sustainable environmental consulting and green technology solutions globally.',
    serviceType: 'Ecological Consulting',
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
      name: 'Ecological Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Environmental Impact Assessment',
          description: 'Comprehensive assessment of environmental impacts for projects.',
        },
        {
          '@type': 'Offer',
          name: 'Sustainability Consulting',
          description: 'Consulting services to implement sustainable practices.',
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
        name: 'What services does Indivirtus Ecological Services provide?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide environmental impact assessments, sustainability consulting, and green technology solutions to promote ecological balance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Indivirtus Ecological Services located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our office is located at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India, 160059.',
        },
      },
    ],
  },
};
