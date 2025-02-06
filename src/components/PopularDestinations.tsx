
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
    <section className="py-20 bg-gradient-to-b from-white to-[#e7f0fd]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-ocean-dark">
            Explore Kaafu Atoll's Must-Visit Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the beauty of these incredible locations, each offering unique experiences and unforgettable memories.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end text-white">
                <h3 className="text-xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  {destination.name}
                </h3>
                <p className="text-sm opacity-90 transform transition-all duration-300 group-hover:opacity-100">
                  {destination.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
