import { MetadataRoute } from 'next';

// This function can be updated to fetch dynamic routes from a database.
async function getDynamicRoutes() {
  // In a real app, you might fetch blog posts, products, etc.
  // For now, we'll return an empty array.
  // Example:
  // const posts = await fetch('https://api.example.com/posts');
  // return posts.map((post) => ({
  //   url: `/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  // }));
  return [];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.droppedpin.xyz'; // Replace with your actual domain

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
  ];

  const dynamicRoutes = await getDynamicRoutes();

  return [...staticRoutes, ...dynamicRoutes];
}
