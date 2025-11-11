
import { Metadata } from 'next';
import DistanceCalculator from './distance-calculator';

export const metadata: Metadata = {
  title: 'Pin to Pin Distance Calculator',
  description: 'Calculate the distance between two points on a map. Drop two pins to measure the distance in kilometers instantly.',
};

export default function PinToPinDistancePage() {
  return (
    <main className="container mx-auto px-4 py-4">
      <DistanceCalculator />
    </main>
  );
}
