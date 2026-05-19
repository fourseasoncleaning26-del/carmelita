import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { toast } from "sonner";


const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(30),
  service: z.string().trim().min(1, "Please select a service type"),
  botcheck: z.any().optional(),
});


export function Contact() {
  useScrollReveal();
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;

    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());

    if (data.botcheck) {
      setSent(true);
      return;
    }

    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "22c9ac68-c178-47c2-8768-8f7d4c887a4d",
          subject: "New Estimate Request - Four Season Cleaning",
          from_name: "Four Season Cleaning Website",
          ...data,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
        toast.success("Quote request sent successfully!");
      } else {
        toast.error(result.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Form submit error:", err);
      toast.error("An error occurred. Please call us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center animate-on-scroll">
          <span className="text-xs tracking-[0.25em] uppercase font-semibold text-primary-light">Contact</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Request Your Free Quote Today
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Tell us about your space — we'll respond within a few hours with a tailored quote.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5 animate-on-scroll">
            {[
              { icon: Phone, title: "Phone", value: "+1 (205) 545-1327", href: "tel:+12055451327" },
              { icon: Mail, title: "Email", value: "fourseasoncleaning26@gmail.com", href: "mailto:fourseasoncleaning26@gmail.com" },
              { icon: MapPin, title: "Service Area", value: "Serving homes across the United States", href: undefined },
            ].map((c) => (
              <a
                key={c.title}
                href={c.href}
                className="flex items-start gap-4 p-6 rounded-2xl bg-secondary border border-border hover:border-primary-light hover:shadow-soft transition-all duration-300"
              >
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-primary text-white shrink-0">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{c.title}</div>
                  <div className="mt-1 text-primary font-semibold">{c.value}</div>
                </div>
              </a>
            ))}

            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary to-primary-light text-white">
              <div className="text-sm uppercase tracking-widest font-semibold opacity-80">Office Hours</div>
              <div className="mt-2 font-display text-xl">Mon – Sat · 8AM – 7PM</div>
              <div className="mt-1 text-white/80 text-sm">Sundays by appointment</div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 p-8 lg:p-10 rounded-3xl bg-card border border-border shadow-elegant animate-on-scroll"
          >
            {sent ? (
              <div className="py-16 text-center">
                <div className="mx-auto grid place-items-center h-16 w-16 rounded-full bg-primary text-white">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-primary">Thanks — request received!</h3>
                <p className="mt-2 text-muted-foreground">We'll be in touch shortly with your free estimate.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-1">
                  <label className="text-sm font-semibold text-primary">Full Name</label>
                  <Input name="name" placeholder="Jane Doe" required className="mt-2 h-12 rounded-xl" />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-sm font-semibold text-primary">Phone</label>
                  <Input name="phone" placeholder="+1 (205) 545-1327" required className="mt-2 h-12 rounded-xl" />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold text-primary">Email</label>
                  <Input name="email" type="email" placeholder="you@email.com" required className="mt-2 h-12 rounded-xl" />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-semibold text-primary">Type of Cleaning Desired</label>
                  <select
                    name="service"
                    required
                    className="mt-2 block w-full h-12 px-4 rounded-xl border border-border bg-card text-foreground text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a service...</option>
                    <option value="Standard Cleaning">Standard Cleaning</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                    <option value="Move-In / Move-Out">Move-In / Move-Out</option>
                    <option value="Apartment Cleaning">Apartment Cleaning</option>
                    <option value="Office Cleaning">Office Cleaning</option>
                    <option value="Post-Construction">Post-Construction</option>
                  </select>
                  {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
                </div>
                {/* Honeypot field to block spam bots */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />
                <div className="sm:col-span-2">
                  <Button type="submit" variant="cta" size="xl" className="w-full sm:w-auto" disabled={loading}>
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    {loading ? "Sending..." : "Request Free Quote"}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
