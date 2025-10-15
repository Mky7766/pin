import Image from 'next/image';

export default function DroppedPinLogo() {
  return (
    <Image
      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZS4ZrAplYEXP1MEzjBt1GJQRFz75AM34nlUAl1XUmzUfsYLwFaUdLR-JZokbK-G_ADcMdlSS6eI2VSZ7kDz3SiNl2EFRGSO1okkD9wKoG-9MPOk229YNXCCT5AnyLazE6h4WIEzhRyv9rZQD-BdZNxHdfFssI3xQFfqE9ggnCQUXolA8LyE30ejvAmUoO/s1600/cropped-kgoljdakjodfjkpo-1-144x48.png"
      alt="Dropped Pin Logo"
      width={144}
      height={48}
      className="h-8 w-auto"
      priority
    />
  );
}
