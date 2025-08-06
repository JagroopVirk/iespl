const siteUrl = 'https://indivirtuseco.com';
const siteLogo = siteUrl + '/logo.png';
const link = '/services';

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: 'Comprehensive Pharmaceutical Services | Indivirtus Healthcare',
    description:
      'Explore Indivirtus Healthcare’s wide range of pharmaceutical services, including ADE/PDE/OEL calculations, genotoxic impurity assessments, pharmacovigilance, GMP approvals, and more.',
    keywords: [
      'pharmaceutical services',
      'ADE/PDE/OEL calculations',
      'genotoxic impurity assessment',
      'pharmacovigilance',
      'GMP approvals',
      'medical device registration',
      'NABL calibration',
      'isolator containment validation',
      'MSDS/SDS preparation',
      'pharmaceutical training',
    ],
    twitterHandle: '@indivirtus',
    url: siteUrl,
    logo: siteLogo,
    type: 'website',
    canonicalUrl: `${siteUrl}${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
      googlebot: 'index, follow',
    },
    ogTags: {
      type: 'website',
      url: siteUrl,
      site_name: 'Indivirtus EcologicalServices Pvt Ltd',
      image: siteLogo,
      title: 'Comprehensive Pharmaceutical Services | Indivirtus Healthcare',
      description:
        'Indivirtus Ecologicaloffers specialized pharmaceutical services, including cleaning validation, genotoxic assessments, pharmacovigilance, GMP approvals, and regulatory compliance support.',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: 'Comprehensive Pharmaceutical Services | Indivirtus Healthcare',
      description:
        'Indivirtus Ecologicalprovides expert pharmaceutical services, from ADE/PDE calculations to GMP approvals and pharmacovigilance solutions.',
      image: siteLogo,
      site: '@indivirtus',
      creator: '@indivirtus',
    },
  },
  gtm: {
    eventCategory: 'Services Page',
    eventAction: 'View',
    eventLabel: 'Pharmaceutical Services',
    customDimensions: {},
    dataLayerPush: {
      reportType: ['ADE/PDE/OEL', 'Genotoxic Assessment', 'Pharmacovigilance', 'GMP Approvals'],
      certification: 'NABL Accredited',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Indivirtus EcologicalServices',
    description:
      'Indivirtus Ecologicalprovides comprehensive pharmaceutical services, including ADE/PDE/OEL calculations, genotoxic impurity assessments, pharmacovigilance, GMP approvals, and regulatory compliance support.',
    serviceType: 'Pharmaceutical Consulting and Compliance Services',
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
      serviceUrl: `${siteUrl}${link}`,
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
      name: 'Pharmaceutical and Regulatory Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'ADE/PDE/OEL Calculation for Cleaning Validation',
          description:
            'Specialized calculations to ensure safe exposure levels during pharmaceutical cleaning validation, including risk assessments and compliance documentation.',
        },
        {
          '@type': 'Offer',
          name: 'Genotoxic Impurity & Medical Device Toxicology Assessment',
          description:
            'Comprehensive genotoxicity and toxicological risk assessments aligned with ICH and ISO standards for pharmaceuticals and medical devices.',
        },
        {
          '@type': 'Offer',
          name: 'Pharmacovigilance & Drug Safety Monitoring',
          description:
            'Full-suite pharmacovigilance services, including safety database setup, ICSR processing, and risk management plans.',
        },
        {
          '@type': 'Offer',
          name: 'NABL-Accredited Calibration Services',
          description:
            'Precise calibration for critical pharmaceutical instruments, backed by NABL accreditation and comprehensive documentation.',
        },
        {
          '@type': 'Offer',
          name: 'GMP Approvals & Regulatory Compliance',
          description:
            'Support for GMP approvals from global authorities and regulatory compliance services, including dossier preparation and audit remediation.',
        },
      ],
    },
  },
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What types of pharmaceutical services does Indivirtus offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Indivirtus provides a wide range of services, including ADE/PDE/OEL calculations, genotoxic impurity assessments, pharmacovigilance, NABL-accredited calibration, GMP approvals, regulatory compliance, and turnkey project execution for pharmaceutical facilities.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Indivirtus ensure compliance with global regulatory standards?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Indivirtus supports compliance with standards like EU-GMP, USFDA, WHO-GMP, and TGA through regulatory readiness assessments, dossier preparation, audit remediation, and comprehensive documentation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in your pharmacovigilance services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our pharmacovigilance services include PSMF preparation, SOPs, safety database setup, ICSR processing, PSUR/PBRER/PADER submissions, signal detection, risk management plans, and literature surveillance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are your calibration services accredited?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our calibration services are NABL-accredited, providing traceable calibration reports, deviation records, and quality documentation for pharmaceutical instruments.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I contact Indivirtus for more information about your services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can reach us via our service page at https://indivirtuseco.com/services, by phone at +91-9131925456, or at our office located at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India.',
        },
      },
    ],
  },
};
