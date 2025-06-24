import pv_image from '@/assets/pharmacovigilance.png';

export default {
  service_id: 'PVG-001',
  report_type: 'Safety Monitoring Report',
  title: 'Pharmacovigilance & Drug Safety Monitoring',
  name: 'Comprehensive Pharmacovigilance Services',
  description:
    'Solutions for integrated pharmacovigilance that track, oversee, and document medication safety across the course of its lifespan.',
  full_description:
    'To protect patients and assist you in meeting international compliance standards such as ICH, EMA, US FDA, and CDSCO, <strong>Indivirtus</strong> provides full-spectrum pharmacovigilance support, including case processing, signal identification, literature surveillance, and aggregate reporting.',
  estimated_duration: 'Ongoing across product lifecycle or defined regulatory cycles (quarterly/annually)',
  deliverables: [
    'Individual Case Safety Reports (ICSRs)',
    'Periodic Safety Update Reports (PSURs)',
    'Risk Management Plans (RMPs)',
    'Signal Detection Reports',
    'Literature Surveillance Summaries',
    'Global Compliance Safety Reports',
  ],
  regulatory_basis: ['ICH E2E', 'ICH E2D', 'EMA GVP', 'US FDA', 'CDSCO (India)', 'WHO guidelines'],
  requires_data_from_client: true,
  target_industry: ['Pharmaceutical', 'Biotech', 'Healthcare'],
  expertise_area: ['Drug Safety', 'Risk Management'],
  is_active: true,
  pageLink: '/services/pharmacovigilance',
  icon: '🛡️',
  image: {
    path: pv_image,
    alt: 'Pharmacovigilance and drug safety monitoring',
    caption: 'Global pharmacovigilance case processing and signal detection',
  },
  gtm: {
    eventCategory: 'Service',
    eventAction: 'Click',
    eventLabel: 'Pharmacovigilance',
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Comprehensive Pharmacovigilance Services',
    description:
      'End-to-end pharmacovigilance solutions for global regulatory compliance including case processing, signal detection, and risk management',
    serviceType: 'PharmacovigilanceService',
    provider: {
      '@type': 'Organization',
      name: 'Indivirtus',
      url: 'https://www.indivirtus.com',
      logo: 'https://www.indivirtus.com/logo.png',
      sameAs: ['https://www.linkedin.com/company/indivirtus', 'https://twitter.com/indivirtus'],
    },
    serviceArea: {
      '@type': 'Country',
      name: 'Global',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: '/services/pharmacovigilance',
      servicePhone: '+1-XXX-XXX-XXXX',
      availableLanguage: ['English', 'Spanish', 'French', 'German'],
      servicePostalAddress: {
        '@type': 'PostalAddress',
        streetAddress: '123 Drug Safety Plaza',
        addressLocality: 'City',
        addressRegion: 'State',
        postalCode: 'ZIP',
        addressCountry: 'Country',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Pharmacovigilance Services Portfolio',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Case Management Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Individual Case Safety Reports (ICSRs)',
                description: 'Processing and submission of adverse event reports in compliance with global regulations',
                serviceOutput: {
                  '@type': 'DigitalDocument',
                  name: 'E2B Compliant ICSR',
                },
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Safety Surveillance',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Signal Detection & Management',
                description: 'Proactive identification and assessment of potential safety signals',
                serviceOutput: 'Signal Detection Report',
              },
            },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Regulatory Reporting',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Periodic Safety Update Reports',
                description: 'Preparation and submission of PSURs/PBRERs according to ICH E2C',
                serviceOutput: 'Regulatory-ready Periodic Report',
              },
            },
          ],
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      category: 'Pharmacovigilance',
      priceCurrency: 'USD',
      price: 'Case-based or FTE model',
      url: '/services/pharmacovigilance',
      availability: 'https://schema.org/InStock',
      businessFunction: 'https://schema.org/ProvideService',
    },
    termsOfService: 'https://www.indivirtus.com/terms/pharmacovigilance',
    serviceAudience: {
      '@type': 'Audience',
      audienceType: ['Pharmaceutical Companies', 'Biotechnology Firms', 'Healthcare Organizations'],
    },
  },
  meta: {
    title: 'Global Pharmacovigilance Services | Drug Safety Monitoring',
    description:
      'Comprehensive pharmacovigilance solutions ensuring ICH, FDA, and EMA compliance with advanced signal detection and case processing.',
    keywords: [
      'pharmacovigilance services',
      'drug safety monitoring',
      'ICSR reporting',
      'PSUR preparation',
      'pharmacovigilance outsourcing',
      'global drug safety',
      'adverse event reporting',
      'signal detection',
      'risk management plan',
      'pharmacovigilance compliance',
    ],
    ogTags: {
      type: 'service',
      image: pv_image,
      url: '/services/pharmacovigilance',
      site_name: 'Indivirtus',
      description:
        'Comprehensive pharmacovigilance solutions ensuring ICH, FDA, and EMA compliance with advanced signal detection and case processing.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Global Pharmacovigilance Services | Drug Safety Monitoring',
      description:
        'Comprehensive pharmacovigilance solutions ensuring ICH, FDA, and EMA compliance with advanced signal detection and case processing.',
      image: pv_image,
    },
    canonicalUrl: 'https://www.indivirtus.com/services/pharmacovigilance',
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
};
