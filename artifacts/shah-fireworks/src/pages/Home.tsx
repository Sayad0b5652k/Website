import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Phone, MessageCircle, Star, Sparkles, Award, Users, CalendarCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full">

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,hsl(350_85%_50%_/_0.18),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_80%,hsl(42_96%_52%_/_0.08),transparent)]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(hsl(38 40% 92%) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          />
        </div>

        <div className="container relative z-10 px-4 py-24 text-center md:px-6">
          <div className="inline-flex items-center rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-sm text-primary font-medium mb-8">
            <Star className="mr-2 h-3.5 w-3.5 fill-primary" />
            {t("hero_tagline")}
          </div>

          <h1 className="mb-6 text-5xl font-black tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl mx-auto" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t("hero_title_1")}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-accent leading-tight pb-2">
              {t("hero_title_2")}
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed">
            {t("hero_subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-semibold shadow-xl shadow-primary/25 bg-primary hover:bg-primary/90 gap-2">
              <Link href="/events">{t("hero_book")} <ArrowRight className="h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base font-medium border-border hover:bg-white/5 gap-2">
              <Link href="/catalogue">{t("hero_catalogue")}</Link>
            </Button>
          </div>

          {/* Stats bar */}
          <div className="inline-flex flex-wrap justify-center gap-8 md:gap-12 rounded-2xl border border-border/60 bg-card/60 backdrop-blur px-8 py-5 mx-auto shadow-lg">
            {[
              { value: "500+", label: t("stat_events") },
              { value: "100+", label: t("stat_products") },
              { value: "UP-Wide", label: t("stat_coverage") },
              { value: "Trusted", label: t("stat_trusted") },
            ].map((stat, i) => (
              <div key={i} className="text-center min-w-[80px]">
                <div className="text-2xl font-black text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1 font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-24 section-dark">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">{t("section_catalogue_tag")}</p>
              <h2 className="text-3xl font-bold md:text-4xl text-foreground">{t("section_catalogue_title")}</h2>
              <p className="mt-3 text-muted-foreground max-w-xl">{t("section_catalogue_sub")}</p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex mt-4 text-primary hover:text-primary hover:bg-primary/8 gap-2">
              <Link href="/catalogue">{t("nav_catalogue")} <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { tag: "Wedding Special", title: "Cold Pyro Stage Fountains", desc: "Indoor-safe, touch-safe silver sparks up to 12 feet. Perfect for Varmala & stage entries." },
              { tag: "Sky Shows", title: "120/240 Shot Sky Displays", desc: "VIP multi-color repeater cakes that cover the sky in gold, crimson, and emerald bursts." },
              { tag: "Diwali Classic", title: "Self-Made Multi-Color Anars", desc: "Our in-house specialty — starts ruby red, changes to emerald, finishes with crackling gold." },
              { tag: "Grand Entry", title: "Army Commando Gun Dance", desc: "High-energy choreographed performance with cold pyro sparks for unforgettable Baraat entries." },
            ].map((item, i) => (
              <Link href="/catalogue" key={i} className="group block rounded-2xl border border-border bg-background p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
                <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 inline-block border border-primary/20 bg-primary/8 rounded-full px-3 py-1">
                  {item.tag}
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  View in catalogue <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>

          <Button asChild variant="outline" className="w-full mt-8 md:hidden border-border">
            <Link href="/catalogue">{t("nav_catalogue")}</Link>
          </Button>
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">{t("section_events_tag")}</p>
            <h2 className="text-3xl font-bold md:text-4xl text-foreground">{t("section_events_title")}</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{t("section_events_sub")}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Weddings & Baraat",
                highlight: "Most Popular",
                points: ["Army Commando Gun Dance performance", "Cold Pyro stage fountains", "On-demand balloon sky shots", "Sky lanterns for Doli farewell"],
              },
              {
                title: "Diwali & Festivals",
                highlight: "Traditional Range",
                points: ["Self-made multi-color anars", "Premium sparklers & chakras", "Sound crackers & laris", "Family-safe ground displays"],
              },
              {
                title: "Birthdays & New Year",
                highlight: "Celebration Special",
                points: ["Cold Pyro indoor fountains", "Color smoke flares", "Multi-shot sky cakes", "Sky lantern releases"],
              },
            ].map((event, i) => (
              <div key={i} className="relative rounded-2xl border border-border bg-card p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/6 transition-all duration-300">
                <div className="absolute top-5 right-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent border border-accent/30 bg-accent/8 rounded-full px-2.5 py-1">
                    {event.highlight}
                  </span>
                </div>
                <Sparkles className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {event.title}
                </h3>
                <ul className="space-y-2.5">
                  {event.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-border">
                  <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/8 gap-1.5 p-0 h-auto font-medium">
                    <Link href="/events">{t("hero_book")} <ArrowRight className="h-3.5 w-3.5" /></Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / OWNER ── */}
      <section className="py-24 section-dark">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-border to-accent/10 blur-sm" />
              <div className="relative rounded-2xl border border-border bg-card overflow-hidden p-10 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Mukhtar Ahmad Shah</h3>
                <p className="text-sm font-semibold text-accent mt-1 tracking-widest uppercase">{t("owner_title")}</p>
                <div className="gold-divider my-6 mx-auto max-w-[120px]" />
                <p className="text-muted-foreground text-sm italic leading-relaxed">{t("owner_quote")}</p>
                <div className="mt-8 flex flex-col gap-3">
                  <a href="tel:+919452457572" className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground bg-background rounded-xl border border-border px-4 py-3 hover:border-primary hover:text-primary transition-all">
                    <Phone className="h-4 w-4" /> +91 9452457572
                  </a>
                  <a href="https://wa.me/918934859810" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#25D366] rounded-xl px-4 py-3 hover:bg-[#20b858] transition-all">
                    <MessageCircle className="h-4 w-4" /> {t("owner_whatsapp")}
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">{t("section_about_tag")}</p>
              <h2 className="text-3xl font-bold md:text-4xl text-foreground leading-tight">{t("section_about_title")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("section_about_p")}</p>
              <div className="grid grid-cols-2 gap-4 py-2">
                {[
                  "Premium curated fireworks stock",
                  "Self-made specialty anars & chakras",
                  "Strict safety compliance",
                  "Expert event pyrotechnic teams",
                  "Wholesale & retail available",
                  "Delivery across Gorakhpur & UP",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{text}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 flex gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/events">{t("hero_book")} <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border gap-2">
                  <Link href="/wholesale">{t("nav_wholesale")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">{t("section_why_tag")}</p>
            <h2 className="text-3xl font-bold md:text-4xl text-foreground">{t("section_why_title")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Star, title: "Premium Quality", desc: "We stock only the best from certified manufacturers — plus our own handcrafted specialties." },
              { icon: Sparkles, title: "Specialty Services", desc: "Army Commando Gun Dance, Cold Pyro stages, Matrix wheels — exclusive to Shah Fireworks." },
              { icon: Users, title: "Expert Teams", desc: "Trained pyrotechnic crews handle your event's display safely and professionally." },
              { icon: CalendarCheck, title: "On-Time Delivery", desc: "We commit to delivery timelines and have never let a celebration down." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/15">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-red-900" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,white,transparent)]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">{t("cta_tag")}</p>
          <h2 className="text-3xl font-bold md:text-5xl mb-5 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t("cta_title")}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">{t("cta_subtitle")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-semibold bg-[#25D366] hover:bg-[#20b858] text-white gap-3 shadow-2xl">
              <a href="https://wa.me/918934859810" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" /> {t("cta_whatsapp")}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base font-semibold bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white gap-3">
              <a href="tel:+919452457572">
                <Phone className="h-5 w-5" /> {t("cta_call")}
              </a>
            </Button>
          </div>
          <p className="mt-6 text-white/50 text-sm">
            {t("cta_also")}{" "}
            <a href="tel:+917985759036" className="text-white/70 hover:text-white transition-colors">+91 7985759036</a>
          </p>
        </div>
      </section>
    </div>
  );
}
