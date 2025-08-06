const siteUrl = 'https://indivirtuseco.com';
const siteLogo = siteUrl + '/logo.png';
const link = '/blogs';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Pharmaceutical Insights & Blogs | Indivirtus Healthcare',
    description:
      'Stay updated with Indivirtus Healthcare’s blog, offering expert insights on pharmaceutical compliance, cleaning validation, pharmacovigilance, GMP approvals, and more.',
    keywords: [
      'pharmaceutical blog',
      'cleaning validation',
      'pharmacovigilance',
      'GMP compliance',
      'genotoxic impurity assessment',
      'regulatory compliance',
      'pharmaceutical industry insights',
      'NABL calibration',
      'medical device toxicology',
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
      url: siteUrl,
      site_name: 'Indivirtus EcologicalServices Pvt Ltd',
      image: siteLogo,
      title: 'Pharmaceutical Insights & Blogs | Indivirtus Healthcare',
      description:
        'Explore Indivirtus Healthcare’s blog for expert insights on pharmaceutical compliance, cleaning validation, pharmacovigilance, GMP approvals, and regulatory updates.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Pharmaceutical Insights & Blogs | Indivirtus Healthcare',
      description:
        'Discover the latest pharmaceutical industry insights, including cleaning validation, pharmacovigilance, and GMP compliance, on Indivirtus Healthcare’s blog.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'Blogs Page',
    eventAction: 'View',
    eventLabel: 'Pharmaceutical Insights',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['Blog Posts', 'Industry Insights', 'Regulatory Updates'],
      certification: 'NABL Accredited',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus Pharmaceutical Blog',
    description:
      'Indivirtus Healthcare’s blog provides expert insights and updates on pharmaceutical compliance, cleaning validation, pharmacovigilance, GMP approvals, and regulatory trends.',
    serviceType: 'Pharmaceutical Knowledge and Insights',
    provider: {
      '@type': 'Organization',
      name: 'Indivirtus',
      url: 'https://www.indivirtus.com',
      logo: 'https://www.indivirtus.com/logo.png',
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
      name: 'Pharmaceutical Blog Content',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Pharmaceutical Compliance Insights',
          description:
            'Blog articles covering regulatory compliance, GMP approvals, and quality management systems for the pharmaceutical industry.',
        },
        {
          '@type': 'Offer',
          name: 'Cleaning Validation Guidance',
          description:
            'Expert content on ADE/PDE/OEL calculations and cleaning validation strategies to ensure product safety.',
        },
        {
          '@type': 'Offer',
          name: 'Pharmacovigilance Updates',
          description: 'Insights on pharmacovigilance processes, drug safety monitoring, and risk management plans.',
        },
        {
          '@type': 'Offer',
          name: 'Genotoxic Impurity Assessments',
          description:
            'Blog posts exploring genotoxic impurity evaluations and toxicological risk assessments for pharmaceuticals and medical devices.',
        },
        {
          '@type': 'Offer',
          name: 'Industry Trends and Innovations',
          description:
            'Articles on the latest trends, innovations, and regulatory updates in the pharmaceutical and healthcare sectors.',
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
        name: 'What topics are covered in Indivirtus Healthcare’s blog?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our blog covers topics such as pharmaceutical compliance, cleaning validation, pharmacovigilance, GMP approvals, genotoxic impurity assessments, and industry trends.',
        },
      },
      {
        '@type': 'Question',
        name: 'How often is the Indivirtus blog updated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We regularly update our blog with fresh content, including insights on regulatory changes, industry best practices, and emerging pharmaceutical trends.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I subscribe to the Indivirtus blog for updates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you can subscribe to our blog updates via our website at https://indivirtuseco.com/blogs to receive notifications about new posts and industry insights.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who writes the content for the Indivirtus blog?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our blog content is authored by our team of pharmaceutical experts, regulatory consultants, and industry professionals with extensive experience in compliance and safety.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Indivirtus for more information about your blog content?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can reach us through our blog page at https://indivirtuseco.com/blogs, by phone at +91-9131925456, or at our office at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India.',
        },
      },
    ],
  },
};
