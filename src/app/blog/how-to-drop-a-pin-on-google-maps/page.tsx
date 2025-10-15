
import { Metadata } from 'next';
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ShareButtons } from '@/components/blog/share-buttons';
import { AuthorBio } from '@/components/blog/author-bio';


const pageTitle = "How to Drop a Pin on Google Maps - Dropped Pin Finder";
const pageDescription = "A step-by-step guide on how to drop a pin on Google Maps to get coordinates, save locations, and share them with anyone, anywhere.";
const pageUrl = "https://www.droppedpin.xyz/blog/how-to-drop-a-pin-on-google-maps";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'article',
    images: [
      {
        url: placeholderImages[0].imageUrl,
        width: 600,
        height: 400,
        alt: "A person holding a phone with a map application open.",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [placeholderImages[0].imageUrl],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  'mainEntityOfPage': {
    '@type': 'WebPage',
    '@id': pageUrl,
  },
  'headline': pageTitle,
  'description': pageDescription,
  'image': placeholderImages[0].imageUrl,
  'author': {
    '@type': 'Organization',
    'name': 'Dropped Pin',
    'url': 'https://www.droppedpin.xyz'
  },
  'publisher': {
    '@type': 'Organization',
    'name': 'Dropped Pin',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_Pb2UOmU5QryscCr-gz2XzgvK3uhhfSbF3rfqUpVs7VQEcJh6kBU6FJbMhb9IJClqK1vej4iURwrRt4xPMmSfSiub2EdZnE-JTojkCxwvGmGyiSHbwLnLqQtw-9U30ojK5lV5b7egz0NaLt1kaswvaNvY0S3XHj6k1Tpzsu2KEJyryh07XDRPxmyChkCF/s320/cropped-654798098.png'
    }
  },
  'datePublished': '2025-10-16T09:00:00+05:30',
  'dateModified': '2025-10-16T09:00:00+05:30'
};

const VerifiedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="20"
    height="20"
    viewBox="0 0 90 90"
    xmlSpace="preserve"
  >
    <g style={{ stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1 }}>
      <polygon
        points="45,6.18 57.06,0 64.41,11.38 77.94,12.06 78.62,25.59 90,32.94 83.82,45 90,57.06 78.62,64.41 77.94,77.94 64.41,78.62 57.06,90 45,83.82 32.94,90 25.59,78.62 12.06,77.94 11.38,64.41 0,57.06 6.18,45 0,32.94 11.38,25.59 12.06,12.06 25.59,11.38 32.94,0 "
        style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,150,241)', fillRule: 'nonzero', opacity: 1 }}
      />
      <polygon
        points="40.16,58.47 26.24,45.08 29.7,41.48 40.15,51.52 61.22,31.08 64.7,34.67 "
        style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1 }}
      />
    </g>
  </svg>
);


export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="container mx-auto px-4 py-8">
        <article className="prose max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-8 leading-relaxed">
              How to Drop a Pin on Google Maps
            </h1>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_Pb2UOmU5QryscCr-gz2XzgvK3uhhfSbF3rfqUpVs7VQEcJh6kBU6FJbMhb9IJClqK1vej4iURwrRt4xPMmSfSiub2EdZnE-JTojkCxwvGmGyiSHbwLnLqQtw-9U30ojK5lV5b7egz0NaLt1kaswvaNvY0S3XHj6k1Tpzsu2KEJyryh07XDRPxmyChkCF/s320/cropped-654798098.png" alt="Dropped Pin Logo" />
                  <AvatarFallback>DP</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-1">
                  <span className="font-semibold">Dropped Pin</span>
                  <VerifiedIcon />
                </div>
              </div>
               <p className="text-sm text-muted-foreground">October 16, 2025</p>
            </div>
          </div>

          <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={placeholderImages[0].imageUrl}
              alt="A person holding a phone with a map application open."
              fill
              className="object-cover"
              data-ai-hint={placeholderImages[0].imageHint}
            />
          </div>

          <p className="lead text-xl">
            Ever needed to share a precise location that doesn’t have an address? Dropping a pin on Google Maps is the perfect solution. This guide will show you exactly how to do it on your computer or mobile device.
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">Step 1: Open Google Maps and Find Your Spot</h2>
          <p>
            First, open Google Maps in your web browser or on your smartphone. You can search for a general area or simply pan and zoom around the map to find the exact location where you want to drop a pin.
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">Step 2: Drop the Pin</h2>
          <p>
            <strong>On a computer:</strong> Simply click on the desired location on the map. A small gray pin will appear, and an information box will pop up at the bottom of your screen.
          </p>
          <p>
            <strong>On a mobile device:</strong> Tap and hold your finger on the spot where you want the pin. A red pin will drop, and the location's details will appear.
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">Step 3: Get the Coordinates and Share</h2>
          <p>
            Once you've dropped the pin, the latitude and longitude coordinates will be visible in the information box. You can click on the coordinates to automatically copy them to your clipboard. From there, you can:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Share a direct link:</strong> Google Maps provides a "Share" button that lets you send a link via messaging apps, email, or social media.</li>
            <li><strong>Copy the coordinates:</strong> Paste the latitude and longitude into any text field to share the raw location data. Our own <a href="https://www.droppedpin.xyz">Dropped Pin</a> tool makes this even easier!</li>
          </ul>

          <blockquote className="border-l-4 border-primary pl-4 py-2 my-8">
            <p className="text-lg italic">
              "Dropping a pin is the modern-day equivalent of marking an 'X' on a treasure map. It’s simple, accurate, and incredibly useful."
            </p>
          </blockquote>

          <p>
            And that's it! You're now ready to share precise locations with ease. Happy mapping!
          </p>

          <AuthorBio />
          <ShareButtons url={pageUrl} title={pageTitle} description={pageDescription} />

        </article>
      </main>
    </>
  );
}
