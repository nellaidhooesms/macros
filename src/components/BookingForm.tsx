
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function BookingForm() {
  const [date, setDate] = useState<Date>();

  return (
    <section id="booking" className="py-20 bg-ocean-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Plan Your Journey Today</h2>
              <p className="text-gray-600">
                Fill out the form to get a quote or book your speedboat transfer.
              </p>
            </div>
            <form className="space-y-4 glass-morphism p-6 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" className="bg-white/50" />
                <Input placeholder="Last Name" className="bg-white/50" />
              </div>
              <Input placeholder="Email" type="email" className="bg-white/50" />
              <Input placeholder="Phone" type="tel" className="bg-white/50" />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-white/50",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <Input
                placeholder="Number of Passengers"
                type="number"
                min="1"
                max="18"
                className="bg-white/50"
              />
              <Input placeholder="Destination" className="bg-white/50" />
              <Textarea
                placeholder="Additional Notes"
                className="bg-white/50"
              />
              <Button className="w-full bg-ocean hover:bg-ocean-dark transition-colors duration-300">
                Submit Booking Request
              </Button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="glass-morphism p-8 rounded-lg space-y-6">
              <h3 className="text-2xl font-bold">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ocean flex items-center justify-center text-white text-sm mr-3 mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold">High-speed, Comfortable Transfers</h4>
                    <p className="text-gray-600">Modern speedboats equipped with safety features</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ocean flex items-center justify-center text-white text-sm mr-3 mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold">Experienced Crew</h4>
                    <p className="text-gray-600">Professional and certified team members</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ocean flex items-center justify-center text-white text-sm mr-3 mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold">Customizable Routes</h4>
                    <p className="text-gray-600">Flexible scheduling across Kaafu Atoll</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ocean flex items-center justify-center text-white text-sm mr-3 mt-0.5">✓</span>
                  <div>
                    <h4 className="font-semibold">Competitive Pricing</h4>
                    <p className="text-gray-600">Best value for your island transfers</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
