import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-medium mb-12 text-center">Contact</h1>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <div className="flex flex-col items-center mb-8">
                    <div className="w-full h-80 mb-6 overflow-hidden rounded-lg shadow-md">
                      <img 
                        src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                        alt="Profile Photo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-lg mb-8 text-center">
                      Thank you for checking out my website! Feel free to contact me with any questions.
                    </p>
                  </div>
                  
                  {/* Contact information in horizontal layout */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="mb-3">
                        <Mail className="h-6 w-6 text-gray-400 mx-auto" />
                      </div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">georgh3@uci.edu</p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="mb-3">
                        <Phone className="h-6 w-6 text-gray-400 mx-auto" />
                      </div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">+1 (317) 798-7849</p>
                    </div>
                    
                    <div className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="mb-3">
                        <MapPin className="h-6 w-6 text-gray-400 mx-auto" />
                      </div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-gray-600">Irvine, CA</p>
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
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
