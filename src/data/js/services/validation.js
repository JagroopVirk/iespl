import validation from '@/assets/validation.png';

export default {
  service_id: 'VAL-001',
  report_type: 'Validation Report',
  title: 'GMP Validation Services | CSV & Equipment Qualification Experts',
  name: 'Validation (CSV/Equipment/HVAC)',
  description:
    'Use equipment, HVAC qualification and validation, and full-cycle computer system validation to guarantee compliant operations.',
  full_description:
    'From CSV (13, 21 CFR Part 11/GAMP 5) to equipment IQ/OQ/PQ and HVAC system validation, Indivirtus provides thorough validation to assist you achieve operational consistency, data integrity, and regulatory compliance with FDA, EMA, MHRA, and WHO standards.',
  estimated_duration: '2–6 weeks per system/phase',
  deliverables: [
    'Validation Master Plan (VMP)',
    'User Requirement Specs (URS)',
    'Risk Assessments',
    'IQ/OQ/PQ Protocols & Reports',
    'Final Validation Report',
  ],
  regulatory_basis: ['21 CFR Part 11', 'EU Annex 11', 'GAMP 5', 'WHO TRS', 'US FDA', 'MHRA', 'EMA'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'Medical Devices', 'API Manufacturing', 'CDMO'],
  expertise_area: ['Validation', 'CSV', 'Equipment Qualification', 'HVAC Systems', 'Regulatory Compliance'],
  is_active: true,
  pageLink: '/services/validation',
  icon: '✅',
  image: {
    path: validation,
    alt: 'Computer system validation process',
    caption: 'GMP validation services for regulated industries',
  },
  gtm: {
    eventCategory: 'Service',
    eventAction: 'Click',
    eventLabel: 'Validation Services',
    customDimensions: {
      cd1: 'Validation',
      cd2: 'Quality Assurance',
      cd3: 'Medium',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'GMP Validation Services - CSV & Equipment Qualification',
    description:
      'Comprehensive validation services ensuring 21 CFR Part 11, EU Annex 11 and GAMP 5 compliance for pharmaceutical systems and equipment',
    serviceType: 'ValidationService',
    provider: {
      '@type': 'Organization',
      name: 'Indivirtus',
      url: 'https://www.indivirtus.com',
      logo: 'https://www.indivirtus.com/logo.png',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Global',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Validation Services Catalog',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Computer System Validation',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '21 CFR Part 11 Compliance Validation',
                description: 'Full lifecycle CSV for GxP systems',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Equipment Qualification',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'IQ/OQ/PQ Services',
                description: 'Installation, operational and performance qualification',
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
      url: '/services/validation',
      availability: 'https://schema.org/InStock',
    },
  },
  meta: {
    title: 'GMP Validation Services | CSV & Equipment Qualification Experts',
    description:
      'End-to-end validation services for pharmaceutical computer systems, manufacturing equipment and facilities ensuring FDA, EMA compliance.',
    keywords: [
      'computer system validation',
      'CSV services',
      'GMP validation experts',
      '21 CFR Part 11 compliance',
      'equipment qualification',
      'pharmaceutical validation',
      'IQ OQ PQ services',
      'cleanroom validation',
      'GAMP 5 validation',
      'regulatory compliance validation',
    ],
    ogTags: {
      type: 'service',
      image: validation,
      url: '/services/validation',
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'GMP Validation Services | CSV & Equipment Qualification Experts',
      description: 'Professional validation services for regulated industries',
      image: validation,
    },
    canonicalUrl: 'https://www.indivirtus.com/services/validation',
  },
};

// export default validation = {
//   service_id: 'VAL-001',
//   report_type: 'Validation Report',
//   title: 'GMP Validation Services | CSV & Equipment Qualification Experts',
//   name: 'Validation (CSV/Equipment/HVAC)',
//   description:
//     'Use equipment, HVAC qualification and validation, and full-cycle computer system validation to guarantee compliant operations.',
//   full_description:
//     'From CSV (13, 21 CFR Part 11/GAMP 5) to equipment IQ/OQ/PQ and HVAC system validation, Indivirtus provides thorough validation to assist you achieve operational consistency, data integrity, and regulatory compliance with FDA, EMA, MHRA, and WHO standards.',
//   estimated_duration: '2–6 weeks per system/phase',
//   deliverables: [
//     'Validation Master Plan (VMP)',
//     'User Requirement Specs (URS)',
//     'Risk Assessments',
//     'IQ/OQ/PQ Protocols & Reports',
//     'Final Validation Report',
//   ],
//   regulatory_basis: ['21 CFR Part 11', 'EU Annex 11', 'GAMP 5', 'WHO TRS', 'US FDA', 'MHRA', 'EMA'],
//   requires_data_from_client: true,
//   target_industry: ['Pharmaceutical', 'Biotech', 'Medical Devices', 'API Manufacturing', 'CDMO'],
//   expertise_area: ['Validation', 'CSV', 'Equipment Qualification', 'HVAC Systems', 'Regulatory Compliance'],
//   is_active: true,
//   pageLink: '/services/validation',
//   icon: '✅',
//   image: {
//     path: validation,
//     alt: 'Computer system validation process',
//     caption: 'GMP validation services for regulated industries',
//   },
//   gtm: {
//     eventCategory: 'Service',
//     eventAction: 'Click',
//     eventLabel: 'Validation Services',
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
//       serviceUrl: '/services/validation',
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
//     title: 'GMP Validation Services | CSV & Equipment Qualification Experts',
//     description:
//       'End-to-end validation services for pharmaceutical computer systems, manufacturing equipment and facilities ensuring FDA, EMA compliance.',
//     keywords: [
//       'computer system validation',
//       'CSV services',
//       'GMP validation experts',
//       '21 CFR Part 11 compliance',
//       'equipment qualification',
//       'pharmaceutical validation',
//       'IQ OQ PQ services',
//       'cleanroom validation',
//       'GAMP 5 validation',
//       'regulatory compliance validation',
//     ],
//   },
// };
