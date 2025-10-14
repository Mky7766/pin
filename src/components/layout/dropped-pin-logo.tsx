import { cn } from '@/lib/utils';

export default function DroppedPinLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 145 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('text-foreground', className)}
    >
      <path
        d="M17.0002 0.333344C8.00018 0.333344 0.666847 7.66668 0.666847 16.6667C0.666847 29.3333 17.0002 33.3333 17.0002 33.3333C17.0002 33.3333 33.3335 29.3333 33.3335 16.6667C33.3335 7.66668 26.0002 0.333344 17.0002 0.333344Z"
        fill="#EF4444"
      />
      <path
        d="M17 12C14.2386 12 12 14.2386 12 17C12 19.7614 14.2386 22 17 22C19.7614 22 22 19.7614 22 17C22 14.2386 19.7614 12 17 12Z"
        fill="white"
      />
      <text
        x="40"
        y="22"
        fontFamily="sans-serif"
        fontSize="18"
        fill="currentColor"
        className="font-semibold"
      >
        Dropped Pin
      </text>
    </svg>
  );
}
