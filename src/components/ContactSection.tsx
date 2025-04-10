
import React from 'react';
import { Button } from "@/components/ui/button";
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-engineer-darkBlue mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-engineer-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="mb-8 text-engineer-gray">
              Feel free to reach out to me for collaborations, job opportunities, or just to say hello!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-engineer-lightGray p-3 rounded-full">
                  <Mail className="h-5 w-5 text-engineer-blue" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-engineer-gray">alex.smith@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-engineer-lightGray p-3 rounded-full">
                  <Phone className="h-5 w-5 text-engineer-blue" />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-engineer-gray">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-engineer-lightGray p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-engineer-blue" />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-engineer-gray">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <Input id="name" placeholder="Your Name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <Input id="email" type="email" placeholder="Your Email" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1">Subject</label>
                <Input id="subject" placeholder="Subject" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <Textarea id="message" placeholder="Your Message" rows={5} required />
              </div>
              <Button type="submit" className="bg-engineer-blue hover:bg-blue-600 text-white w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
