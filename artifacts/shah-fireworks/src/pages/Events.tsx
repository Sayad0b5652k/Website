import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PartyPopper } from "lucide-react";

const eventFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  eventType: z.string().min(1, { message: "Please select an event type." }),
  date: z.string().min(1, { message: "Please select a date." }),
  venue: z.string().min(2, { message: "Please enter the venue location." }),
  guestCount: z.string().min(1, { message: "Please enter approximate guest count." }),
  requirements: z.string().optional(),
});

type EventFormValues = z.infer<typeof eventFormSchema>;

export default function Events() {
  const form = useForm<EventFormValues>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      eventType: "",
      date: "",
      venue: "",
      guestCount: "",
      requirements: "",
    },
  });

  function onSubmit(data: EventFormValues) {
    const text = `*SHAH FIREWORKS - EVENT BOOKING REQUEST*

Name: ${data.name}
Phone: ${data.phone}
Event Type: ${data.eventType}
Event Date: ${data.date}
Venue/Location: ${data.venue}
Guest Count: ${data.guestCount}
Special Requirements: ${data.requirements || "None"}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/918934859810?text=${encodedText}`, "_blank");
  }

  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book an Event</h1>
          <p className="text-lg text-muted-foreground">
            Let us make your special occasion truly unforgettable. From weddings to corporate events, we provide spectacular, safe, and professional fireworks displays.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <PartyPopper className="mr-2 h-5 w-5 text-primary" />
                Events We Serve
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "Marriage & Baraat", desc: "Grand entry effects and sky shots" },
                  { title: "Birthdays", desc: "Safe, colorful fountains and sparklers" },
                  { title: "Diwali Festivities", desc: "Traditional favorites and premium boxes" },
                  { title: "Corporate Events", desc: "Professional stage pyro and heavy fog" },
                  { title: "New Year", desc: "Massive multi-shot cakes" },
                  { title: "Any Occasion", desc: "Customized to your needs" },
                ].map((item, i) => (
                  <li key={i}>
                    <div className="font-semibold text-foreground">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
              <h2 className="text-2xl font-bold mb-6">Booking Inquiry</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 9876543210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="eventType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select event type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Marriage/Baraat">Marriage / Baraat</SelectItem>
                              <SelectItem value="Birthday">Birthday</SelectItem>
                              <SelectItem value="Diwali">Diwali</SelectItem>
                              <SelectItem value="Corporate">Corporate Event</SelectItem>
                              <SelectItem value="New Year">New Year</SelectItem>
                              <SelectItem value="Other">Other Occasion</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="venue"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Venue / Location</FormLabel>
                          <FormControl>
                            <Input placeholder="City, Venue Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="guestCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Approx. Guest Count</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. 500" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="requirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Special Requirements (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about specific items you want, like Cold Pyro, Gun Dance, etc." 
                            className="resize-none h-24"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full h-12 text-base">
                    Send Inquiry via WhatsApp
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
