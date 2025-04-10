
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-engineer-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-engineer-darkBlue mb-4">About Me</h2>
          <div className="w-20 h-1 bg-engineer-blue mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-center mb-12">
            I'm a passionate software engineer with 5+ years of experience designing and building scalable web applications.
            I enjoy tackling complex problems and creating efficient, maintainable solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <GraduationCap className="h-12 w-12 text-engineer-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-engineer-gray">M.S. Computer Science<br />University of Technology</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Briefcase className="h-12 w-12 text-engineer-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Experience</h3>
                <p className="text-engineer-gray">Senior Developer<br />Tech Solutions Inc.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-engineer-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Recognition</h3>
                <p className="text-engineer-gray">Best Innovation Award<br />DevCon 2023</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
