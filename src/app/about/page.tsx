
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="prose max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-3xl font-bold mb-4">About Dropped Pin Finder</h2>
        <p className="mb-6">
          <span className="font-bold">Dropped Pin</span> is a free and user-friendly online tool designed to help people locate exact coordinates of any pinned location on Google Maps. Whether you’re trying to share your current location, mark a meeting point, or identify a specific spot on the map, our tool makes it simple and quick.
        </p>
        <p className="mb-6">
          We built this tool with the intention of helping users – travelers, delivery professionals, friends, or businesses – who often need to share precise locations via latitude and longitude. No login, no complexity – just drop a pin and copy the coordinates.
        </p>
        <p className="mb-6">
          At <span className="font-bold">Dropped Pin</span>, our mission is to make location sharing smarter, faster, and accessible for everyone. This lightweight tool works on all devices and browsers and is completely free to use.
        </p>
        <p className="mb-6">
          Whether you’re using it for personal navigation, business logistics, or sharing location with friends and family – Dropped Pin is here to help. 🎯
        </p>

        <div className="mt-16 not-prose">
          <h3 className="font-headline text-2xl font-bold mb-6 text-center">Meet the Founder</h3>
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src="https://picsum.photos/seed/founder/200/200" alt="Mukesh Kumar Yogi" />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
            <h4 className="text-xl font-bold">Mukesh Kumar Yogi</h4>
            <p className="text-muted-foreground">Founder of Dropped Pin</p>
          </div>
        </div>
      </div>
    </main>
  );
}
