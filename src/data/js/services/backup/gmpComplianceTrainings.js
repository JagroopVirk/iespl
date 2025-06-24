import gmpCompliance from '@/assets/gmpCompliance.png';

export default {
  service_id: 'GMP-001',
  report_type: 'GMP Compliance & Training',
  title: 'GMP Compliance Services | Audit & Remediation Experts',
  name: 'GMP, Schedule M, Trainings',
  description:
    'Workforce training, SOP creation, implementation assistance, and customized GMP and Schedule M compliance audits.',
  full_description:
    'We assist biotech and pharmaceutical teams in achieving inspection-ready GMP (including Schedule M) status through practical training sessions, gap analysis, audits, and SOP creation. Strengthen operational discipline, reduce compliance gaps, and enhance quality culture.',
  estimated_duration: '2–4 weeks (scope based)',
  deliverables: [
    'GMP Audit Report',
    'Gap Analysis & Recommendations',
    'Customized SOPs',
    'Training Materials & Certificates',
    'Compliance Implementation Plan',
  ],
  regulatory_basis: ['Schedule M', 'WHO GMP', 'US FDA cGMP', 'PIC/S', 'EU GMP'],
  requires_data_from_client: true,
  target_industry: ['Pharma', 'Biotech', 'Nutraceuticals', 'Medical Devices'],
  expertise_area: ['GMP Compliance', 'Quality Assurance', 'Regulatory Training'],
  is_active: true,
  pageLink: '/services/gmp-compliance-trainings',
  icon: '📚',
  image: {
    path: gmpCompliance,
    alt: 'GMP compliance audit process',
    caption: 'GMP gap assessment and remediation services',
  },
  gtm: {
    eventCategory: 'Quality Services',
    eventAction: 'Compliance Engagement',
    eventLabel: 'GMP Compliance Page View',
    customDimensions: {
      cd1: 'GMP Compliance',
      cd2: 'Quality Systems',
      cd3: 'High Priority',
    },
    dataLayerPush: {
      serviceTier: 'Comprehensive',
      complianceStandards: ['FDA', 'EMA', 'WHO'],
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'GMP Compliance & Training Services',
    description: 'Comprehensive GMP audit, remediation and training solutions for pharmaceutical quality systems',
    serviceType: 'QualityAssuranceService',
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
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: '/services/gmp-compliance-trainings',
      servicePhone: '+1-XXX-XXX-XXXX',
      servicePostalAddress: {
        '@type': 'PostalAddress',
        streetAddress: '123 Quality Lane',
        addressLocality: 'City',
        addressRegion: 'State',
        postalCode: 'ZIP',
        addressCountry: 'Country',
      },
      availableLanguage: ['English', 'Spanish', 'French'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'GMP Compliance Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Audit Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'GMP Compliance Audit',
                description: 'Comprehensive evaluation against regulatory standards',
                serviceOutput: ['Audit Report', 'CAPA Plan'],
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Mock FDA Inspection',
                description: 'Simulated regulatory inspection with findings report',
                serviceOutput: 'Inspection Readiness Scorecard',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Training Programs',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'GMP Fundamentals Training',
                description: 'Core GMP principles for operational staff',
                serviceOutput: ['Training Materials', 'Certificates'],
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Data Integrity Workshop',
                description: 'ALCOA+ principles and implementation',
                serviceOutput: 'Gap Assessment Report',
              },
            },
          ],
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: 'Project-based',
      url: '/services/gmp-compliance-trainings',
      availability: 'https://schema.org/InStock',
      businessFunction: 'https://schema.org/ProvideService',
    },
  },
  meta: {
    title: 'GMP Compliance Services | Audit & Remediation Experts',
    description: 'GMP audit, remediation and training services to achieve and maintain regulatory compliance.',
    keywords: [
      'GMP audit services',
      'pharmaceutical compliance',
      'FDA inspection readiness',
      'GMP training programs',
      'data integrity compliance',
      'quality system remediation',
      'cGMP consulting',
      'regulatory audit support',
      'pharmaceutical quality systems',
      'CAPA development',
    ],
    ogTags: {
      type: 'service',
      image: gmpCompliance,
      url: '/services/gmp-compliance-trainings',
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'GMP Compliance Services',
      description: 'Audit, training and remediation for pharmaceutical quality systems',
      image: gmpCompliance,
    },
    canonicalUrl: 'https://www.indivirtus.com/services/gmp-compliance-trainings',
  },
  serviceTiers: [
    {
      level: 'Basic',
      offerings: ['Document Review', 'Gap Analysis', 'Remediation Plan'],
      duration: '2-3 weeks',
    },
    {
      level: 'Comprehensive',
      offerings: ['On-site Audit', 'SOP Development', 'Staff Training'],
      duration: '3-4 weeks',
    },
    {
      level: 'Enterprise',
      offerings: ['Full QMS Implementation', 'Validation Support', 'Ongoing Compliance Monitoring'],
      duration: 'Ongoing',
    },
  ],
};

// export default {
//   service_id: 'GMP-001',
//   report_type: 'GMP Compliance & Training',
//   title: 'GMP Compliance Services | Audit & Remediation Experts',
//   name: 'GMP, Schedule M, Trainings',
//   description:
//     'Workforce training, SOP creation, implementation assistance, and customized GMP and Schedule M compliance audits.',
//   full_description:
//     'We assist biotech and pharmaceutical teams in achieving inspection-ready GMP (including Schedule M) status through practical training sessions, gap analysis, audits, and SOP creation. Strengthen operational discipline, reduce compliance gaps, and enhance quality culture.',

//   estimated_duration: '2–4 weeks (scope based)',
//   deliverables: [
//     'GMP Audit Report',
//     'Gap Analysis & Recommendations',
//     'Customized SOPs',
//     'Training Materials & Certificates',
//     'Compliance Implementation Plan',
//   ],
//   regulatory_basis: ['Schedule M', 'WHO GMP', 'US FDA cGMP', 'PIC/S', 'EU GMP'],
//   requires_data_from_client: true,
//   target_industry: ['Pharma', 'Biotech', 'Nutraceuticals', 'Medical Devices'],
//   expertise_area: ['GMP Compliance', 'Quality Assurance', 'Regulatory Training'],
//   is_active: true,
//   pageLink: '/services/gmp-compliance-trainings',
//   icon: '📚',
//   image: {
//     path: gmpCompliance,
//     alt: 'GMP compliance audit process',
//     caption: 'GMP gap assessment and remediation',
//   },
//   gtm: {
//     eventCategory: 'Service',
//     eventAction: 'Click',
//     eventLabel: 'GMP Training Services',
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
//       serviceUrl: '/services/gmp-compliance-trainings',
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
//     title: 'GMP Compliance Services | Audit & Remediation Experts',
//     description: 'GMP audit, remediation and training services to achieve and maintain regulatory compliance.',
//     keywords: [
//       'GMP audit services',
//       'pharmaceutical compliance',
//       'FDA inspection readiness',
//       'GMP training programs',
//       'data integrity compliance',
//       'quality system remediation',
//       'cGMP consulting',
//       'regulatory audit support',
//       'pharmaceutical quality systems',
//       'CAPA development',
//     ],
//   },
// };
