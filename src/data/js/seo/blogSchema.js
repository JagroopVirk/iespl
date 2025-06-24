// const siteUrl = document.location.origin || "https://indivirtus.com";


export const blogPostSchema = (post) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "description": post.excerpt,
  "image": post.image,
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "My Awesome Site",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yoursite.com/images/logo.png"
    }
  },
  "datePublished": post.publishedAt,
  "dateModified": post.updatedAt || post.publishedAt
});
