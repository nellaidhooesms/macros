
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
    <section id="booking" className="h-full">
      <form className="space-y-4 bg-white/50 backdrop-blur-md p-6 rounded-lg h-full overflow-y-auto">
        <div className="flex justify-between items-center space-y-2">
          <div>
            <h2 className="text-2xl font-bold text-white">Plan Your Journey Today</h2>
            <p className="text-white/90">
              Fill out the form to book your speedboat transfer.
            </p>
          </div>
          {isMobile && onClose && (
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </Button>
          )}
        </div>
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
    </section>
  );
}
