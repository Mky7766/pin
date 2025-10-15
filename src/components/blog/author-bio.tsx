
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

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

export function AuthorBio() {
  return (
    <div className="mt-16 flex items-start gap-6 rounded-lg border bg-card p-6 shadow-sm">
      <Avatar className="h-16 w-16">
        <AvatarImage src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_Pb2UOmU5QryscCr-gz2XzgvK3uhhfSbF3rfqUpVs7VQEcJh6kBU6FJbMhb9IJClqK1vej4iURwrRt4xPMmSfSiub2EdZnE-JTojkCxwvGmGyiSHbwLnLqQtw-9U30ojK5lV5b7egz0NaLt1kaswvaNvY0S3XHj6k1Tpzsu2KEJyryh07XDRPxmyChkCF/s320/cropped-654798098.png" alt="Dropped Pin Logo" />
        <AvatarFallback>DP</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
            <h4 className="text-lg font-bold">Dropped Pin</h4>
            <VerifiedIcon />
        </div>
        <p className="text-sm text-muted-foreground mb-4">
            Dropped Pin is a free online tool to find and share exact location coordinates from a dropped pin on Google Maps. Our mission is to make location sharing smarter and faster for everyone.
        </p>
        <Button variant="link" asChild className="p-0 h-auto">
            <Link href="/">Visit Website</Link>
        </Button>
      </div>
    </div>
  );
}
