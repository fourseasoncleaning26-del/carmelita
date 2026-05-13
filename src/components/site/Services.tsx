import { Sparkles, Sprout, Truck, Building2, Briefcase, HardHat, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  { icon: Sparkles, title: "Standard Cleaning", text: "Routine cleaning that keeps your home fresh, tidy, and welcoming week after week." },
  { icon: Sprout, title: "Deep Cleaning", text: "A top-to-bottom reset for hard-to-reach spots, build-up, and seasonal refreshes." },
  { icon: Truck, title: "Move-In / Move-Out", text: "Hand over the keys with confidence — spotless results for landlords and new homes." },
  { icon: Building2, title: "Apartment Cleaning", text: "Fast, thorough cleaning tailored to apartments and condos of every size." },
  { icon: Briefcase, title: "Office Cleaning", text: "Healthier, more productive workspaces with reliable scheduled visits." },
  { icon: HardHat, title: "Post-Construction", text: "Dust, debris, and residue removed so your new space is truly move-in ready." },
];

export function Services() {
  useScrollReveal();
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center animate-on-scroll">
          <span className="text-xs tracking-[0.25em] uppercase font-semibold text-primary-light">Our Services</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Cleaning Solutions for Every Space
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Choose the service that fits your needs — every package is fully customizable.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="animate-on-scroll group relative p-8 rounded-3xl bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary-light/10 group-hover:bg-primary-light/20 transition-colors duration-500" />
              <span className="relative grid place-items-center h-14 w-14 rounded-2xl bg-primary text-white shadow-soft group-hover:scale-110 transition-transform duration-500">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-6 font-display text-2xl font-semibold text-primary">{s.title}</h3>
              <p className="relative mt-3 text-muted-foreground leading-relaxed">{s.text}</p>
              <a
                href="#contact"
                className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-light hover:gap-3 transition-all duration-300"
              >
                Get a quote <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
