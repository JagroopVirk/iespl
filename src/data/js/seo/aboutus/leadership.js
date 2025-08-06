const siteUrl = 'https://indivirtuseco.com';
const siteLogo = `${siteUrl}/logo.png`;
const link = '/about-us/leadership';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Leadership | Indivirtus Ecological Services',
    description:
      'Meet the leadership team at Indivirtus Ecological Services, driving innovation in ecological consulting and sustainability solutions.',
    keywords: [
      'indivirtus leadership',
      'ecological consulting team',
      'sustainability experts',
      'environmental leadership',
      'indivirtus team',
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
      title: 'Leadership | Indivirtus Ecological Services',
      description:
        'Learn about the leadership team guiding Indivirtus Ecological Services in sustainability and ecological innovation.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Leadership | Indivirtus Ecological Services',
      description:
        'Learn about the leadership team guiding Indivirtus Ecological Services in sustainability and ecological innovation.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'PageView',
    eventAction: 'View',
    eventLabel: 'Leadership',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['leadership_page'],
      certification: 'ISO 14001',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Ecological Services Leadership',
    description:
      'Meet the leadership team at Indivirtus Ecological Services, experts in ecological consulting and sustainability solutions.',
    serviceType: 'Leadership Team',
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
      name: 'Leadership Expertise',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Ecological Consulting Leadership',
          description: 'Our leadership team provides strategic direction for ecological consulting projects.',
        },
        {
          '@type': 'Offer',
          name: 'Sustainability Innovation Leadership',
          description: 'Driving innovative sustainability solutions through experienced leadership.',
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
        name: 'Who leads Indivirtus Ecological Services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our leadership team consists of experts in ecological consulting and sustainability, guiding our mission globally.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the leadership team contribute to Indivirtus’ mission?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our leaders drive innovation in ecological consulting and sustainability, ensuring impactful solutions for our clients.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact the leadership team at Indivirtus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Contact us at +91-9131925456 or visit our office at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India, 160059.',
        },
      },
    ],
  },
};
