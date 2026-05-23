import { useRef, useState } from "react";
import { MapPin, Phone, MessageCircle, User, Clock, Navigation, ExternalLink, Download, Share2, Check } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { useLanguage } from "@/context/LanguageContext";

const LAT = 26.8307161;
const LNG = 83.1543079;
const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;
const MAPS_VIEW = `https://maps.google.com/maps?q=${LAT},${LNG}&z=16&output=embed`;
const MAPS_OPEN = `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`;

function QRCard({ qr }: { qr: { value: string; label: string; sub: string; color: string } }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  function handleDownload() {
    const canvas = wrapRef.current?.querySelector("canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `shah-fireworks-${qr.label.toLowerCase().replace(/\s+/g, "-")}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  async function handleShare() {
    if (navigator.share) {
      try { await navigator.share({ url: qr.value, title: `Shah Fireworks — ${qr.label}` }); } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(qr.value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {}
    }
  }

  return (
    <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/6 transition-all duration-300 gap-4">
      <div ref={wrapRef} className="bg-white rounded-xl p-3 shadow-sm">
        <QRCodeCanvas value={qr.value} size={130} level="H" fgColor={qr.color} bgColor="#FFFFFF" />
      </div>
      <div className="text-center flex-1">
        <h4 className="font-bold text-sm text-foreground mb-1" style={{ color: qr.color }}>{qr.label}</h4>
        <p className="text-xs text-center text-muted-foreground leading-relaxed">{qr.sub}</p>
      </div>
      <div className="flex gap-2 w-full">
        <button
          onClick={handleDownload}
          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold border border-border rounded-lg py-2 text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
        >
          <Download className="h-3.5 w-3.5" /> Save PNG
        </button>
        <button
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold border border-primary/30 bg-primary/8 text-primary rounded-lg py-2 hover:bg-primary/15 transition-colors"
        >
          {copied
            ? <><Check className="h-3.5 w-3.5" /> Copied!</>
            : <><Share2 className="h-3.5 w-3.5" /> Share</>}
        </button>
      </div>
    </div>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const domain = typeof window !== "undefined" ? window.location.origin : "https://shahfireworks.in";

  const qrCodes = [
    {
      value: domain,
      label: t("contact_qr_website"),
      sub: t("contact_qr_website_sub"),
      color: "#DC2626",
      bg: "bg-red-50",
    },
    {
      value: `${domain}/catalogue`,
      label: t("contact_qr_catalogue"),
      sub: t("contact_qr_catalogue_sub"),
      color: "#B45309",
      bg: "bg-amber-50",
    },
    {
      value: `${domain}/events`,
      label: t("contact_qr_book"),
      sub: t("contact_qr_book_sub"),
      color: "#7C3AED",
      bg: "bg-purple-50",
    },
    {
      value: "https://wa.me/918934859810",
      label: t("contact_qr_whatsapp"),
      sub: t("contact_qr_whatsapp_sub"),
      color: "#16A34A",
      bg: "bg-green-50",
    },
  ];

  return (
    <div className="min-h-screen">

      {/* Header */}
      <section className="relative py-16 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 to-transparent pointer-events-none" />
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t("contact_title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact_subtitle")}</p>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12 max-w-6xl mx-auto space-y-12">

        {/* Contact Cards + Fast Response */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact details */}
          <div className="bg-card rounded-2xl border border-border p-7 shadow-md space-y-7">

            {/* Owner */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{t("contact_owner")}</p>
                <p className="text-lg font-bold text-foreground">Mukhtar Ahmad Shah</p>
                <p className="text-sm text-muted-foreground">{t("owner_title")}</p>
              </div>
            </div>

            <div className="h-px bg-border" />

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">{t("contact_call")}</p>
                <a href="tel:+919452457572" className="block text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  +91 9452457572
                </a>
                <a href="tel:+917985759036" className="block text-base text-muted-foreground hover:text-primary transition-colors mt-1">
                  +91 7985759036
                </a>
              </div>
            </div>

            <div className="h-px bg-border" />

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-[#25D366]/10 rounded-xl flex items-center justify-center shrink-0">
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">{t("contact_whatsapp")}</p>
                <a
                  href="https://wa.me/918934859810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-[#25D366] hover:underline"
                >
                  +91 8934859810
                </a>
                <p className="text-sm text-muted-foreground mt-1">Available 24/7</p>
              </div>
            </div>

            <div className="h-px bg-border" />

            {/* Address + Directions */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">{t("contact_address")}</p>
                <p className="text-base font-semibold text-foreground leading-snug">{t("contact_address_full")}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  GPS: {LAT}, {LNG}
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href={MAPS_DIRECTIONS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-lg px-4 py-2.5 transition-colors shadow"
                  >
                    <Navigation className="h-4 w-4" />
                    {t("contact_directions")}
                  </a>
                  <a
                    href={MAPS_OPEN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary border border-primary/25 bg-primary/8 hover:bg-primary/15 rounded-lg px-4 py-2.5 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View on Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="h-px bg-border" />

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{t("contact_hours")}</p>
                <p className="text-sm text-foreground leading-relaxed">{t("contact_hours_body")}</p>
              </div>
            </div>
          </div>

          {/* Fast response + map */}
          <div className="flex flex-col gap-6">

            {/* WhatsApp CTA card */}
            <div className="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 rounded-2xl border border-[#25D366]/25 p-7 text-center shadow-md">
              <MessageCircle className="h-10 w-10 text-[#25D366] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {t("contact_fast")}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{t("contact_fast_body")}</p>
              <a
                href="https://wa.me/918934859810"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full h-13 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white text-base font-semibold py-3 transition-colors shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                {t("contact_chat")}
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl border border-border overflow-hidden shadow-md flex-1 min-h-[220px]">
              <iframe
                src={MAPS_VIEW}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "220px", display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shah Fireworks Location"
              />
            </div>
          </div>
        </div>

        {/* QR Codes — 4 codes */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              {t("contact_qr_title")}
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Save time — scan any code below with your phone camera
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {qrCodes.map((qr, i) => (
              <QRCard key={i} qr={qr} />
            ))}
          </div>
        </div>

        {/* Share location section */}
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Visit Our Shop
          </h3>
          <p className="text-muted-foreground text-sm mb-2">
            {t("contact_address_full")}
          </p>
          <p className="text-xs text-muted-foreground mb-6">
            GPS Coordinates: {LAT}, {LNG}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary hover:bg-primary/90 rounded-xl px-6 py-3 transition-colors shadow-lg shadow-primary/25"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
            <a
              href={`https://wa.me/918934859810?text=${encodeURIComponent("Hello! I want to visit your shop. Please share directions.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20b858] rounded-xl px-6 py-3 transition-colors shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
              Ask for Directions on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
