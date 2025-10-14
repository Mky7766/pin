import Link from 'next/link';
import { PenSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <PenSquare className="h-6 w-6 text-primary" />
          <span className="font-headline text-2xl font-semibold tracking-tight">
            BlogSphere
          </span>
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/blog">Blog</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
