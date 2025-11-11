
import { Metadata } from 'next';
import DistanceCalculator from './distance-calculator';

const pageTitle = "Pin to Pin Distance Calculator - Measure Between Two Points";
const pageDescription = "Easily calculate the distance between two locations. Enter addresses or drop pins on the map to measure the straight-line (KM) and driving distance instantly.";
const pageUrl = "https://droppedpin.xyz/pin-to-pin-distance";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: "distance calculator, pin to pin distance, measure distance on map, google maps distance, location distance finder, point to point distance, online distance tool",
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: 'website',
    images: [
      {
        url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhS8SlqVEwhpegP6HKnQFm2R5rG50ByVV0oBvpwWxFbXOAaH2Dz_kU3QzGjY5s2z4AUJOYzTCBANNJWzr7LaklRRvVICUtvZNiT_SveUL5mqxYPeiXIESMpuOztFlGQF4hHZPzbyCJ5dtl9xqqD6vMVBgTMfHRH_RwlQjuEfKa34pYz3P-urQwgX11y0pNI/s1200/1760620765.png",
        width: 1200,
        height: 630,
        alt: "A map showing a route between two pins with a distance calculation.",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhS8SlqVEwhpegP6HKnQFm2R5rG50ByVV0oBvpwWxFbXOAaH2Dz_kU3QzGjY5s2z4AUJOYzTCBANNJWzr7LaklRRvVICUtvZNiT_SveUL5mqxYPeiXIESMpuOztFlGQF4hHZPzbyCJ5dtl9xqqD6vMVBgTMfHRH_RwlQjuEfKa34pYz3P-urQwgX11y0pNI/s1200/1760620765.png"],
  },
};

export default function PinToPinDistancePage() {
  return (
    <main className="container mx-auto px-4 py-4">
      <DistanceCalculator />
    </main>
  );
}
