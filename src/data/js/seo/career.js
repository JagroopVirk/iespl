const siteUrl = 'https://indivirtuseco.com';
const siteLogo = `${siteUrl}/logo.png`;
const link = '/career';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Careers | Indivirtus Ecological Services',
    description:
      'Join Indivirtus Ecological Services and explore career opportunities in ecological consulting, sustainability, and environmental innovation.',
    keywords: [
      'indivirtus careers',
      'ecological consulting jobs',
      'sustainability careers',
      'environmental jobs',
      'join indivirtus',
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
      title: 'Careers | Indivirtus Ecological Services',
      description:
        'Explore exciting career opportunities at Indivirtus Ecological Services in sustainability and environmental consulting.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Careers | Indivirtus Ecological Services',
      description:
        'Explore exciting career opportunities at Indivirtus Ecological Services in sustainability and environmental consulting.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'PageView',
    eventAction: 'View',
    eventLabel: 'Careers',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['career_page'],
      certification: 'ISO 14001',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Ecological Services Careers',
    description:
      'Explore career opportunities at Indivirtus Ecological Services, focusing on ecological consulting, sustainability, and environmental innovation.',
    serviceType: 'Career Opportunities',
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
      name: 'Career Opportunities',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Ecological Consultant',
          description: 'Join our team as an ecological consultant to work on sustainable environmental projects.',
        },
        {
          '@type': 'Offer',
          name: 'Sustainability Specialist',
          description: 'Contribute to innovative sustainability solutions for global clients.',
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
        name: 'What types of careers are available at Indivirtus Ecological Services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer roles in ecological consulting, sustainability, environmental research, and project management.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I apply for a job at Indivirtus Ecological Services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Visit our careers page at https://indivirtuseco.com/career to view open positions and submit your application.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who can I contact for career-related inquiries?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For career inquiries, contact us at +91-9131925456 or visit our office at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India, 160059.',
        },
      },
    ],
  },
};
