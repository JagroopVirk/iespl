import adePdeOelOeb from '@/assets/ade_pde_oel_oeb_reports.png';

export default {
  service_id: 'EXPOSURE-001',
  report_type: 'ADE/PDE/OEL/OEB Reports',
  title: 'ADE/PDE/OEL Determination | Toxicological Risk Assessment',
  name: 'ADE / PDE / OEL / OEB Reports',
  description: 'To establish safe exposure limits for APIs and work settings, expert toxicology reports are used.',
  full_description:
    'ADE, PDE, OEL, and OEB assessments, using toxicological data and/or scientific literature, that comply to ICH Q3D, EMA, and ISPE format. Cleaning validation, facility design, GMP compliance, and worker safety all depend on these reports. Our Reports are duly certified by experienced ERT/DABT Toxicologists.',
  estimated_duration: '7–10 business days',
  deliverables: [
    'ADE/PDE/OEL/OEB Report (PDF)',
    'Toxicological Justification',
    'Uncertainty Factor Summary',
    'Exposure Limit Calculations',
  ],
  regulatory_basis: ['ICH Q3D', 'EMA', 'ISPE Risk‑MaPP', 'US FDA', 'GMP Standards'],
  requires_data_from_client: true,
  target_industry: ['Pharma', 'API Manufacturing', 'CDMO', 'Biotech', 'Formulation Units'],
  expertise_area: ['Toxicology', 'Occupational Safety', 'Risk Assessment', 'Regulatory Compliance'],
  is_active: true,
  pageLink: '/services/ade-pde-oel',
  icon: '📊',
  image: {
    path: adePdeOelOeb,
    alt: 'Exposure limit calculation process with toxicological data',
    caption: 'DABT-certified exposure limit assessments for pharmaceuticals',
  },
  gtm: {
    eventCategory: 'Toxicology Services',
    eventAction: 'Exposure Limit Inquiry',
    eventLabel: 'ADE/PDE/OEL Service Page',
    customDimensions: {
      cd1: 'Toxicology',
      cd2: 'Risk Assessment',
      cd3: 'Regulatory',
    },
    dataLayerPush: {
      reportType: ['ADE', 'PDE', 'OEL', 'OEB'],
      certification: 'DABT',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pharmaceutical Exposure Limit Assessment Services',
    description: 'Science-based derivation of ADE, PDE, OEL and OEB values with DABT-certified toxicological review',
    serviceType: 'ToxicologyService',
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
      serviceUrl: '/services/ade-pde-oel',
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
      name: 'Exposure Limit Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Product Exposure Limits',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'ADE/PDE Determination',
                description: 'Acceptable Daily Exposure and Permitted Daily Exposure calculations',
                serviceOutput: 'Regulatory-ready toxicology report',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Occupational Exposure Limits',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'OEL/OEB Assessment',
                description: 'Occupational Exposure Limit and Occupational Exposure Band derivation',
                serviceOutput: 'Worker safety guidance document',
              },
            },
          ],
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: 'Compound-based pricing',
      url: '/services/ade-pde-oel',
      availability: 'https://schema.org/InStock',
      businessFunction: 'https://schema.org/ProvideService',
    },
  },
  meta: {
    title: 'ADE/PDE/OEL Determination | Toxicological Risk Assessment',
    description:
      'Science-based derivation of acceptable exposure limits for pharmaceuticals with DABT-certified review.',
    keywords: [
      'ADE derivation',
      'PDE calculation',
      'OEL determination',
      'OEB banding',
      'occupational exposure limits',
      'cleaning validation limits',
      'toxicological risk assessment',
      'ICH Q3D compliance',
      'pharmaceutical worker safety',
      'containment strategy',
    ],
    ogTags: {
      type: 'service',
      image: adePdeOelOeb,
      url: '/services/ade-pde-oel',
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Exposure Limit Assessment Services',
      description: 'DABT-certified ADE/PDE/OEL determinations for pharmaceuticals',
      image: adePdeOelOeb,
    },
    canonicalUrl: 'https://www.indivirtus.com/services/ade-pde-oel',
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: [
    {
      type: 'ADE',
      application: 'Cleaning Validation',
      standard: 'ICH Q3D',
      review: 'DABT Certified',
    },
    {
      type: 'PDE',
      application: 'Cross-Contamination',
      standard: 'EMA Guidelines',
      review: 'Peer-Reviewed',
    },
    {
      type: 'OEL',
      application: 'Worker Safety',
      standard: 'ISPE Risk-MaPP',
      review: 'ERT Certified',
    },
    {
      type: 'OEB',
      application: 'Containment Strategy',
      standard: 'SafeBridge',
      review: 'DABT Certified',
    },
  ],
};

// export default {
//   service_id: 'EXPOSURE-001',
//   report_type: 'ADE/PDE/OEL/OEB Reports',
//   title: 'ADE/PDE/OEL Determination | Toxicological Risk Assessment',
//   name: 'ADE / PDE / OEL / OEB Reports',
//   description: 'To establish safe exposure limits for APIs and work settings, expert toxicology reports are used.',
//   full_description:
//     'ADE, PDE, OEL, and OEB assessments, using toxicological data and/or scientific literature, that comply to ICH Q3D, EMA, and ISPE format. Cleaning validation, facility design, GMP compliance, and worker safety all depend on these reports. Our Reports are duly certified by experienced ERT/DABT Toxicologists.',

//   estimated_duration: '7–10 business days',
//   deliverables: [
//     'ADE/PDE/OEL/OEB Report (PDF)',
//     'Toxicological Justification',
//     'Uncertainty Factor Summary',
//     'Exposure Limit Calculations',
//   ],
//   regulatory_basis: ['ICH Q3D', 'EMA', 'ISPE Risk‑MaPP', 'US FDA', 'GMP Standards'],
//   requires_data_from_client: true,
//   target_industry: ['Pharma', 'API Manufacturing', 'CDMO', 'Biotech', 'Formulation Units'],
//   expertise_area: ['Toxicology', 'Occupational Safety', 'Risk Assessment', 'Regulatory Compliance'],
//   is_active: true,
//   pageLink: '/services/ade-pde-oel',
//   icon: '📊',
//   image: {
//     path: adePdeOelOeb,
//     alt: 'Exposure limit calculation process',
//     caption: 'Toxicological evaluation for occupational safety',
//   },
//   gtm: {
//     eventCategory: 'Service',
//     eventAction: 'Click',
//     eventLabel: 'Exposure Limit Reports',
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
//       serviceUrl: '/services/ade-pde-oel',
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
//     title: 'ADE/PDE/OEL Determination | Toxicological Risk Assessment',
//     description:
//       'Science-based derivation of acceptable exposure limits for pharmaceuticals with DABT-certified review.',
//     keywords: [
//       'ADE derivation',
//       'PDE calculation',
//       'OEL determination',
//       'OEB banding',
//       'occupational exposure limits',
//       'cleaning validation limits',
//       'toxicological risk assessment',
//       'ICH Q3D compliance',
//       'pharmaceutical worker safety',
//       'containment strategy',
//     ],
//   },
// };
