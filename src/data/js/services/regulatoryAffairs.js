import regulatoryAffairs from '@/assets/regulatoryAffairs.png';

export default {
  service_id: 'REG-001',
  report_type: 'Regulatory Affairs',
  title: 'Global Regulatory Affairs Services | Market Approval Experts',
  name: 'Regulatory Affairs',
  description:
    'Comprehensive regulatory support for product approvals, labeling, variants, renewals, and dossiers for international markets.',
  full_description:
    'From dossier compilation (eCTD/ACTD) and submission strategy to answers, labeling, renewals, and intelligence, our regulatory specialists assist with international market access. We maintain your project compliant and on schedule thanks to our solid understanding of FDA, EMA, CDSCO, and WHO requirements.',
  estimated_duration: 'Varies by region and complexity',
  deliverables: [
    'Regulatory Strategy Document',
    'Dossier Compilation (eCTD/ACTD)',
    'Gap Analysis Report',
    'Query Response Support',
    'Renewal & Variation Filings',
  ],
  regulatory_basis: ['US FDA', 'EMA', 'CDSCO', 'WHO', 'ICH'],
  requires_data_from_client: true,
  target_industry: ['Pharma', 'Biotech', 'Medical Devices', 'Nutraceuticals'],
  expertise_area: ['Regulatory Compliance', 'Drug Approval', 'Global Strategy'],
  is_active: true,
  pageLink: '/services/regulatory-affairs',
  icon: '📁',
  image: {
    path: regulatoryAffairs,
    alt: 'Regulatory submission process',
    caption: 'Global regulatory strategy and submissions',
  },
  gtm: {
    eventCategory: 'Regulatory Services',
    eventAction: 'Engagement',
    eventLabel: 'Regulatory Affairs Page View',
    customDimensions: {
      cd1: 'Regulatory',
      cd2: 'Market Access',
      cd3: 'Strategic',
    },
    dataLayerPush: {
      serviceTier: 'Enterprise',
      regulatoryRegions: ['US', 'EU', 'APAC'],
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Global Regulatory Affairs Services',
    description: 'End-to-end regulatory strategy and submission support for pharmaceutical market approvals worldwide',
    serviceType: 'RegulatoryConsulting',
    provider: {
      '@type': 'Organization',
      name: 'Indivirtus',
      url: 'https://www.indivirtus.com',
      logo: 'https://www.indivirtus.com/logo.png',
      sameAs: ['https://www.linkedin.com/company/indivirtus', 'https://twitter.com/indivirtus'],
    },
    areaServed: {
      '@type': 'Country',
      name: 'Global',
    },

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Regulatory Services Portfolio',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Submission Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'eCTD Dossier Compilation',
                description: 'End-to-end regulatory dossier preparation in eCTD format',
                serviceOutput: ['Module 1-5', 'Regional Specific Requirements'],
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'ACTD Dossier Preparation',
                description: 'ASEAN Common Technical Dossier compilation',
                serviceOutput: 'Complete submission package',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Strategic Consulting',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Global Regulatory Strategy',
                description: 'Market entry planning and regulatory pathway development',
                serviceOutput: 'Customized Regulatory Roadmap',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Health Authority Interaction Support',
                description: 'Meeting preparation and regulatory agency communications',
                serviceOutput: ['Briefing Package', 'Meeting Minutes', 'Response Strategy'],
              },
            },
          ],
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: 'Project-based pricing',
      url: '/services/regulatory-affairs',
      availability: 'https://schema.org/InStock',
      businessFunction: 'https://schema.org/ProvideService',
    },
  },
  meta: {
    title: 'Global Regulatory Affairs Services | Market Approval Experts',
    description: 'Strategic regulatory consulting and submission services for FDA, EMA and global health authorities.',
    keywords: [
      'regulatory affairs consulting',
      'FDA submission experts',
      'eCTD compilation',
      'global market access',
      'regulatory strategy',
      'pharmaceutical approvals',
      'EMA submissions',
      'IND IMPD filing',
      'post-approval variations',
      'regulatory intelligence',
    ],
    ogTags: {
      type: 'service',
      image: regulatoryAffairs,
      url: '/services/regulatory-affairs',
      site_name: 'Indivirtus',
      description: 'Expert regulatory affairs services for global market approvals',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Global Regulatory Affairs Services',
      description: 'Strategic support for pharmaceutical approvals worldwide',
      image: regulatoryAffairs,
    },
    canonicalUrl: 'https://www.indivirtus.com/services/regulatory-affairs',
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
};

// export default regulatoryAffairs = {
//   service_id: 'REG-001',
//   report_type: 'Regulatory Affairs',
//   title: 'Global Regulatory Affairs Services | Market Approval Experts',
//   name: 'Regulatory Affairs',
//   description:
//     'Comprehensive regulatory support for product approvals, labeling, variants, renewals, and dossiers for international markets.',
//   full_description:
//     'From dossier compilation (eCTD/ACTD) and submission strategy to answers, labeling, renewals, and intelligence, our regulatory specialists assist with international market access. We maintain your project compliant and on schedule thanks to our solid understanding of FDA, EMA, CDSCO, and WHO requirements.',

//   estimated_duration: 'Varies by region and complexity',
//   deliverables: [
//     'Regulatory Strategy Document',
//     'Dossier Compilation (eCTD/ACTD)',
//     'Gap Analysis Report',
//     'Query Response Support',
//     'Renewal & Variation Filings',
//   ],
//   regulatory_basis: ['US FDA', 'EMA', 'CDSCO', 'WHO', 'ICH'],
//   requires_data_from_client: true,
//   target_industry: ['Pharma', 'Biotech', 'Medical Devices', 'Nutraceuticals'],
//   expertise_area: ['Regulatory Compliance', 'Drug Approval', 'Global Strategy'],
//   is_active: true,
//   pageLink: '/services/regulatory-affairs',
//   icon: '📁',
//   image: {
//     path: regulatoryAffairs,
//     alt: 'Regulatory submission process',
//     caption: 'Global regulatory strategy and submissions',
//   },
//   gtm: {
//     eventCategory: 'Service',
//     eventAction: 'Click',
//     eventLabel: 'Regulatory Affairs',
//   },
//   schema: {
//     '@context': 'https://schema.org',
//     '@type': 'ProfessionalService',
//     name: '',
//     description: '',
//     serviceType: '',
//     provider: {
//       '@type': 'Organization',
//       name: 'Indivirtus',
//     },
//     areaServed: ['Global'],
//     availableChannel: {
//       '@type': 'ServiceChannel',
//       serviceUrl: '/services/regulatory-affairs',
//     },
//     hasOfferCatalog: {
//       '@type': 'OfferCatalog',
//       name: '',
//       itemListElement: [
//         {
//           '@type': 'OfferCatalog',
//           name: '',
//           itemListElement: [
//             {
//               '@type': 'Offer',
//               itemOffered: {
//                 '@type': 'Service',
//                 name: '',
//               },
//             },
//           ],
//         },
//       ],
//     },
//   },
//   meta: {
//     title: 'Global Regulatory Affairs Services | Market Approval Experts',
//     description: 'Strategic regulatory consulting and submission services for FDA, EMA and global health authorities.',
//     keywords: [
//       'regulatory affairs consulting',
//       'FDA submission experts',
//       'eCTD compilation',
//       'global market access',
//       'regulatory strategy',
//       'pharmaceutical approvals',
//       'EMA submissions',
//       'IND IMPD filing',
//       'post-approval variations',
//       'regulatory intelligence',
//     ],
//   },
// };
