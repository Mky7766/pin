
import { MetadataRoute } from 'next';

// This function can be updated to fetch dynamic routes from a database.
async function getDynamicRoutes(): Promise<MetadataRoute.Sitemap> {
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
    changeFrequency: 'yearly',
  }));
}

const baseUrl = 'https://droppedpin.xyz';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/disclaimer`,
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      changeFrequency: 'monthly',
    },
  ];

  const dynamicRoutes = await getDynamicRoutes();

  return [...staticRoutes, ...dynamicRoutes];
}
