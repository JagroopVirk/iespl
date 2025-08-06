const siteUrl = 'https://indivirtuseco.com';
const siteLogo = `${siteUrl}/logo.png`;
const link = '/about-us/vision-mission-qualityPolicy';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Vision, Mission & Quality Policy | Indivirtus Ecological Services',
    description:
      'Discover the vision, mission, and quality policy of Indivirtus Ecological Services, driving our commitment to sustainability and ecological excellence.',
    keywords: [
      'indivirtus vision',
      'indivirtus mission',
      'quality policy',
      'ecological services',
      'sustainability goals',
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
      title: 'Vision, Mission & Quality Policy | Indivirtus Ecological Services',
      description:
        'Learn about the vision, mission, and quality policy guiding Indivirtus Ecological Services’ sustainability efforts.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Vision, Mission & Quality Policy | Indivirtus Ecological Services',
      description:
        'Learn about the vision, mission, and quality policy guiding Indivirtus Ecological Services’ sustainability efforts.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'PageView',
    eventAction: 'View',
    eventLabel: 'Vision, Mission & Quality Policy',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['vision_mission_quality_page'],
      certification: 'ISO 14001',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Ecological Services Vision, Mission & Quality Policy',
    description:
      'Explore the vision, mission, and quality policy that drive Indivirtus Ecological Services’ commitment to ecological consulting and sustainability.',
    serviceType: 'Vision and Mission',
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
      name: 'Vision and Mission Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Sustainability Vision',
          description: 'Our vision to lead global sustainability through innovative ecological solutions.',
        },
        {
          '@type': 'Offer',
          name: 'Quality Assurance',
          description: 'Our quality policy ensures excellence in all ecological consulting services.',
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
        name: 'What is the vision of Indivirtus Ecological Services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our vision is to be a global leader in sustainability, delivering innovative ecological solutions for a better planet.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the mission of Indivirtus Ecological Services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our mission is to provide cutting-edge ecological consulting and sustainability services to promote environmental stewardship.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Indivirtus’ quality policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our quality policy commits to delivering high-standard, sustainable solutions with integrity and excellence.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Indivirtus for more information?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Contact us at +91-9131925456 or visit our office at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India, 160059.',
        },
      },
    ],
  },
};
