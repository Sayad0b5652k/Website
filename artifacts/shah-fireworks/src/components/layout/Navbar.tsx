import { Link, useLocation } from "wouter";
import { Phone, Menu, X, MessageCircle, Home, BookOpen, CalendarCheck, ShoppingBag, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { FireworksLogo } from "@/components/Logo";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav_home"), icon: Home },
    { href: "/catalogue", label: t("nav_catalogue"), icon: BookOpen },
    { href: "/events", label: t("nav_book"), icon: CalendarCheck },
    { href: "/wholesale", label: t("nav_wholesale"), icon: ShoppingBag },
    { href: "/contact", label: t("nav_contact"), icon: Mail },
  ];

  return (
    <>
      {/* Announcement bar */}
      <div className="w-full bg-primary text-primary-foreground text-xs py-2 px-4 text-center font-medium tracking-wide">
        {t("nav_announcement")}{" "}
        <a href="tel:+919452457572" className="underline underline-offset-2 font-bold">
          +91 9452457572
        </a>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-lg shadow-black/20">
        <div className="container flex h-[4.5rem] items-center justify-between px-4 md:px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setIsOpen(false)}>
            <FireworksLogo className="h-9 w-9 text-primary shrink-0" />
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-medium tracking-[0.28em] uppercase text-muted-foreground">
                Est. 1947 · Gorakhpur, UP
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[1.45rem] font-black tracking-tight text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                  SHAH
                </span>
                <span className="text-[1.45rem] font-light tracking-widest text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  FIREWORKS
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-1 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-3 ml-2 pl-4 border-l border-border shrink-0">
            {/* Language Toggle */}
            <div className="flex items-center rounded-lg border border-border overflow-hidden text-xs font-bold">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 transition-colors ${
                  lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >EN</button>
              <button
                onClick={() => setLang("hi")}
                className={`px-3 py-1.5 transition-colors border-l border-border ${
                  lang === "hi" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >हि</button>
            </div>

            <a href="tel:+919452457572" className="hidden xl:flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-3.5 w-3.5" /> +91 9452457572
            </a>

            <Button asChild size="sm" className="bg-[#25D366] hover:bg-[#20b858] text-white shadow-md gap-1.5 h-9 px-4 font-semibold shrink-0">
              <a href="https://wa.me/918934859810" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                {t("nav_whatsapp")}
              </a>
            </Button>
          </div>

          {/* Mobile: lang + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center rounded-lg border border-border overflow-hidden text-xs font-bold">
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1.5 transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              >EN</button>
              <button
                onClick={() => setLang("hi")}
                className={`px-2.5 py-1.5 border-l border-border transition-colors ${lang === "hi" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              >हि</button>
            </div>
            <button
              className="p-2.5 rounded-xl hover:bg-white/8 border border-border transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile: slide-in drawer + backdrop */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed top-0 left-0 h-full w-72 max-w-[85vw] bg-card border-r border-border z-50 flex flex-col lg:hidden shadow-2xl">

            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-background/50">
              <div className="flex items-center gap-2">
                <FireworksLogo className="h-7 w-7 text-primary shrink-0" />
                <div>
                  <span className="text-sm font-black text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>SHAH</span>
                  <span className="text-sm font-light text-foreground ml-1" style={{ fontFamily: "'Playfair Display', serif" }}>FIREWORKS</span>
                  <div className="text-[9px] tracking-widest text-muted-foreground uppercase">Est. 1947</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-white/8 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto py-2">
              {navLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3.5 px-5 py-3.5 text-sm font-medium transition-colors border-b border-border/30 ${
                    location === href
                      ? "text-primary bg-primary/10 border-primary/20"
                      : "text-foreground hover:bg-white/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    location === href ? "bg-primary/15" : "bg-white/5"
                  }`}>
                    <Icon className={`h-4 w-4 ${location === href ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  {label}
                  {location === href && (
                    <div className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Contact section */}
            <div className="p-5 border-t border-border bg-background/30 space-y-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Contact Us</p>
                <a
                  href="tel:+919452457572"
                  className="flex items-center gap-3 py-2.5 px-3 rounded-xl bg-primary/8 border border-primary/15 text-sm font-semibold text-foreground hover:bg-primary/15 transition-colors mb-2"
                >
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  +91 9452457572
                </a>
                <a
                  href="tel:+917985759036"
                  className="flex items-center gap-3 py-2 px-3 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                  +91 7985759036
                </a>
              </div>
              <a
                href="https://wa.me/918934859810"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#20b858] text-white font-semibold py-3.5 rounded-xl text-sm transition-colors shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                {t("nav_whatsapp")} — +91 8934859810
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
