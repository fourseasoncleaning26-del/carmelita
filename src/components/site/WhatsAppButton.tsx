import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phone = "15551234567";
  const text = encodeURIComponent("Hi! I'd like a free cleaning estimate.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid place-items-center h-14 w-14 rounded-full bg-whatsapp text-white shadow-elegant hover:scale-110 transition-transform float-anim"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full ring-4 ring-whatsapp/30 animate-ping pointer-events-none" />
    </a>
  );
}
