
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

const pageTitle = "Android पर पिन कैसे गिराएं: एक स्टेप-बाय-स्टेप गाइड";
const pageDescription = "अपने Android डिवाइस पर Google Maps में पिन कैसे गिराएं, यह जानें। इस गाइड में निर्देशांक ढूंढना, लोकेशन साझा करना और बहुत कुछ शामिल है।";
const pageUrl = "https://www.droppedpin.xyz/blog/how-to-drop-a-pin-on-android-hindi";
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
        alt: "एक व्यक्ति Android फ़ोन पकड़े हुए है जिसमें मैप एप्लिकेशन खुला है।",
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
    "name": "Android पर पिन गिराने का सबसे आसान तरीका क्या है?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Google Maps खोलें, अपनी वांछित लोकेशन पर टैप करके रखें, और एक लाल पिन दिखाई देगा। फिर आप नीचे दिए गए पैनल से विवरण साझा कर सकते हैं।"
    }
  },{
    "@type": "Question",
    "name": "क्या मैं पिन की गई लोकेशन को बाद के लिए सहेज सकता हूँ?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "हाँ, लोकेशन विवरण पैनल में 'Save' बटन पर टैप करें। आप इसे अपनी 'Favorites', 'Want to go' सूची में जोड़ सकते हैं या एक नई सूची बना सकते हैं।"
    }
  },{
    "@type": "Question",
    "name": "अगर मेरे पास सटीक पता नहीं है तो क्या होगा?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "पिन गिराना उन जगहों के लिए एकदम सही है जिनका कोई स्ट्रीट पता नहीं है, जैसे पार्क या ग्रामीण क्षेत्र। यह सटीक निर्देशांक प्रदान करता है जिसे कोई भी नेविगेट करने के लिए उपयोग कर सकता है।"
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
              Android पर पिन कैसे गिराएं: एक स्टेप-बाय-स्टेप गाइड
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
              alt="एक व्यक्ति Android फ़ोन पकड़े हुए है जिसमें मैप एप्लिकेशन खुला है।"
              fill
              className="object-cover"
              data-ai-hint={featureImage.imageHint}
            />
          </div>

          <p className="lead text-xl">
            क्या आपको अपने Android फ़ोन से कोई सटीक लोकेशन साझा करने की ज़रूरत है? Google Maps में एक पिन गिराना इसे करने का सबसे आसान तरीका है। यह गाइड आपको हर कदम पर ले जाएगी, पिन लगाने से लेकर उसे किसी के भी साथ, कहीं भी साझा करने तक।
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">चरण 1: Google Maps खोलें और अपनी जगह ढूंढें</h2>
          <p>
            सबसे पहले, अपने Android डिवाइस पर Google Maps ऐप लॉन्च करें। आप या तो ऊपर दिए गए सर्च बार का उपयोग करके एक सामान्य क्षेत्र की खोज कर सकते हैं या उस सटीक स्थान का पता लगाने के लिए मैन्युअल रूप से मैप पर पैन और ज़ूम कर सकते हैं जिसे आप चिह्नित करना चाहते हैं।
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">चरण 2: पिन गिराने के लिए टैप और होल्ड करें</h2>
          <p>
            एक बार जब आप लोकेशन को इंगित कर लेते हैं, तो बस स्क्रीन पर उस जगह पर अपनी उंगली दबाकर रखें। एक पल के बाद, एक लाल पिन दिखाई देगा, और आपको संभवतः एक हल्का कंपन महसूस होगा जो पुष्टि करता है कि पिन गिरा दिया गया है। यह इतना आसान है!
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">चरण 3: लोकेशन विवरण तक पहुँचें</h2>
          <p>
            जैसे ही पिन गिराया जाता है, स्क्रीन के नीचे से एक सूचना पैनल ऊपर की ओर खिसक जाएगा। यह पैनल, जिसे अक्सर "Dropped pin" पैनल कहा जाता है, आपको उस स्थान का पता या विवरण दिखाता है। आपको वहीं पर अक्षांश और देशांतर निर्देशांक भी प्रदर्शित होंगे।
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">चरण 4: अपना गिराया हुआ पिन साझा करें</h2>
          <p>
            अब जब आपका पिन सेट हो गया है, तो इसे साझा करना सीधा है। सूचना पैनल में, आपको एक 'Share' बटन दिखाई देगा। इसे टैप करने से आपकी Android शेयर शीट खुल जाएगी, जिससे आपको कई विकल्प मिलेंगे:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>क्लिपबोर्ड पर कॉपी करें:</strong> आप Google Maps लिंक को कॉपी कर सकते हैं और इसे किसी भी मैसेजिंग ऐप, ईमेल या सोशल मीडिया पोस्ट में पेस्ट कर सकते हैं।</li>
            <li><strong>ऐप्स के माध्यम से साझा करें:</strong> सीधे WhatsApp, Messenger, Gmail, या अपने टेक्स्ट मैसेजिंग ऐप जैसे ऐप्स के माध्यम से लोकेशन साझा करें।</li>
            <li><strong>Nearby Share:</strong> यदि व्यक्ति पास में है, तो आप लिंक को सीधे उनके डिवाइस पर भेजने के लिए Android के Nearby Share फ़ीचर का उपयोग कर सकते हैं।</li>
          </ul>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">प्रो-टिप: पिन की गई लोकेशन को सहेजना</h2>
            <p>
              उस लोकेशन को खोना नहीं चाहते? आप इसे बाद के लिए आसानी से सहेज सकते हैं। उसी बॉटम पैनल में, 'Save' बटन देखें। आप उस स्थान को अपनी 'Favorites', 'Want to go' में जोड़ सकते हैं, या एक कस्टम सूची भी बना सकते हैं (जैसे 'Best Picnic Spots' या 'Hiking Trails')।
            </p>

          <blockquote className="border-l-4 border-primary pl-4 py-2 my-8">
            <p className="text-lg italic">
              "Android पर पिन गिराना आधुनिक नेविगेशन के लिए एक आवश्यक कौशल है। यह मैप पर किसी भी स्थान को एक साझा करने योग्य, आसानी से ढूंढने योग्य गंतव्य में बदल देता है।"
            </p>
          </blockquote>

          <p>
            और बस हो गया! अब आप अपने Android डिवाइस पर एक प्रो की तरह लोकेशन ड्रॉप करने, साझा करने और सहेजने के लिए तैयार हैं। और भी तेज़ अनुभव के लिए, सेकंडों में लिंक और क्यूआर कोड उत्पन्न करने के लिए हमारे अपने <a href="https://www.droppedpin.xyz/">Dropped Pin</a> टूल को देखें।
          </p>

          <div className="mt-16">
            <h2 className="font-headline text-3xl font-bold mb-4">अक्सर पूछे जाने वाले प्रश्न (FAQ)</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Android पर पिन गिराने का सबसे आसान तरीका क्या है?</AccordionTrigger>
                <AccordionContent>
                  Google Maps खोलें, अपनी वांछित लोकेशन पर टैप करके रखें, और एक लाल पिन दिखाई देगा। फिर आप नीचे दिए गए पैनल से विवरण साझा कर सकते हैं।
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>क्या मैं पिन की गई लोकेशन को बाद के लिए सहेज सकता हूँ?</AccordionTrigger>
                <AccordionContent>
                  हाँ, लोकेशन विवरण पैनल में 'Save' बटन पर टैप करें। आप इसे अपनी 'Favorites', 'Want to go' सूची में जोड़ सकते हैं या एक नई सूची बना सकते हैं।
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>अगर मेरे पास सटीक पता नहीं है तो क्या होगा?</AccordionTrigger>
                <AccordionContent>
                  पिन गिराना उन जगहों के लिए एकदम सही है जिनका कोई स्ट्रीट पता नहीं है, जैसे पार्क या ग्रामीण क्षेत्र। यह सटीक निर्देशांक प्रदान करता है जिसे कोई भी नेविगेट करने के लिए उपयोग कर सकता है।
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
