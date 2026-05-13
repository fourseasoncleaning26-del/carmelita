import { Users, CalendarCheck, Heart } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const items = [
  { icon: Users, title: "Professional Team", text: "Background-checked, trained cleaners who treat your home with respect." },
  { icon: CalendarCheck, title: "Reliable Scheduling", text: "Flexible appointments that fit your life — on time, every time." },
  { icon: Heart, title: "Personalized Solutions", text: "Custom cleaning plans tailored to your home and your priorities." },
];

export function About() {
  useScrollReveal();
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-on-scroll">
          <span className="text-xs tracking-[0.25em] uppercase font-semibold text-primary-light">About Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            About Four Season Cleaning Services
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We are committed to delivering high-quality residential cleaning services with
            professionalism, attention to detail, and genuine care. Our mission is simple — to
            provide clean, healthy, and comfortable spaces for every client we serve.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From single visits to recurring care, every appointment is handled by our trusted team
            using safe, effective products. Your home deserves nothing less.
          </p>

          <div className="mt-10 flex flex-wrap gap-8">
            <div>
              <div className="text-4xl font-bold text-gradient">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient">2,500+</div>
              <div className="text-sm text-muted-foreground mt-1">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 gap-5">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="animate-on-scroll group flex gap-5 p-7 rounded-3xl bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="shrink-0 grid place-items-center h-14 w-14 rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <it.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-primary">{it.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
