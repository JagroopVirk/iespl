// const siteUrl = document.location.origin || "https://indivirtus.com";

export const productSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "image": [product.image],
  "description": product.description,
  "sku": product.sku,
  "offers": {
    "@type": "Offer",
    "url": product.url,
    "priceCurrency": "INR",
    "price": product.price,
    "availability": "https://schema.org/InStock"
  }
});

