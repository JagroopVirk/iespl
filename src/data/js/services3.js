// Indivirtus – Services Catalog with SEO, GTM & schema.org Markup
import pv_image from '../../assets/pharmacovigilance.png';
import greenfield from '../../assets/greenfieldBrownfieldProjects.png';
import validation from '../../assets/validation.png';
import riskAssessment from '../../assets/riskAssessment.png';
import adePdeOelOeb from '../../assets/ade_pde_oel_oeb_reports.png';
import regulatoryAffairs from '../../assets/regulatoryAffairs.png';
import gmpCompliance from '../../assets/gmpCompliance.png';
import calibration from '../../assets/calibration.png';
import gmpAudit from '../../assets/gmpAudit.png';

export const services = [
  //PV
  {
    id: 'PVG-001',
    serviceType: 'Pharmacovigilance',
    category: 'Drug Safety',
    name: 'Comprehensive Pharmacovigilance Services',
    shortName: 'Pharmacovigilance',
    tagline: 'End-to-End Drug Safety Solutions',
    summary:
      'Global pharmacovigilance services ensuring compliance and patient safety throughout the product lifecycle',
    icon: '🛡️',
    image: {
      path: pv_image,
      alt: 'Pharmacovigilance and drug safety monitoring',
      caption: 'Global pharmacovigilance case processing and signal detection',
    },

    // Enhanced Description Structure
    description: {
      overview:
        'Complete pharmacovigilance solutions from case intake to regulatory reporting, designed for global compliance and patient safety.',
      problemSolved:
        'Mitigates regulatory risks and ensures timely adverse event reporting across multiple jurisdictions.',
      keyBenefits: [
        'Reduced compliance risks with automated reporting workflows',
        'Early signal detection through advanced analytics',
        'Dedicated medical review by qualified physicians',
        'Multi-lingual case processing capabilities',
      ],
      process: {
        steps: [
          { step: 'Case Intake', detail: '24/7 global case collection' },
          { step: 'Medical Review', detail: 'Physician-led assessment' },
          { step: 'Regulatory Reporting', detail: 'E2B, CIOMS, MedWatch' },
          { step: 'Signal Detection', detail: 'Automated algorithms + manual review' },
        ],
        timeline: 'Ongoing with expedited (7/15 day) and periodic reporting',
      },
    },

    // Technical Specifications
    deliverables: [
      {
        name: 'Individual Case Safety Reports',
        formats: ['E2B XML', 'PDF'],
        frequency: 'Expedited (7/15 day) + Periodic',
        compliance: 'ICH E2B(R3)',
      },
      {
        name: 'Periodic Safety Update Reports',
        formats: ['eCTD', 'PDF'],
        frequency: 'Annually/Biannually',
        compliance: 'ICH E2C',
      },
    ],

    // Compliance Information
    compliance: {
      standards: ['ICH E2E', 'ICH E2D', 'EMA GVP', '21 CFR 314.80'],
      regionsCovered: ['US', 'EU', 'Japan', 'Emerging Markets'],
      certifications: ['ISO 9001:2015', 'SOC 2 Type II'],
    },

    // Client Requirements
    requirements: {
      dataNeeded: ['Safety data', 'Product information', 'Labeling documents'],
      onboardingTime: '2-4 weeks',
      integration: ['API available', 'SFTP support', 'Web portal'],
    },

    // Enhanced Metadata
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
      },
    },

    // Enhanced Schema Markup
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Comprehensive Pharmacovigilance Services',
      description: 'End-to-end pharmacovigilance solutions for global regulatory compliance',
      serviceType: 'Pharmacovigilance',
      provider: {
        '@type': 'Organization',
        name: 'Indivirtus',
      },
      areaServed: ['Global'],
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: '/services/pharmacovigilance',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Pharmacovigilance Services',
        itemListElement: [
          {
            '@type': 'OfferCatalog',
            name: 'Case Processing',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Individual Case Safety Reports',
                },
              },
            ],
          },
        ],
      },
    },

    // Enhanced GTM Configuration
    gtm: {
      eventCategory: 'Service Engagement',
      eventAction: 'Pharmacovigilance Interest',
      eventLabel: 'PV Service Page View',
      customDimensions: {
        cd1: 'Pharmacovigilance', // Service Type
        cd2: 'Drug Safety', // Category
        cd3: 'High', // Priority Level
      },
      dataLayerPush: {
        serviceID: 'PVG-001',
        serviceTier: 'Enterprise',
      },
    },
  },

  // Turnkey Projects
  {
    id: 'TFP-001',
    serviceType: 'Facility Development',
    category: 'Pharma Engineering',
    name: 'Turnkey Pharmaceutical Facility Solutions',
    shortName: 'Turnkey Projects',
    tagline: 'From Concept to GMP-Compliant Operations',
    summary: 'End-to-end project management for greenfield and brownfield pharmaceutical facilities',
    icon: '🏗️',
    image: {
      path: greenfield,
      alt: 'Pharmaceutical facility construction',
      caption: 'GMP facility design and construction',
    },

    description: {
      overview: 'Complete facility solutions from feasibility studies through commissioning and validation.',
      problemSolved: 'Reduces project risks and ensures regulatory-ready facilities.',
      keyBenefits: [
        'Single-point accountability',
        'Regulatory-compliant designs',
        'Integrated project controls',
        'Validation-ready construction',
      ],
      process: {
        phases: [
          {
            name: 'Design',
            deliverables: ['User Requirements', 'Conceptual Design', 'Regulatory Strategy'],
          },
          {
            name: 'Construction',
            deliverables: ['GMP Construction', 'Quality Oversight', 'Change Control'],
          },
          {
            name: 'Commissioning',
            deliverables: ['IQ/OQ/PQ', 'Process Validation', 'Regulatory Filing'],
          },
        ],
        timeline: '6-18 months (project-dependent)',
      },
    },

    specialties: [
      'Oral solid dosage facilities',
      'Sterile manufacturing plants',
      'Biotech facilities',
      'API manufacturing',
    ],

    compliance: {
      standards: ['WHO GMP', 'EU GMP Annex 1', '21 CFR 210/211'],
      certifications: ['ISO 14644', 'LEAN Construction'],
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
    },

    schema: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Turnkey Pharmaceutical Facility Solutions',
      description: 'Complete GMP facility design and construction services',
      serviceType: ['EngineeringService', 'ConstructionService'],
      provider: {
        '@type': 'Organization',
        name: 'Indivirtus',
      },
    },

    gtm: {
      eventCategory: 'Service Engagement',
      eventAction: 'Facility Project Interest',
      eventLabel: 'Turnkey Project Page View',
      customDimensions: {
        cd1: 'Facility Development',
        cd2: 'Engineering',
        cd3: 'High',
      },
    },
  },

  //CSV
  {
    id: 'VAL-001',
    serviceType: 'Validation',
    category: 'Compliance',
    name: 'Computer System & Equipment Validation',
    shortName: 'CSV/Validation',
    tagline: 'GxP-Compliant Validation Solutions',
    summary: 'End-to-end validation services ensuring data integrity and regulatory compliance',
    icon: '✅',
    image: {
      path: validation,
      alt: 'Computer system validation process',
      caption: 'GMP validation services for regulated industries',
    },

    description: {
      overview: 'Complete validation services from risk assessment through final reporting.',
      keyFeatures: [
        'GAMP 5 compliant approaches',
        'Data integrity focus',
        'Cloud system expertise',
        'Legacy system remediation',
      ],
      validationTypes: [
        {
          name: 'Computer System Validation',
          standards: ['21 CFR Part 11', 'EU Annex 11'],
        },
        {
          name: 'Equipment Qualification',
          standards: ['ASTM E2500', 'ISPE Baseline Guide'],
        },
      ],
    },

    meta: {
      title: 'GMP Validation Services | CSV & Equipment Qualification',
      description: 'Regulatory-compliant validation services for computer systems and pharmaceutical equipment',
      keywords: [
        'computer system validation',
        'CSV services',
        'GMP validation',
        '21 CFR Part 11 compliance',
        'equipment qualification',
        'data integrity validation',
        'pharma CSV',
        'validation master plan',
        'regulatory compliance validation',
        'IQ OQ PQ services',
      ],
    },
  },

  // Validation
  {
    id: 'VAL-001',
    serviceType: 'Validation',
    category: 'Quality Assurance',
    name: 'Comprehensive Validation Services',
    shortName: 'Validation',
    tagline: 'GxP-Compliant Validation for Regulated Industries',
    summary: 'End-to-end validation solutions ensuring data integrity and regulatory compliance',
    icon: '✅',
    image: {
      path: validation,
      alt: 'Validation services for pharmaceutical equipment',
      caption: 'GMP validation from protocol development to execution',
    },

    description: {
      overview:
        'Complete validation lifecycle services for computer systems, equipment and facilities in regulated environments.',
      keyBenefits: [
        'Reduced inspection findings through compliant validation',
        'Faster go-live with parallel validation approaches',
        'Cost savings via risk-based validation',
        'Future-proof systems with maintainable documentation',
      ],
      serviceOfferings: [
        {
          name: 'Computer System Validation',
          details: [
            '21 CFR Part 11/Annex 11 compliance',
            'GAMP 5 methodology',
            'Cloud/SaaS system validation',
            'Legacy system remediation',
          ],
        },
        {
          name: 'Equipment Qualification',
          details: [
            'ASTM E2500 approach',
            'Turnkey IQ/OQ/PQ services',
            'Process validation support',
            'Cleaning validation',
          ],
        },
      ],
    },

    deliverables: [
      {
        name: 'Validation Master Plan',
        format: 'PDF/Word',
        purpose: 'Overall validation strategy',
      },
      {
        name: 'Protocols & Reports',
        format: 'Templates/Client-specific',
        types: ['IQ', 'OQ', 'PQ', 'UAT'],
      },
      {
        name: 'Traceability Matrix',
        format: 'Excel/ALM',
        purpose: 'Requirements coverage',
      },
    ],

    compliance: {
      standards: ['21 CFR Part 11', 'EU Annex 11', 'GAMP 5', 'ISO 13485'],
      applicableRegulations: ['FDA', 'EMA', 'MHRA', 'WHO'],
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
      },
    },

    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'ValidationService',
      provider: {
        '@type': 'Organization',
        name: 'Indivirtus',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Validation Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Computer System Validation',
            },
          },
        ],
      },
    },

    gtm: {
      eventCategory: 'Service Engagement',
      eventAction: 'Validation Interest',
      eventLabel: 'Validation Service Page View',
      customDimensions: {
        cd1: 'Validation',
        cd2: 'Quality Assurance',
        cd3: 'Medium',
      },
    },
  },

  // Impurity Risk Assessment
  {
    id: 'IMP-RA-001',
    serviceType: 'Toxicology',
    category: 'Risk Assessment',
    name: 'Impurity Risk Evaluation Services',
    shortName: 'Impurity Assessment',
    tagline: 'ICH-Compliant Impurity Safety Evaluation',
    summary: 'Genotoxic and non-genotoxic impurity risk assessment per ICH M7/Q3 guidelines',
    icon: '🧪',
    image: {
      path: riskAssessment,
      alt: 'Impurity risk assessment process',
      caption: 'Toxicological evaluation of pharmaceutical impurities',
    },

    description: {
      overview:
        'Comprehensive safety evaluation of organic and elemental impurities using (Q)SAR and literature-based approaches.',
      methodology: [
        {
          name: 'Genotoxic Impurities',
          approach: 'ICH M7 compliant assessment',
          tools: ['Derek Nexus', 'Sarah', 'Leadscope'],
        },
        {
          name: 'Non-Genotoxic Impurities',
          approach: 'ICH Q3A/B evaluation',
          tools: ['TOXNET', 'RepDose', 'Professional judgment'],
        },
      ],
      applications: [
        'API process development',
        'Formulation compatibility',
        'Container closure systems',
        'Degradation products',
      ],
    },

    deliverables: [
      {
        name: 'Impurity Risk Report',
        sections: ['TTC Calculation', 'Control Strategy', 'Justification'],
        format: 'Regulatory-ready template',
      },
      {
        name: 'Toxicological Summary',
        purpose: 'Regulatory submission',
        format: 'eCTD compatible',
      },
    ],

    compliance: {
      standards: ['ICH M7', 'ICH Q3A/B', 'EMA CHMP', 'FDA Guidance'],
      reviewLevel: 'ERT/DABT certified review',
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
    },

    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Impurity Risk Assessment',
      serviceType: 'ToxicologyService',
      description: 'ICH-compliant evaluation of genotoxic and non-genotoxic impurities',
    },

    gtm: {
      eventCategory: 'Scientific Services',
      eventAction: 'Toxicology Inquiry',
      eventLabel: 'Impurity Assessment Page',
    },
  },

  // ADE/PDE/OEL/OEB Reports
  {
    id: 'EXPOSURE-001',
    serviceType: 'Toxicology',
    category: 'Occupational Health',
    name: 'Exposure Limit Derivation Services',
    shortName: 'Exposure Limits',
    tagline: 'Science-Based Exposure Limit Calculations',
    summary: 'ADE, PDE, OEL and OEB determinations for worker safety and cleaning validation',
    icon: '📊',
    image: {
      path: adePdeOelOeb,
      alt: 'Exposure limit calculation process',
      caption: 'Toxicological evaluation for occupational safety',
    },

    description: {
      overview: 'Toxicological risk assessment to establish safe exposure limits for APIs and intermediates.',
      limitTypes: [
        {
          name: 'ADE/PDE',
          application: 'Cleaning validation',
          standard: 'ICH Q3D',
        },
        {
          name: 'OEL/OEB',
          application: 'Worker safety',
          standard: 'ISPE Risk-MaPP',
        },
      ],
      keyFeatures: [
        'DABT-certified toxicologist review',
        'Uncertainty factor justification',
        'Route-to-route extrapolation',
        'Sensitive population consideration',
      ],
    },

    deliverables: [
      {
        name: 'Exposure Limit Report',
        format: 'PDF/Word',
        sections: [
          'Critical Effect Identification',
          'NOAEL/LOAEL Selection',
          'Uncertainty Factor Application',
          'Final Limit Justification',
        ],
      },
    ],

    compliance: {
      standards: ['ICH Q3D', 'EMA Guideline', 'OSHA Standards'],
      reviewProcess: 'Peer-reviewed by certified toxicologists',
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
    },

    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Exposure Limit Derivation',
      serviceType: ['ToxicologyService', 'OccupationalHealthService'],
    },
  },

  // Regulatory Affairs
  {
    id: 'REG-001',
    serviceType: 'Regulatory',
    category: 'Submissions',
    name: 'Strategic Regulatory Affairs',
    shortName: 'Regulatory Affairs',
    tagline: 'Global Market Access Solutions',
    summary: 'End-to-end regulatory support from strategy through post-approval maintenance',
    icon: '📁',
    image: {
      path: regulatoryAffairs,
      alt: 'Regulatory submission process',
      caption: 'Global regulatory strategy and submissions',
    },

    description: {
      overview: 'Comprehensive regulatory services for all stages of product development and commercialization.',
      serviceAreas: [
        {
          name: 'Submissions',
          offerings: ['IND/IMPD', 'NDA/MAA', 'ANDA', 'Variations'],
        },
        {
          name: 'Strategic Consulting',
          offerings: ['Regulatory pathway', 'Orphan drug designation', 'Pediatric plans', 'Labeling strategy'],
        },
      ],
      regionalExpertise: [
        {
          region: 'US',
          capabilities: ['FDA meetings', '505(b)(2)', 'Fast track'],
        },
        {
          region: 'EU',
          capabilities: ['Centralized procedure', 'National submissions'],
        },
      ],
    },

    deliverables: [
      {
        name: 'Regulatory Strategy',
        format: 'Custom report',
        components: ['Timeline', 'Budget', 'Risk assessment'],
      },
      {
        name: 'Submission Dossier',
        format: 'eCTD/NeES/Paper',
        types: ['Module 1-5', 'Country-specific'],
      },
    ],

    meta: {
      title: 'Global Regulatory Affairs Services | Market Approval Experts',
      description:
        'Strategic regulatory consulting and submission services for FDA, EMA and global health authorities.',
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
    },

    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Regulatory Affairs Services',
      serviceType: 'RegulatoryService',
    },
  },

  // GMP Compliance & Training
  {
    id: 'GMP-001',
    serviceType: 'Compliance',
    category: 'Quality Systems',
    name: 'GMP Compliance Solutions',
    shortName: 'GMP Services',
    tagline: 'Inspection-Ready Quality Systems',
    summary: 'GMP audits, remediation and training for pharmaceutical quality systems',
    icon: '📚',
    image: {
      path: gmpCompliance,
      alt: 'GMP compliance audit process',
      caption: 'GMP gap assessment and remediation',
    },

    description: {
      overview: 'Comprehensive GMP compliance services to achieve and maintain inspection readiness.',
      serviceModules: [
        {
          name: 'GMP Audits',
          types: ['Pre-approval inspections', 'For-cause audits', 'Mock FDA inspections'],
        },
        {
          name: 'Remediation',
          offerings: ['CAPA development', 'Procedure upgrades', 'Data integrity fixes'],
        },
        {
          name: 'Training',
          programs: ['GMP fundamentals', 'Data integrity', 'Regulatory updates'],
        },
      ],
    },

    compliance: {
      standards: ['21 CFR 210/211', 'EU GMP', 'WHO GMP', 'PIC/S'],
      auditApproach: 'Risk-based, system-focused',
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
    },
  },

  // Calibration Services
  {
    id: 'CAL-001',
    serviceType: 'Metrology',
    category: 'Quality Control',
    name: 'NABL Accredited Calibration',
    shortName: 'Calibration',
    tagline: 'Traceable Precision Measurement',
    summary: 'ISO 17025 accredited calibration services for pharmaceutical instruments',
    icon: '🧪',
    image: {
      path: calibration,
      alt: 'Instrument calibration process',
      caption: 'NABL accredited calibration laboratory',
    },

    description: {
      overview: 'Precision calibration services with full traceability for critical pharmaceutical instruments.',
      calibrationTypes: [
        {
          category: 'Thermal',
          instruments: ['Autoclaves', 'Stability chambers', 'Freezers'],
        },
        {
          category: 'Electrotechnical',
          instruments: ['pH meters', 'Conductivity meters', 'Balances'],
        },
      ],
      accreditation: {
        standard: 'ISO/IEC 17025:2017',
        scope: 'Thermal, Electrical, Mechanical',
        certificateNumber: 'NABL-XXX',
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
    },
  },

  // Vendor GMP Audits
  {
    id: 'GMP-APP-001',
    serviceType: 'Audit',
    category: 'Quality Assurance',
    name: 'Vendor GMP Audit Program',
    shortName: 'Vendor Audits',
    tagline: 'Third-Party GMP Compliance Verification',
    summary: 'Regulatory-standard vendor audits and approval dossier preparation',
    icon: '📋',
    image: {
      path: gmpAudit,
      alt: 'GMP audit process',
      caption: 'Vendor quality system assessment',
    },

    description: {
      overview: 'Independent GMP audits of API manufacturers, excipient suppliers and contract facilities.',
      auditProgram: [
        {
          phase: 'Pre-Audit',
          activities: ['Questionnaire', 'Document review', 'Schedule'],
        },
        {
          phase: 'On-Site',
          activities: ['Facility tour', 'System interviews', 'Document review'],
        },
        {
          phase: 'Reporting',
          deliverables: ['Audit report', 'CAPA plan', 'Risk assessment'],
        },
      ],
      auditScope: ['Quality systems', 'Facilities & equipment', 'Materials management', 'Production controls'],
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
    },
  },
];
