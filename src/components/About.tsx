import restaurantInterior from "@/assets/restaurant-interior.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-sunset">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="pattern-overlay rounded-lg overflow-hidden shadow-warm">
              <img 
                src={restaurantInterior} 
                alt="Cozy Samarkand restaurant interior with traditional Uzbek decor"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              A Taste of Uzbekistan
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to Samarkand, where ancient culinary traditions meet warm hospitality. 
              Named after the legendary Silk Road city, our restaurant brings the authentic 
              flavors of Uzbekistan to your table.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every dish is crafted with time-honored recipes passed down through generations, 
              using the finest ingredients and traditional cooking methods. From our aromatic 
              plov to our tender shashlik, each meal is a journey to the heart of Central Asia.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Traditional Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5★</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
