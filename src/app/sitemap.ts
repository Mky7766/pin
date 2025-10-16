
import { MetadataRoute } from 'next';

// This function can be updated to fetch dynamic routes from a database.
async function getDynamicRoutes() {
  const posts = [
    {
      slug: 'how-to-drop-a-pin',
      updatedAt: '2025-10-15T09:00:00+05:30',
    },
    {
      slug: 'how-to-drop-a-pin-on-google-maps',
      updatedAt: '2025-10-15T09:00:00+05:30',
    },
    {
      slug: 'how-to-drop-a-pin-on-android-hindi',
      updatedAt: '2025-10-15T09:00:00+05:30',
    },
    {
      slug: 'how-to-send-a-dropped-pin-hindi',
      updatedAt: '2025-10-15T09:00:00+05:30',
    },
    {
      slug: 'location-ka-qr-code-kaise-banayen',
      updatedAt: '2025-10-15T09:00:00+05:30',
    },
     {
      slug: 'how-to-drop-a-pin-on-android',
      updatedAt: '2025-10-17T09:00:00+05:30',
    }
  ];

  return posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'yearly',
    priority: 0.8,
  }));
}

const baseUrl = 'https://droppedpin.xyz';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const dynamicRoutes = await getDynamicRoutes();

  return [...staticRoutes, ...dynamicRoutes];
}
