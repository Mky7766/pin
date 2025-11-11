'use client';

import { useState, useRef, useEffect } from 'react';
import {
  AlertCircle,
  MapPin,
  Trash2,
  MoveHorizontal,
  Search,
  Route,
  Link as LinkIcon,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const loadGoogleMapsScript = (apiKey: string, callback: () => void) => {
  if (window.google && window.google.maps) {
    callback();
    return;
  }

  const existingScript = document.getElementById('google-maps-script');
  if (existingScript) {
    existingScript.addEventListener('load', callback);
    return;
  }

  window.initMap = callback;

  const script = document.createElement('script');
  script.id = 'google-maps-script';
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=geometry,geocoding,routes`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
};

export default function DistanceCalculator() {
  const [pinA, setPinA] = useState<{ lat: number; lng: number } | null>(null);
  const [pinB, setPinB] = useState<{ lat: number; lng: number } | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [travelInfo, setTravelInfo] = useState<{distance: string, duration: string} | null>(null);
  const [nextPin, setNextPin] = useState<'A' | 'B'>('A');

  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRouteLoading, setIsRouteLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [googleMapsUrl, setGoogleMapsUrl] = useState<string>('');


  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const markerA = useRef<any>(null);
  const markerB = useRef<any>(null);
  const lineRef = useRef<any>(null);
  const directionsRendererRef = useRef<any>(null);


  const [isApiReady, setIsApiReady] = useState(false);
  const [apiKeyMissing, setApiKeyMissing] = useState(false);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey || apiKey === 'YOUR_GOOGLE_MAPS_API_KEY_HERE') {
      setApiKeyMissing(true);
      return;
    }
    loadGoogleMapsScript(apiKey, () => setIsApiReady(true));
  }, []);


  useEffect(() => {
    if (isApiReady) {
      initializeMap();
    }
  }, [isApiReady]);

  const calculateAndSetDistance = (p1: {lat: number, lng: number}, p2: {lat: number, lng: number}) => {
    if (window.google && window.google.maps && window.google.maps.geometry) {
        const point1 = new window.google.maps.LatLng(p1.lat, p1.lng);
        const point2 = new window.google.maps.LatLng(p2.lat, p2.lng);
        const distInMeters = window.google.maps.geometry.spherical.computeDistanceBetween(point1, point2);
        setDistance(distInMeters / 1000); // Convert to KM
        setGoogleMapsUrl(`https://www.google.com/maps/dir/${p1.lat},${p1.lng}/${p2.lat},${p2.lng}`);
    }
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

      // Fit map to show both markers
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(new window.google.maps.LatLng(pinA.lat, pinA.lng));
      bounds.extend(new window.google.maps.LatLng(pinB.lat, pinB.lng));
      mapInstance.current.fitBounds(bounds);
    }
  };
  
  const updatePin = (pin: 'A' | 'B', location: { lat: number; lng: number }, address?: string) => {
    const marker = pin === 'A' ? markerA : markerB;
    const setPin = pin === 'A' ? setPinA : setPinB;
    const setInput = pin === 'A' ? setInputA : setInputB;

    setPin(location);
    if(address) setInput(address);
    else if(window.google) {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ location }, (results: any, status: any) => {
            if(status === 'OK' && results[0]) {
                setInput(results[0].formatted_address);
            }
        });
    }

    marker.current?.setMap(null);
    marker.current = new window.google.maps.Marker({
      position: location,
      map: mapInstance.current,
      label: pin,
    });

    if (pin === 'A' && pinB) {
        calculateAndSetDistance(location, pinB);
    } else if (pin === 'B' && pinA) {
        calculateAndSetDistance(pinA, location);
    }
  }


  const handleMapClick = (e: any) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    const location = { lat, lng };

    if(directionsRendererRef.current) {
        directionsRendererRef.current.setDirections({routes: []}); // Clear previous routes
    }
    if(lineRef.current) {
        lineRef.current.setMap(null); // Clear straight line
    }
    setTravelInfo(null); // Clear travel info


    updatePin(nextPin, location);
    setNextPin(nextPin === 'A' ? 'B' : 'A');
  };
  
  useEffect(() => {
    if(pinA && pinB){
      // Only draw line if no route is displayed
      if (!directionsRendererRef.current || !directionsRendererRef.current.getDirections() || directionsRendererRef.current.getDirections().routes.length === 0) {
        drawLine();
      }
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
    
    directionsRendererRef.current = new window.google.maps.DirectionsRenderer();
    directionsRendererRef.current.setMap(mapInstance.current);

    mapInstance.current.addListener('click', handleMapClick);
  };
  
  const handleClear = () => {
    setPinA(null);
    setPinB(null);
    setDistance(null);
    setTravelInfo(null);
    setInputA('');
    setInputB('');
    setError(null);
    setGoogleMapsUrl('');
    markerA.current?.setMap(null);
    markerB.current?.setMap(null);
    lineRef.current?.setMap(null);
    directionsRendererRef.current?.setDirections({routes: []});
    setNextPin('A');
  };

  const handleGeocode = async () => {
    if (!inputA || !inputB) {
      setError('Please enter both locations.');
      return;
    }
    if (!window.google || !window.google.maps) {
        setError('Google Maps API is not ready.');
        return;
    }

    setIsLoading(true);
    setError(null);
    // Clear previous state but keep inputs
    setPinA(null);
    setPinB(null);
    setDistance(null);
    setTravelInfo(null);
    setGoogleMapsUrl('');
    markerA.current?.setMap(null);
    markerB.current?.setMap(null);
    lineRef.current?.setMap(null);
    directionsRendererRef.current?.setDirections({routes: []});


    const geocoder = new window.google.maps.Geocoder();

    try {
      const [resultsA, resultsB] = await Promise.all([
        geocoder.geocode({ address: inputA }),
        geocoder.geocode({ address: inputB }),
      ]);

      if (resultsA.results[0] && resultsB.results[0]) {
        const locA = { lat: resultsA.results[0].geometry.location.lat(), lng: resultsA.results[0].geometry.location.lng() };
        const locB = { lat: resultsB.results[0].geometry.location.lat(), lng: resultsB.results[0].geometry.location.lng() };
        
        updatePin('A', locA, resultsA.results[0].formatted_address);
        updatePin('B', locB, resultsB.results[0].formatted_address);
        
        calculateAndSetDistance(locA, locB);
        setNextPin('A');

      } else {
        if(!resultsA.results[0]) setError(`Could not find location for: ${inputA}`);
        if(!resultsB.results[0]) setError(`Could not find location for: ${inputB}`);
      }
    } catch (e: any) {
      console.error(e);
      setError(`Geocoding failed: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetDirections = async () => {
    if (!pinA || !pinB) {
        setError('Please set both Pin A and Pin B first.');
        return;
    }
    if (!window.google) {
        setError('Google Maps not loaded.');
        return;
    }

    setIsRouteLoading(true);
    setError(null);

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
        {
            origin: pinA,
            destination: pinB,
            travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result: any, status: any) => {
            setIsRouteLoading(false);
            if (status === window.google.maps.DirectionsStatus.OK) {
                lineRef.current?.setMap(null); // Hide straight line
                directionsRendererRef.current.setDirections(result);
                const route = result.routes[0].legs[0];
                setTravelInfo({
                    distance: route.distance.text,
                    duration: route.duration.text
                });
                setGoogleMapsUrl(`https://www.google.com/maps/dir/?api=1&origin=${pinA.lat},${pinA.lng}&destination=${pinB.lat},${pinB.lng}`);
            } else {
                setError(`Directions request failed due to ${status}`);
            }
        }
    );
  };


  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl md:text-4xl text-primary">
          Pin to Pin Distance
        </CardTitle>
        <CardDescription className="!mt-2">
          Enter two locations or click on the map to measure the distance between them.
        </CardDescription>
      </CardHeader>
      <CardContent>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Input 
                placeholder="Enter Location A (e.g., Jaipur or 302012)" 
                value={inputA}
                onChange={(e) => setInputA(e.target.value)}
                disabled={isLoading}
            />
            <Input 
                placeholder="Enter Location B (e.g., Delhi or 110001)" 
                value={inputB}
                onChange={(e) => setInputB(e.target.value)}
                disabled={isLoading}
            />
            <Button onClick={handleGeocode} disabled={isLoading}>
                <Search className="mr-2" />
                {isLoading ? 'Calculating...' : 'Calculate'}
            </Button>
        </div>
        {error && (
            <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}

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
            <div className="font-bold text-xl">
              <MoveHorizontal className="inline-block mr-2 h-6 w-6" />
              Straight Line Distance: <span className="text-primary">{distance.toFixed(2)} km</span>
            </div>
          )}
          {travelInfo && (
             <div className="font-bold text-xl">
                <Route className="inline-block mr-2 h-6 w-6" />
                Travel Distance: <span className="text-primary">{travelInfo.distance}</span> (~{travelInfo.duration})
            </div>
          )}
          <div className='flex justify-center items-center gap-2 flex-wrap'>
            <Badge>Next Pin to drop by clicking: {nextPin}</Badge>
            <Button onClick={handleGetDirections} variant="default" disabled={!pinA || !pinB || isRouteLoading}>
                <Route className="mr-2" />
                {isRouteLoading ? 'Getting Route...' : 'Get Directions'}
            </Button>
            <Button asChild variant="outline" disabled={!googleMapsUrl}>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="mr-2" /> Open in Google Maps
                </a>
            </Button>
            <Button onClick={handleClear} variant="destructive">
                <Trash2 className="mr-2" /> Clear All
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
