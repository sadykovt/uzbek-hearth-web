import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    review: "The plov here is absolutely divine! It reminded me of my travels through Central Asia. Authentic flavors and wonderful hospitality.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    review: "Best Uzbek restaurant in the city! The samsa is incredible - crispy on the outside, perfectly seasoned inside. Highly recommend!",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    review: "A hidden gem! The atmosphere is warm and inviting, and every dish we tried was exceptional. The shashlik melts in your mouth.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why our guests keep coming back for authentic Uzbek flavors
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.review}"
                </p>
                <p className="font-semibold text-foreground">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
