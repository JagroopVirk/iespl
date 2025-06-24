export const pdeReports = {
  service_id: 'svc-pde-001',
  report_type: 'PDE',
  name: 'PDE Report',
  description: 'Assessment of Permitted Daily Exposure based on NOAEL/LOAEL, uncertainty factors, and EMA guidelines.',
  price_model: 'Fixed',
  estimated_duration: '3 business days',
  deliverables: ['PDE Report (PDF)', 'Toxicological Summary', 'Calculation Sheet'],
  regulatory_basis: ['ICH Q3D', 'EMA'],
  requires_data_from_client: true,
  target_industry: ['Pharma', 'API', 'CMO'],
  expertise_area: ['Toxicology', 'Regulatory Compliance'],
  is_active: true,
};

export const allServicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'ProfessionalService',
        name: 'Comprehensive Pharmacovigilance Services',
        description: 'End-to-end pharmacovigilance solutions for global regulatory compliance',
        serviceType: 'Pharmacovigilance',
        url: '/services/pharmacovigilance',
        provider: {
          '@type': 'Organization',
          name: 'Indivirtus',
          logo: 'https://www.indivirtus.com/logo.png',
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: 'Contact for customized pricing',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'ProfessionalService',
        name: 'Pharmaceutical Turnkey Facility Solutions',
        description: 'End-to-end design, construction and validation of GMP-compliant pharmaceutical facilities',
        serviceType: ['EngineeringService', 'ConstructionService'],
        url: '/services/greenfield-brownfield',
        provider: {
          '@type': 'Organization',
          name: 'Indivirtus',
          logo: 'https://www.indivirtus.com/logo.png',
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: 'Project-based',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'ProfessionalService',
        name: 'GMP Validation Services - CSV & Equipment Qualification',
        description: 'Comprehensive validation services ensuring 21 CFR Part 11, EU Annex 11 and GAMP 5 compliance',
        serviceType: 'ValidationService',
        url: '/services/validation',
        provider: {
          '@type': 'Organization',
          name: 'Indivirtus',
          logo: 'https://www.indivirtus.com/logo.png',
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: 'Contact for quote',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'ProfessionalService',
        name: 'ICH M7 Impurity Risk Assessment Service',
        description: 'Regulatory-compliant evaluation of genotoxic and non-genotoxic impurities per ICH guidelines',
        serviceType: 'ToxicologyService',
        url: '/services/risk-assessment',
        provider: {
          '@type': 'Organization',
          name: 'Indivirtus',
          logo: 'https://www.indivirtus.com/logo.png',
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: 'Contact for quote',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'ProfessionalService',
        name: 'Pharmaceutical Exposure Limit Assessment Services',
        description:
          'Science-based derivation of ADE, PDE, OEL and OEB values with DABT-certified toxicological review',
        serviceType: 'ToxicologyService',
        url: '/services/ade-pde-oel',
        provider: {
          '@type': 'Organization',
          name: 'Indivirtus',
          logo: 'https://www.indivirtus.com/logo.png',
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: 'Compound-based pricing',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'ProfessionalService',
        name: 'Global Regulatory Affairs Services',
        description:
          'End-to-end regulatory strategy and submission support for pharmaceutical market approvals worldwide',
        serviceType: 'RegulatoryConsulting',
        url: '/services/regulatory-affairs',
        provider: {
          '@type': 'Organization',
          name: 'Indivirtus',
          logo: 'https://www.indivirtus.com/logo.png',
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: 'Project-based pricing',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 7,
      item: {
        '@type': 'ProfessionalService',
        name: 'GMP Compliance & Training Services',
        description: 'Comprehensive GMP audit, remediation and training solutions for pharmaceutical quality systems',
        serviceType: 'QualityAssuranceService',
        url: '/services/gmp-compliance-trainings',
        provider: {
          '@type': 'Organization',
          name: 'Indivirtus',
          logo: 'https://www.indivirtus.com/logo.png',
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: 'Project-based',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 8,
      item: {
        '@type': 'ProfessionalService',
        name: 'NABL Accredited Calibration Services',
        description:
          'Precision calibration services for pharmaceutical and healthcare instruments with full metrological traceability',
        serviceType: 'CalibrationService',
        url: '/services/calibration',
        provider: {
          '@type': 'Organization',
          name: 'Indivirtus',
          logo: 'https://www.indivirtus.com/logo.png',
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: 'Instrument-based pricing',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 9,
      item: {
        '@type': 'ProfessionalService',
        name: 'Vendor GMP Audit & Qualification Services',
        description: 'Regulatory-standard GMP audits and approval dossier preparation for pharmaceutical suppliers',
        serviceType: 'QualityAuditService',
        url: '/services/gmp-audits',
        provider: {
          '@type': 'Organization',
          name: 'Indivirtus',
          logo: 'https://www.indivirtus.com/logo.png',
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: 'Project-based',
        },
      },
    },
  ],
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.indivirtus.com/services',
  },
};
