import gmpAudit from '@/assets/gmpAudit.png';

export default {
  service_id: 'GMP-APP-001',
  report_type: 'GMP Audit & Approval Dossier',
  title: 'Vendor GMP Audit Services | Supplier Qualification',
  name: 'Vendor Assessment Audits for Plant & Product Approvals',
  description:
    'We create approval dossiers for plant and product registrations with CDSCO, WHO, US FDA, MHRA, and peers in addition to doing vendor GMP evaluations.',
  full_description:
    'From vendor audits and GAP analysis to the development of GMP audit reports, CAPA strategies, and regulatory dossiers, Indivirtus facilitates the GMP approval process. We help you with plant and product inspections and approvals under CDSCO, WHO, FDA, MHRA, EU, and more.',
  estimated_duration: '4–6 weeks (site readiness dependent)',
  deliverables: [
    'Vendor Assessment Report',
    'GMP Audit Report',
    'CAPA Plan',
    'Regulatory Approval Dossier',
    'Inspection Support',
  ],
  regulatory_basis: ['WHO GMP', 'Schedule M', 'US FDA 21 CFR 210/211', 'EU GMP', 'ICH Q7', 'CDSCO'],
  requires_data_from_client: true,
  target_industry: ['Pharma', 'Biotech', 'API Manufacturing', 'Formulation Plants', 'CDMO'],
  expertise_area: ['GMP Compliance', 'Regulatory Affairs', 'Quality Audits'],
  is_active: true,
  pageLink: '/services/gmp-audits',
  icon: '📋',
  image: {
    path: gmpAudit,
    alt: 'GMP audit process',
    caption: 'Comprehensive vendor quality system assessment',
  },
  gtm: {
    eventCategory: 'Quality Assurance',
    eventAction: 'Vendor Audit Inquiry',
    eventLabel: 'GMP Vendor Audit Services',
    customDimensions: {
      cd1: 'Supplier Quality',
      cd2: 'Audit Services',
      cd3: 'Regulatory',
    },
    dataLayerPush: {
      auditType: 'Third-Party',
      applicableRegions: ['US', 'EU', 'India', 'Global'],
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Vendor GMP Audit & Qualification Services',
    description: 'Regulatory-standard GMP audits and approval dossier preparation for pharmaceutical suppliers',
    serviceType: 'QualityAuditService',
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
      serviceUrl: '/services/gmp-audits',
      servicePhone: '+1-XXX-XXX-XXXX',
      servicePostalAddress: {
        '@type': 'PostalAddress',
        streetAddress: '123 Audit Center',
        addressLocality: 'City',
        addressRegion: 'State',
        postalCode: 'ZIP',
        addressCountry: 'Country',
      },
      availableLanguage: ['English', 'Spanish', 'Hindi'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Vendor Audit Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Audit Programs',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Comprehensive GMP Audit',
                description: 'Full-scope evaluation of vendor quality systems',
                serviceOutput: ['Audit Report', 'Risk Assessment'],
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'For-Cause Audit',
                description: 'Targeted investigation of quality issues',
                serviceOutput: 'Investigation Report',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Approval Support',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Regulatory Dossier Preparation',
                description: 'Compilation of approval documentation for health authorities',
                serviceOutput: 'Submission-Ready Dossier',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Inspection Readiness Support',
                description: 'Preparation for regulatory inspections of vendors',
                serviceOutput: 'Mock Inspection Report',
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
      url: '/services/gmp-audits',
      availability: 'https://schema.org/InStock',
      businessFunction: 'https://schema.org/ProvideService',
    },
  },
  meta: {
    title: 'Vendor GMP Audit Services | Supplier Qualification',
    description: 'Regulatory-standard GMP audits of API manufacturers, excipient suppliers and contract facilities.',
    keywords: [
      'vendor GMP audit',
      'supplier qualification',
      'third-party audit',
      'API manufacturer audit',
      'contract facility assessment',
      'GMP compliance audit',
      'quality system evaluation',
      'regulatory audit service',
      'pharmaceutical supplier audit',
      'audit remediation support',
    ],
    ogTags: {
      type: 'service',
      image: gmpAudit,
      url: '/services/gmp-audits',
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Vendor GMP Audit Services',
      description: 'Regulatory-compliant supplier qualification audits',
      image: gmpAudit,
    },
    canonicalUrl: 'https://www.indivirtus.com/services/gmp-audits',
  },
  auditScope: [
    {
      area: 'Quality Systems',
      elements: ['Documentation', 'Change Control', 'CAPA'],
    },
    {
      area: 'Facilities & Equipment',
      elements: ['Maintenance', 'Calibration', 'Qualification'],
    },
    {
      area: 'Materials Management',
      elements: ['Supplier Qualification', 'Storage', 'Distribution'],
    },
    {
      area: 'Production Controls',
      elements: ['Process Validation', 'Cleaning Validation', 'Batch Records'],
    },
  ],
};

// export default {
//   service_id: 'GMP-APP-001',
//   report_type: 'GMP Audit & Approval Dossier',
//   title: 'Vendor GMP Audit Services | Supplier Qualification',
//   name: 'Vendor Assessment Audits for Plant & Product Approvals',
//   description:
//     'We create approval dossiers for plant and product registrations with CDSCO, WHO, US FDA, MHRA, and peers in addition to doing vendor GMP evaluations.',
//   full_description:
//     'From vendor audits and GAP analysis to the development of GMP audit reports, CAPA strategies, and regulatory dossiers, Indivirtus facilitates the GMP approval process. We help you with plant and product inspections and approvals under CDSCO, WHO, FDA, MHRA, EU, and more.',

//   estimated_duration: '4–6 weeks (site readiness dependent)',
//   deliverables: [
//     'Vendor Assessment Report',
//     'GMP Audit Report',
//     'CAPA Plan',
//     'Regulatory Approval Dossier',
//     'Inspection Support',
//   ],
//   regulatory_basis: ['WHO GMP', 'Schedule M', 'US FDA 21 CFR 210/211', 'EU GMP', 'ICH Q7', 'CDSCO'],
//   requires_data_from_client: true,
//   target_industry: ['Pharma', 'Biotech', 'API Manufacturing', 'Formulation Plants', 'CDMO'],
//   expertise_area: ['GMP Compliance', 'Regulatory Affairs', 'Quality Audits'],
//   is_active: true,
//   pageLink: '/services/gmp-audits',
//   icon: '📋',
//   image: {
//     path: gmpAudit,
//     alt: 'GMP audit process',
//     caption: 'Vendor quality system assessment',
//   },
//   gtm: {
//     eventCategory: 'Service',
//     eventAction: 'Click',
//     eventLabel: 'Vendor Audit & Approvals',
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
//       serviceUrl: '/services/gmp-audits',
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
//     title: 'Vendor GMP Audit Services | Supplier Qualification',
//     description: 'Regulatory-standard GMP audits of API manufacturers, excipient suppliers and contract facilities.',
//     keywords: [
//       'vendor GMP audit',
//       'supplier qualification',
//       'third-party audit',
//       'API manufacturer audit',
//       'contract facility assessment',
//       'GMP compliance audit',
//       'quality system evaluation',
//       'regulatory audit service',
//       'pharmaceutical supplier audit',
//       'audit remediation support',
//     ],
//   },
// };
