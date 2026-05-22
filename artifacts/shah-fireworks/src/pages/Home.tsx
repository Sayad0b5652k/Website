import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Star, Sparkles, Shield, PartyPopper, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        </div>
        <div className="container relative z-10 px-4 py-32 text-center md:px-6">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Star className="mr-2 h-4 w-4" />
            Premium Fireworks in Uttar Pradesh
          </div>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            Light Up Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Celebration</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            Make every moment spectacular with Shah Fireworks. From traditional Diwali collections to grand wedding displays, we bring the magic of light to your special days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-lg shadow-primary/20">
              <Link href="/catalogue">
                Browse Catalogue <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base border-primary/20 hover:bg-primary/10">
              <Link href="/events">
                Book an Event
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold md:text-4xl">Our Spectacular Range</h2>
              <p className="mt-4 text-muted-foreground">Discover the finest selection of pyrotechnics for every budget and occasion.</p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex mt-4 text-primary hover:text-primary hover:bg-primary/10">
              <Link href="/catalogue">View Full Catalogue <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Grand Multi-Shots", desc: "Up to 240 shots for sky displays", tag: "Premium" },
              { title: "Stage Cold Pyro", desc: "Indoor-safe fountains for entries", tag: "Weddings" },
              { title: "Classic Anars", desc: "Color-shifting premium fountains", tag: "Diwali" },
              { title: "Sky Rockets", desc: "Whistling, musical & parachute", tag: "Celebration" }
            ].map((cat, i) => (
              <div key={i} className="group cursor-pointer rounded-xl border border-border bg-background p-6 hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">{cat.tag}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{cat.title}</h3>
                <p className="text-sm text-muted-foreground">{cat.desc}</p>
              </div>
            ))}
          </div>
          <Button asChild variant="outline" className="w-full mt-8 md:hidden border-primary/20">
            <Link href="/catalogue">View Full Catalogue</Link>
          </Button>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-4xl">Events We Elevate</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">From intimate birthdays to massive corporate events, our expert pyrotechnicians handle it all with safety and grandeur.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Weddings & Baraat", desc: "Make a royal entry with our Army Commando Gun Dance, Cold Pyro setups, and massive balloon sky shots that light up your Baraat." },
              { title: "Diwali & Festivals", desc: "Celebrate the festival of lights with our premium traditional crackers, self-made multi-color anars, and family-safe sparklers." },
              { title: "Corporate & New Year", desc: "Ring in the celebrations with synchronized 120-Shot VIP repeaters, Heavy Fog dry ice effects, and rotating pyro wheels." }
            ].map((service, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:shadow-xl hover:shadow-primary/5 transition-all">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <Sparkles className="h-24 w-24" />
                </div>
                <Sparkles className="h-10 w-10 text-primary mb-6 relative z-10" />
                <h3 className="text-xl font-bold mb-3 relative z-10">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Owner / Legacy */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-[4/3] rounded-2xl border border-primary/20 bg-background overflow-hidden flex items-center justify-center p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="relative z-10 text-center space-y-6">
                  <Shield className="h-16 w-16 text-primary mx-auto opacity-80" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Mukhtar Ahmad Shah</h3>
                    <p className="text-accent tracking-widest uppercase text-sm mt-2 font-medium">Gram Pradhan, Bargo</p>
                  </div>
                  <div className="w-16 h-1 bg-border mx-auto rounded-full" />
                  <p className="text-muted-foreground italic max-w-sm mx-auto">"Our commitment is to bring joy, light, and unquestionable safety to every family's celebration."</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">A Legacy of Trust & Light</h2>
              <p className="text-lg text-muted-foreground">
                Located in the heart of Uttar Pradesh, Shah Fireworks is more than a business — it's a legacy built on trust, quality, and community.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Premium curated stock from top manufacturers",
                  "Strict adherence to safety standards",
                  "Specialized pyrotechnic teams for large events",
                  "Competitive wholesale and retail pricing"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Button asChild variant="outline" className="border-primary/20">
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Services Banner */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="rounded-2xl border border-primary/30 bg-gradient-to-r from-card to-primary/5 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-semibold mb-3">
                <PartyPopper className="h-5 w-5" /> Special Event Add-ons
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Want something extraordinary?</h3>
              <p className="text-muted-foreground max-w-xl">
                Ask about our Jumbo Large Gola Shells, Rotating Pyro Matrix wheels, and on-demand Heavy Fog effects for your stage.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <Button asChild size="lg" className="w-full md:w-auto shadow-lg shadow-primary/20 h-12">
                <Link href="/events">Explore Special Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold md:text-5xl mb-6">Ready to make it spectacular?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-10">Contact us today to discuss your requirements, get wholesale pricing, or book our specialty event services.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto h-14 px-8 text-base">
              <a href="https://wa.me/918934859810" target="_blank" rel="noopener noreferrer">
                WhatsApp Us Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href="tel:+919452457572">
                Call +91 9452457572
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
