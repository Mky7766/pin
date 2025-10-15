
import { Metadata } from 'next';
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const pageTitle = "How to Drop a Pin? - Dropped Pin Finder";
const pageDescription = "Dropped Pin का उपयोग करके किसी भी स्थान पर पिन कैसे छोड़ें, tọa표 कैसे प्राप्त करें, और उसे कैसे साझा करें, इस पर एक विस्तृत गाइड।";
const pageUrl = "https://www.droppedpin.xyz/blog/how-to-drop-a-pin";

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
        url: placeholderImages[4].imageUrl,
        width: 600,
        height: 400,
        alt: "A detailed step-by-step visual guide on a map.",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [placeholderImages[4].imageUrl],
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
  'image': placeholderImages[4].imageUrl,
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
  'datePublished': '2024-06-14T09:00:00+05:30',
  'dateModified': '2024-06-14T09:00:00+05:30'
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
              Dropped Pin का उपयोग करके पिन कैसे गिराएं?
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
               <p className="text-sm text-muted-foreground">14 जून, 2024</p>
            </div>
          </div>

          <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={placeholderImages[4].imageUrl}
              alt="A detailed step-by-step visual guide on a map."
              fill
              className="object-cover"
              data-ai-hint={placeholderImages[4].imageHint}
            />
          </div>

          <p className="lead text-xl">
            क्या आप किसी को सटीक लोकेशन भेजना चाहते हैं? Dropped Pin टूल का उपयोग करना बहुत आसान है। इस गाइड में, हम आपको बताएंगे कि मानचित्र पर पिन कैसे गिराएं, उसके निर्देशांक (latitude and longitude) कैसे प्राप्त करें, और उसे दूसरों के साथ कैसे साझा करें।
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">चरण 1: मानचित्र पर पिन गिराएं</h2>
          <p>
            सबसे पहले, हमारी वेबसाइट <a href="https://www.droppedpin.xyz">Dropped Pin</a> पर जाएं। आपको एक इंटरेक्टिव मानचित्र दिखाई देगा। जिस स्थान को आप चिह्नित करना चाहते हैं, बस उस पर क्लिक करें। क्लिक करते ही, एक लाल पिन उस स्थान पर गिर जाएगा। आप मानचित्र को ज़ूम इन या ज़ूम आउट करके और उसे खींचकर सटीक स्थान ढूंढ सकते हैं।
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">चरण 2: निर्देशांक (Coordinates) कॉपी करें</h2>
          <p>
            जैसे ही आप पिन गिराते हैं, मानचित्र के नीचे 'Location' सेक्शन में उस स्थान के अक्षांश (latitude) और देशांतर (longitude) अपने आप भर जाएंगे। आप इन निर्देशांकों को देख सकते हैं। यदि आप केवल निर्देशांक साझा करना चाहते हैं, तो आप उन्हें सीधे वहां से कॉपी कर सकते हैं।
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">चरण 3: लोकेशन लिंक साझा करें</h2>
          <p>
            Dropped Pin आपके लिए एक सुविधाजनक Google Maps लिंक भी बनाता है। इस लिंक को साझा करने के कई तरीके हैं:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Copy Link:</strong> 'Copy Link' बटन पर क्लिक करके Google Maps का लिंक कॉपी करें और इसे किसी भी मैसेजिंग ऐप या ईमेल में पेस्ट करें।</li>
            <li><strong>WhatsApp:</strong> सीधे व्हाट्सएप पर लिंक साझा करने के लिए 'WhatsApp' बटन पर क्लिक करें।</li>
            <li><strong>Email:</strong> 'Email' बटन पर क्लिक करके अपने डिफॉल्ट ईमेल क्लाइंट के माध्यम से लिंक भेजें।</li>
            <li><strong>Generate QR Code:</strong> 'Generate QR Code' पर क्लिक करके एक QR कोड बनाएं। कोई भी इस कोड को स्कैन करके सीधे उस स्थान पर नेविगेट कर सकता है।</li>
          </ul>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">"Live Location" का उपयोग कैसे करें?</h2>
          <p>
            यदि आप अपनी वर्तमान लोकेशन साझा करना चाहते हैं, तो 'Live Location' बटन पर क्लिक करें। आपका ब्राउज़र आपसे लोकेशन एक्सेस करने की अनुमति मांगेगा। अनुमति देने के बाद, टूल स्वचालित रूप से आपकी वर्तमान स्थिति का पता लगा लेगा और मानचित्र पर पिन सेट कर देगा।
          </p>

          <blockquote className="border-l-4 border-primary pl-4 py-2 my-8">
            <p className="text-lg italic">
              "Dropped Pin के साथ, सटीक लोकेशन साझा करना इतना आसान कभी नहीं रहा। चाहे दोस्तों के साथ मिलना हो या डिलीवरी के लिए सही पता भेजना हो, यह टूल हमेशा काम आता है।"
            </p>
          </blockquote>

          <p>
            अब आप Dropped Pin का उपयोग करने के लिए पूरी तरह तैयार हैं। जाएं और इसे आजमाएं!
          </p>
        </article>
      </main>
    </>
  );
}
