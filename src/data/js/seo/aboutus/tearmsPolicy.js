const siteUrl = 'https://indivirtuseco.com';
const siteLogo = `${siteUrl}/logo.png`;
const link = '/about-us/terms-policy';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Terms & Policy | Indivirtus Ecological Services',
    description:
      'Review the terms of service and policies of Indivirtus Ecological Services, outlining our commitment to ethical and sustainable practices.',
    keywords: [
      'indivirtus terms',
      'terms of service',
      'policy',
      'ecological consulting terms',
      'sustainability policy',
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
      title: 'Terms & Policy | Indivirtus Ecological Services',
      description:
        'Explore the terms of service and policies governing Indivirtus Ecological Services’ sustainable and ecological consulting practices.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Terms & Policy | Indivirtus Ecological Services',
      description:
        'Explore the terms of service and policies governing Indivirtus Ecological Services’ sustainable and ecological consulting practices.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'PageView',
    eventAction: 'View',
    eventLabel: 'Terms & Policy',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['terms_policy_page'],
      certification: 'ISO 14001',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Ecological Services Terms & Policy',
    description:
      'Review the terms of service and policies that guide Indivirtus Ecological Services’ commitment to ethical ecological consulting and sustainability.',
    serviceType: 'Terms and Policy',
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
      name: 'Terms and Policy Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Terms of Service',
          description:
            'Our terms of service outline the conditions for engaging with our ecological consulting services.',
        },
        {
          '@type': 'Offer',
          name: 'Privacy Policy',
          description: 'Our privacy policy ensures the protection of client information and data.',
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
        name: 'What are the terms of service for Indivirtus Ecological Services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our terms of service outline the conditions for using our ecological consulting and sustainability services, ensuring ethical and professional standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Indivirtus’ privacy policy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our privacy policy details how we collect, use, and protect client data to ensure confidentiality and compliance.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Indivirtus about terms and policy questions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Contact us at +91-9131925456 or visit our office at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India, 160059.',
        },
      },
    ],
  },
};
