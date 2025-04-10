
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">About</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <div>
            <p className="text-lg mb-6">
              I'm a passionate software engineer with 5+ years of experience designing 
              and building scalable web applications. I enjoy tackling complex problems 
              and creating efficient, maintainable solutions.
            </p>
            <p className="text-lg mb-6">
              My approach combines technical expertise with a deep understanding of 
              user needs, resulting in products that not only work flawlessly but 
              also provide exceptional user experiences.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me hiking, reading about new technologies, 
              or experimenting with photography.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-medium text-xl mb-3">Education</h3>
              <p className="text-gray-600">M.S. Computer Science, University of Technology</p>
              <p className="text-gray-600">B.S. Software Engineering, State University</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-3">Experience</h3>
              <p className="text-gray-600">Senior Developer, Tech Solutions Inc. (2020-present)</p>
              <p className="text-gray-600">Software Engineer, Digital Innovations LLC (2018-2020)</p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-3">Recognition</h3>
              <p className="text-gray-600">Best Innovation Award, DevCon 2023</p>
              <p className="text-gray-600">Open Source Contributor, React Community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
