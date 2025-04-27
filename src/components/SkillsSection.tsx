
import React from 'react';

const SkillsSection = () => {
  const skills = {
    frontend: ['CAD Programs', 'Shop Manufacturing', 'Additive Manufacturing', 'Technical Drawing'],
    backend: ['Soldering', 'PCB Experience', 'Arduino', 'Programming'],
    tools: ['Leadership', 'Professional Communication', 'Bass Guitar', 'Microsoft Suite']
  };

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Skills</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-medium mb-6 border-b pb-3">Mechanical</h3>
              <ul className="space-y-3">
                {skills.frontend.map((skill, index) => (
                  <li key={index} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-6 border-b pb-3">Electrical</h3>
              <ul className="space-y-3">
                {skills.backend.map((skill, index) => (
                  <li key={index} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-6 border-b pb-3">Additional Skills</h3>
              <ul className="space-y-3">
                {skills.tools.map((skill, index) => (
                  <li key={index} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center">
              <span className="block text-4xl font-medium">8+</span>
              <span className="text-gray-600">Projects</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-medium">4+</span>
              <span className="text-gray-600">Years Exp</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-medium">5+</span>
              <span className="text-gray-600">Clients</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-medium">Irvine</span>
              <span className="text-gray-600">Based</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
