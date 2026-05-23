import { Link } from "wouter";
import { Phone, MessageCircle, MapPin, Navigation } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { FireworksLogo } from "@/components/Logo";

const MAPS_LINK = "https://www.google.com/maps/dir/?api=1&destination=26.8307161,83.1543079";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card mt-8">
      <div className="container py-12 px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
            <FireworksLogo className="h-9 w-9 text-primary shrink-0" />
            <div className="flex flex-col leading-none">
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black tracking-tight text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>SHAH</span>
                <span className="text-xl font-light tracking-widest text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>FIREWORKS</span>
              </div>
              <span className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground">Est. 1947 · Gorakhpur, UP</span>
            </div>
          </Link>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            {t("footer_tagline")}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-foreground mb-5">{t("footer_quick")}</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              { href: "/", label: t("nav_home") },
              { href: "/catalogue", label: t("nav_catalogue") },
              { href: "/events", label: t("nav_book") },
              { href: "/wholesale", label: t("nav_wholesale") },
              { href: "/contact", label: t("nav_contact") },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-foreground mb-5">{t("footer_contact")}</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="text-foreground font-medium">Mukhtar Ahmad Shah</li>
            <li className="text-xs text-muted-foreground">{t("owner_title")}</li>
            <li>
              <a href="tel:+919452457572" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-3.5 w-3.5 shrink-0" /> +91 9452457572
              </a>
            </li>
            <li>
              <a href="tel:+917985759036" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-3.5 w-3.5 shrink-0" /> +91 7985759036
              </a>
            </li>
            <li>
              <a href="https://wa.me/918934859810" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#25D366] hover:underline">
                <MessageCircle className="h-3.5 w-3.5 shrink-0" /> +91 8934859810
              </a>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-foreground mb-5">{t("footer_location")}</h3>
          <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
            <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span className="whitespace-pre-line leading-relaxed">{t("footer_location_full")}</span>
          </div>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-primary border border-primary/25 bg-primary/8 hover:bg-primary/15 rounded-lg px-3 py-2 transition-colors"
          >
            <Navigation className="h-3.5 w-3.5" />
            {t("contact_directions")}
          </a>
        </div>
      </div>

      <div className="container border-t border-border/50 py-6 px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} {t("footer_copyright")}</span>
        <span>Ghagsara Bazar, Sahjanwa, Gorakhpur, UP — 273001</span>
      </div>
    </footer>
  );
}
