import { useEffect, useState } from "react";
import { Menu, Phone, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18 py-3">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="grid place-items-center h-10 w-10 rounded-full bg-primary text-primary-foreground shadow-soft">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className={`font-display font-semibold text-lg leading-tight ${scrolled ? "text-primary" : "text-white"}`}>
            Four Season
            <span className="block text-[11px] tracking-widest uppercase opacity-80 font-sans">Cleaning Services</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-primary-light ${
                scrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+12055451327" className={`flex items-center gap-2 text-sm font-semibold ${scrolled ? "text-primary" : "text-white"}`}>
            <Phone className="h-4 w-4" /> +1 (205) 545-1327
          </a>
          <Button asChild variant="hero" size="lg">
            <a href="#contact">Get Free Estimate</a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className={`lg:hidden grid place-items-center h-10 w-10 rounded-full ${scrolled ? "bg-secondary text-primary" : "bg-white/10 text-white backdrop-blur"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border shadow-soft animate-fade-in">
          <div className="px-6 py-5 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="hero" size="lg" className="mt-2">
              <a href="#contact" onClick={() => setOpen(false)}>Get Free Estimate</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
