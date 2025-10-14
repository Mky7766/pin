
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container flex h-auto flex-col items-center justify-center gap-4 py-4 sm:h-16">
        <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          <Button variant="link" size="sm" asChild className="text-muted-foreground">
            <Link href="/about">About Us</Link>
          </Button>
          <Button variant="link" size="sm" asChild className="text-muted-foreground">
            <Link href="/disclaimer">Disclaimer</Link>
          </Button>
          <Button variant="link" size="sm" asChild className="text-muted-foreground">
            <Link href="/privacy-policy">Privacy Policy</Link>
          </Button>
          <Button variant="link" size="sm" asChild className="text-muted-foreground">
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </Button>
        </nav>
        <p className="text-sm text-muted-foreground">
          © 2025 Dropped Pin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
