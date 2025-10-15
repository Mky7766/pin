
import { Metadata } from 'next';
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ShareButtons } from '@/components/blog/share-buttons';
import { AuthorBio } from '@/components/blog/author-bio';


const pageTitle = "Google Maps पर पिन कैसे गिराएं - Dropped Pin Finder";
const pageDescription = "Google Maps पर पिन कैसे गिराएं, निर्देशांक कैसे प्राप्त करें, स्थानों को कैसे सहेजें और उन्हें किसी के भी साथ, कहीं भी साझा करने के बारे में एक विस्तृत गाइड।";
const pageUrl = "https://www.droppedpin.xyz/blog/how-to-drop-a-pin-on-google-maps";
const featureImage = placeholderImages.find(p => p.id === '1');

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
        alt: "A cityscape with multiple red map pins.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="container mx-auto px-4 py-8">
        <article className="prose max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-8 leading-relaxed">
              Google Maps पर पिन कैसे गिराएं: एक विस्तृत गाइड
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
              alt="A cityscape with multiple red map pins."
              fill
              className="object-cover"
              data-ai-hint={featureImage.imageHint}
            />
          </div>

          <p className="lead text-xl">
            क्या आपको कभी किसी ऐसी जगह का पता साझा करने की ज़रूरत पड़ी है जिसका कोई औपचारिक पता नहीं है? या शायद आप किसी दोस्त को एक पार्क में एक विशिष्ट मुलाकात बिंदु बताना चाहते हैं? Google Maps पर एक पिन गिराना इसका सही समाधान है। यह एक सरल लेकिन शक्तिशाली सुविधा है जो आपको दुनिया में किसी भी सटीक स्थान को चिह्नित करने और साझा करने की अनुमति देती है।
          </p>

          <p>
            आज की डिजिटल दुनिया में, सटीक लोकेशन साझा करना एक आम ज़रूरत बन गई है, चाहे वह डिलीवरी एजेंट के लिए हो, दोस्तों के साथ मिलने के लिए हो, या आपात स्थिति में अपनी लोकेशन बताने के लिए हो। यह गाइड आपको सिखाएगी कि आप अपने कंप्यूटर या मोबाइल डिवाइस पर Google Maps का उपयोग करके आसानी से पिन कैसे गिरा सकते हैं, उसके निर्देशांक (latitude and longitude) कैसे प्राप्त कर सकते हैं, और उसे दूसरों के साथ कैसे साझा कर सकते हैं।
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">पिन गिराना क्या है और यह क्यों उपयोगी है?</h2>
          <p>
            "पिन गिराना" का सीधा सा मतलब है Google Maps पर किसी खास जगह को डिजिटल रूप से चिह्नित करना। जब आप एक पिन गिराते हैं, तो आप उस स्थान के लिए एक सटीक भौगोलिक मार्कर बना रहे होते हैं। यह अविश्वसनीय रूप से उपयोगी है क्योंकि:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>बिना पते वाले स्थान:</strong> यह पार्कों, समुद्र तटों, या ग्रामीण क्षेत्रों जैसे स्थानों के लिए एकदम सही है, जिनका कोई स्ट्रीट पता नहीं होता है।</li>
            <li><strong>सटीकता:</strong> यह आपको एक बड़ी इमारत या क्षेत्र के भीतर एक सटीक प्रवेश द्वार या बैठक स्थल निर्दिष्ट करने की अनुमति देता है।</li>
            <li><strong>आसान साझाकरण:</strong> आप आसानी से एक लिंक या निर्देशांक साझा कर सकते हैं ताकि कोई भी ठीक उसी स्थान पर नेविगेट कर सके।</li>
            <li><strong>याद रखने के लिए:</strong> आप भविष्य के संदर्भ के लिए स्थानों को सहेज सकते हैं, जैसे कि एक छिपी हुई पगडंडी का निशान या एक शानदार फोटोग्राफी स्पॉट।</li>
          </ul>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">मोबाइल डिवाइस पर पिन कैसे गिराएं (Android और iOS)</h2>
          <p>
            अधिकांश लोग चलते-फिरते Google Maps का उपयोग करते हैं, इसलिए मोबाइल पर पिन गिराना सीखना आवश्यक है। प्रक्रिया Android और iOS दोनों उपकरणों पर लगभग समान है।
          </p>
          <p><strong>चरण 1: Google Maps खोलें और स्थान खोजें</strong></p>
          <p>
            सबसे पहले, अपने स्मार्टफोन पर Google Maps ऐप खोलें। आप या तो खोज बार का उपयोग करके एक सामान्य क्षेत्र की खोज कर सकते हैं या मानचित्र पर ज़ूम इन और पैन करके मैन्युअल रूप से अपना वांछित स्थान ढूंढ सकते हैं।
          </p>
          <p><strong>चरण 2: पिन गिराने के लिए टैप और होल्ड करें</strong></p>
          <p>
            एक बार जब आपको वह सटीक स्थान मिल जाए जिसे आप चिह्नित करना चाहते हैं, तो बस अपनी उंगली से उस स्थान पर टैप करके रखें। एक या दो सेकंड के बाद, एक लाल पिन स्क्रीन पर दिखाई देगा, और आपको एक हैप्टिक फीडबैक (कंपन) महसूस होगा जो पुष्टि करता है कि पिन गिर गया है।
          </p>
          <p><strong>चरण 3: विवरण और निर्देशांक देखें</strong></p>
          <p>
            जैसे ही पिन गिरता है, स्क्रीन के नीचे एक सूचना पैनल दिखाई देगा। इस पैनल में स्थान का नाम या पता (यदि उपलब्ध हो) और उसके अक्षांश और देशांतर निर्देशांक प्रदर्शित होंगे।
          </p>

          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">कंप्यूटर पर पिन कैसे गिराएं (डेस्कटॉप/वेब ब्राउज़र)</h2>
           <p>
            जब आप एक बड़ी स्क्रीन पर योजना बना रहे हों तो कंप्यूटर पर पिन गिराना भी उतना ही आसान है।
          </p>
          <p><strong>चरण 1: Google Maps पर जाएं</strong></p>
          <p>
            अपने पसंदीदा वेब ब्राउज़र में <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">maps.google.com</a> पर जाएं।
          </p>
          <p><strong>चरण 2: स्थान पर क्लिक करें</strong></p>
          <p>
            मानचित्र पर नेविगेट करें और उस स्थान पर एक साधारण लेफ्ट-क्लिक करें जहाँ आप पिन गिराना चाहते हैं। एक छोटा, ग्रे पिन दिखाई देगा, और स्क्रीन के नीचे एक सूचना बॉक्स पॉप अप होगा जिसमें स्थान के बारे में विवरण होगा।
          </p>
          
          <h2 className="font-headline text-3xl font-bold mt-12 mb-4">पिन की गई लोकेशन को कैसे साझा करें</h2>
          <p>
            एक बार जब आप पिन गिरा देते हैं, तो उसे साझा करना अगला कदम है। Google Maps इसे बहुत आसान बनाता है।
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>"Share" बटन का उपयोग करें:</strong> सूचना पैनल में, आपको एक "Share" बटन मिलेगा। इस पर क्लिक करने से कई विकल्प खुलेंगे। आप एक सीधा लिंक कॉपी कर सकते हैं या इसे सीधे लोकप्रिय मैसेजिंग ऐप जैसे व्हाट्सएप, फेसबुक मैसेंजर या ईमेल के माध्यम से साझा कर सकते हैं।</li>
            <li><strong>निर्देशांक कॉपी करें:</strong> यदि आप कच्चा स्थान डेटा भेजना चाहते हैं, तो बस सूचना पैनल में निर्देशांक पर क्लिक करें। वे स्वचालित रूप से आपके क्लिपबोर्ड पर कॉपी हो जाएंगे। हमारा अपना <a href="https://www.droppedpin.xyz">Dropped Pin</a> टूल इसे और भी आसान बनाता है, जो आपको तुरंत लिंक और QR कोड उत्पन्न करने देता है!</li>
            <li><strong>स्थान सहेजें:</strong> आप भविष्य में उपयोग के लिए पिन की गई लोकेशन को अपनी सहेजी गई जगहों पर भी जोड़ सकते हैं। बस "Save" बटन पर क्लिक करें और इसे अपनी पसंदीदा, 'Want to go', या कस्टम सूची में जोड़ें।</li>
          </ul>

          <blockquote className="border-l-4 border-primary pl-4 py-2 my-8">
            <p className="text-lg italic">
              "पिन गिराना किसी खजाने के नक्शे पर 'X' बनाने का आधुनिक डिजिटल तरीका है। यह सरल, सटीक और अविश्वसनीय रूप से उपयोगी है।"
            </p>
          </blockquote>
          
          <AuthorBio />
          <ShareButtons url={pageUrl} title={pageTitle} description={pageDescription} />

        </article>
      </main>
    </>
  );
}
