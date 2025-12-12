const siteUrl = "https://indivirtuseco.com";
const siteLogo = `${siteUrl}/logo.png`;
const link = "/downloads/brochure";

export default {
  pageLink: `${siteUrl}${link}`,
  meta: {
    title: "Brochure | Indivirtus Ecological Services",
    description:
      "Learn about Indivirtus Ecological Services, our mission to promote sustainability, and our commitment to innovative ecological solutions worldwide.",
    keywords: [
      "about indivirtus",
      "ecological services",
      "sustainability mission",
      "environmental consulting",
      "indivirtus vision",
    ],
    twitterHandle: "@indivirtus",
    url: siteUrl,
    logo: siteLogo,
    type: "website",
    canonicalUrl: `${siteUrl}${link}`,
    robotsMeta: {
      index: true,
      follow: true,
      nocache: false,
      googlebot: "index, follow",
    },
    ogTags: {
      type: "website",
      url: `${siteUrl}${link}`,
      site_name: "Indivirtus Ecological Services Pvt Ltd",
      image: siteLogo,
      title: "About Us | Indivirtus Ecological Services",
      description:
        "Discover the mission, vision, and values of Indivirtus Ecological Services, leaders in sustainability and ecological consulting.",
    },
    twitterCard: {
      card: "summary_large_image",
      title: "About Us | Indivirtus Ecological Services",
      description:
        "Discover the mission, vision, and values of Indivirtus Ecological Services, leaders in sustainability and ecological consulting.",
      image: siteLogo,
      site: "@indivirtus",
      creator: "@indivirtus",
    },
  },
  gtm: {
    eventCategory: "PageView",
    eventAction: "View",
    eventLabel: "About Us",
    customDimensions: {},
    dataLayerPush: {
      reportType: ["about_page"],
      certification: "ISO 14001",
    },
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "About Indivirtus Ecological Services",
    description:
      "Indivirtus Ecological Services is dedicated to advancing sustainability through innovative ecological consulting and environmental solutions globally.",
    serviceType: "Ecological Consulting",
    provider: {
      "@type": "Organization",
      name: "Indivirtus",
      url: siteUrl,
      logo: siteLogo,
      sameAs: [
        "https://www.linkedin.com/company/indivirtus-group-of-companies",
        "https://twitter.com/indivirtus",
        "https://www.facebook.com/Indivirtus",
        "https://www.instagram.com/indivirtus_healthcare",
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "Global",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${siteUrl}${link}`,
      servicePhone: "+91-9131925456",
      servicePostalAddress: {
        "@type": "PostalAddress",
        streetAddress: "522, Taj Plaza, TDI city, Sector 118",
        addressLocality: "Mohali",
        addressRegion: "Punjab",
        postalCode: "160059",
        addressCountry: "India",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Our Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Ecological Consulting",
          description: "Providing expert guidance for sustainable environmental practices.",
        },
        {
          "@type": "Offer",
          name: "Sustainability Solutions",
          description: "Innovative solutions to promote sustainability across industries.",
        },
      ],
    },
  },
  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the mission of Indivirtus Ecological Services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our mission is to promote sustainability and environmental stewardship through innovative ecological consulting and solutions worldwide.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Indivirtus Ecological Services offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer ecological consulting, environmental impact assessments, and sustainability solutions to support global environmental goals.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Indivirtus Ecological Services for more information?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contact us at +91-9131925456 or visit our office at 522, Taj Plaza, TDI City, Sector 118, Mohali, Punjab, India, 160059.",
        },
      },
    ],
  },
};
