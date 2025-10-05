import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <footer id="contact" className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-playfair">Samarkand</h3>
            <p className="text-background/80 leading-relaxed">
              Bringing the authentic taste of Uzbekistan to your table with traditional recipes and warm hospitality.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Location</h4>
            <div className="flex items-start gap-3 text-background/80">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <p>123 Silk Road Avenue<br />Downtown District<br />New York, NY 10001</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/80">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3 text-background/80">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p>info@samarkand-restaurant.com</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="flex items-start gap-3 text-background/80">
              <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="mb-2">Monday - Thursday<br />11:00 AM - 10:00 PM</p>
                <p className="mb-2">Friday - Saturday<br />11:00 AM - 11:00 PM</p>
                <p>Sunday<br />12:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Samarkand Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
