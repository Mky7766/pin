
import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { placeholderImages } from '@/lib/placeholder-images';

const blogPosts = [
    {
    title: 'iPhone पर पिन कैसे गिराएं: एक आसान गाइड',
    slug: '/blog/how-to-drop-a-pin-on-iphone-hindi',
    description: 'अपने iPhone पर Google Maps में पिन कैसे गिराएं, यह जानें। यह गाइड आपको लोकेशन खोजने, tọa độ प्राप्त करने और उसे आसानी से साझा करने में मदद करेगी।',
    image: {
        imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTN6d5wZnXnWkYZ_oQW3XOGIJFzVYuY0Jgbj1jSI_u0pp-wnk8zUfptnAvTfgTrIdZgVBYenm0sMtQUUEPEMBi4zLCamj9xI34vi5wZOtgLhb_RDwrULQ4NhLHOYGsCjkCBsSm4lXAPdsIRZZoUP2a3wSc_B3mQ1XWbuVTnkQI52AEJDBbwCt47z7p1pQf/s320/elegant-smartphone-composition.jpg",
        imageHint: "iphone map"
    },
    tags: ['iPhone', 'How-To', 'Hindi', 'Google Maps'],
    date: 'October 18, 2025',
  },
  {
    title: 'How to Drop a Pin on Android: A Step-by-Step Guide',
    slug: '/blog/how-to-drop-a-pin-on-android',
    description: 'Learn how to drop a pin on Google Maps on your Android device. This guide covers finding coordinates, sharing locations, and more.',
    image: placeholderImages.find(p => p.id === '6')!,
    tags: ['Android', 'How-To', 'Guide'],
    date: 'October 17, 2025',
  },
  {
    title: 'मेरे आस-पास पिन ड्रॉप (Dropped Pin Near Me) कैसे करें?',
    slug: '/blog/dropped-pin-near-me',
    description: 'जानें कि Dropped Pin Near Me का उपयोग करके अपनी वर्तमान लोकेशन कैसे खोजें और साझा करें। हमारा टूल आपकी लाइव लोकेशन तुरंत ढूंढ सकता है।',
    image: {
        imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuMPmWioyRJ7MsGeAg9qTI1o2J9yMZ3Rt-jUSWpxrQY_c2d8gDuiVMgIinGNta24TtjJR18Z-gO46Hbym43I7iekew7yEzaAsr664ozZ0omiQER6IkH57QzQFFpcLQhr7Sw71RRVFXox9K_wR7C1GXIFxSaNvSdcq7SC-oQUEt21FtZLnZvDiQVZyUJEiU/s320/top-view-map-blue-background.jpg",
        imageHint: "map top view"
    },
    tags: ['Live Location', 'How-To', 'Hindi', 'Near Me'],
    date: 'October 16, 2025',
  },
  {
    title: 'Snow Day Calculator',
    slug: '/blog/snow-day-calculator',
    description: 'Check your chances of a snow day instantly with our Snow Day Calculator. Accurate school closure predictions based on your location and weather updates.',
    image: {
      imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVYyGjeJUC0XO27A0hsAgMkoy-hMc7vgYhEDBrZGtm5yhIsOUrNZPP6fBriw31zMDjzq_Z5NXbSFZZOwOang6Htmmr7sB9AaDdWtEqaOaEJudoRpTzKwMW4-7JbkP6HiEGnOV-QdfyCAdWHK6sgT2p_n9JvcYAHtgC0baVLYwjxOwnJv1A0PQOFtdJjnrI/s320/1760602050.png",
      imageHint: "snow winter"
    },
    tags: ['Tool', 'Weather', 'Calculator'],
    date: 'October 15, 2025',
  },
  {
    title: 'किसी भी लोकेशन का QR कोड कैसे बनाएं?',
    slug: '/blog/location-ka-qr-code-kaise-banayen',
    description:
      'जानें कि Dropped Pin टूल का उपयोग करके किसी भी मैप लोकेशन का QR कोड कैसे बनाएं। यह आसान है और इसे व्हाट्सएप, ईमेल या कहीं भी साझा किया जा सकता है।',
    image: placeholderImages.find(p => p.id === '2')!,
    tags: ['QR Code', 'How-To', 'Hindi', 'Location'],
    date: 'October 15, 2025',
  },
  {
    title: 'गिराया हुआ पिन (Dropped Pin) कैसे भेजें: एक पूरी गाइड',
    slug: '/blog/how-to-send-a-dropped-pin-hindi',
    description:
      'जानें कि Dropped Pin टूल से ड्रॉप किए गए पिन को व्हाट्सएप, ईमेल या लिंक के माध्यम से कैसे भेजें। सटीक लोकेशन साझा करने के लिए यह एक विस्तृत गाइड है।',
    image: placeholderImages.find(p => p.id === '7')!,
    tags: ['How-To', 'Google Maps', 'Hindi', 'Share'],
    date: 'October 15, 2025',
  },
  {
    title: 'Android पर पिन कैसे गिराएं: एक स्टेप-बाय-स्टेप गाइड',
    slug: '/blog/how-to-drop-a-pin-on-android-hindi',
    description:
      'अपने Android डिवाइस पर Google Maps में पिन कैसे गिराएं, यह जानें। इस गाइड में निर्देशांक ढूंढना, लोकेशन साझा करना और बहुत कुछ शामिल है।',
    image: placeholderImages.find(p => p.id === '6')!,
    tags: ['Android', 'How-To', 'Google Maps', 'Hindi'],
    date: 'October 15, 2025',
  },
  {
    title: 'Dropped Pin का उपयोग करके पिन कैसे गिराएं?',
    slug: '/blog/how-to-drop-a-pin',
    description:
      'Dropped Pin का उपयोग करके किसी भी स्थान पर पिन कैसे छोड़ें, tọa표 कैसे प्राप्त करें, और उसे कैसे साझा करें, इस पर एक विस्तृत गाइड।',
    image: placeholderImages.find(p => p.id === '5')!,
    tags: ['Guide', 'How-To', 'Hindi'],
    date: 'October 15, 2025',
  },
  {
    title: 'Google Maps पर पिन कैसे गिराएं',
    slug: '/blog/how-to-drop-a-pin-on-google-maps',
    description:
      'Google Maps पर पिन कैसे गिराएं, निर्देशांक कैसे प्राप्त करें, स्थानों को कैसे सहेजें और उन्हें किसी के भी साथ, कहीं भी साझा करने के बारे में एक विस्तृत गाइड।',
    image: placeholderImages.find(p => p.id === '1')!,
    tags: ['Guide', 'How-To', 'Google Maps', 'Hindi'],
    date: 'October 15, 2025',
  },
  {
    title: 'Top 5 Hidden Features of Dropped Pin You Should Know',
    slug: '#',
    description:
      'Did you know you can generate QR codes for locations? Discover five powerful features that will change the way you use Dropped Pin.',
    image: placeholderImages[1],
    tags: ['Features', 'Tips'],
    date: 'June 8, 2024',
  },
  {
    title: 'How Dropped Pin is Helping Businesses Streamline Operations',
    slug: '#',
    description:
      'From delivery services to event planning, businesses are using Dropped Pin to improve logistics and communication. Find out how.',
    image: placeholderImages[2],
    tags: ['Business', 'Logistics'],
    date: 'June 5, 2024',
  },
  {
    title: 'A Traveler’s Best Friend: Why Dropped Pin is a Must-Have App',
    slug: '#',
    description:
      'Never get lost again. See how travelers are using Dropped Pin to mark hotels, attractions, and meeting points on their journeys.',
    image: placeholderImages[3],
    tags: ['Travel', 'Lifestyle'],
    date: 'June 2, 2024',
  },
];

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-12 text-left">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Dropped Pin Blog
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Tips, tricks, and stories on making the most of location sharing.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card
            key={post.title}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader className="p-0">
              <Link href={post.slug}>
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    data-ai-hint={post.image.imageHint}
                  />
                </div>
              </Link>
            </CardHeader>
            <CardContent className="flex-grow p-6">
              <div className="space-y-2">
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl font-bold line-clamp-2">
                  <Link href={post.slug} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.description}
                </CardDescription>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <p className="text-sm text-muted-foreground">{post.date}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
