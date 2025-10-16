
import { Metadata } from 'next';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ShareButtons } from '@/components/blog/share-buttons';
import { AuthorBio } from '@/components/blog/author-bio';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const pageTitle = "iPhone पर पिन कैसे गिराएं: एक आसान गाइड";
const pageDescription = "अपने iPhone पर Google Maps में पिन कैसे गिराएं, यह जानें। यह गाइड आपको लोकेशन खोजने, tọa độ प्राप्त करने और उसे आसानी से साझा करने में मदद करेगी।";
const pageUrl = "https://droppedpin.xyz/blog/how-to-drop-a-pin-on-iphone-hindi";
const featureImageUrl = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTN6d5wZnXnWkYZ_oQW3XOGIJFzVYuY0Jgbj1jSI_u0pp-wnk8zUfptnAvTfgTrIdZgVBYenm0sMtQUUEPEMBi4zLCamj9xI34vi5wZOtgLhb_RDwrULQ4NhLHOYGsCjkCBsSm4lXAPdsIRZZoUP2a3wSc_B3mQ1XWbuVTnkQI52AEJDBbwCt47z7p1pQf/s320/elegant-smartphone-composition.jpg";

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
        url: featureImageUrl,
        width: 320,
        height: 320,
        alt: "एक iPhone की स्क्रीन पर मैप एप्लीकेशन में एक पिन गिरा हुआ दिख रहा है।",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [featureImageUrl],
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
    "name": "iPhone पर पिन गिराने का सबसे अच्छा तरीका क्या है?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Google Maps में अपनी उंगली को मैप पर कुछ देर दबाकर रखें। एक लाल पिन दिखाई देगा, और फिर आप 'Share' बटन से लोकेशन भेज सकते हैं। और भी तेज़ तरीके के लिए, आप Dropped Pin टूल का उपयोग कर सकते हैं।"
    }
  },{
    "@type": "Question",
    "name": "क्या मैं गिराए गए पिन की लोकेशन को सेव कर सकता हूँ?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "हाँ, पिन गिराने के बाद नीचे दिखने वाले पैनल में 'Save' का ऑप्शन होता है। आप उसे अपनी पसंदीदा जगहों की लिस्ट में जोड़ सकते हैं।"
    }
  },{
    "@type": "Question",
    "name": "Dropped Pin टूल का उपयोग करना बेहतर क्यों है?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Dropped Pin टूल आपको एक ही जगह पर लिंक कॉपी करने, व्हाट्सएप, ईमेल और QR कोड बनाने जैसे सारे ऑप्शन देता है, जो Google Maps की तुलना में ज़्यादा तेज़ और आसान है।"
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
  'image': featureImageUrl,
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
  'datePublished': '2025-10-18T09:00:00+05:30',
  'dateModified': '2025-10-18T09:00:00+05:30'
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
              iPhone पर पिन कैसे गिराएं: एक आसान गाइड
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
               <p className="text-sm text-muted-foreground">October 18, 2025</p>
            </div>
          </div>

          <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={featureImageUrl}
              alt="एक iPhone की स्क्रीन पर मैप एप्लीकेशन में एक पिन गिरा हुआ दिख रहा है।"
              fill
              className="object-cover"
              data-ai-hint="iphone map elegant"
            />
          </div>

          <p className="lead text-xl">
            नमस्ते दोस्तों! मैं मुकेश, और आज हम iPhone यूज़र्स की एक आम समस्या का हल निकालेंगे: किसी को अपनी सटीक लोकेशन कैसे भेजें? चाहे आप किसी दोस्त से मिलना चाहते हों या किसी डिलीवरी वाले को सही जगह बताना हो, iPhone पर पिन गिराना बहुत आसान है।
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">स्टेप 1: Google Maps खोलें और जगह ढूंढें</h2>
          <p>
            सबसे पहले, अपने iPhone पर Google Maps ऐप खोलें। अगर आपके पास यह ऐप नहीं है, तो आप इसे App Store से मुफ्त में डाउनलोड कर सकते हैं। अब, मैप पर उस जगह को ढूंढें जहाँ आप पिन गिराना चाहते हैं। आप ऊपर दिए गए सर्च बार का इस्तेमाल कर सकते हैं या उंगलियों से मैप को ज़ूम और पैन कर सकते हैं।
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">स्टेप 2: पिन गिराने के लिए टैप और होल्ड करें</h2>
          <p>
            जब आपको सही जगह मिल जाए, तो बस अपनी उंगली को मैप पर उस जगह पर कुछ देर के लिए दबाकर रखें (Tap and Hold)। एक सेकंड में ही, एक लाल रंग का पिन उस जगह पर गिर जाएगा और नीचे एक जानकारी पैनल खुल जाएगा।
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">स्टेप 3: लोकेशन की जानकारी साझा करें</h2>
          <p>
            जैसे ही पिन गिरता है, नीचे दिए गए पैनल में आपको उस जगह का पता और निर्देशांक (latitude and longitude) दिखाई देंगे। अब इसे साझा करने के लिए:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Share बटन:</strong> पैनल में आपको एक 'Share' का बटन दिखेगा। उस पर टैप करें।</li>
            <li><strong>ऐप चुनें:</strong> अब आप इस लोकेशन को iMessage, WhatsApp, Mail या किसी दूसरे ऐप के ज़रिए भेज सकते हैं।</li>
            <li><strong>लिंक कॉपी करें:</strong> आप 'Copy' पर टैप करके लोकेशन का लिंक कॉपी कर सकते हैं और कहीं भी पेस्ट कर सकते हैं।</li>
          </ul>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">एक और भी तेज़ तरीका: Dropped Pin टूल!</h2>
            <p>
              अगर आप यह सब और भी तेज़ी से करना चाहते हैं, तो मैं आपको हमारा अपना <a href="https://droppedpin.xyz/">Dropped Pin</a> टूल इस्तेमाल करने की सलाह दूँगा। आपको बस हमारी वेबसाइट पर जाना है, मैप पर क्लिक करना है, और आपको तुरंत व्हाट्सएप, ईमेल, लिंक कॉपी करने और QR कोड बनाने जैसे सारे ऑप्शन एक ही जगह मिल जाते हैं। यह Google Maps से भी ज़्यादा आसान है!
            </p>

          <blockquote className="border-l-4 border-primary pl-4 py-2 my-8">
            <p className="text-lg italic">
              "iPhone पर लोकेशन भेजना बच्चों का खेल है, खासकर जब आपके पास Dropped Pin जैसा तेज़ टूल हो।"
            </p>
          </blockquote>

          <div className="mt-16">
            <h2 className="font-headline text-3xl font-bold mb-4">अक्सर पूछे जाने वाले सवाल (FAQ)</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>iPhone पर पिन गिराने का सबसे अच्छा तरीका क्या है?</AccordionTrigger>
                <AccordionContent>
                   Google Maps में अपनी उंगली को मैप पर कुछ देर दबाकर रखें। एक लाल पिन दिखाई देगा, और फिर आप 'Share' बटन से लोकेशन भेज सकते हैं। और भी तेज़ तरीके के लिए, आप Dropped Pin टूल का उपयोग कर सकते हैं।
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>क्या मैं गिराए गए पिन की लोकेशन को सेव कर सकता हूँ?</AccordionTrigger>
                <AccordionContent>
                  हाँ, पिन गिराने के बाद नीचे दिखने वाले पैनल में 'Save' का ऑप्शन होता है। आप उसे अपनी पसंदीदा जगहों की लिस्ट में जोड़ सकते हैं।
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="item-3">
                <AccordionTrigger>Dropped Pin टूल का उपयोग करना बेहतर क्यों है?</AccordionTrigger>
                <AccordionContent>
                  Dropped Pin टूल आपको एक ही जगह पर लिंक कॉपी करने, व्हाट्सएप, ईमेल और QR कोड बनाने जैसे सारे ऑप्शन देता है, जो Google Maps की तुलना में ज़्यादा तेज़ और आसान है।
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
