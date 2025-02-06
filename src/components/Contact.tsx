
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Get in Touch</h3>
              <p className="text-gray-600">
                Have questions about our services? We're here to help! Reach out to us through any of these channels.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-ocean/10 p-3 rounded-2xl">
                  <Phone className="w-6 h-6 text-ocean" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">+960 123 4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-ocean/10 p-3 rounded-2xl">
                  <Mail className="w-6 h-6 text-ocean" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">info@kaafucruise.mv</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-ocean/10 p-3 rounded-2xl">
                  <MapPin className="w-6 h-6 text-ocean" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-600">Male' City, Maldives</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" className="rounded-xl" />
                <Input placeholder="Last Name" className="rounded-xl" />
              </div>
              <Input type="email" placeholder="Email" className="rounded-xl" />
              <Input placeholder="Subject" className="rounded-xl" />
              <Textarea placeholder="Your Message" className="rounded-xl" rows={4} />
              <Button className="w-full bg-ocean hover:bg-ocean-dark transition-colors duration-300 rounded-xl">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
