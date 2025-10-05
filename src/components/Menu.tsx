import { Card, CardContent } from "@/components/ui/card";
import plovImg from "@/assets/hero-plov.jpg";
import samsaImg from "@/assets/samsa.jpg";
import shashlikImg from "@/assets/shashlik.jpg";
import lagmanImg from "@/assets/lagman.jpg";
import mantiImg from "@/assets/manti.jpg";

const menuItems = [
  {
    name: "Plov",
    description: "Our signature dish - fragrant rice cooked with tender lamb, carrots, and aromatic spices in cast iron kazan",
    price: "$18",
    image: plovImg,
  },
  {
    name: "Samsa",
    description: "Golden, flaky pastries filled with seasoned lamb and onions, baked fresh in traditional tandoor oven",
    price: "$12",
    image: samsaImg,
  },
  {
    name: "Shashlik",
    description: "Succulent marinated lamb skewers grilled over open flame, served with fresh vegetables and flatbread",
    price: "$22",
    image: shashlikImg,
  },
  {
    name: "Lagman",
    description: "Hand-pulled noodles in rich broth with tender meat and fresh vegetables, a Silk Road classic",
    price: "$16",
    image: lagmanImg,
  },
  {
    name: "Manti",
    description: "Steamed dumplings filled with spiced lamb and pumpkin, topped with sour cream and fresh herbs",
    price: "$15",
    image: mantiImg,
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Traditional Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our selection of authentic Uzbek dishes, prepared with love and tradition
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-warm transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={`Traditional Uzbek ${item.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-foreground">{item.name}</h3>
                  <span className="text-xl font-semibold text-primary">{item.price}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
