
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
    }
  ];

  return posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    changeFrequency: post.changeFrequency,
  }));
}

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
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/disclaimer`,
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: 'daily',
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      changeFrequency: 'daily',
    },
  ];

  const dynamicRoutes = await getDynamicRoutes();

  return [...staticRoutes, ...dynamicRoutes];
}
