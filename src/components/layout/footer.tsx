import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container flex h-16 flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Dropped Pin. All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <Button variant="link" size="sm" asChild className="text-muted-foreground">
            <Link href="/about">About Us</Link>
          </Button>
          <Button variant="link" size="sm" asChild className="text-muted-foreground">
            <Link href="/disclaimer">Disclaimer</Link>
          </Button>
        </nav>
      </div>
    </footer>
  );
}
