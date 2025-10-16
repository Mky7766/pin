import { Metadata } from 'next';
import Script from 'next/script';
import { AuthorBio } from '@/components/blog/author-bio';

const pageTitle = "Snow Day Calculator ❄ | Accurate School Closure Predictions";
const pageDescription = "Check your chances of a snow day instantly with our Snow Day Calculator ❄. Get accurate school closure predictions based on your location and weather updates. Fast, reliable & easy to use!";
const pageUrl = "https://droppedpin.xyz/blog/snow-day-calculator";
const imageUrl = "https://snowdaycalculator.bajtimes.com/snow-day-calculator.jpg";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: "Snow Day Calculator, snow day prediction, school closure calculator, weather closure predictor, snow forecast tool, snow day chances, winter school closures, snow day percentage calculator",
  openGraph: {
    title: pageTitle,
    description: "Instantly find out your chances of a snow day ❄. Our Snow Day Calculator uses accurate weather data to predict school closures in your area.",
    url: pageUrl,
    type: 'article',
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "A graphic for the snow day calculator showing a snowy landscape.",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: "Get accurate snow day predictions for your school ❄. Check your chances of a snow day instantly with our reliable calculator.",
    images: [imageUrl],
  },
};

export default function SnowDayCalculatorPage() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/MMukesh9587/mky@1fd1ae78673c07ba15f901061414f2422c5d69f9/index-BavitBOC.css" />
      <main className="container mx-auto px-4 py-8">
        <article className="prose max-w-4xl mx-auto">
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-8 leading-relaxed">
                Snow Day Calculator
            </h1>
            <p className="lead text-xl">
                Will it be a snow day? Use the calculator below to find out your chances of a school closure. This tool uses real-time weather data to give you an accurate prediction.
            </p>
        </article>
        
        <div className="my-8">
             <div id="root"></div>
        </div>

        <article className="prose max-w-4xl mx-auto">
            <h2 className="font-headline text-3xl font-bold mt-12 mb-4">How It Works</h2>
            <p>
                Our Snow Day Calculator analyzes various factors, including snowfall predictions, wind chill, and official weather advisories for your specific location. Just enter your details, and the algorithm will calculate the probability of a snow day.
            </p>
            
            <AuthorBio />
        </article>
      </main>
      <Script 
        src="https://cdn.jsdelivr.net/gh/MMukesh9587/mky@1fd1ae78673c07ba15f901061414f2422c5d69f9/index-CnPQ8fpF.js" 
        strategy="lazyOnload" 
      />
    </>
  );
}
