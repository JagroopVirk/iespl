import calibration from '@/assets/calibration.png';

export default {
  service_id: 'CAL-001',
  report_type: 'Calibration Certificate (NABL)',
  title: 'NABL Accredited Calibration Services | Pharma Metrology',
  name: 'Calibration Services – Multi‑Parameter',
  description:
    'NABL-accredited lab which provides precise, traceable calibration (thermal, electrical, mechanical, pressure, mass, and volume).',
  full_description:
    'In compliance with international standards, our NABL-accredited lab provides mechanical, thermal, electrotechnical, pressure/vacuum, mass, and volume calibrations. Every instrument is given a thorough calibration certificate and complete traceability, making it perfect for regulatory compliance, quality systems, and audits.',
  estimated_duration: '3–7 business days',
  deliverables: [
    'NABL Accredited Certificate',
    'Instrument Tag/Sticker',
    'Calibration Report w/ Uncertainty',
    'Traceability Documentation',
    'Deviation Recommendations',
  ],
  regulatory_basis: ['ISO/IEC 17025:2017', 'NABL Guidelines', 'GMP', 'WHO TRS 937'],
  requires_data_from_client: true,
  target_industry: ['Pharma', 'Biotech', 'Healthcare', 'Manufacturing', 'Laboratories'],
  expertise_area: ['Calibration', 'Metrology', 'Quality Assurance'],
  is_active: true,
  pageLink: '/services/calibration',
  icon: '🧪',
  image: {
    path: calibration,
    alt: 'Precision instrument calibration process',
    caption: 'NABL accredited calibration laboratory with full traceability',
  },
  gtm: {
    eventCategory: 'Metrology Services',
    eventAction: 'Calibration Inquiry',
    eventLabel: 'NABL Calibration Services',
    customDimensions: {
      cd1: 'Calibration',
      cd2: 'Metrology',
      cd3: 'High Precision',
    },
    dataLayerPush: {
      accreditation: 'NABL',
      calibrationScope: ['Thermal', 'Electrical', 'Mechanical'],
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'NABL Accredited Calibration Services',
    description:
      'Precision calibration services for pharmaceutical and healthcare instruments with full metrological traceability',
    serviceType: 'CalibrationService',
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
      serviceUrl: '/services/calibration',
      servicePhone: '+1-XXX-XXX-XXXX',
      servicePostalAddress: {
        '@type': 'PostalAddress',
        streetAddress: '123 Metrology Lane',
        addressLocality: 'City',
        addressRegion: 'State',
        postalCode: 'ZIP',
        addressCountry: 'Country',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Calibration Services Portfolio',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Thermal Calibration',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Temperature Calibration',
                description: 'Calibration of thermometers, sensors and thermal equipment',
                serviceOutput: 'NABL Certificate with Uncertainty Values',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Electrotechnical Calibration',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Electrical Instrument Calibration',
                description: 'Precision calibration of multimeters and electrical test equipment',
                serviceOutput: 'Traceable Calibration Certificate',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Mechanical Calibration',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Mass & Volume Calibration',
                description: 'Calibration of balances, scales and volumetric equipment',
                serviceOutput: 'ISO 17025 Compliant Report',
              },
            },
          ],
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: 'Instrument-based pricing',
      url: '/services/calibration',
      availability: 'https://schema.org/InStock',
      businessFunction: 'https://schema.org/ProvideService',
    },
  },
  meta: {
    title: 'NABL Accredited Calibration Services | Pharma Metrology',
    description: 'ISO 17025 accredited calibration services for pharmaceutical manufacturing and QC instruments.',
    keywords: [
      'NABL calibration',
      'pharmaceutical instrument calibration',
      'ISO 17025 lab',
      'traceable calibration',
      'GMP calibration services',
      'temperature calibration',
      'validation support services',
      'metrology services',
      'equipment qualification support',
      'calibration certification',
    ],
    ogTags: {
      type: 'service',
      image: calibration,
      url: '/services/calibration',
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'NABL Calibration Services',
      description: 'Accredited calibration for pharmaceutical instruments',
      image: calibration,
    },
    canonicalUrl: 'https://www.indivirtus.com/services/calibration',
  },
  calibrationParameters: [
    {
      parameter: 'Temperature',
      instruments: ['Thermometers', 'Sensors', 'Chambers'],
      standard: 'ISO 17025',
    },
    {
      parameter: 'Electrical',
      instruments: ['Multimeters', 'Clamp Meters', 'Insulation Testers'],
      standard: 'NABL',
    },
    {
      parameter: 'Mass',
      instruments: ['Balances', 'Scales', 'Weights'],
      standard: 'OIML',
    },
  ],
};

// export default {
//   service_id: 'CAL-001',
//   report_type: 'Calibration Certificate (NABL)',
//   title: 'NABL Accredited Calibration Services | Pharma Metrology',
//   name: 'Calibration Services – Multi‑Parameter',
//   description:
//     'NABL-accredited lab which provides precise, traceable calibration (thermal, electrical, mechanical, pressure, mass, and volume).',
//   full_description:
//     'In compliance with international standards, our NABL-accredited lab provides mechanical, thermal, electrotechnical, pressure/vacuum, mass, and volume calibrations. Every instrument is given a thorough calibration certificate and complete traceability, making it perfect for regulatory compliance, quality systems, and audits.',

//   estimated_duration: '3–7 business days',
//   deliverables: [
//     'NABL Accredited Certificate',
//     'Instrument Tag/Sticker',
//     'Calibration Report w/ Uncertainty',
//     'Traceability Documentation',
//     'Deviation Recommendations',
//   ],
//   regulatory_basis: ['ISO/IEC 17025:2017', 'NABL Guidelines', 'GMP', 'WHO TRS 937'],
//   requires_data_from_client: true,
//   target_industry: ['Pharma', 'Biotech', 'Healthcare', 'Manufacturing', 'Laboratories'],
//   expertise_area: ['Calibration', 'Metrology', 'Quality Assurance'],
//   is_active: true,
//   pageLink: '/services/calibration',
//   icon: '🧪',
//   image: {
//     path: calibration,
//     alt: 'Instrument calibration process',
//     caption: 'NABL accredited calibration laboratory',
//   },
//   gtm: {
//     eventCategory: 'Service',
//     eventAction: 'Click',
//     eventLabel: 'Calibration Services',
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
//       serviceUrl: '/services/calibration',
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
//     title: 'NABL Accredited Calibration Services | Pharma Metrology',
//     description: 'ISO 17025 accredited calibration services for pharmaceutical manufacturing and QC instruments.',
//     keywords: [
//       'NABL calibration',
//       'pharmaceutical instrument calibration',
//       'ISO 17025 lab',
//       'traceable calibration',
//       'GMP calibration services',
//       'temperature calibration',
//       'validation support services',
//       'metrology services',
//       'equipment qualification support',
//       'calibration certification',
//     ],
//   },
// };
