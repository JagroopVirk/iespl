const siteUrl = 'https://indivirtuseco.com';
const siteLogo = `${siteUrl}/logo.png`;
const link = '/about-us/security-confidentiality';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Security & Confidentiality | Indivirtus Ecological Services',
    description:
      'Learn about Indivirtus Ecological Services’ commitment to security and confidentiality in our ecological consulting and sustainability services.',
    keywords: [
      'indivirtus security',
      'confidentiality policy',
      'data protection',
      'ecological consulting security',
      'sustainability privacy',
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
      title: 'Security & Confidentiality | Indivirtus Ecological Services',
      description:
        'Discover how Indivirtus Ecological Services ensures security and confidentiality in our sustainable and ecological solutions.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Security & Confidentiality | Indivirtus Ecological Services',
      description:
        'Discover how Indivirtus Ecological Services ensures security and confidentiality in our sustainable and ecological solutions.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'PageView',
    eventAction: 'View',
    eventLabel: 'Security & Confidentiality',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['security_confidentiality_page'],
      certification: 'ISO 14001',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Ecological Services Security & Confidentiality',
    description:
      'Indivirtus Ecological Services is committed to robust security and confidentiality practices in our ecological consulting and sustainability services.',
    serviceType: 'Security and Confidentiality',
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
      name: 'Security and Confidentiality Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Data Protection',
          description: 'Ensuring the security of client data in all ecological consulting projects.',
        },
        {
          '@type': 'Offer',
          name: 'Confidentiality Assurance',
          description: 'Maintaining strict confidentiality for sensitive project information.',
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
        name: 'How does Indivirtus Ecological Services ensure data security?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We implement robust security measures, including encryption and secure protocols, to protect client data in all our projects.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Indivirtus’ confidentiality policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our confidentiality policy ensures that sensitive client information is protected and only shared with authorized personnel.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Indivirtus for questions about security policies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Contact us at +91-9131925456 or visit our office at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India, 160059.',
        },
      },
    ],
  },
};
