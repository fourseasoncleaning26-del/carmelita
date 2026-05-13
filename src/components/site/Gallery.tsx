import kitchen from "@/assets/gallery-kitchen.jpg";
import bathroom from "@/assets/gallery-bathroom.jpg";
import bedroom from "@/assets/gallery-bedroom.jpg";
import living from "@/assets/gallery-living.jpg";
import hero from "@/assets/hero-clean-home.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const items = [
  { src: kitchen, label: "Kitchen Refresh", tag: "Deep Clean" },
  { src: bathroom, label: "Sparkling Bathroom", tag: "Standard" },
  { src: bedroom, label: "Restful Bedroom", tag: "Apartment" },
  { src: living, label: "Pristine Living Room", tag: "Move-Out" },
  { src: hero, label: "Luxury Open Space", tag: "Deep Clean" },
];

export function Gallery() {
  useScrollReveal();
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center animate-on-scroll">
          <span className="text-xs tracking-[0.25em] uppercase font-semibold text-primary-light">Our Work</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Spaces We've Transformed
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            A glimpse at the kind of results you can expect in your home.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {items.map((it, i) => (
            <figure
              key={it.label}
              className={`animate-on-scroll group relative overflow-hidden rounded-3xl shadow-card ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className={`w-full ${i === 0 ? "h-full min-h-[300px] lg:min-h-[520px]" : "h-56 lg:h-64"} object-cover transition-transform duration-700 group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/15 to-transparent opacity-90" />
              <figcaption className="absolute bottom-0 inset-x-0 p-5 lg:p-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-primary-light text-[10px] tracking-widest uppercase font-semibold">
                  {it.tag}
                </span>
                <div className="mt-2 font-display text-lg lg:text-xl font-semibold">{it.label}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
