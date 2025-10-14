import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Pin } from 'lucide-react';

export default function SitemapPage() {
  const pages = [
    {
      name: 'Home',
      path: '/',
      description: 'Find and share your location with a dropped pin.',
      icon: <Home className="h-6 w-6" />,
    },
    {
      name: 'New Pin',
      path: '/blog',
      description: 'Create a new blog post and get AI-powered title suggestions.',
      icon: <Pin className="h-6 w-6" />,
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
          Sitemap
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse all the pages available on Dropped Pin.
        </p>
      </div>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Available Pages</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {pages.map((page) => (
              <li key={page.path}>
                <Button variant="outline" className="w-full justify-start h-auto py-4" asChild>
                  <Link href={page.path}>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 text-primary p-3 rounded-lg">
                        {page.icon}
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-base">{page.name}</p>
                        <p className="text-sm text-muted-foreground">{page.description}</p>
                      </div>
                    </div>
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}
