// const siteUrl = document.location.origin || "https://indivirtus.com";
const siteUrl = 'https://indivirtus.com';
const siteLogo = siteUrl + '/assets/logo.png';

// location-based Schema
export const locationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.indivirtus.com#organization',
      name: 'Indivirtus',
      url: 'https://www.indivirtus.com',
      logo: siteLogo,
      sameAs: [],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.indivirtus.com#chandigarh',
      name: 'Indivirtus - Registered Office',
      image: siteLogo,
      url: 'https://www.indivirtus.com',
      telephone: '+91 172 450 8817',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5020 A, Sector 38 West',
        addressLocality: 'Chandigarh',
        addressRegion: 'CH',
        postalCode: '160055',
        addressCountry: 'IN',
      },
      parentOrganization: {
        '@id': 'https://www.indivirtus.com#organization',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.indivirtus.com#mohali',
      name: 'Indivirtus - Site Office',
      image: siteLogo,
      url: 'https://www.indivirtus.com',
      telephone: '+91 9131925456',
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
        '@id': 'https://www.indivirtus.com#organization',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.indivirtus.com#usa',
      name: 'Indivirtus - USA Office',
      image: siteLogo,
      url: 'https://www.indivirtus.com',
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
        '@id': 'https://www.indivirtus.com#organization',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.indivirtus.com#uk',
      name: 'Indivirtus - UK Office',
      image: siteLogo,
      url: 'https://www.indivirtus.com',
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
        '@id': 'https://www.indivirtus.com#organization',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.indivirtus.com#canada',
      name: 'Indivirtus - Canada Office',
      image: siteLogo,
      url: 'https://www.indivirtus.com',
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
        '@id': 'https://www.indivirtus.com#organization',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.indivirtus.com#uae',
      name: 'Indivirtus - UAE Office',
      image: siteLogo,
      url: 'https://www.indivirtus.com',
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
        '@id': 'https://www.indivirtus.com#organization',
      },
    },
  ],
};
