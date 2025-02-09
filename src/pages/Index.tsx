
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import PopularDestinations from "@/components/PopularDestinations";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const isMobile = useIsMobile();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="relative">
        <Hero />
        {isMobile ? (
          <>
            <div className="fixed bottom-4 right-4 z-50">
              <Button
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="bg-ocean hover:bg-ocean-dark transition-colors duration-300 rounded-xl"
              >
                {isFormOpen ? (
                  <>
                    Close <ChevronRight className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Book Now <ChevronLeft className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
            <div
              className={`fixed top-0 right-0 h-full w-full max-w-md z-40 transform transition-transform duration-300 ease-in-out ${
                isFormOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <BookingForm onClose={() => setIsFormOpen(false)} />
            </div>
          </>
        ) : (
          <div className="container mx-auto px-4 -mt-20">
            <div className="max-w-6xl mx-auto">
              <BookingForm />
            </div>
          </div>
        )}
      </div>
      <Services />
      <PopularDestinations />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
