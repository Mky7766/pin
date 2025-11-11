
'use client';

import { useState, useRef, useEffect } from 'react';
import {
  AlertCircle,
  MapPin,
  Trash2,
  MoveHorizontal,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

declare global {
  interface Window {
    google: any;
    mapScriptLoaded: boolean;
  }
}

export default function DistanceCalculator() {
  const [pinA, setPinA] = useState<{ lat: number; lng: number } | null>(null);
  const [pinB, setPinB] = useState<{ lat: number; lng: number } | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [nextPin, setNextPin] = useState<'A' | 'B'>('A');

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const markerA = useRef<any>(null);
  const markerB = useRef<any>(null);
  const lineRef = useRef<any>(null);

  const [isApiReady, setIsApiReady] = useState(false);
  const [apiKeyMissing, setApiKeyMissing] = useState(false);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey || apiKey === 'YOUR_GOOGLE_MAPS_API_KEY_HERE') {
      setApiKeyMissing(true);
      return;
    }

    if (window.google && window.google.maps) {
      setIsApiReady(true);
      return;
    }
    
    if (window.mapScriptLoaded) {
      const interval = setInterval(() => {
        if (window.google && window.google.maps) {
          setIsApiReady(true);
          clearInterval(interval);
        }
      }, 100);
      return;
    }

    window.mapScriptLoaded = true;
    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setIsApiReady(true);
    document.head.appendChild(script);

  }, []);


  useEffect(() => {
    if (isApiReady) {
      initializeMap();
    }
  }, [isApiReady]);

  const calculateDistance = (p1: {lat: number, lng: number}, p2: {lat: number, lng: number}) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (p2.lat - p1.lat) * (Math.PI / 180);
    const dLng = (p2.lng - p1.lng) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(p1.lat * (Math.PI / 180)) * Math.cos(p2.lat * (Math.PI / 180)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const dist = R * c;
    setDistance(dist);
  };

  const drawLine = () => {
    if (lineRef.current) {
      lineRef.current.setMap(null);
    }
    if (pinA && pinB && mapInstance.current) {
      const line = new window.google.maps.Polyline({
        path: [pinA, pinB],
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      line.setMap(mapInstance.current);
      lineRef.current = line;
    }
  };

  const handleMapClick = (e: any) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();

    if (nextPin === 'A') {
      setPinA({ lat, lng });
      markerA.current?.setMap(null);
      markerA.current = new window.google.maps.Marker({
        position: { lat, lng },
        map: mapInstance.current,
        label: 'A',
      });
      setNextPin('B');
      if (pinB) {
        calculateDistance({ lat, lng }, pinB);
      }
    } else {
      setPinB({ lat, lng });
      markerB.current?.setMap(null);
      markerB.current = new window.google.maps.Marker({
        position: { lat, lng },
        map: mapInstance.current,
        label: 'B',
      });
      setNextPin('A');
      if (pinA) {
        calculateDistance(pinA, { lat, lng });
      }
    }
  };
  
  useEffect(() => {
    if(pinA && pinB){
      drawLine();
    }
  }, [pinA, pinB]);

  const initializeMap = () => {
    if (!mapRef.current || !window.google || mapInstance.current) return;

    const jaipur = { lat: 26.9124, lng: 75.7873 };
    mapInstance.current = new window.google.maps.Map(mapRef.current, {
      zoom: 6,
      center: jaipur,
      streetViewControl: false,
      mapTypeControl: true,
      gestureHandling: 'greedy',
      rotateControl: true,
    });

    mapInstance.current.addListener('click', handleMapClick);
  };
  
  const handleClearPins = () => {
    setPinA(null);
    setPinB(null);
    setDistance(null);
    markerA.current?.setMap(null);
    markerB.current?.setMap(null);
    lineRef.current?.setMap(null);
    setNextPin('A');
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl md:text-4xl text-primary">
          Pin to Pin Distance
        </CardTitle>
        <CardDescription className="!mt-2">
          Click on the map to drop Pin A and Pin B, and measure the distance between them.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {apiKeyMissing ? (
            <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Google Maps API Key Missing</AlertTitle>
            <AlertDescription>
              Please add your Google Maps API key to a `.env.local` file as `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` to enable the map.
            </AlertDescription>
          </Alert>
        ) : (
          <div
            ref={mapRef}
            className="h-[400px] w-full rounded-lg bg-muted shadow-inner"
            aria-label="Google Map"
          />
        )}
        <div className="text-center mt-6 space-y-4">
          <div className="flex justify-around flex-wrap gap-4">
            <p className="font-semibold text-lg">
              <MapPin className="inline-block mr-2 h-5 w-5 text-red-500" />
              Pin A: <span className="font-mono text-primary">{pinA ? `${pinA.lat.toFixed(4)}, ${pinA.lng.toFixed(4)}` : 'Not set'}</span>
            </p>
             <p className="font-semibold text-lg">
              <MapPin className="inline-block mr-2 h-5 w-5 text-blue-500" />
              Pin B: <span className="font-mono text-primary">{pinB ? `${pinB.lat.toFixed(4)}, ${pinB.lng.toFixed(4)}` : 'Not set'}</span>
            </p>
          </div>
          {distance !== null && (
            <div className="font-bold text-2xl">
              <MoveHorizontal className="inline-block mr-2 h-6 w-6" />
              Distance: <span className="text-primary">{distance.toFixed(2)} km</span>
            </div>
          )}
          <div className='flex justify-center items-center gap-2'>
            <Badge>Next Pin: {nextPin}</Badge>
            <Button onClick={handleClearPins} variant="destructive">
                <Trash2 className="mr-2" /> Clear Pins
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
