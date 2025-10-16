
import { MetadataRoute } from 'next';

const baseUrl = 'https://droppedpin.xyz';

async function getDynamicRoutes(): Promise<MetadataRoute.Sitemap> {
  const posts: {slug: string, changeFrequency: 'yearly' | 'monthly' | 'daily'}[] = [
    {
      slug: 'how-to-drop-a-pin',
      changeFrequency: 'daily',
    },
    {
      slug: 'how-to-drop-a-pin-on-google-maps',
      changeFrequency: 'daily',
    },
    {
      slug: 'how-to-drop-a-pin-on-android-hindi',
      changeFrequency: 'daily',
    },
    {
      slug: 'how-to-send-a-dropped-pin-hindi',
      changeFrequency: 'daily',
    },
    {
      slug: 'location-ka-qr-code-kaise-banayen',
      changeFrequency: 'daily',
    },
     {
      slug: 'how-to-drop-a-pin-on-android',
      changeFrequency: 'daily',
    },
    {
      slug: 'snow-day-calculator',
      changeFrequency: 'daily',
    },
    {
        slug: 'dropped-pin-near-me',
        changeFrequency: 'daily',
    },
    {
        slug: 'how-to-drop-a-pin-on-iphone-hindi',
        changeFrequency: 'daily',
    },
    {
        slug: 'dropped-pin-meaning-hindi',
        changeFrequency: 'daily',
    }
  ];

  return posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: post.changeFrequency,
    priority: 0.7,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
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

  const dynamicRoutes = await getDynamicRoutes();

  return [...staticRoutes, ...dynamicRoutes];
}

    