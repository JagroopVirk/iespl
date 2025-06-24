import greenfield from '../../../assets/greenfieldBrownfieldProjects.png';

export default {
  service_id: 'TFP-001',
  report_type: 'Project Implementation Report',
  title: 'Pharmaceutical Facility Design & Construction | Turnkey Solutions',
  name: 'Turnkey Project Services',
  description:
    'Complete project management for fresh or renovated pharmaceutical facilities, from design and concept development to GMP validation.',
  full_description:
    'For Greenfield construction or Brownfield renovations, Indivirtus manages the entire project lifecycle, including feasibility, design, approvals, procurement, construction, commissioning, and validation. At every stage, our team ensures regulatory readiness, on-time delivery, and GMP compliance.',
  estimated_duration: '6–18 months (scope dependent)',
  deliverables: [
    'Feasibility Study Report',
    'Conceptual & Detailed Layouts',
    'Regulatory Approval Assistance',
    'Construction & Commissioning',
    'HVAC & Cleanroom Validation',
    'GMP Documentation Package',
  ],
  regulatory_basis: ['WHO GMP', 'EU GMP', 'US FDA', 'MHRA', 'CDSCO', 'PIC/S'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'API Manufacturing', 'CDMO'],
  expertise_area: ['Pharma Engineering', 'GMP Compliance', 'Regulatory Affairs', 'Project Management'],
  is_active: true,
  pageLink: '/services/greenfield-brownfield',
  icon: '🏗️',
  image: {
    path: greenfield,
    alt: 'Pharmaceutical facility construction',
    caption: 'End-to-end GMP facility development',
  },
  gtm: {
    eventCategory: 'Engineering Services',
    eventAction: 'Project Inquiry',
    eventLabel: 'Turnkey Pharma Facility Services',
    customDimensions: {
      cd1: 'Facility Development',
      cd2: 'Engineering',
      cd3: 'High Value',
    },
    dataLayerPush: {
      projectScale: 'Large Capital',
      facilityType: ['Greenfield', 'Brownfield'],
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pharmaceutical Turnkey Facility Solutions',
    description: 'End-to-end design, construction and validation of GMP-compliant pharmaceutical facilities',
    serviceType: ['EngineeringService', 'ConstructionService'],
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
      serviceUrl: '/services/greenfield-brownfield',
      servicePhone: '+1-XXX-XXX-XXXX',
      servicePostalAddress: {
        '@type': 'PostalAddress',
        streetAddress: '123 Engineering Drive',
        addressLocality: 'City',
        addressRegion: 'State',
        postalCode: 'ZIP',
        addressCountry: 'Country',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pharma Facility Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Greenfield Projects',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'New Facility Development',
                description: 'Complete turnkey solutions for new GMP facilities',
                serviceOutput: ['Regulatory-ready facility', 'Validation package'],
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Brownfield Projects',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Facility Upgrades',
                description: 'Retrofitting and modernization of existing facilities',
                serviceOutput: ['Upgraded GMP facility', 'Compliance documentation'],
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Specialized Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Cleanroom Design & Build',
                description: 'ISO-classified environment implementation',
                serviceOutput: 'Validated cleanroom facility',
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
      url: '/services/greenfield-brownfield',
      availability: 'https://schema.org/InStock',
      businessFunction: 'https://schema.org/ProvideService',
    },
  },
  meta: {
    title: 'Pharmaceutical Facility Design & Construction | Turnkey Solutions',
    description:
      'End-to-end GMP facility development from concept through validation with regulatory compliance built-in.',
    keywords: [
      'pharma facility design',
      'GMP construction',
      'turnkey pharma projects',
      'cleanroom design',
      'regulatory compliant facilities',
      'pharma engineering',
      'facility validation',
      'greenfield pharma',
      'brownfield upgrades',
      'HVAC design pharma',
    ],
    ogTags: {
      type: 'service',
      image: greenfield,
      url: '/services/greenfield-brownfield',
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Pharma Facility Turnkey Solutions',
      description: 'GMP-compliant facility design and construction services',
      image: greenfield,
    },
    canonicalUrl: 'https://www.indivirtus.com/services/greenfield-brownfield',
  },
  projectPhases: [
    {
      phase: 'Concept',
      activities: ['Feasibility', 'Regulatory Strategy', 'Preliminary Design'],
      duration: '1-3 months',
    },
    {
      phase: 'Design',
      activities: ['Detailed Engineering', 'GMP Layouts', 'Equipment Specification'],
      duration: '3-6 months',
    },
    {
      phase: 'Execution',
      activities: ['Construction', 'Equipment Installation', 'Commissioning'],
      duration: '6-12 months',
    },
    {
      phase: 'Qualification',
      activities: ['IQ/OQ/PQ', 'Process Validation', 'Regulatory Approval'],
      duration: '3-6 months',
    },
  ],
};

// export default greenfieldBrownfield = {
//   service_id: 'TFP-001',
//   report_type: 'Project Implementation Report',
//   title: 'Pharmaceutical Facility Design & Construction | Turnkey Solutions',
//   name: 'Turnkey Project Services',
//   description:
//     'Complete project management for fresh or renovated pharmaceutical facilities, from design and concept development to GMP validation.',
//   full_description:
//     'For Greenfield construction or Brownfield renovations, Indivirtus manages the entire project lifecycle, including feasibility, design, approvals, procurement, construction, commissioning, and validation. At every stage, our team ensures regulatory readiness, on-time delivery, and GMP compliance.',
//   estimated_duration: '6–18 months (scope dependent)',
//   deliverables: [
//     'Feasibility Study Report',
//     'Conceptual & Detailed Layouts',
//     'Regulatory Approval Assistance',
//     'Construction & Commissioning',
//     'HVAC & Cleanroom Validation',
//     'GMP Documentation Package',
//   ],
//   regulatory_basis: ['WHO GMP', 'EU GMP', 'US FDA', 'MHRA', 'CDSCO', 'PIC/S'],
//   requires_data_from_client: true,
//   target_industry: ['Pharmaceutical', 'Biotech', 'API Manufacturing', 'CDMO'],
//   expertise_area: ['Pharma Engineering', 'GMP Compliance', 'Regulatory Affairs', 'Project Management'],
//   is_active: true,
//   pageLink: '/services/greenfield-brownfield',
//   icon: '🏗️',
//   image: {
//     path: greenfield,
//     alt: 'Pharmaceutical facility construction',
//     caption: 'GMP facility design and construction',
//   },
//   gtm: {
//     eventCategory: 'Service',
//     eventAction: 'Click',
//     eventLabel: 'Turnkey Project Services',
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
//       serviceUrl: '/services/greenfield-brownfield',
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
//     title: 'Pharmaceutical Facility Design & Construction | Turnkey Solutions',
//     description:
//       'End-to-end GMP facility development from concept through validation with regulatory compliance built-in.',
//     keywords: [
//       'pharma facility design',
//       'GMP construction',
//       'turnkey pharma projects',
//       'cleanroom design',
//       'regulatory compliant facilities',
//       'pharma engineering',
//       'facility validation',
//       'greenfield pharma',
//       'brownfield upgrades',
//       'HVAC design pharma',
//     ],
//   },
// };
