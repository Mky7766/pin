
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
      "text": "नहीं, Google Maps या Dropped Pin جیسے ٹولز کا उपयोग करके पिन भेजना पूरी तरह से मुफ्त है। केवल आपके इंटरनेट डेटा शुल्क लागू हो सकते हैं।"
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
              गिराया हुआ पिन (Dropped Pin) कैसे भेजें: एक पूरी गाइड
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
            आपने Google Maps पर एक पिन तो गिरा दिया, लेकिन अब उसे किसी दोस्त, परिवार के सदस्य या डिलीवरी वाले को कैसे भेजें? एक ड्रॉप किए गए पिन को भेजना उतना ही आसान है जितना उसे गिराना। यह गाइड आपको हर étape पर मार्गदर्शन करेगी ताकि आप कुछ ही सेकंड में सटीक लोकेशन साझा कर सकें।
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">चरण 1: पिन गिराएं और जानकारी पैनल खोलें</h2>
          <p>
            सबसे पहले, Google Maps ऐप खोलें और उस स्थान पर टैप करके रखें जहाँ आप पिन गिराना चाहते हैं। एक लाल पिन दिखाई देगा, और स्क्रीन के नीचे एक सूचना पैनल खुल जाएगा। यही पैनल आपके लोकेशन को साझा करने का केंद्र है।
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">चरण 2: 'Share' (साझा करें) बटन का उपयोग करें</h2>
          <p>
            सूचना पैनल में, आपको एक 'Share' बटन प्रमुखता से दिखाई देगा। इस बटन को टैप करने से आपके फ़ोन की शेयरिंग शीट खुल जाएगी, जहाँ आपको विभिन्न ऐप्स और संपर्क मिलेंगे जिनके साथ आप लोकेशन साझा कर सकते हैं।
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">चरण 3: साझा करने का अपना पसंदीदा तरीका चुनें</h2>
          <p>
            अब आपके पास अपनी पिन की गई लोकेशन भेजने के कई विकल्प हैं। यहाँ कुछ सबसे आम तरीके दिए गए हैं:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>WhatsApp या मैसेजिंग ऐप्स:</strong> शेयर शीट में WhatsApp, Telegram, या अपने डिफ़ॉल्ट मैसेजिंग ऐप का चयन करें। ऐप चुनें, संपर्क चुनें, और भेजें! प्राप्तकर्ता को एक लिंक मिलेगा जिस पर क्लिक करके वे सीधे Google Maps में उस स्थान को देख सकते हैं।</li>
            <li><strong>लिंक कॉपी करें (Copy Link):</strong> यदि आप इसे किसी विशिष्ट ऐप में नहीं भेजना चाहते हैं, तो 'Copy Link' या 'Copy to clipboard' विकल्प चुनें। यह Google Maps लिंक को आपके क्लिपबोर्ड पर कॉपी कर देगा, जिसे आप कहीं भी पेस्ट कर सकते हैं - जैसे ईमेल, सोशल मीडिया पोस्ट, या दस्तावेज़।</li>
            <li><strong>ईमेल (Email):</strong> Gmail या अपने अन्य ईमेल क्लाइंट का चयन करके सीधे एक ईमेल में लोकेशन लिंक भेजें। यह स्वचालित रूप से एक नया ईमेल बनाएगा जिसमें लिंक शामिल होगा।</li>
            <li><strong>Nearby Share (Android) या AirDrop (iOS):</strong> यदि आप जिस व्यक्ति के साथ साझा कर रहे हैं, वह आपके पास ही है, तो आप लोकेशन को वायरलेस तरीके से भेजने के लिए इन सुविधाओं का उपयोग कर सकते हैं।</li>
          </ul>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">प्रो-टिप: Dropped Pin टूल का उपयोग करके इसे और आसान बनाएं</h2>
            <p>
              और भी तेज़ और अधिक विकल्पों के लिए, आप <a href="https://www.droppedpin.xyz/">Dropped Pin</a> जैसे टूल का उपयोग कर सकते हैं। बस मैप पर क्लिक करें, और आपको तुरंत कॉपी करने योग्य लिंक, व्हाट्सएप और ईमेल बटन, और यहाँ तक कि एक QR कोड बनाने का विकल्प भी मिलता है जिसे कोई भी स्कैन कर सकता है। यह प्रक्रिया को और भी सरल बना देता है।
            </p>

          <blockquote className="border-l-4 border-primary pl-4 py-2 my-8">
            <p className="text-lg italic">
              "किसी को सटीक रास्ता बताने का सबसे अच्छा तरीका एक ड्रॉप किया गया पिन भेजना है। यह अनुमान लगाने की आवश्यकता को समाप्त करता है और यह सुनिश्चित करता है कि हर कोई सही जगह पर पहुँचे।"
            </p>
          </blockquote>

          <p>
            अब आप किसी भी ड्रॉप किए गए पिन को आत्मविश्वास से भेजने के लिए तैयार हैं। चाहे आप दोस्तों से मिल रहे हों या किसी पैकेज का इंतज़ार कर रहे हों, सटीक लोकेशन साझा करना अब आपकी उंगलियों पर है।
          </p>

          <div className="mt-16">
            <h2 className="font-headline text-3xl font-bold mb-4">अक्सर पूछे जाने वाले प्रश्न (FAQ)</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>ड्रॉप किए गए पिन को भेजने का सबसे तेज़ तरीका क्या है?</AccordionTrigger>
                <AccordionContent>
                  सबसे तेज़ तरीका 'Share' बटन का उपयोग करना है और व्हाट्सएप या किसी अन्य मैसेजिंग ऐप के माध्यम से सीधे साझा करना है। आप लिंक को कॉपी करके भी जल्दी से भेज सकते हैं।
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>क्या मैं बिना ऐप के ड्रॉप किया गया पिन भेज सकता हूँ?</AccordionTrigger>
                <AccordionContent>
                  हाँ, आप 'Copy Link' सुविधा का उपयोग करके एक सीधा Google Maps लिंक प्राप्त कर सकते हैं और इसे ईमेल, एसएमएस या किसी भी प्लेटफ़ॉर्म पर साझा कर सकते हैं।
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>क्या ड्रॉप किया गया पिन भेजने के लिए कोई शुल्क है?</AccordionTrigger>
                <AccordionContent>
                  नहीं, Google Maps या Dropped Pin जैसे उपकरणों का उपयोग करके पिन भेजना पूरी तरह से मुफ्त है। केवल आपके इंटरनेट डेटा शुल्क लागू हो सकते हैं।
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
