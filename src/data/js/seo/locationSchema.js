// const siteUrl = document.location.origin || "https://indivirtuseco.com";
const siteUrl = 'https://indivirtuseco.com';
const siteLogo = siteUrl + '/assets/logo.png';

// location-based Schema
export const locationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.indivirtuseco.com#organization',
      name: 'Indivirtus',
      url: 'https://www.indivirtuseco.com',
      logo: siteLogo,
      sameAs: [],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.indivirtuseco.com#bhopal',
      name: 'Indivirtus - Registered Office',
      image: siteLogo,
      url: 'https://www.indivirtuseco.com',
      telephone: '+91 9131925456',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'C-97, New Minal Residency, J.K. Road,Madhya Pradesh',
        addressLocality: 'Bhopal',
        addressRegion: 'BH',
        postalCode: '',
        addressCountry: 'IN',
      },
      parentOrganization: {
        '@id': 'https://www.indivirtuseco.com#organization',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.indivirtuseco.com#mohali',
      name: 'Indivirtus - Site Office',
      image: siteLogo,
      url: 'https://www.indivirtuseco.com',
      telephone: '+91 450 88 17',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '521-522, 2nd Floor, TDI City, Taj Plaza, Sector 118',
        addressLocality: 'Mohali',
        addressRegion: 'PB',
        postalCode: '160059',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '30.7101558',
        longitude: '76.6975626',
      },
      parentOrganization: {
        '@id': 'https://www.indivirtuseco.com#organization',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.indivirtuseco.com#usa',
      name: 'Indivirtus - USA Office',
      image: siteLogo,
      url: 'https://www.indivirtuseco.com',
      telephone: '+1 (323) 522-5967',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '23950 Mondavi Drive',
        addressLocality: 'Novi',
        addressRegion: 'MI',
        postalCode: '48374',
        addressCountry: 'US',
      },
      parentOrganization: {
        '@id': 'https://www.indivirtuseco.com#organization',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.indivirtuseco.com#uk',
      name: 'Indivirtus - UK Office',
      image: siteLogo,
      url: 'https://www.indivirtuseco.com',
      telephone: '+44 20 3286 0405',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '153 Banstead Road',
        addressLocality: 'South Sutton',
        addressRegion: 'England',
        postalCode: 'SM2 5LL',
        addressCountry: 'GB',
      },
      parentOrganization: {
        '@id': 'https://www.indivirtuseco.com#organization',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.indivirtuseco.com#canada',
      name: 'Indivirtus - Canada Office',
      image: siteLogo,
      url: 'https://www.indivirtuseco.com',
      telephone: '+1 (647) 581-6157',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit 2 County Court Blvd., Suite 400',
        addressLocality: 'Brampton',
        addressRegion: 'ON',
        postalCode: 'L6W 3W8',
        addressCountry: 'CA',
      },
      parentOrganization: {
        '@id': 'https://www.indivirtuseco.com#organization',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.indivirtuseco.com#uae',
      name: 'Indivirtus - UAE Office',
      image: siteLogo,
      url: 'https://www.indivirtuseco.com',
      telephone: '+971 565114477',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '502, Saleh Bin Lahej, 341, Al Barsha 1',
        addressLocality: 'Dubai',
        addressRegion: 'DU',
        postalCode: '345055',
        addressCountry: 'AE',
      },
      parentOrganization: {
        '@id': 'https://www.indivirtuseco.com#organization',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.indivirtuseco.com#raipur',
      name: 'Indivirtus - Registered Office',
      image: siteLogo,
      url: 'https://www.indivirtuseco.com',
      telephone: '+91 9981746990',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '404- Fourth Floor, Avinash Time Square, Sector - 19,',
        addressLocality: 'Nawa Raipur',
        addressRegion: 'NR',
        postalCode: '',
        addressCountry: 'IN',
      },
      parentOrganization: {
        '@id': 'https://www.indivirtuseco.com#organization',
      },
    },
  ],
};
