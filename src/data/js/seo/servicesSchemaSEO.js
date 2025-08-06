const siteUrl = 'https://indivirtuseco.com';
const siteLogo = `${siteUrl}/logo.png`;

export default {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Services | Indivirtus Ecological Services',
  description:
    'Explore the full range of services offered by Indivirtus Ecological Services, including ecological consulting, sustainability solutions, and environmental impact assessments.',
  url: `${siteUrl}/services`,
  publisher: {
    '@type': 'Organization',
    name: 'Indivirtus Ecological Services Pvt Ltd',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: siteLogo,
    },
    sameAs: [
      'https://www.linkedin.com/company/indivirtus-group-of-companies',
      'https://twitter.com/indivirtus',
      'https://www.facebook.com/Indivirtus',
      'https://www.instagram.com/indivirtus_healthcare',
    ],
  },
  mainEntity: {
    '@type': 'ItemList',
    name: 'Services Offered by Indivirtus',
    itemListOrder: 'ItemListOrderDescending',
    numberOfItems: 5,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        url: `${siteUrl}/services/ecological-consulting`,
        name: 'Ecological Consulting',
        description: 'Expert guidance for sustainable environmental practices and project planning.',
      },
      {
        '@type': 'ListItem',
        position: 2,
        url: `${siteUrl}/services/sustainability-solutions`,
        name: 'Sustainability Solutions',
        description: 'Innovative solutions to promote sustainability across industries.',
      },
      {
        '@type': 'ListItem',
        position: 3,
        url: `${siteUrl}/services/environmental-impact-assessment`,
        name: 'Environmental Impact Assessment',
        description: 'Comprehensive assessments to ensure environmentally responsible project outcomes.',
      },
      {
        '@type': 'ListItem',
        position: 4,
        url: `${siteUrl}/services/sustainable-development`,
        name: 'Sustainable Development Projects',
        description: 'Initiatives focused on sustainable practices for communities and businesses.',
      },
      {
        '@type': 'ListItem',
        position: 5,
        url: `${siteUrl}/services/healthcare-solutions`,
        name: 'Healthcare Solutions',
        description: 'Innovative healthcare services integrated with sustainability goals.',
      },
    ],
  },
};
