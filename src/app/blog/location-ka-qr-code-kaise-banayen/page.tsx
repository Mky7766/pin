
import { Metadata } from 'next';
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ShareButtons } from '@/components/blog/share-buttons';
import { AuthorBio } from '@/components/blog/author-bio';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const pageTitle = "किसी भी लोकेशन का QR कोड कैसे बनाएं? - Dropped Pin";
const pageDescription = "जानें कि Dropped Pin टूल का उपयोग करके किसी भी मैप लोकेशन का QR कोड कैसे बनाएं। यह आसान है और इसे व्हाट्सएप, ईमेल या कहीं भी साझा किया जा सकता है।";
const pageUrl = "https://droppedpin.xyz/blog/location-ka-qr-code-kaise-banayen";
const featureImage = placeholderImages.find(p => p.id === '2');

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
        alt: "एक फ़ोन की स्क्रीन पर लोकेशन का QR कोड दिख रहा है।",
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

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://droppedpin.xyz"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Blog",
    "item": "https://droppedpin.xyz/blog"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": pageTitle,
    "item": pageUrl
  }]
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "लोकेशन का QR कोड बनाने में कितना समय लगता है?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Dropped Pin टूल का उपयोग करके QR कोड बनाने में कुछ सेकंड से भी कम समय लगता है। बस पिन गिराएं और 'Generate QR Code' बटन पर क्लिक करें।"
    }
  },{
    "@type": "Question",
    "name": "क्या मैं QR कोड को डाउनलोड या प्रिंट कर सकता हूँ?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "हाँ, QR कोड जेनरेट होने के बाद, आप उसे आसानी से एक इमेज के रूप में डाउनलोड कर सकते हैं और फिर प्रिंट कर सकते हैं।"
    }
  },{
    "@type": "Question",
    "name": "क्या यह QR Code सभी डिवाइस पर काम करेगा?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "हाँ, यह एक स्टैंडर्ड QR कोड है जिसे कोई भी स्मार्टफोन या टैबलेट स्कैन कर सकता है और लोकेशन को सीधे अपने मैप्स ऐप में खोल सकता है।"
    }
  }]
};

const blogLd = {
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
  'datePublished': '2025-10-15T09:00:00+05:30',
  'dateModified': '2025-10-15T09:00:00+05:30'
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <main className="container mx-auto px-4 py-8">
        <article className="prose max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-8 leading-relaxed">
              किसी भी लोकेशन का QR कोड कैसे बनाएं?
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
               <p className="text-sm text-muted-foreground">October 15, 2025</p>
            </div>
          </div>

          <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={featureImage.imageUrl}
              alt="एक फ़ोन की स्क्रीन पर लोकेशन का QR कोड दिख रहा है।"
              fill
              className="object-cover"
              data-ai-hint={featureImage.imageHint}
            />
          </div>

          <p className="lead text-xl">
            क्या आप अपनी दुकान का पता, किसी मीटिंग पॉइंट, या अपने घर की लोकेशन किसी को भेजना चाहते हैं, वो भी बिना लंबा-चौड़ा पता टाइप किए? लोकेशन का QR कोड बनाना इसका सबसे स्मार्ट तरीका है। कोई भी बस अपने फ़ोन से कोड स्कैन करेगा और लोकेशन सीधे Google Maps पर खुल जाएगी!
          </p>
          <p>
            हमारे <a href="https://droppedpin.xyz/">Dropped Pin</a> टूल से यह काम सिर्फ़ कुछ सेकंड में हो जाता है। चलिए, मैं आपको बताता हूँ कैसे।
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">स्टेप 1: Dropped Pin वेबसाइट पर लोकेशन चुनें</h2>
          <p>
            सबसे पहले, <a href="https://droppedpin.xyz/">Dropped Pin</a> वेबसाइट पर जाएं। आपको एक बड़ा सा नक्शा दिखेगा। अब, नक्शे पर उस जगह पर क्लिक करें जिसका आप QR कोड बनाना चाहते हैं। आप ज़ूम करके या मैप को खींचकर बिल्कुल सही जगह चुन सकते हैं।
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">स्टेप 2: 'Generate QR Code' बटन पर क्लिक करें</h2>
          <p>
            जैसे ही आप मैप पर पिन गिराएंगे, नीचे आपको कई बटन दिखाई देंगे। उनमें से एक बटन होगा - <strong>'Generate QR Code'</strong>। बस उस पर क्लिक कर दें।
          </p>
            <div className="my-6">
                <Image
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEig5uFqCfUddUU9RHq1mlKQzQq6GCyxRJL4NO98DXkKSNi17iPihiLNO9LapeihfIbJjhc8gcOW3fiGqUNA0cYg_tLbszEzzh0GReX-Ft1DSod5Xz9C5Gy8gWxTz2nUSIrpRm682xZ2qrXUPRY2HGaaQfusBp9SOO-EOwk2rXDlH_14FxpMfGOrNMxtZOwF/s320/1760602700.png"
                  alt="Generate QR code button"
                  width={320}
                  height={100}
                  className="mx-auto rounded-lg shadow-lg"
                />
            </div>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">स्टेप 3: QR कोड डाउनलोड करें और शेयर करें</h2>
          <p>
            बटन पर क्लिक करते ही, आपकी स्क्रीन पर उस लोकेशन का QR कोड तुरंत बन जाएगा। अब आप इस QR कोड के साथ दो काम कर सकते हैं:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>सीधे स्कैन कराएं:</strong> अगर कोई आपके साथ है, तो वह सीधे आपकी स्क्रीन से कोड स्कैन कर सकता है।</li>
            <li><strong>डाउनलोड करें:</strong> आपको एक 'Download QR Code' का बटन भी दिखेगा। इस पर क्लिक करके आप QR कोड को एक इमेज के रूप में अपने फ़ोन या कंप्यूटर पर सेव कर सकते हैं।</li>
          </ul>
           <p>
            एक बार डाउनलोड हो जाने के बाद, आप इस QR कोड की इमेज को व्हाट्सएप पर भेज सकते हैं, अपने बिजनेस कार्ड पर प्रिंट करा सकते हैं, या अपनी दुकान के बाहर लगा सकते हैं। संभावनाएं अनंत हैं!
          </p>

          <blockquote className="border-l-4 border-primary pl-4 py-2 my-8">
            <p className="text-lg italic">
              "लोकेशन शेयर करने के लिए अब लंबे लिंक या पते भेजने की ज़रूरत नहीं। एक QR कोड से काम आसान और प्रोफेशनल हो जाता है।"
            </p>
          </blockquote>

          <p>
            तो अगली बार जब भी आपको किसी को अपनी लोकेशन भेजनी हो, तो <a href="https://droppedpin.xyz/">Dropped Pin</a> का इस्तेमाल करें और आसानी से एक QR कोड बनाकर भेजें।
          </p>

          <div className="mt-16">
            <h2 className="font-headline text-3xl font-bold mb-4">अक्सर पूछे जाने वाले सवाल (FAQ)</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>लोकेशन का QR कोड बनाने में कितना समय लगता है?</AccordionTrigger>
                <AccordionContent>
                  Dropped Pin टूल का उपयोग करके QR कोड बनाने में कुछ सेकंड से भी कम समय लगता है। बस पिन गिराएं और 'Generate QR Code' बटन पर क्लिक करें।
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>क्या मैं QR कोड को डाउनलोड या प्रिंट कर सकता हूँ?</AccordionTrigger>
                <AccordionContent>
                  हाँ, QR कोड जेनरेट होने के बाद, आप उसे आसानी से एक इमेज के रूप में डाउनलोड कर सकते हैं और फिर प्रिंट कर सकते हैं।
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>क्या यह QR Code सभी डिवाइस पर काम करेगा?</AccordionTrigger>
                <AccordionContent>
                   हाँ, यह एक स्टैंडर्ड QR कोड है जिसे कोई भी स्मार्टफोन या टैबलेट स्कैन कर सकता है और लोकेशन को सीधे अपने मैप्स ऐप में खोल सकता है।
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <AuthorBio />
          <ShareButtons url={pageUrl} title={pageTitle} description={pageDescription} />

        </article>
      </main>
    </>
  );
}
