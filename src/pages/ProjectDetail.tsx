
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-gray-600 hover:text-black mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-medium mb-6">{project.title}</h1>
            
            <div className="mb-8">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-6">{project.description}</p>
              {project.fullDescription && (
                <div className="mt-8">
                  <h2 className="text-2xl font-medium mb-4">Project Details</h2>
                  <p className="text-gray-600">{project.fullDescription}</p>
                </div>
              )}
            </div>

            <div className="mt-12 flex gap-6">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border border-black font-medium hover:bg-black hover:text-white transition-colors"
              >
                View Code
              </a>
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border border-black font-medium hover:bg-black hover:text-white transition-colors"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
