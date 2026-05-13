import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reviews = [
  { text: "Best cleaning service I've ever hired. Extremely professional and detailed.", name: "Sarah M.", role: "Homeowner" },
  { text: "They transformed my home. Highly recommended!", name: "Jessica T.", role: "Apartment Resident" },
  { text: "Reliable, friendly, and always on time.", name: "Amanda R.", role: "Office Manager" },
];

export function Testimonials() {
  useScrollReveal();
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-on-scroll">
          <span className="text-xs tracking-[0.25em] uppercase font-semibold text-primary-light">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Loved by Homes Across America
          </h2>
        </div>

        <div className="relative mt-14 animate-on-scroll">
          <div className="relative rounded-3xl bg-secondary border border-border p-10 lg:p-14 shadow-soft overflow-hidden">
            <Quote className="absolute top-6 left-6 h-16 w-16 text-primary-light/15" />
            <div className="flex justify-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p key={i} className="mt-6 text-xl lg:text-2xl font-display text-primary leading-relaxed animate-fade-in">
              "{reviews[i].text}"
            </p>
            <div className="mt-8">
              <div className="font-semibold text-primary">— {reviews[i].name}</div>
              <div className="text-sm text-muted-foreground">{reviews[i].role}</div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              aria-label="Previous"
              onClick={() => setI((v) => (v - 1 + reviews.length) % reviews.length)}
              className="h-11 w-11 rounded-full bg-card border border-border shadow-soft hover:bg-primary hover:text-white hover:border-primary transition-all grid place-items-center"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  aria-label={`Go to slide ${k + 1}`}
                  onClick={() => setI(k)}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-2 bg-border"}`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={() => setI((v) => (v + 1) % reviews.length)}
              className="h-11 w-11 rounded-full bg-card border border-border shadow-soft hover:bg-primary hover:text-white hover:border-primary transition-all grid place-items-center"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
