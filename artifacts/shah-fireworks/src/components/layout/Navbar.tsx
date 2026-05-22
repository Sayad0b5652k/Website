import { Link, useLocation } from "wouter";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/catalogue", label: "Catalogue" },
    { href: "/events", label: "Book Event" },
    { href: "/wholesale", label: "Wholesale" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top announcement bar */}
      <div className="w-full bg-primary text-primary-foreground text-xs py-2 px-4 text-center font-medium tracking-wide">
        Serving Uttar Pradesh &amp; Surrounding States &nbsp;|&nbsp; Call for Seasonal Offers &nbsp;|&nbsp;
        <a href="tel:+919452457572" className="underline underline-offset-2 font-semibold">+91 9452457572</a>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-lg shadow-black/20">
        <div className="container flex h-18 items-center justify-between py-3">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col leading-none">
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">Est. in Bargo, UP</span>
              <div className="flex items-baseline gap-2">
                <span
                  className="text-2xl font-black tracking-tight text-primary"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  SHAH
                </span>
                <span
                  className="text-2xl font-light tracking-widest text-foreground"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
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
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact */}
          <div className="hidden lg:flex items-center gap-5 ml-2 pl-5 border-l border-border">
            <div className="flex flex-col items-end gap-0.5">
              <a
                href="tel:+919452457572"
                className="flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                +91 9452457572
              </a>
              <a
                href="tel:+917985759036"
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-3 w-3" />
                +91 7985759036
              </a>
            </div>
            <Button
              asChild
              size="sm"
              className="bg-[#25D366] hover:bg-[#20b858] text-white shadow-md gap-2 h-10 px-4 font-semibold"
            >
              <a href="https://wa.me/918934859810" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-card py-5 px-4 flex flex-col gap-2 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium py-3 px-4 rounded-lg transition-colors ${
                  location === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border mt-2 flex flex-col gap-3">
              <a
                href="tel:+919452457572"
                className="flex items-center gap-2 text-sm font-semibold px-4 py-2"
              >
                <Phone className="h-4 w-4 text-primary" /> +91 9452457572
              </a>
              <a
                href="tel:+917985759036"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground px-4 py-2"
              >
                <Phone className="h-4 w-4 text-primary" /> +91 7985759036
              </a>
              <Button asChild className="w-full mt-1 bg-[#25D366] hover:bg-[#20b858] text-white gap-2">
                <a href="https://wa.me/918934859810" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
