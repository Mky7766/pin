import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZS4ZrAplYEXP1MEzjBt1GJQRFz75AM34nlUAl1XUmzUfsYLwFaUdLR-JZokbK-G_ADcMdlSS6eI2VSZ7kDz3SiNl2EFRGSO1okkD9wKoG-9MPOk229YNXCCT5AnyLazE6h4WIEzhRyv9rZQD-BdZNxHdfFssI3xQFfqE9ggnCQUXolA8LyE30ejvAmUoO/s1600/cropped-kgoljdakjodfjkpo-1-144x48.png"
            alt="Dropped Pin Logo"
            width={144}
            height={48}
            className="h-8 w-auto"
          />
        </Link>
        <nav className="flex items-center gap-1 sm:gap-4 flex-wrap justify-end">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/blog">New Pin</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/about">About Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
