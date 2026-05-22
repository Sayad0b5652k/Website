import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Minus, Plus, Send, Sparkles, CalendarDays, MapPin, IndianRupee, User, Phone, PenLine } from "lucide-react";
import { EVENT_FIREWORKS } from "@/data/fireworks";
import { useLanguage } from "@/context/LanguageContext";

const eventFormSchema = z.object({
  name: z.string().min(2, { message: "Please enter your full name." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  eventType: z.string().min(1, { message: "Please select an event type." }),
  date: z.string().min(1, { message: "Please select the event date." }),
  venue: z.string().min(3, { message: "Please enter the venue / location." }),
  budget: z.string().min(1, { message: "Please enter your approximate budget." }),
  customFireworks: z.string().optional(),
  notes: z.string().optional(),
});

type EventFormValues = z.infer<typeof eventFormSchema>;

export default function Events() {
  const { t } = useLanguage();

  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    EVENT_FIREWORKS.forEach((sec) => sec.items.forEach((item) => { init[item.id] = 0; }));
    return init;
  });

  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: { name: "", phone: "", eventType: "", date: "", venue: "", budget: "", customFireworks: "", notes: "" },
  });

  const increment = (id: string) => setQuantities((q) => ({ ...q, [id]: (q[id] || 0) + 1 }));
  const decrement = (id: string) => setQuantities((q) => ({ ...q, [id]: Math.max(0, (q[id] || 0) - 1) }));

  const selectedItems = EVENT_FIREWORKS.flatMap((sec) =>
    sec.items.filter((item) => quantities[item.id] > 0).map((item) => ({
      name: item.name,
      localName: item.localName,
      qty: quantities[item.id],
    }))
  );

  function onSubmit(data: EventFormValues) {
    const fireworksList =
      selectedItems.length > 0
        ? selectedItems.map((i) => `  ✦ ${i.name}${i.localName ? ` (${i.localName})` : ""} × *${i.qty}*`).join("\n")
        : "  Not selected from list";

    const customSection = data.customFireworks?.trim()
      ? `\n✨ *CUSTOM / SPECIAL FIREWORKS*\n  ${data.customFireworks.trim()}\n`
      : "";

    const notesSection = data.notes?.trim()
      ? `\n📝 *ADDITIONAL NOTES*\n  ${data.notes.trim()}\n`
      : "";

    const text =
`🎆 *SHAH FIREWORKS — EVENT BOOKING*
━━━━━━━━━━━━━━━━━━━━

👤 *CUSTOMER*
  *Name:* ${data.name}
  *Phone:* ${data.phone}

🎊 *EVENT DETAILS*
  *Type:* ${data.eventType}
  *Date:* ${data.date}
  *Venue:* ${data.venue}
  *Budget:* ${data.budget}

🎇 *FIREWORKS SELECTED FROM LIST*
${fireworksList}
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
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 to-transparent pointer-events-none" />
        <div className="container px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-sm text-primary font-medium mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            Customized Event Packages
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
            {t("events_title")}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("events_subtitle")}</p>
        </div>
      </section>

      <div className="container px-4 md:px-8 py-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 xl:gap-10">

          {/* LEFT sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card rounded-2xl border border-border p-6 shadow-md">
              <h3 className="text-lg font-bold mb-5 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                Events We Specialise In
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Marriage & Baraat", desc: "Army Gun Dance, sky shots, Cold Pyro entries" },
                  { title: "Birthday Celebrations", desc: "Sparklers, fountains, color smoke displays" },
                  { title: "Diwali & Festivals", desc: "Traditional crackers, anars, laris, and chakras" },
                  { title: "Corporate Events", desc: "Stage pyro, matrix wheels, heavy fog effects" },
                  { title: "New Year & Parties", desc: "Synchronized 120-shot sky displays, lanterns" },
                  { title: "Any Special Occasion", desc: "Fully customized to your theme and budget" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                    <div>
                      <div className="font-semibold text-sm text-foreground">{item.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl border border-primary/20 p-6">
              <h4 className="font-bold text-sm text-primary uppercase tracking-wider mb-3">{t("events_note_tag")}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{t("events_note_body")}</p>
              <div className="mt-4 pt-4 border-t border-primary/20 text-sm space-y-1">
                <a href="tel:+919452457572" className="block text-primary font-semibold hover:underline">+91 9452457572</a>
                <a href="https://wa.me/918934859810" target="_blank" rel="noopener noreferrer" className="block text-[#25D366] font-semibold hover:underline">
                  WhatsApp: +91 8934859810
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="lg:col-span-2 space-y-8">

            {/* Step 1 */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-md">
              <div className="flex items-center gap-3 mb-7">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold shrink-0">1</div>
                <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {t("events_step1")}
                </h2>
              </div>

              <Form {...form}>
                <form id="event-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="name" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-primary" /> {t("events_fullname")}</FormLabel>
                        <FormControl><Input placeholder="Rajesh Kumar" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-primary" /> {t("events_phone")}</FormLabel>
                        <FormControl><Input placeholder="+91 9876543210" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="eventType" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-primary" /> {t("events_type")}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger><SelectValue placeholder="Select event type" /></SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Marriage / Baraat">Marriage / Baraat</SelectItem>
                            <SelectItem value="Birthday Party">Birthday Party</SelectItem>
                            <SelectItem value="Diwali Celebration">Diwali Celebration</SelectItem>
                            <SelectItem value="Corporate Event">Corporate Event</SelectItem>
                            <SelectItem value="New Year Party">New Year Party</SelectItem>
                            <SelectItem value="Anniversary">Anniversary</SelectItem>
                            <SelectItem value="Other Occasion">Other Occasion</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="date" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5 text-primary" /> {t("events_date")}</FormLabel>
                        <FormControl><Input type="date" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField control={form.control} name="venue" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" /> {t("events_venue")}</FormLabel>
                        <FormControl><Input placeholder="Marriage Hall, Gorakhpur" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="budget" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1.5"><IndianRupee className="h-3.5 w-3.5 text-primary" /> {t("events_budget")}</FormLabel>
                        <FormControl><Input placeholder="e.g. ₹25,000 – ₹50,000" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                </form>
              </Form>
            </div>

            {/* Step 2: Fireworks Selector */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold shrink-0">2</div>
                <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {t("events_step2")}
                </h2>
              </div>
              <p className="text-sm text-muted-foreground mb-7 ml-11">
                Use + / − to set the quantity. Prices vary per season — best offer shared on WhatsApp.
              </p>

              <div className="space-y-8">
                {EVENT_FIREWORKS.map((section) => (
                  <div key={section.section}>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 pb-2 border-b border-border">
                      {section.section}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {section.items.map((item) => (
                        <div
                          key={item.id}
                          className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3 border transition-all duration-150 ${
                            quantities[item.id] > 0
                              ? "border-primary/50 bg-primary/8 shadow-sm"
                              : "border-border bg-background hover:border-border/80"
                          }`}
                        >
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-foreground leading-tight truncate">{item.name}</div>
                            {item.localName && (
                              <div className="text-xs text-muted-foreground mt-0.5">{item.localName}</div>
                            )}
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <button type="button" onClick={() => decrement(item.id)} disabled={quantities[item.id] === 0}
                              className="h-7 w-7 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className={`w-6 text-center text-sm font-bold tabular-nums ${quantities[item.id] > 0 ? "text-primary" : "text-muted-foreground"}`}>
                              {quantities[item.id]}
                            </span>
                            <button type="button" onClick={() => increment(item.id)}
                              className="h-7 w-7 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Custom / Special Fireworks field */}
                <div className="mt-2">
                  <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-primary/4 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <PenLine className="h-4 w-4 text-primary shrink-0" />
                      <h4 className="text-sm font-bold text-foreground">
                        Custom / Special Fireworks — Not in the list above?
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                      Write the name or description of any fireworks you want that aren't listed. We will check availability and include them in your quote.
                    </p>
                    <Form {...form}>
                      <FormField control={form.control} name="customFireworks" render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder="e.g. Sky lanterns × 50, Rainbow color bombs, Niagara Falls waterfall effect, Matrix spinning wheels × 4..."
                              className="resize-none h-24 bg-background border-primary/20 focus:border-primary text-sm"
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
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold shrink-0">3</div>
                <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {t("events_step3")}
                </h2>
              </div>

              {selectedItems.length > 0 && (
                <div className="mb-4 rounded-xl bg-primary/6 border border-primary/20 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">{t("events_selected")} ({selectedItems.length})</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {selectedItems.map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <span className="text-foreground truncate pr-2">{item.name}</span>
                        <span className="font-bold text-primary shrink-0">× {item.qty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedItems.length === 0 && (
                <div className="mb-4 rounded-xl bg-muted/40 border border-border p-4 text-center text-sm text-muted-foreground">
                  {t("events_noitems")}
                </div>
              )}

              {/* Additional notes */}
              <Form {...form}>
                <FormField control={form.control} name="notes" render={({ field }) => (
                  <FormItem className="mb-5">
                    <FormLabel className="flex items-center gap-1.5 text-sm">
                      <PenLine className="h-3.5 w-3.5 text-muted-foreground" />
                      {t("events_notes")}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your ideal show — e.g. 'Heavy sky shots during baraat entry, Cold Pyro for varmala stage, sky lanterns for doli farewell...'"
                        className="resize-none h-20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </Form>

              <div className="rounded-xl bg-[#25D366]/8 border border-[#25D366]/20 p-4 mb-5 text-sm text-muted-foreground">
                {t("events_wa_note")}
              </div>

              <Button type="submit" form="event-form" size="lg"
                className="w-full h-14 text-base font-semibold bg-[#25D366] hover:bg-[#20b858] text-white gap-3 shadow-lg">
                <Send className="h-5 w-5" />
                {t("events_submit")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
