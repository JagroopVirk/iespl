const siteUrl = 'https://indivirtuseco.com';
const siteLogo = `${siteUrl}/logo.png`;
const link = '/contact-us';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Contact Us | Indivirtus Ecological Services',
    description:
      'Get in touch with Indivirtus Ecological Services for inquiries about our sustainable solutions and ecological consulting services.',
    keywords: [
      'contact indivirtus',
      'ecological services contact',
      'sustainability consulting',
      'environmental consulting',
      'indivirtus support',
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
      title: 'Contact Us | Indivirtus Ecological Services',
      description:
        'Reach out to Indivirtus Ecological Services for expert support in sustainability and environmental solutions.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Contact Us | Indivirtus Ecological Services',
      description:
        'Reach out to Indivirtus Ecological Services for expert support in sustainability and environmental solutions.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'PageView',
    eventAction: 'View',
    eventLabel: 'Contact Us',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['contact_page'],
      certification: 'ISO 14001',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Ecological Services Contact',
    description:
      'Contact Indivirtus Ecological Services for inquiries about our ecological consulting and sustainability solutions.',
    serviceType: 'Customer Support',
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
      name: 'Contact Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Customer Support',
          description:
            'Reach out for inquiries about ecological consulting, sustainability solutions, or project support.',
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
        name: 'How can I contact Indivirtus Ecological Services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can contact us via phone at +91-9131925456 or visit our contact page at https://indivirtuseco.com/contact-us.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is the Indivirtus Ecological Services office located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our office is located at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India, 160059.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of inquiries can I make through the contact page?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can inquire about ecological consulting, sustainability solutions, project partnerships, or general information about our services.',
        },
      },
    ],
  },
};
