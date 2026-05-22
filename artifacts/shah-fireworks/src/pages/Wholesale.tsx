import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Package, Truck, Percent } from "lucide-react";

const wholesaleFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  businessName: z.string().min(2, { message: "Business name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  city: z.string().min(2, { message: "Please enter your city." }),
  items: z.string().min(2, { message: "Please list items of interest." }),
  quantity: z.string().min(1, { message: "Please enter approximate quantity." }),
  notes: z.string().optional(),
});

type WholesaleFormValues = z.infer<typeof wholesaleFormSchema>;

export default function Wholesale() {
  const form = useForm<WholesaleFormValues>({
    resolver: zodResolver(wholesaleFormSchema),
    defaultValues: {
      name: "",
      businessName: "",
      phone: "",
      city: "",
      items: "",
      quantity: "",
      notes: "",
    },
  });

  function onSubmit(data: WholesaleFormValues) {
    const text = `*SHAH FIREWORKS - WHOLESALE INQUIRY*

Name: ${data.name}
Business: ${data.businessName}
Phone: ${data.phone}
City: ${data.city}
Items of Interest: ${data.items}
Approximate Quantity: ${data.quantity}
Notes: ${data.notes || "None"}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/918934859810?text=${encodedText}`, "_blank");
  }

  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Wholesale Inquiries</h1>
          <p className="text-lg text-muted-foreground">
            Are you a retailer or event planner? Partner with Shah Fireworks for the best bulk rates and assured premium quality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card p-6 rounded-xl border border-border text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full mb-4">
              <Percent className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Best Bulk Rates</h3>
            <p className="text-sm text-muted-foreground">Competitive wholesale pricing that ensures great margins for your business.</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full mb-4">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Premium Quality</h3>
            <p className="text-sm text-muted-foreground">We stock only the highest quality, most reliable brands in the market.</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full mb-4">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Reliable Supply</h3>
            <p className="text-sm text-muted-foreground">Consistent availability even during peak festive seasons.</p>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Request a Wholesale Quote</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business/Shop Name</FormLabel>
                      <FormControl>
                        <Input placeholder="XYZ Traders" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City / Town</FormLabel>
                      <FormControl>
                        <Input placeholder="Lucknow, UP" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="items"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Items of Interest</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Sparklers, Multi-shot cakes, Laris" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Approximate Quantity/Budget</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 50 Cartons or ₹1,00,000 budget" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Notes (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any specific brands or requirements?" 
                        className="resize-none h-24"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center pt-4">
                <Button type="submit" size="lg" className="w-full md:w-auto px-12 h-14 text-base">
                  Send Wholesale Inquiry via WhatsApp
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
