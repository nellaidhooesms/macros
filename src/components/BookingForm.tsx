import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, X } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface BookingFormProps {
  onClose?: () => void;
}

export default function BookingForm({ onClose }: BookingFormProps) {
  const [date, setDate] = useState<Date>();
  const isMobile = useIsMobile();

  return (
    <section id="booking" className="h-full w-full max-w-6xl mx-auto">
      <form className="space-y-4 bg-white/50 backdrop-blur-md p-6 rounded-2xl h-full overflow-y-auto">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">Plan Your Journey Today</h2>
            <p className="text-white/90">Fill out the form to book your speedboat transfer.</p>
          </div>
          {isMobile && onClose && (
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 rounded-xl"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </Button>
          )}
        </div>
        
        <div className={cn(
          "grid gap-4",
          !isMobile && "grid-cols-2 md:grid-cols-3"
        )}>
          <Input 
            placeholder="Full Name" 
            className="bg-white/50 rounded-xl"
          />
          <Input 
            placeholder="Email or Mobile" 
            className="bg-white/50 rounded-xl"
          />
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal bg-white/50 rounded-xl",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 rounded-xl bg-white/80">
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
            className="bg-white/50 rounded-xl"
          />
          <Input 
            placeholder="From" 
            className="bg-white/50 rounded-xl"
          />
          <Input 
            placeholder="To" 
            className="bg-white/50 rounded-xl"
          />
        </div>
        
        <Button className="w-full bg-ocean hover:bg-ocean-dark transition-colors duration-300 rounded-xl">
          Submit Booking Request
        </Button>
      </form>
    </section>
  );
}