import serviceImage from '@/assets/ade_pde_oel_oeb_reports.png';
const link = "/services/pde-ade-oel-oeb";

export default {
  service_id: ,
  report_type: ,
  title: ,
  name: ,
  description: ,
  full_description:
    ,
  estimated_duration: ,
  deliverables: [],
  regulatory_basis: [],
  requires_data_from_client: true,
  target_industry: [],
  expertise_area: [],
  is_active: true,
  pageLink: link, // page link through variable
  icon: , // use relative emoji
  image: {
    path: serviceImage, // image path
    alt: ,
    caption: ,
  },
  gtm: {
    eventCategory: ,
    eventAction: ,
    eventLabel: ,
    customDimensions: {
    },
    dataLayerPush: {
      reportType: [],
      certification: ,
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: ,
    description: ,
    serviceType: ,
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
      serviceUrl: link,
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
      name: ,
      itemListElement: [
        
      ],
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: 'Compound-based pricing',
      url: link,
      availability: 'https://schema.org/InStock',
      businessFunction: 'https://schema.org/ProvideService',
    },
  },
  meta: {
    title: ,
    description:
      ,
    keywords: [
      
    ],
    ogTags: {
      type: 'service',
      image: serviceImage.src, // image path
      url: link,
      site_name: 'Indivirtus',
    },
    twitterCard: {
      card: 'summary_large_image',
      title: ,
      description: ,
      image: serviceImage.src, // image path
    },
    canonicalUrl: `'https://www.indivirtus.com' + ${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
    },
  },
  assessmentTypes: [
  
  ],
};