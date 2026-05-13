import { Award, DollarSign, CalendarRange, Eye, Users, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reasons = [
  { icon: Award, title: "Experienced Professionals", text: "A trained team with a decade of hands-on cleaning expertise." },
  { icon: DollarSign, title: "Affordable Pricing", text: "Transparent rates with no hidden fees — quality you can budget for." },
  { icon: CalendarRange, title: "Flexible Scheduling", text: "Book the days and times that actually work for your routine." },
  { icon: Eye, title: "Attention to Detail", text: "We sweat the small stuff so your home looks and feels brand new." },
  { icon: Users, title: "Trusted by Local Families", text: "Hundreds of five-star reviews from neighbors across the country." },
  { icon: Zap, title: "Fast Response Time", text: "Quick quotes, easy bookings, and same-week availability." },
];

export function WhyChooseUs() {
  useScrollReveal();
  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none"
           style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--primary-light) 0%, transparent 40%), radial-gradient(circle at 80% 80%, var(--primary-light) 0%, transparent 40%)" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center animate-on-scroll">
          <span className="text-xs tracking-[0.25em] uppercase font-semibold text-primary-light">Why Choose Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            The Cleaning Service Families Recommend
          </h2>
          <p className="mt-5 text-white/75 text-lg">
            Six reasons our clients keep coming back — and tell their friends too.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="animate-on-scroll p-7 rounded-3xl bg-white/8 backdrop-blur-sm border border-white/15 hover:bg-white/12 hover:border-primary-light/50 transition-all duration-500"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <span className="grid place-items-center h-12 w-12 rounded-2xl bg-primary-light text-white">
                <r.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{r.title}</h3>
              <p className="mt-2 text-white/75 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
