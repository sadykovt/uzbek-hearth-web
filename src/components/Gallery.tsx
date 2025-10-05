import plovImg from "@/assets/hero-plov.jpg";
import samsaImg from "@/assets/samsa.jpg";
import shashlikImg from "@/assets/shashlik.jpg";
import lagmanImg from "@/assets/lagman.jpg";
import mantiImg from "@/assets/manti.jpg";
import interiorImg from "@/assets/restaurant-interior.jpg";

const galleryImages = [
  { src: plovImg, alt: "Authentic Uzbek plov with carrots and lamb" },
  { src: samsaImg, alt: "Golden samsa pastries fresh from tandoor" },
  { src: shashlikImg, alt: "Grilled shashlik kebabs with vegetables" },
  { src: lagmanImg, alt: "Hand-pulled lagman noodles" },
  { src: mantiImg, alt: "Steamed manti dumplings" },
  { src: interiorImg, alt: "Traditional Uzbek restaurant ambiance" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-sunset">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A visual journey through our authentic dishes and warm atmosphere
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg shadow-soft hover:shadow-warm transition-shadow duration-300 aspect-square group"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
