
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


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


export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="prose max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-3xl font-bold mb-4">About Dropped Pin Finder</h2>
        <p className="mb-6">
          <span className="font-bold">Dropped Pin</span> is a free and user-friendly online tool designed to help people locate exact coordinates of any pinned location on Google Maps. Whether you’re trying to share your current location, mark a meeting point, or identify a specific spot on the map, our tool makes it simple and quick.
        </p>
        
        <div className="my-12 not-prose">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4 ring-2 ring-primary ring-offset-4 ring-offset-background">
              <AvatarImage src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_BXmz0vq7Ke0_UTIVGnKxrlFUXzOU9jyv-EDwrtzR8Ib06sqbdm6D3BQMjOv4LHWhDjSi1G_9ELzDPOpGjm3U2GRNnRLc9-m4Sa_I-ByjJkXpuSHnaVwEWKCWRAS1vSdigM4mnvaEJttvytp-Anlb2-bndXVuhsTEXS3k94F-47EgnQVggQMtk_PYmmyB/s1712/Mukesh%20Kumar%20Yogi.jpg" alt="Mukesh Kumar Yogi" />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-2">
              <h4 className="text-xl font-bold">Mukesh Kumar Yogi</h4>
              <VerifiedIcon />
            </div>
            <p className="text-muted-foreground">Founder of Dropped Pin</p>
          </div>
        </div>

        <p className="mb-6">
          We built this tool with the intention of helping users – travelers, delivery professionals, friends, or businesses – who often need to share precise locations via latitude and longitude. No login, no complexity – just drop a pin and copy the coordinates.
        </p>
        <p className="mb-6">
          At <span className="font-bold">Dropped Pin</span>, our mission is to make location sharing smarter, faster, and accessible for everyone. This lightweight tool works on all devices and browsers and is completely free to use.
        </p>
        <p className="mb-6">
          Whether you’re using it for personal navigation, business logistics, or sharing location with friends and family – Dropped Pin is here to help. 🎯
        </p>
      </div>
    </main>
  );
}
