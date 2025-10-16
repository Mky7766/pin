
import { MetadataRoute } from 'next';

const baseUrl = 'https://droppedpin.xyz';

async function getDynamicRoutes(): Promise<MetadataRoute.Sitemap> {
  const posts: {slug: string, changeFrequency: 'yearly' | 'monthly' | 'daily'}[] = [
    {
      slug: 'how-to-drop-a-pin',
      changeFrequency: 'yearly',
    },
    {
      slug: 'how-to-drop-a-pin-on-google-maps',
      changeFrequency: 'yearly',
    },
    {
      slug: 'how-to-drop-a-pin-on-android-hindi',
      changeFrequency: 'yearly',
    },
    {
      slug: 'how-to-send-a-dropped-pin-hindi',
      changeFrequency: 'yearly',
    },
    {
      slug: 'location-ka-qr-code-kaise-banayen',
      changeFrequency: 'yearly',
    },
     {
      slug: 'how-to-drop-a-pin-on-android',
      changeFrequency: 'yearly',
    },
    {
      slug: 'snow-day-calculator',
      changeFrequency: 'daily',
    },
    {
        slug: 'dropped-pin-near-me',
        changeFrequency: 'monthly',
    },
    {
        slug: 'how-to-drop-a-pin-on-iphone-hindi',
        changeFrequency: 'yearly',
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
