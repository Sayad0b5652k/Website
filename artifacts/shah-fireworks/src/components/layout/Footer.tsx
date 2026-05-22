import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-12 py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Link href="/" className="inline-block mb-4">
            <span className="text-xl font-bold tracking-tighter text-primary">SHAH</span>
            <span className="text-xl font-light tracking-widest text-foreground">FIREWORKS</span>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Premium fireworks for all occasions. Making your celebrations grand, bright, and memorable.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/catalogue" className="hover:text-primary transition-colors">Catalogue</Link></li>
            <li><Link href="/events" className="hover:text-primary transition-colors">Book an Event</Link></li>
            <li><Link href="/wholesale" className="hover:text-primary transition-colors">Wholesale</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4 text-foreground">Contact Us</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Owner: Mukhtar Ahmad Shah (Gram Pradhan, Bargo)</li>
            <li>Phone 1: <a href="tel:+919452457572" className="hover:text-primary">+91 9452457572</a></li>
            <li>Phone 2: <a href="tel:+917985759036" className="hover:text-primary">+91 7985759036</a></li>
            <li>WhatsApp: <a href="https://wa.me/918934859810" className="hover:text-primary">+91 8934859810</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4 text-foreground">Location</h3>
          <p className="text-sm text-muted-foreground">
            Uttar Pradesh, India
          </p>
        </div>
      </div>
      <div className="container mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Shah Fireworks. All rights reserved.
      </div>
    </footer>
  );
}
