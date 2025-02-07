import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-image">
      <div className="absolute inset-0 bg-black/30" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4 text-center text-white md:text-left md:pl-16 lg:pl-24 md:max-w-[600px] md:ml-0"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-xl mb-4"
        >
          Welcome to Kaafu Atoll
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Your Gateway to Island Adventures
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-xl md:text-2xl mb-8"
        >
          Fast, Reliable, and Luxurious Speedboat Transfers for Up to 18 Passengers
        </motion.p>
      </motion.div>
    </section>
  );
}