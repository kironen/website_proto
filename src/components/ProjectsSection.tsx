
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment processing.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Project Management Tool",
      description: "A collaborative project management application with real-time updates, task tracking, and team communication features.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["TypeScript", "React", "Firebase", "Material UI"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered application that generates blog posts, social media content, and marketing copy based on user inputs.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80",
      tags: ["Python", "OpenAI API", "Next.js", "TailwindCSS"],
      github: "https://github.com",
      demo: "https://example.com"
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Selected Projects</h2>
        
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="mb-24 last:mb-0 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="overflow-hidden bg-gray-100 rounded">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="text-2xl font-medium mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-black transition-colors"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-black transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
