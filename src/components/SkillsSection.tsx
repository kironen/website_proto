
import React from 'react';
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'React/NextJS', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL/NoSQL Databases', level: 85 },
    { name: 'Docker/Kubernetes', level: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-engineer-darkBlue mb-4">Skills</h2>
          <div className="w-20 h-1 bg-engineer-blue mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Technical Expertise</h3>
              {skills.slice(0, 3).map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Additional Skills</h3>
              {skills.slice(3).map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="text-center p-4 bg-engineer-lightGray rounded-lg">
              <span className="block text-4xl font-bold text-engineer-blue">20+</span>
              <span>Projects</span>
            </div>
            <div className="text-center p-4 bg-engineer-lightGray rounded-lg">
              <span className="block text-4xl font-bold text-engineer-blue">5+</span>
              <span>Years Exp</span>
            </div>
            <div className="text-center p-4 bg-engineer-lightGray rounded-lg">
              <span className="block text-4xl font-bold text-engineer-blue">15+</span>
              <span>Clients</span>
            </div>
            <div className="text-center p-4 bg-engineer-lightGray rounded-lg">
              <span className="block text-4xl font-bold text-engineer-blue">99%</span>
              <span>Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
