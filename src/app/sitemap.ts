
import { MetadataRoute } from 'next';

const baseUrl = 'https://droppedpin.xyz';

const dynamicRoutes = [
  'how-to-drop-a-pin',
  'how-to-drop-a-pin-on-google-maps',
  'how-to-drop-a-pin-on-android-hindi',
  'how-to-send-a-dropped-pin-hindi',
  'location-ka-qr-code-kaise-banayen',
  'how-to-drop-a-pin-on-android',
  'snow-day-calculator',
  'dropped-pin-near-me',
  'how-to-drop-a-pin-on-iphone-hindi',
  'dropped-pin-meaning-hindi',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/pin-to-pin-distance`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const blogPostRoutes: MetadataRoute.Sitemap = dynamicRoutes.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogPostRoutes];
}
