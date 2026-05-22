import { MapPin, Phone, MessageCircle, User } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

export default function Contact() {
  // Use window.location.origin if available, fallback to placeholder
  const domain = typeof window !== 'undefined' ? window.location.origin : 'https://shahfireworks.in';

  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-muted-foreground">
          We're here to help you plan the perfect display. Reach out via phone or WhatsApp.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
        <div className="space-y-8">
          <div className="flex items-start">
            <div className="bg-primary/10 p-4 rounded-full mr-6">
              <User className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Owner</h3>
              <p className="text-lg text-foreground">Mukhtar Ahmad Shah</p>
              <p className="text-muted-foreground">Gram Pradhan, Bargo</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-primary/10 p-4 rounded-full mr-6">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-lg text-foreground mb-1"><a href="tel:+919452457572" className="hover:text-primary transition-colors">+91 9452457572</a></p>
              <p className="text-lg text-foreground"><a href="tel:+917985759036" className="hover:text-primary transition-colors">+91 7985759036</a></p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-[#25D366]/10 p-4 rounded-full mr-6">
              <MessageCircle className="h-6 w-6 text-[#25D366]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-lg text-foreground">
                <a href="https://wa.me/918934859810" className="hover:text-[#25D366] transition-colors font-medium">
                  +91 8934859810
                </a>
              </p>
              <p className="text-muted-foreground mt-1">Available 24/7 for inquiries</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-primary/10 p-4 rounded-full mr-6">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-lg text-foreground">Bargo, Uttar Pradesh</p>
              <p className="text-muted-foreground">India</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border p-8 h-full flex flex-col justify-center text-center">
            <h3 className="text-2xl font-bold mb-4">Fast Responses</h3>
            <p className="text-muted-foreground mb-8">
              For the fastest response, send us a message on WhatsApp with your requirements. We typically reply within a few hours.
            </p>
            <a 
              href="https://wa.me/918934859810" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-md bg-[#25D366] px-8 text-base font-medium text-white shadow transition-colors hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto border-t border-border pt-16">
        <h2 className="text-3xl font-bold text-center mb-10">Scan & Connect</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-border">
            <div className="bg-white p-4 rounded-xl mb-6 border border-gray-200">
              <QRCodeSVG value={domain} size={150} level="H" />
            </div>
            <h4 className="font-bold text-lg mb-2">Website</h4>
            <p className="text-sm text-center text-muted-foreground">Scan to visit our homepage</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-border">
            <div className="bg-white p-4 rounded-xl mb-6 border border-gray-200">
              <QRCodeSVG value={`${domain}/catalogue`} size={150} level="H" />
            </div>
            <h4 className="font-bold text-lg mb-2">Catalogue</h4>
            <p className="text-sm text-center text-muted-foreground">Scan to browse our full product range</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-border">
            <div className="bg-white p-4 rounded-xl mb-6 border border-gray-200">
              <QRCodeSVG value="https://wa.me/918934859810" size={150} level="H" />
            </div>
            <h4 className="font-bold text-lg mb-2 text-[#25D366]">WhatsApp</h4>
            <p className="text-sm text-center text-muted-foreground">Scan to message us directly</p>
          </div>

        </div>
      </div>
    </div>
  );
}
