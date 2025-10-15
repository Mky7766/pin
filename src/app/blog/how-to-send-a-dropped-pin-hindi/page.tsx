
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

const pageTitle = "गिराया हुआ पिन (Dropped Pin) कैसे भेजें: एक पूरी गाइड";
const pageDescription = "जानें कि Google Maps से ड्रॉप किए गए पिन को व्हाट्सएप, ईमेल या लिंक के माध्यम से कैसे भेजें। सटीक लोकेशन साझा करने के लिए यह एक विस्तृत गाइड है।";
const pageUrl = "https://www.droppedpin.xyz/blog/how-to-send-a-dropped-pin-hindi";
const featureImage = placeholderImages.find(p => p.id === '7');

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
        alt: "एक फ़ोन स्क्रीन पर मैप लोकेशन को मैसेजिंग ऐप के माध्यम से साझा किया जा रहा है।",
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
    "item": "https://www.droppedpin.xyz"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Blog",
    "item": "https://www.droppedpin.xyz/blog"
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
    "name": "ड्रॉप किए गए पिन को भेजने का सबसे तेज़ तरीका क्या है?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "सबसे तेज़ तरीका 'Share' बटन का उपयोग करना है और व्हाट्सएप या किसी अन्य मैसेजिंग ऐप के माध्यम से सीधे साझा करना है। आप लिंक को कॉपी करके भी जल्दी से भेज सकते हैं।"
    }
  },{
    "@type": "Question",
    "name": "क्या मैं बिना ऐप के ड्रॉप किया गया पिन भेज सकता हूँ?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "हाँ, आप 'Copy Link' सुविधा का उपयोग करके एक सीधा Google Maps लिंक प्राप्त कर सकते हैं और इसे ईमेल, एसएमएस या किसी भी प्लेटफ़ॉर्म पर साझा कर सकते हैं।"
    }
  },{
    "@type": "Question",
    "name": "क्या ड्रॉप किया गया पिन भेजने के लिए कोई शुल्क है?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "नहीं, Google Maps या Dropped Pin जैसे उपकरणों का उपयोग करके पिन भेजना पूरी तरह से मुफ्त है। केवल आपके इंटरनेट डेटा शुल्क लागू हो सकते हैं।"
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
  'datePublished': '2025-10-19T09:00:00+05:30',
  'dateModified': '2025-10-19T09:00:00+05:30'
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
              अपना गिराया हुआ पिन (Dropped Pin) किसी को कैसे भेजें?
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
               <p className="text-sm text-muted-foreground">October 19, 2025</p>
            </div>
          </div>

          <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={featureImage.imageUrl}
              alt="एक फ़ोन स्क्रीन पर मैप लोकेशन को मैसेजिंग ऐप के माध्यम से साझा किया जा रहा है।"
              fill
              className="object-cover"
              data-ai-hint={featureImage.imageHint}
            />
          </div>

          <p className="lead text-xl">
            तो, आपने गूगल मैप्स पर अपनी पसंदीदा जगह पर पिन तो लगा दिया, पर अब उसे किसी दोस्त, परिवार वाले को या फिर डिलीवरी एजेंट को कैसे भेजें? चिंता मत कीजिये, मैं आपको बताता हूँ कि यह कितना आसान है। इस गाइड में, मैं आपको सारे स्टेप्स बताऊंगा ताकि आप कुछ ही सेकंड में अपनी लोकेशन शेयर कर सकें।
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">स्टेप 1: पिन गिराएं और जानकारी पैनल खोलें</h2>
          <p>
            सबसे पहले, अपना Google Maps ऐप खोलें और उस जगह पर थोड़ी देर टैप करके रखें जहाँ आप पिन गिराना चाहते हैं। आपको एक लाल पिन दिखेगा और स्क्रीन के नीचे से एक पैनल अपने आप ऊपर आ जाएगा। बस, यही पैनल आपकी लोकेशन को शेयर करने का जादू का पिटारा है।
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">स्टेप 2: 'Share' (शेयर) बटन ढूंढें</h2>
          <p>
            उस पैनल में आपको एक 'Share' बटन साफ-साफ दिखाई देगा। बस उस पर टैप कर दीजिए। ऐसा करते ही आपके फ़ोन की शेयरिंग ट्रे खुल जाएगी, जहाँ आपको उन सारे ऐप्स की लिस्ट मिलेगी जिनसे आप लोकेशन भेज सकते हैं।
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">स्टेप 3: अपनी लोकेशन भेजने का तरीका चुनें</h2>
          <p>
            अब आपके पास लोकेशन भेजने के कई रास्ते हैं। यहाँ कुछ सबसे आसान तरीके दिए गए हैं जो मैं खुद इस्तेमाल करता हूँ:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>WhatsApp या मैसेजिंग ऐप्स:</strong> सबसे आसान तरीका है कि आप शेयर लिस्ट में से WhatsApp, Telegram, या कोई और मैसेजिंग ऐप चुनें। बस ऐप पर क्लिक करें, उस दोस्त को चुनें जिसे आप भेजना चाहते हैं, और भेज दें! उसे एक लिंक मिलेगा, जिस पर क्लिक करते ही वह सीधे मैप्स में आपकी बताई जगह देख पाएगा।</li>
            <li><strong>लिंक कॉपी करें (Copy Link):</strong> अगर आप लिंक को कहीं और इस्तेमाल करना चाहते हैं, तो 'Copy Link' या 'Copy to clipboard' पर क्लिक करें। इससे गूगल मैप्स का लिंक कॉपी हो जाएगा, जिसे आप कहीं भी—जैसे ईमेल, फेसबुक पोस्ट या किसी डॉक्यूमेंट में—पेस्ट कर सकते हैं।</li>
            <li><strong>ईमेल (Email):</strong> अगर आप इसे ईमेल से भेजना चाहते हैं, तो बस Gmail या अपने ईमेल ऐप को चुनें। यह अपने आप एक नया ईमेल बना देगा जिसमें लोकेशन का लिंक पहले से ही मौजूद होगा।</li>
            <li><strong>Nearby Share या AirDrop:</strong> अगर आपका दोस्त आपके पास ही खड़ा है, तो आप Nearby Share (Android) या AirDrop (iPhone) का इस्तेमाल करके बिना इंटरनेट के भी सीधे लोकेशन भेज सकते हैं।</li>
          </ul>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">एक और आसान तरीका: Dropped Pin टूल का इस्तेमाल करें</h2>
            <p>
              अगर आप इस काम को और भी जल्दी और आसानी से करना चाहते हैं, तो आप <a href="https://www.droppedpin.xyz/">Dropped Pin</a> जैसे टूल का इस्तेमाल कर सकते हैं। यहाँ आपको बस मैप पर क्लिक करना होता है, और यह आपको तुरंत एक कॉपी करने लायक लिंक, व्हाट्सएप और ईमेल बटन, और यहाँ तक कि एक QR कोड बनाने का ऑप्शन भी देता है। सच कहूँ तो, यह बहुत समय बचाता है!
            </p>

          <blockquote className="border-l-4 border-primary pl-4 py-2 my-8">
            <p className="text-lg italic">
              "मेरा मानना है कि किसी को सही रास्ता बताने का सबसे अच्छा तरीका एक ड्रॉप किया गया पिन भेजना है। इससे कोई कन्फ्यूजन नहीं होता और सब लोग सही जगह पर पहुँच जाते हैं।"
            </p>
          </blockquote>

          <p>
            तो अब आप किसी को भी ड्रॉप किया हुआ पिन भेजने के लिए पूरी तरह तैयार हैं। चाहे आप दोस्तों से मिल रहे हों या किसी पैकेज का इंतजार कर रहे हों, सही लोकेशन शेयर करना अब आपके लिए बच्चों का खेल है।
          </p>

          <div className="mt-16">
            <h2 className="font-headline text-3xl font-bold mb-4">अक्सर पूछे जाने वाले सवाल (FAQ)</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>ड्रॉप किए गए पिन को भेजने का सबसे तेज़ तरीका क्या है?</AccordionTrigger>
                <AccordionContent>
                  मेरे हिसाब से, सबसे तेज़ तरीका 'Share' बटन का उपयोग करना और व्हाट्सएप के माध्यम से सीधे साझा करना है। आप लिंक को कॉपी करके भी जल्दी से भेज सकते हैं।
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>क्या मैं बिना ऐप के ड्रॉप किया गया पिन भेज सकता हूँ?</AccordionTrigger>
                <AccordionContent>
                  हाँ, बिल्कुल! आप 'Copy Link' सुविधा का उपयोग करके एक सीधा Google Maps लिंक बना सकते हैं और इसे ईमेल, SMS, या किसी भी प्लेटफ़ॉर्म पर साझा कर सकते हैं।
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>क्या ड्रॉप किया गया पिन भेजने के लिए कोई पैसे लगते हैं?</AccordionTrigger>
                <AccordionContent>
                  नहीं, Google Maps या Dropped Pin जैसे टूल का उपयोग करके पिन भेजना पूरी तरह से मुफ़्त है। बस आपके मोबाइल का इंटरनेट डेटा इस्तेमाल होता है।
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
