
import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { placeholderImages } from '@/lib/placeholder-images';

const blogPosts = [
  {
    title: 'How to Drop a Pin?',
    slug: '/blog/how-to-drop-a-pin',
    description:
      'Dropped Pin का उपयोग करके किसी भी स्थान पर पिन कैसे छोड़ें, tọa표 कैसे प्राप्त करें, और उसे कैसे साझा करें, इस पर एक विस्तृत गाइड।',
    image: placeholderImages[4],
    tags: ['Guide', 'How-To', 'Hindi'],
    date: 'June 12, 2024',
  },
  {
    title: 'The Ultimate Guide to Finding Your Way with Dropped Pin',
    slug: '#',
    description:
      'Learn how to use Dropped Pin to save, share, and navigate to any location with pinpoint accuracy. This guide covers all the features.',
    image: placeholderImages[0],
    tags: ['Guide', 'How-To'],
    date: 'June 10, 2024',
  },
  {
    title: 'Top 5 Hidden Features of Dropped Pin You Should Know',
    slug: '#',
    description:
      'Did you know you can generate QR codes for locations? Discover five powerful features that will change the way you use Dropped Pin.',
    image: placeholderImages[1],
    tags: ['Features', 'Tips'],
    date: 'June 8, 2024',
  },
  {
    title: 'How Dropped Pin is Helping Businesses Streamline Operations',
    slug: '#',
    description:
      'From delivery services to event planning, businesses are using Dropped Pin to improve logistics and communication. Find out how.',
    image: placeholderImages[2],
    tags: ['Business', 'Logistics'],
    date: 'June 5, 2024',
  },
  {
    title: 'A Traveler’s Best Friend: Why Dropped Pin is a Must-Have App',
    slug: '#',
    description:
      'Never get lost again. See how travelers are using Dropped Pin to mark hotels, attractions, and meeting points on their journeys.',
    image: placeholderImages[3],
    tags: ['Travel', 'Lifestyle'],
    date: 'June 2, 2024',
  },
];

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
          Dropped Pin Blog
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Tips, tricks, and stories on making the most of location sharing.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card
            key={post.title}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader className="p-0">
              <Link href={post.slug}>
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    data-ai-hint={post.image.imageHint}
                  />
                </div>
              </Link>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <div className="space-y-2">
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl font-bold line-clamp-2">
                  <Link href={post.slug} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.description}
                </CardDescription>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <p className="text-sm text-muted-foreground">{post.date}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
