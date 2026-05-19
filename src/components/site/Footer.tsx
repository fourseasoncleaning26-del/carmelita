import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import logoImg from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="Four Season Logo"
              className="h-10 w-10 object-contain rounded-full shadow-soft"
            />
            <span className="font-display font-semibold text-lg leading-tight">
              Four Season
              <span className="block text-[11px] tracking-widest uppercase opacity-70 font-sans">Cleaning Services</span>
            </span>
          </div>
          <p className="mt-5 text-white/70 text-sm leading-relaxed">
            Premium residential and commercial cleaning, delivered with care across the United States.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-primary-light transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/75">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Why Choose Us", "#why-us"],
              ["Reviews", "#testimonials"],
              ["Gallery", "#gallery"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={href}><a href={href} className="hover:text-primary-light transition-colors">{label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li>Standard Cleaning</li>
            <li>Deep Cleaning</li>
            <li>Move-In / Move-Out</li>
            <li>Apartment Cleaning</li>
            <li>Office Cleaning</li>
            <li>Post-Construction</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5">Get in Touch</h4>
          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-primary-light" />
              <a href="tel:+12054754223" className="hover:text-primary-light transition-colors">(205) 475-4223</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-primary-light" />
              <a href="mailto:fourseasoncleaning26@gmail.com" className="hover:text-primary-light transition-colors">fourseasoncleaning26@gmail.com</a>
            </li>
            <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary-light" /> Serving homes across the U.S.</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} Four Season Cleaning Services. All rights reserved. |{" "}
            <a
              href="https://agenciaadcompany.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors font-medium underline"
            >
              Created by AD Company
            </a>
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
