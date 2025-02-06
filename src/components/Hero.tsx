
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-image">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <p className="text-lg md:text-xl mb-4 animate-fade-in opacity-0 [animation-delay:200ms]">
          Welcome to Kaafu Atoll
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in opacity-0 [animation-delay:400ms]">
          Your Gateway to Island Adventures
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in opacity-0 [animation-delay:600ms]">
          Fast, Reliable, and Luxurious Speedboat Transfers for Up to 18 Passengers
        </p>
        <Button 
          size="lg" 
          className="animate-fade-in opacity-0 [animation-delay:800ms] bg-ocean hover:bg-ocean-dark transition-colors duration-300"
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Book Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
