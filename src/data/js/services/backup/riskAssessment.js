import riskAssessment from '@/assets/riskAssessment.png';

export default {
  service_id: 'IMP-RA-001',
  report_type: 'Impurity Risk Assessment Report',
  title: 'ICH M7 Impurity Risk Assessment | Genotoxic Evaluation',
  name: 'Impurity Risk Assessment',
  description:
    'Evaluate the safety risk of chemical impurities, whether genotoxic or non-genotoxic, in compliance with ICH M7/Q3A-B and international standards.',
  full_description:
    'We use SAR techniques and toxicological data to assess known, unknown, and carry-over substances. You may minimize development delays, streamline regulatory approvals, and support exposure limits with our ICH-aligned risk assessments (M7, Q3A/B).',
  estimated_duration: '7–15 business days',
  deliverables: [
    'Impurity Risk Assessment Report',
    'SAR Analysis Document',
    'TTC Justification (where applicable)',
    'Regulatory‑ready Toxicology Summary',
  ],
  regulatory_basis: ['ICH M7', 'ICH Q3A', 'ICH Q3B', 'EMA', 'US FDA'],
  requires_data_from_client: true,
  target_industry: ['Pharma', 'API Manufacturers', 'Biotech', 'CDMO'],
  expertise_area: ['Toxicology', 'Impurity Profiling', 'Risk Assessment', 'Regulatory Affairs'],
  is_active: true,
  pageLink: '/services/risk-assessment',
  icon: '🧪',
  image: {
    path: riskAssessment,
    alt: 'Impurity risk assessment process',
    caption: 'Toxicological evaluation of pharmaceutical impurities',
  },
  gtm: {
    eventCategory: 'Scientific Services',
    eventAction: 'Click',
    eventLabel: 'Impurity Risk Assessment',
    customDimensions: {
      cd1: 'Toxicology',
      cd2: 'Risk Assessment',
      cd3: 'High',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'ICH M7 Impurity Risk Assessment Service',
    description:
      'Regulatory-compliant evaluation of genotoxic and non-genotoxic impurities per ICH M7 and Q3 guidelines',
    serviceType: 'ToxicologyService',
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
      name: 'Impurity Risk Assessment Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Genotoxic Impurity Assessment',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'ICH M7 Compliant Assessment',
                description: 'Threshold of Toxicological Concern (TTC) based evaluation',
                serviceOutput: 'Impurity Risk Assessment Report',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Non-Genotoxic Impurity Assessment',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'ICH Q3A/B Evaluation',
                description: 'Qualification of impurities based on toxicological data',
                serviceOutput: 'Toxicology Summary Report',
              },
            },
          ],
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: 'Contact for quote',
      url: '/services/risk-assessment',
      availability: 'https://schema.org/InStock',
      businessFunction: 'https://schema.org/ProvideService',
    },
  },
  meta: {
    title: 'ICH M7 Impurity Risk Assessment | Genotoxic Evaluation',
    description:
      'Regulatory-compliant safety evaluation of genotoxic and non-genotoxic impurities per ICH guidelines with DABT-certified review.',
    keywords: [
      'impurity risk assessment',
      'ICH M7 compliance',
      'genotoxic impurities',
      'TTC calculation',
      'pharmaceutical toxicology',
      'elemental impurities',
      'degradation products',
      'ICH Q3A Q3B',
      'regulatory toxicology',
      'DABT certified review',
    ],
    ogTags: {
      type: 'service',
      image: riskAssessment,
      url: '/services/risk-assessment',
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'ICH M7 Impurity Risk Assessment Service',
      description: 'Expert evaluation of pharmaceutical impurities for regulatory compliance',
      image: riskAssessment,
    },
    canonicalUrl: 'https://www.indivirtus.com/services/risk-assessment',
  },
};

// export default riskAssessment = {
//   service_id: 'IMP-RA-001',
//   report_type: 'Impurity Risk Assessment Report',
//   title: 'ICH M7 Impurity Risk Assessment | Genotoxic Evaluation',
//   name: 'Impurity Risk Assessment',
//   description:
//     'Evaluate the safety risk of chemical impurities, whether genotoxic or non-genotoxic, in compliance with ICH M7/Q3A-B and international standards.',
//   full_description:
//     'We use SAR techniques and toxicological data to assess known, unknown, and carry-over substances. You may minimize development delays, streamline regulatory approvals, and support exposure limits with our ICH-aligned risk assessments (M7, Q3A/B).',
//   estimated_duration: '7–15 business days',
//   deliverables: [
//     'Impurity Risk Assessment Report',
//     'SAR Analysis Document',
//     'TTC Justification (where applicable)',
//     'Regulatory‑ready Toxicology Summary',
//   ],
//   regulatory_basis: ['ICH M7', 'ICH Q3A', 'ICH Q3B', 'EMA', 'US FDA'],
//   requires_data_from_client: true,
//   target_industry: ['Pharma', 'API Manufacturers', 'Biotech', 'CDMO'],
//   expertise_area: ['Toxicology', 'Impurity Profiling', 'Risk Assessment', 'Regulatory Affairs'],
//   is_active: true,
//   pageLink: '/services/risk-assessment',
//   icon: '🧪',
//   image: {
//     path: riskAssessment,
//     alt: 'Impurity risk assessment process',
//     caption: 'Toxicological evaluation of pharmaceutical impurities',
//   },
//   gtm: {
//     eventCategory: 'Service',
//     eventAction: 'Click',
//     eventLabel: 'Impurity Risk Assessment',
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
//       serviceUrl: '/services/risk-assessment',
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
//     title: 'ICH M7 Impurity Risk Assessment | Genotoxic Evaluation',
//     description:
//       'Regulatory-compliant safety evaluation of genotoxic and non-genotoxic impurities per ICH guidelines with DABT-certified review.',
//     keywords: [
//       'impurity risk assessment',
//       'ICH M7 compliance',
//       'genotoxic impurities',
//       'TTC calculation',
//       'pharmaceutical toxicology',
//       'elemental impurities',
//       'degradation products',
//       'ICH Q3A Q3B',
//       'regulatory toxicology',
//       'DABT certified review',
//     ],
//   },
// };
