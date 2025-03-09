import Link from "next/link";
import { FOOTER_DATA } from "@/constants";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

export const Footer = () => {
  const socialIcons = {
    instagram: <Instagram className="h-5 w-5" />,
    twitter: <Twitter className="h-5 w-5" />,
    facebook: <Facebook className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />,
  };

  return (
    <footer className="py-8 bg-background-2 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center text-primary/70 text-sm md:text-base">
          <p className="mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et
          </p>

          <div className="flex text-sm text-center text-primary items-center justify-center gap-1">
            <p className="mb-4 text-sm">{FOOTER_DATA.copyright}</p>
            <div className="flex justify-center space-x-1 mb-4">
              {FOOTER_DATA.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-primary md:text-secondary/70 hover:text-primary underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            {FOOTER_DATA.socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-primary hover:text-primary transition-colors"
              >
                {socialIcons[link.icon as keyof typeof socialIcons]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
