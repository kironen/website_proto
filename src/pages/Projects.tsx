
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
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
    {
      title: "Personal Finance Tracker",
      description: "A responsive web application that helps users track expenses, set budgets, and visualize spending patterns with interactive charts.",
      image: "https://images.unsplash.com/photo-1564939558297-fc396f18e5c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      tags: ["React", "Redux", "Firebase", "Recharts"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Weather Forecast App",
      description: "A weather application that provides real-time forecasts, location-based services, and customizable alerts for severe weather conditions.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      tags: ["JavaScript", "OpenWeather API", "Leaflet", "PWA"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Recipe Sharing Platform",
      description: "A community-driven platform where users can share, discover, and review recipes with advanced filtering and search capabilities.",
      image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
      tags: ["Vue.js", "Node.js", "PostgreSQL", "GraphQL"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-medium mb-12 text-center">All Projects</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projects.map((project, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded overflow-hidden shadow hover:shadow-md transition-shadow duration-300">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-black transition-colors text-sm"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        <span>Code</span>
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-black transition-colors text-sm"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
