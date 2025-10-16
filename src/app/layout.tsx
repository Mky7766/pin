
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css';

const siteConfig = {
  name: 'Dropped Pin',
  description:
    'Dropped Pin is a free online tool to find and share exact location coordinates from a dropped pin on Google Maps. Get latitude and longitude instantly.',
  url: 'https://droppedpin.xyz',
  ogImage:
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZS4ZrAplYEXP1MEzjBt1GJQRFz75AM34nlUAl1XUmzUfsYLwFaUdLR-JZokbK-G_ADcMdlSS6eI2VSZ7kDz3SiNl2EFRGSO1okkD9wKoG-9MPOk229YNXCCT5AnyLazE6h4WIEzhRyv9rZQD-BdZNxHdfFssI3xQFfqE9ggnCQUXolA8LyE30ejvAmUoO/s1600/cropped-kgoljdakjodfjkpo-1-144x48.png',
};

const pageTitle = `${siteConfig.name} Finder - Free Online Tool to Find Coordinates`;

export const metadata: Metadata = {
  title: {
    default: pageTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: siteConfig.ogImage,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: pageTitle,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 144,
        height: 48,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: pageTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Dropped Pin Finder',
  url: 'https://droppedpin.xyz',
  applicationCategory: 'Tool',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description: siteConfig.description,
  inLanguage: 'en-US',
  creator: {
    '@type': 'Organization',
    name: 'Dropped Pin',
    url: 'https://droppedpin.xyz',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
