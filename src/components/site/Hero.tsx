import heroImg from "@/assets/hero-clean-home.jpg";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, Award, BadgeCheck } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury clean modern living room"
          className="w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-white text-xs font-semibold tracking-widest uppercase animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-light" /> Premium Home Cleaning
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] animate-fade-in">
            Professional House Cleaning <span className="text-primary-light">You Can Trust</span>
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-white/85 max-w-2xl leading-relaxed animate-fade-in">
            Reliable, affordable, and detail-oriented cleaning services for homes and apartments
            across the United States. Sit back and enjoy a sparkling space — we'll handle the rest.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in">
            <Button asChild variant="hero" size="xl">
              <a href="#contact">Get Free Estimate</a>
            </Button>
            <Button asChild variant="outlineWhite" size="xl">
              <a href="tel:+12055451327" className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              { icon: ShieldCheck, label: "Licensed & Insured" },
              { icon: Award, label: "10+ Years Experience" },
              { icon: BadgeCheck, label: "Satisfaction Guaranteed" },
            ].map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white"
              >
                <span className="grid place-items-center h-9 w-9 rounded-full bg-primary-light/90">
                  <b.icon className="h-4 w-4 text-white" />
                </span>
                <span className="text-sm font-medium">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-widest uppercase float-anim hidden md:block">
        scroll
      </div>
    </section>
  );
}
