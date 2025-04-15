
import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Contact</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-lg mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <Mail className="h-6 w-6 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">georgh3@uci.edu</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4">
                    <Phone className="h-6 w-6 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">+1 (317) 798-7849</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4">
                    <MapPin className="h-6 w-6 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-600">Irvine, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your Name" 
                    required 
                    className="border-gray-300 focus:border-black focus:ring-0 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your Email" 
                    required 
                    className="border-gray-300 focus:border-black focus:ring-0 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Your Message" 
                    rows={5} 
                    required 
                    className="border-gray-300 focus:border-black focus:ring-0 transition-colors"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
