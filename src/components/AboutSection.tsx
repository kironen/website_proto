
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">About</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <div>
            <p className="text-lg mb-6">
              I'm a passionate aerospace engineer with 4+ years of experience designing 
              CAD assemblies and using additive manufacturing tools. I enjoy incorporating 
              creative design approaches to make striking products and solutions.
            </p>
            <p className="text-lg mb-6">
              My approach combines engineering and design expertise with rapid 
              prototyping expertise, streamlining the idea-to-product process to create
              designs with flair and that people connect with.
            </p>
            <p className="text-lg">
              When I'm not working, you can find me longboarding, beatboxing, 
              or experimenting with film photography.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-medium text-xl mb-3">Education</h3>
              <p className="text-gray-600">B.S. Aerospace Engineering, University of California, Irvine</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-3">Experience</h3>
              <p className="text-gray-600">Chief Mechanical Engineer, FLARE LLC (2024-present)</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-3">Recognition</h3>
              <p className="text-gray-600">Winner of Consumer Products Cohort, Stella Zhang New Venture Competition 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
