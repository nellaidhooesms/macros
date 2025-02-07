import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-image">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white md:text-left md:w-1/2 md:pr-8"
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

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block md:w-1/2"
        >
          <svg
            viewBox="0 0 800 600"
            className="w-full h-auto text-white fill-current opacity-90"
          >
            <path d="M400,100 C450,100 500,150 520,200 C540,250 560,300 580,350 C600,400 620,450 600,500 C580,550 500,580 450,590 C400,600 350,590 300,580 C250,570 200,550 180,500 C160,450 150,400 160,350 C170,300 190,250 220,200 C250,150 350,100 400,100 Z" />
            <circle cx="400" cy="300" r="5" className="text-primary fill-current" />
            <text x="420" y="300" className="text-sm fill-current">Kaafu Atoll</text>
            <circle cx="380" cy="250" r="3" />
            <circle cx="420" cy="350" r="3" />
            <circle cx="450" cy="280" r="3" />
            <path d="M380,250 L420,350 L450,280 L380,250" className="fill-none stroke-current" strokeWidth="1" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}