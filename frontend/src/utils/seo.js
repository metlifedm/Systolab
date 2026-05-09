export const updateMetaTags = (config = {}) => {
  const defaults = {
    title: 'SYSTOLAB - Systems Built for Modern Business Growth',
    description: 'Operational systems platform designed for modern business growth and scalability.',
    canonical: 'https://systolab.com',
    ogTitle: 'SYSTOLAB',
    ogDescription: 'Systems Built for Modern Business Growth',
    ogImage: 'https://systolab.com/og-image.jpg',
    ogUrl: 'https://systolab.com',
    twitterCard: 'summary_large_image',
    twitterTitle: 'SYSTOLAB',
    twitterDescription: 'Systems Built for Modern Business Growth',
    twitterImage: 'https://systolab.com/twitter-image.jpg',
  };

  const config_final = { ...defaults, ...config };

  document.title = config_final.title;
  updateMetaTag('description', config_final.description);
  updateMetaTag('canonical', config_final.canonical);
  updateMetaTag('og:title', config_final.ogTitle);
  updateMetaTag('og:description', config_final.ogDescription);
  updateMetaTag('og:image', config_final.ogImage);
  updateMetaTag('og:url', config_final.ogUrl);
  updateMetaTag('twitter:card', config_final.twitterCard);
  updateMetaTag('twitter:title', config_final.twitterTitle);
  updateMetaTag('twitter:description', config_final.twitterDescription);
  updateMetaTag('twitter:image', config_final.twitterImage);
};

const updateMetaTag = (name, content) => {
  const tag = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
  if (tag) {
    tag.setAttribute('content', content);
  } else {
    const newTag = document.createElement('meta');
    if (name.includes('og:') || name.includes('twitter:')) {
      newTag.setAttribute('property', name);
    } else {
      newTag.setAttribute('name', name);
    }
    newTag.setAttribute('content', content);
    document.head.appendChild(newTag);
  }
};

export const structuredData = (type, data) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};