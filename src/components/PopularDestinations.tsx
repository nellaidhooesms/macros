
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const destinations = [
  {
    id: 1,
    name: "Malé",
    description: "The vibrant capital city of Maldives",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Hulhumalé",
    description: "A modern city built on reclaimed land",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Maafushi",
    description: "Popular local island with beautiful beaches",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80",
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Explore Kaafu Atoll's Must-Visit Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the beauty of these incredible locations, each offering unique experiences and unforgettable memories.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                <p className="text-sm mb-4">{destination.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/20"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Transfer
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
