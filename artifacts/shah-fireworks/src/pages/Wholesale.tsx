import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Minus, Plus, Send, Package, Truck, Percent, ShieldCheck, IndianRupee, User, Phone, MapPin, Building2, PenLine } from "lucide-react";
import { WHOLESALE_FIREWORKS } from "@/data/fireworks";
import { useLanguage } from "@/context/LanguageContext";

const wholesaleFormSchema = z.object({
  name: z.string().min(2, { message: "Please enter your name." }),
  businessName: z.string().min(2, { message: "Please enter your business/shop name." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  city: z.string().min(2, { message: "Please enter your city." }),
  orderValue: z.string().min(1, { message: "Please enter your approximate order value." }),
  customItems: z.string().optional(),
  notes: z.string().optional(),
});

type WholesaleFormValues = z.infer<typeof wholesaleFormSchema>;

export default function Wholesale() {
  const { t } = useLanguage();

  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    WHOLESALE_FIREWORKS.forEach((sec) => sec.items.forEach((item) => { init[item.id] = 0; }));
    return init;
  });

  const form = useForm<WholesaleFormValues>({
    resolver: zodResolver(wholesaleFormSchema),
    defaultValues: { name: "", businessName: "", phone: "", city: "", orderValue: "", customItems: "", notes: "" },
  });

  const increment = (id: string) => setQuantities((q) => ({ ...q, [id]: (q[id] || 0) + 1 }));
  const decrement = (id: string) => setQuantities((q) => ({ ...q, [id]: Math.max(0, (q[id] || 0) - 1) }));

  const selectedItems = WHOLESALE_FIREWORKS.flatMap((sec) =>
    sec.items.filter((item) => quantities[item.id] > 0).map((item) => ({
      name: item.name,
      qty: quantities[item.id],
    }))
  );

  function onSubmit(data: WholesaleFormValues) {
    const itemsList =
      selectedItems.length > 0
        ? selectedItems.map((i) => `  ✦ ${i.name} — Qty: *${i.qty}* cartons/units`).join("\n")
        : "  Not selected from list";

    const customSection = data.customItems?.trim()
      ? `\n📋 *CUSTOM / UNLISTED ITEMS*\n  ${data.customItems.trim()}\n`
      : "";

    const notesSection = data.notes?.trim()
      ? `\n📝 *ADDITIONAL REQUIREMENTS*\n  ${data.notes.trim()}\n`
      : "";

    const text =
`📦 *SHAH FIREWORKS — WHOLESALE INQUIRY*
━━━━━━━━━━━━━━━━━━━━

🏪 *BUSINESS DETAILS*
  *Name:* ${data.name}
  *Business / Shop:* ${data.businessName}
  *Phone:* ${data.phone}
  *City:* ${data.city}
  *Order Budget:* ${data.orderValue}

📦 *ITEMS REQUIRED FROM LIST*
${itemsList}
${customSection}${notesSection}
━━━━━━━━━━━━━━━━━━━━
📍 *Shah Fireworks*
  Ghagsara Bazar, Sahjanwa
  Gorakhpur, UP — 273001
  📞 +91 9452457572
  💬 WhatsApp: +91 8934859810`;

    window.open(`https://wa.me/918934859810?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative py-16 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/6 to-transparent pointer-events-none" />
        <div className="container px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-1.5 text-sm text-accent font-medium mb-5">
            <Package className="h-3.5 w-3.5" />
            Bulk Orders &amp; Trade Pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t("ws_title")}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("ws_subtitle")}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-border section-dark">
        <div className="container px-4 md:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Percent, title: "Best Bulk Rates", desc: "Competitive trade pricing with great margins" },
              { icon: Package, title: "Premium Quality", desc: "Sourced from top certified manufacturers" },
              { icon: Truck, title: "Reliable Supply", desc: "Consistent stock even during peak season" },
              { icon: ShieldCheck, title: "Safe Products", desc: "All items meet safety & compliance standards" },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="text-center p-4">
                <div className="mx-auto w-11 h-11 bg-accent/10 flex items-center justify-center rounded-xl mb-3">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-bold text-sm text-foreground mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-8 py-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 xl:gap-10">

          {/* LEFT */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card rounded-2xl border border-border p-6 shadow-md">
              <h3 className="text-lg font-bold mb-5 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Who Can Order Wholesale?</h3>
              <div className="space-y-4">
                {[
                  { title: "Fireworks Retailers & Shops", desc: "Stock up for Diwali and festive season" },
                  { title: "Event & Wedding Planners", desc: "Bulk fireworks for multiple events" },
                  { title: "Crackers Wholesalers", desc: "Reseller pricing on full catalogue" },
                  { title: "Festival Organisers", desc: "Large-scale public display requirements" },
                  { title: "Hotels & Banquets", desc: "Ongoing supply agreements available" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    <div>
                      <div className="font-semibold text-sm text-foreground">{item.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-primary/5 rounded-2xl border border-accent/20 p-6">
              <h4 className="font-bold text-sm text-accent uppercase tracking-wider mb-3">Direct Contact</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                For urgent bulk orders or to visit our shop in Gorakhpur, contact Mukhtar Ahmad Shah directly.
              </p>
              <div className="space-y-2 text-sm">
                <a href="tel:+919452457572" className="flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary" /> +91 9452457572
                </a>
                <a href="tel:+917985759036" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary" /> +91 7985759036
                </a>
                <a href="https://wa.me/918934859810" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#25D366] font-semibold hover:underline">
                  <Phone className="h-4 w-4" /> WhatsApp: +91 8934859810
                </a>
                <div className="flex items-start gap-2 text-muted-foreground pt-2">
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs">Ghagsara Bazar, Sahjanwa, Gorakhpur, UP</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-2 space-y-8">

            {/* Step 1 */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-md">
              <div className="flex items-center gap-3 mb-7">
                <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-bold shrink-0">1</div>
                <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>{t("ws_step1")}</h2>
              </div>

              <Form {...form}>
                <form id="wholesale-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-accent" /> Your Name</FormLabel>
                        <FormControl><Input placeholder="Ramesh Verma" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="businessName" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5"><Building2 className="h-3.5 w-3.5 text-accent" /> Business / Shop Name</FormLabel>
                        <FormControl><Input placeholder="Verma Crackers & Co." {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-accent" /> Phone Number</FormLabel>
                        <FormControl><Input placeholder="+91 9876543210" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="city" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-accent" /> City / Town</FormLabel>
                        <FormControl><Input placeholder="Gorakhpur, UP" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <FormField control={form.control} name="orderValue" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-1.5"><IndianRupee className="h-3.5 w-3.5 text-accent" /> Approximate Order Value / Budget</FormLabel>
                      <FormControl><Input placeholder="e.g. ₹50,000 or ₹2,00,000" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </form>
              </Form>
            </div>

            {/* Step 2 */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-bold shrink-0">2</div>
                <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>{t("ws_step2")}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-7 ml-11">
                Set quantity (cartons/units) for each item. Wholesale prices shared on WhatsApp.
              </p>

              <div className="space-y-8">
                {WHOLESALE_FIREWORKS.map((section) => (
                  <div key={section.section}>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-4 pb-2 border-b border-border">
                      {section.section}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {section.items.map((item) => (
                        <div
                          key={item.id}
                          className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3 border transition-all duration-150 ${
                            quantities[item.id] > 0
                              ? "border-accent/60 bg-accent/8 shadow-sm"
                              : "border-border bg-background hover:border-border/80"
                          }`}
                        >
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-foreground leading-tight truncate">{item.name}</div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <button type="button" onClick={() => decrement(item.id)} disabled={quantities[item.id] === 0}
                              className="h-7 w-7 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className={`w-6 text-center text-sm font-bold tabular-nums ${quantities[item.id] > 0 ? "text-accent" : "text-muted-foreground"}`}>
                              {quantities[item.id]}
                            </span>
                            <button type="button" onClick={() => increment(item.id)}
                              className="h-7 w-7 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent transition-colors">
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Custom Items field */}
                <div className="mt-2">
                  <div className="rounded-2xl border-2 border-dashed border-accent/30 bg-accent/4 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <PenLine className="h-4 w-4 text-accent shrink-0" />
                      <h4 className="text-sm font-bold text-foreground">
                        Custom / Special Items — Not in the list above?
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                      Write any items, brands, or product specifications you need that aren't listed. We will check stock and include in your wholesale quote.
                    </p>
                    <Form {...form}>
                      <FormField control={form.control} name="customItems" render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder="e.g. Standard Crackers 50 cartons, Red Star Shells 20 boxes, Ashok brand sky shots 10 cartons..."
                              className="resize-none h-24 bg-background border-accent/20 focus:border-accent text-sm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </Form>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-bold shrink-0">3</div>
                <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>{t("ws_step3")}</h2>
              </div>

              {selectedItems.length > 0 && (
                <div className="mb-4 rounded-xl bg-accent/6 border border-accent/20 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent mb-3">{t("ws_selected")} ({selectedItems.length})</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {selectedItems.map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <span className="text-foreground truncate pr-2">{item.name}</span>
                        <span className="font-bold text-accent shrink-0">× {item.qty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedItems.length === 0 && (
                <div className="mb-4 rounded-xl bg-muted/40 border border-border p-4 text-center text-sm text-muted-foreground">
                  {t("ws_noitems")}
                </div>
              )}

              {/* Notes */}
              <Form {...form}>
                <FormField control={form.control} name="notes" render={({ field }) => (
                  <FormItem className="mb-5">
                    <FormLabel className="flex items-center gap-1.5 text-sm">
                      <PenLine className="h-3.5 w-3.5 text-muted-foreground" />
                      Additional Requirements (Optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Delivery location, preferred payment terms, timeline, any specific brands..."
                        className="resize-none h-20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </Form>

              <div className="rounded-xl bg-[#25D366]/8 border border-[#25D366]/20 p-4 mb-5 text-sm text-muted-foreground">
                Your inquiry will open WhatsApp with all details pre-filled. We will respond with wholesale pricing and availability promptly.
              </div>

              <Button type="submit" form="wholesale-form" size="lg"
                className="w-full h-14 text-base font-semibold bg-[#25D366] hover:bg-[#20b858] text-white gap-3 shadow-lg">
                <Send className="h-5 w-5" />
                {t("ws_submit")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
