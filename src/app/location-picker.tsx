
"use client";

import { useState, useRef, useEffect } from 'react';
import {
  AlertCircle,
  Clipboard,
  Download,
  Link as LinkIcon,
  LocateFixed,
  Mail,
  MapPin,
  MessageCircle,
  QrCode,
} from 'lucide-react';
import QRCode from 'qrcode';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Image from 'next/image';

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
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=geometry,geocoding`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
};


export default function LocationPicker() {
  const [locationLink, setLocationLink] = useState('');
  const [coordinates, setCoordinates] = useState('--- Click on Map ---');
  const [mapsLink, setMapsLink] = useState('#');
  const [whatsappLink, setWhatsappLink] = useState('#');
  const [emailLink, setEmailLink] = useState('#');
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState('');
  const [isQrCodeDialogOpen, setIsQrCodeDialogOpen] = useState(false);

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
    loadGoogleMapsScript(apiKey, () => setIsApiReady(true));
  }, []);

  useEffect(() => {
    if (isApiReady) {
      initializeMap();
    }
  }, [isApiReady]);

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

    mapInstance.current.addListener('click', function (e: any) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

      updateLocationDetails(lat, lng, googleMapsUrl);
      
      markerRef.current?.setMap(null);
      circleRef.current?.setMap(null);

      markerRef.current = new window.google.maps.Marker({
        position: { lat: parseFloat(lat), lng: parseFloat(lng) },
        map: mapInstance.current,
      });
    });
  };
  
  const updateLocationDetails = (lat: number, lng: number, googleMapsUrl: string, accuracy?: number) => {
    setLocationLink(googleMapsUrl);
    setCoordinates(`${lat.toFixed(6)}, ${lng.toFixed(6)}${accuracy ? ` (±${Math.round(accuracy)}m)` : ''}`);
    setMapsLink(googleMapsUrl);
    setWhatsappLink(`https://wa.me/?text=📍%20Location:%20${encodeURIComponent(googleMapsUrl)}`);
    setEmailLink(`mailto:?subject=Dropped%20Pin&body=📍%20Location:%20${encodeURIComponent(googleMapsUrl)}`);
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

  const handleGenerateQrCode = async () => {
    if (!locationLink) {
      alert('Please select a location on the map first.');
      return;
    }
    try {
      const url = await QRCode.toDataURL(locationLink, { width: 300 });
      setQrCodeDataUrl(url);
      setIsQrCodeDialogOpen(true);
    } catch (err) {
      console.error(err);
      alert('Could not generate QR code.');
    }
  };

  const handleDownloadQrCode = () => {
    const link = document.createElement('a');
    link.href = qrCodeDataUrl;
    link.download = 'location-qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

        updateLocationDetails(lat, lng, googleMapsUrl, accuracy);
        
        const newPosition = { lat, lng };
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
        <CardDescription className="!mt-2">
         📍Just Click On The Map – Get Location, Copy, And Share!📍
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
        <div className="text-center mt-6">
          <p className="font-semibold text-lg">
            <MapPin className="inline-block mr-2 h-5 w-5" />
            Location: <span className="font-mono text-primary">{coordinates}</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
          <Button onClick={handleCopyLink}><Clipboard className="mr-2" /> Copy Link</Button>
          <Button onClick={handleGetCurrentLocation}><LocateFixed className="mr-2" /> Live Location</Button>
          <Button onClick={handleGenerateQrCode}><QrCode className="mr-2" /> Generate QR Code</Button>
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

        <Dialog open={isQrCodeDialogOpen} onOpenChange={setIsQrCodeDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Location QR Code</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center gap-4">
              {qrCodeDataUrl && (
                <Image
                  src={qrCodeDataUrl}
                  alt="Location QR Code"
                  width={300}
                  height={300}
                  className="rounded-md"
                />
              )}
              <Button onClick={handleDownloadQrCode}>
                <Download className="mr-2 h-4 w-4" />
                Download QR Code
              </Button>
            </div>
          </DialogContent>
        </Dialog>

      </CardContent>
    </Card>
  );
}
