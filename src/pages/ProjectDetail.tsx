
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projects } from '../data/projects';
import { Button } from '../components/ui/button';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  // Split the full description into paragraphs
  const paragraphs = project.fullDescription?.split('\n\n') || [];

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
              
              {paragraphs.length > 0 && (
                <div className="mt-8 space-y-12">
                  {/* First paragraph */}
                  <div>
                    <h2 className="text-2xl font-medium mb-4">Project Details</h2>
                    <p className="text-gray-600">{paragraphs[0]}</p>
                  </div>

                  {/* First additional image, if available */}
                  {project.additionalImages && project.additionalImages.length > 0 && (
                    <div className="my-8">
                      <img
                        src={project.additionalImages[0]}
                        alt={`${project.title} - additional view 1`}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  )}

                  {/* Second paragraph */}
                  {paragraphs.length > 1 && (
                    <div>
                      <h3 className="text-xl font-medium mb-3">Development Process</h3>
                      <p className="text-gray-600">{paragraphs[1]}</p>
                    </div>
                  )}

                  {/* Second additional image, if available */}
                  {project.additionalImages && project.additionalImages.length > 1 && (
                    <div className="my-8">
                      <img
                        src={project.additionalImages[1]}
                        alt={`${project.title} - additional view 2`}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  )}

                  {/* Third paragraph */}
                  {paragraphs.length > 2 && (
                    <div>
                      <h3 className="text-xl font-medium mb-3">Further Work</h3>
                      <p className="text-gray-600">{paragraphs[2]}</p>
                    </div>
                  )}

                  {/* Third additional image, if available */}
                  {project.additionalImages && project.additionalImages.length > 2 && (
                    <div className="my-8">
                      <img
                        src={project.additionalImages[2]}
                        alt={`${project.title} - additional view 3`}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  )}

                  {/* Fourth paragraph */}
                  {paragraphs.length > 3 && (
                    <div>
                      <h3 className="text-xl font-medium mb-3">Conclusion</h3>
                      <p className="text-gray-600">{paragraphs[3]}</p>
                    </div>
                  )}
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
