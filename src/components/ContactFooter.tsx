import { Phone, MapPin, Facebook, Mail } from "lucide-react";

const ContactFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Phone */}
          <div className="flex items-start gap-3 animate-slide-in">
            <div className="bg-accent p-3 rounded-lg">
              <Phone className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Phone</h3>
              <a href="tel:+27675902019" className="hover:text-accent transition-colors">
                +27 67 590 2019
              </a>
            </div>
          </div>

            <div className="flex items-start gap-3 animate-slide-in">
            <div className="bg-accent p-3 rounded-lg">
              <Mail className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <a href="mailto:jje.erasmus@gmail.com" className="hover:text-accent transition-colors">
                jje.erasmus@gmail.com
              </a>
            </div>
          </div>


          {/* Address */}
          <div className="flex items-start gap-3 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-accent p-3 rounded-lg">
              <MapPin className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Address</h3>
              <p>Gqeberha, South Africa</p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/10 p-4 rounded-full hover:bg-primary-foreground/20 transition-all hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@megan.dheaneshwer"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/10 p-4 rounded-full hover:bg-primary-foreground/20 transition-all hover:scale-110"
            aria-label="TikTok"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-primary-foreground/80">
            © 2026 Jonathan's Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;