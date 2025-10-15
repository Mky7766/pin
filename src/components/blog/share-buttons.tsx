
'use client';

import { Twitter, Facebook, Linkedin, Link as LinkIcon, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

interface ShareButtonsProps {
  url: string;
  title: string;
  description: string;
}

export function ShareButtons({ url, title, description }: ShareButtonsProps) {
  const { toast } = useToast();

  const shareOptions = [
    {
      name: 'Twitter',
      icon: <Twitter />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: 'Facebook',
      icon: <Facebook />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin />,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`,
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle />,
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(title)}%20${encodeURIComponent(url)}`,
    },
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      toast({
        title: "Link Copied!",
        description: "The link has been copied to your clipboard.",
      });
    });
  };

  return (
    <div className="mt-12">
        <h3 className="font-headline text-2xl font-bold mb-4">Share this post</h3>
        <div className="flex flex-wrap items-center gap-2">
            {shareOptions.map((option) => (
                <Button variant="outline" size="icon" asChild key={option.name}>
                    <a href={option.url} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${option.name}`}>
                        {option.icon}
                    </a>
                </Button>
            ))}
            <Button variant="outline" size="icon" onClick={handleCopyLink} aria-label="Copy link">
                <LinkIcon />
            </Button>
        </div>
    </div>
  );
}
