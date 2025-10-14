"use client";

import { useState, useRef, useEffect } from 'react';
import {
  AlertCircle,
  Clipboard,
  Link as LinkIcon,
  LocateFixed,
  Mail,
  MapPin,
  MessageCircle,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

declare global {
  interface Window {
    google: any;
  }
}

export default function LocationPicker() {
  const [locationLink, setLocationLink] = useState('');
  const [coordinates, setCoordinates] = useState('--- Click on Map ---');
  const [mapsLink, setMapsLink] = useState('#');
  const [whatsappLink, setWhatsappLink] = useState('#');
  const [emailLink, setEmailLink] = useState('#');

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const circleRef = useRef<any>(null);

  const [isApiReady, setIsApiReady] = useState(false);
  const [apiKeyMissing, setApiKeyMissing] = useState(false);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey || apiKey === 'YOUR_GOOGLE_MAPS_API_KEY_HERE') {
      setApiKeyMissing(true);
      return;
    }

    if (window.google && window.google.maps) {
      initializeMap();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setIsApiReady(true);
    document.head.appendChild(script);

    return () => {
      // Clean up the script tag if the component is unmounted
      const scripts = document.head.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src.includes('maps.googleapis.com')) {
          document.head.removeChild(scripts[i]);
        }
      }
    };
  }, []);

  useEffect(() => {
    if (isApiReady) {
      initializeMap();
    }
  }, [isApiReady]);

  const initializeMap = () => {
    if (!mapRef.current || !window.google) return;

    const jaipur = { lat: 26.9124, lng: 75.7873 };
    mapInstance.current = new window.google.maps.Map(mapRef.current, {
      zoom: 6,
      center: jaipur,
      streetViewControl: false,
      mapTypeControl: true,
    });

    mapInstance.current.addListener('click', function (e: any) {
      const lat = e.latLng.lat().toFixed(6);
      const lng = e.latLng.lng().toFixed(6);
      const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

      setLocationLink(googleMapsUrl);
      setCoordinates(`${lat}, ${lng}`);
      setMapsLink(googleMapsUrl);
      setWhatsappLink(`https://wa.me/?text=📍%20Location:%20${encodeURIComponent(googleMapsUrl)}`);
      setEmailLink(`mailto:?subject=Dropped%20Pin&body=📍%20Location:%20${encodeURIComponent(googleMapsUrl)}`);

      markerRef.current?.setMap(null);
      circleRef.current?.setMap(null);

      markerRef.current = new window.google.maps.Marker({
        position: { lat: parseFloat(lat), lng: parseFloat(lng) },
        map: mapInstance.current,
      });
    });
  };

  const handleCopyLink = () => {
    if (!locationLink) {
      alert('Please Click On The Map First.');
      return;
    }
    navigator.clipboard.writeText(locationLink).then(() => {
      alert('🔗 Link Copied!');
    });
  };

  const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('Your Browser Does Not Support Geolocation.');
      return;
    }

    setCoordinates('🔍 The Location Is Being Searched...');

    const options = {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(6);
        const lng = position.coords.longitude.toFixed(6);
        const accuracy = position.coords.accuracy;
        const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

        setLocationLink(googleMapsUrl);
        setCoordinates(`${lat}, ${lng} (±${Math.round(accuracy)}m)`);
        setMapsLink(googleMapsUrl);
        setWhatsappLink(`https://wa.me/?text=📍%20Location:%20${encodeURIComponent(googleMapsUrl)}`);
        setEmailLink(`mailto:?subject=Dropped%20Pin&body=📍%20Location:%20${encodeURIComponent(googleMapsUrl)}`);
        
        const newPosition = { lat: parseFloat(lat), lng: parseFloat(lng) };
        mapInstance.current?.setCenter(newPosition);
        mapInstance.current?.setZoom(18);

        markerRef.current?.setMap(null);
        circleRef.current?.setMap(null);

        markerRef.current = new window.google.maps.Marker({
          position: newPosition,
          map: mapInstance.current,
          title: `Your Location (±${Math.round(accuracy)}m accuracy)`,
        });

        circleRef.current = new window.google.maps.Circle({
          strokeColor: '#3F51B5',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#3F51B5',
          fillOpacity: 0.15,
          map: mapInstance.current,
          center: newPosition,
          radius: accuracy,
        });
      },
      (error) => {
        let message = 'Could Not Get Location. ';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            message += 'Please allow location.';
            break;
          case error.POSITION_UNAVAILABLE:
            message += 'Location information is not available.';
            break;
          case error.TIMEOUT:
            message += "It's taking time to find the location. Please try again.";
            break;
          default:
            message += 'An unknown error has occurred.';
            break;
        }
        alert(message);
        setCoordinates('--- Click on Map ---');
      },
      options
    );
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl md:text-4xl text-primary">
          Dropped Pin
        </CardTitle>
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
        <div className="text-center mt-6">
          <p className="font-semibold text-lg">
            <MapPin className="inline-block mr-2 h-5 w-5" />
            Location: <span className="font-mono text-primary">{coordinates}</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
          <Button onClick={handleCopyLink}><Clipboard className="mr-2" /> Copy Link</Button>
          <Button onClick={handleGetCurrentLocation}><LocateFixed className="mr-2" /> Live Location</Button>
          <Button variant="outline" asChild disabled={mapsLink === '#'}>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer">
              <LinkIcon className="mr-2" /> Open in Google Maps
            </a>
          </Button>
          <Button variant="outline" asChild disabled={whatsappLink === '#'}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2" /> WhatsApp
            </a>
          </Button>
          <Button variant="outline" asChild disabled={emailLink === '#'}>
            <a href={emailLink} target="_blank" rel="noopener noreferrer">
              <Mail className="mr-2" /> Email
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
