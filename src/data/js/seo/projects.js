const siteUrl = 'https://indivirtuseco.com';
const siteLogo = `${siteUrl}/logo.png`;
const link = '/projects';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Projects | Indivirtus Ecological Services',
    description:
      'Explore our projects at Indivirtus Ecological Services, showcasing innovative ecological consulting and sustainability solutions worldwide.',
    keywords: [
      'indivirtus projects',
      'ecological projects',
      'sustainability projects',
      'environmental consulting',
      'green initiatives',
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
      title: 'Projects | Indivirtus Ecological Services',
      description:
        'Discover our impactful projects in ecological consulting and sustainability at Indivirtus Ecological Services.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Projects | Indivirtus Ecological Services',
      description:
        'Discover our impactful projects in ecological consulting and sustainability at Indivirtus Ecological Services.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'PageView',
    eventAction: 'View',
    eventLabel: 'Projects',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['project_page'],
      certification: 'ISO 14001',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Ecological Services Projects',
    description:
      'Showcasing our projects in ecological consulting, environmental impact assessments, and sustainable solutions worldwide.',
    serviceType: 'Project Portfolio',
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
      name: 'Project Portfolio',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Environmental Impact Assessments',
          description: 'Comprehensive assessments to ensure environmentally responsible project outcomes.',
        },
        {
          '@type': 'Offer',
          name: 'Sustainable Development Projects',
          description: 'Initiatives focused on sustainable practices for communities and businesses.',
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
        name: 'What types of projects does Indivirtus Ecological Services undertake?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We undertake projects in ecological consulting, environmental impact assessments, and sustainable development worldwide.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I learn more about Indivirtus’ projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Visit our projects page at https://indivirtuseco.com/projects to explore our portfolio of ecological and sustainability initiatives.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Indivirtus about project collaborations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Contact us at +91-9131925456 or visit our office at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India, 160059 for project inquiries.',
        },
      },
    ],
  },
};
