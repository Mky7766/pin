import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import DroppedPinLogo from './dropped-pin-logo';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <DroppedPinLogo className="h-8 w-auto" />
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/blog">New Pin</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
