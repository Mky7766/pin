
import { Metadata } from 'next';
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ShareButtons } from '@/components/blog/share-buttons';
import { AuthorBio } from '@/components/blog/author-bio';

const pageTitle = "How to Drop a Pin on Android: A Step-by-Step Guide";
const pageDescription = "Learn how to drop a pin on Google Maps on your Android device. This guide covers finding coordinates, sharing locations, and more.";
const pageUrl = "https://droppedpin.xyz/blog/how-to-drop-a-pin-on-android";
const featureImage = placeholderImages.find(p => p.id === '6');

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
        url: featureImage!.imageUrl,
        width: 600,
        height: 400,
        alt: "A person holding an Android phone with a map application open.",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [featureImage!.imageUrl],
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
  'image': featureImage!.imageUrl,
  'author': {
    '@type': 'Organization',
    'name': 'Dropped Pin',
    'url': 'https://droppedpin.xyz'
  },
  'publisher': {
    '@type': 'Organization',
    'name': 'Dropped Pin',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_Pb2UOmU5QryscCr-gz2XzgvK3uhhfSbF3rfqUpVs7VQEcJh6kBU6FJbMhb9IJClqK1vej4iURwrRt4xPMmSfSiub2EdZnE-JTojkCxwvGmGyiSHbwLnLqQtw-9U30ojK5lV5b7egz0NaLt1kaswvaNvY0S3XHj6k1Tpzsu2KEJyryh07XDRPxmyChkCF/s320/cropped-654798098.png'
    }
  },
  'datePublished': '2025-10-17T09:00:00+05:30',
  'dateModified': '2025-10-17T09:00:00+05:30'
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
  if (!featureImage) {
    return null;
  }
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
              How to Drop a Pin on Android: A Step-by-Step Guide
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
               <p className="text-sm text-muted-foreground">October 17, 2025</p>
            </div>
          </div>

          <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={featureImage.imageUrl}
              alt="A person holding an Android phone with a map application open."
              fill
              className="object-cover"
              data-ai-hint={featureImage.imageHint}
            />
          </div>

          <p className="lead text-xl">
            Need to share a precise location from your Android phone? Dropping a pin in Google Maps is the easiest way to do it. This guide will walk you through every step, from placing the pin to sharing it with anyone, anywhere.
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">Step 1: Open Google Maps and Find Your Spot</h2>
          <p>
            First, launch the Google Maps app on your Android device. You can either search for a general area using the search bar at the top or manually pan and zoom across the map to locate the exact spot you want to mark.
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">Step 2: Tap and Hold to Drop the Pin</h2>
          <p>
            Once you’ve pinpointed the location, simply press and hold your finger on that spot on the screen. After a moment, a red pin will appear, and you’ll likely feel a slight vibration confirming the pin has been dropped. It’s that simple!
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">Step 3: Access the Location Details</h2>
          <p>
            As soon as the pin is dropped, an information panel will slide up from the bottom of the screen. This panel, often called the "Dropped pin" panel, shows you the address or a description of the location. You'll also see the latitude and longitude coordinates displayed right there.
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">Step 4: Share Your Dropped Pin</h2>
          <p>
            Now that your pin is set, sharing it is straightforward. In the information panel, you'll see a 'Share' button. Tapping it will open your Android share sheet, giving you several options:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Copy to clipboard:</strong> You can copy the Google Maps link and paste it into any messaging app, email, or social media post.</li>
            <li><strong>Share via Apps:</strong> Directly share the location through apps like WhatsApp, Messenger, Gmail, or your text messaging app.</li>
            <li><strong>Nearby Share:</strong> If the person is close by, you can use Android's Nearby Share feature to send the link directly to their device.</li>
          </ul>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">Pro-Tip: Saving a Pinned Location</h2>
            <p>
              Don't want to lose that location? You can easily save it for later. In the same bottom panel, look for a 'Save' button. You can add the spot to your 'Favorites,' 'Want to go,' or even create a custom list (like 'Best Picnic Spots' or 'Hiking Trails').
            </p>

          <blockquote className="border-l-4 border-primary pl-4 py-2 my-8">
            <p className="text-lg italic">
              "Dropping a pin on Android is an essential skill for modern navigation. It turns any spot on the map into a shareable, easy-to-find destination."
            </p>
          </blockquote>

          <p>
            And that's it! You're now ready to drop, share, and save locations like a pro on your Android device. For an even faster experience, check out our own <a href="https://droppedpin.xyz/">Dropped Pin</a> tool to generate links and QR codes in seconds.
          </p>

          <AuthorBio />
          <ShareButtons url={pageUrl} title={pageTitle} description={pageDescription} />

        </article>
      </main>
    </>
  );
}
