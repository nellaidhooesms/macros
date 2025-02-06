
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import PopularDestinations from "@/components/PopularDestinations";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="relative">
        <Hero />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 mt-32">
            <div /> {/* Empty div for spacing */}
            <BookingForm />
          </div>
        </div>
      </div>
      <PopularDestinations />
    </main>
  );
};

export default Index;
