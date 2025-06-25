import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowUp } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

interface Skill {
  category: string;
  items: string[];
}

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "NSUTx",
      description: " A free cross platform app that facilitates access to basic student information available on the NSUT IMS portal and the latest college updates",
      tech: ["Flutter", "Firebase", "Firestore"],
      github: "",
      demo: "https://www.youtube.com/watch?v=AvItyMgX6FM"
    },
    {
        id: 2,
        title: "Smart Gross",
        description: "A demo online grocery store that would help us to visualize the Grocery recommendations based on previous orders of the User and their browser history .",
        tech: ["React", "Node.js", "Python"],
        github: "https://github.com/namansingh73/smart-bag",
        demo: "https://namansingh73.github.io/smart-bag-documentation/#/quickstart"
    },
    {
      id: 3,
      title: "Auto Securo",
      description: "An antimotor theft solution targeting colonies and societies for better security regarding vehicles.",
      tech: ["Flutter", "Firebase", "Python"],
      github: "https://github.com/sahilcool-nsut/auto_securo_user",
      demo: "https://devfolio.co/projects/auto-securo-an-anti-motortheft-solution-db63"
    }
  ];

  const skills: Skill[] = [
    {
      category: "Backend",
      items: ["Golang", "Python", "Gin", "Django", "REST-API"]
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MongoDB", "Aerospike", "OracleDB"]
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "Kafka", "Studio3T", "Figma"]
    },
    {
        category: "Frontend",
        items: ["Vibe Coding"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              Shubh Gupta
            </button>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section 
                      ? 'text-gray-900 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-gray-600 text-lg mb-4">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Shubh Gupta
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Not just another developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-gray-300 text-gray-900 hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}

      <section id="about" className="py-16 md:py-24 bg-white">

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">About</h2>

          <div className="space-y-6 mb-16">

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">

              I'm a developer who believes in the power of clean, thoughtful design 

              and well-crafted code. I enjoy building applications that are not only 

              functional but also delightful to use.

            </p>

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">

              When I'm not coding, you'll find me exploring new technologies, 

              playing a sport, hiking up a mountain, or reading about weird things.

            </p>

          </div>

          

          <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">Skills</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {skills.map((skill) => (

              <div key={skill.category}>

                <h4 className="font-medium text-gray-900 mb-3">{skill.category}</h4>

                <ul className="space-y-2">

                  {skill.items.map((item) => (

                    <li key={item} className="text-gray-600">{item}</li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">Projects</h2>
          <div className="space-y-12">
            {projects.map((project) => (
              <div key={project.id} className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a 
                        href={project.github}
                        className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="View source code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">Contact</h2>
          <div className="max-w-2xl">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities and projects. 
              Let's connect and see how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="mailto:floatingphantom@gmail.com"
                className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
              <a 
                href="https://linkedin.com/in/shubh-gupta-358521191"
                className="flex items-center gap-3 px-6 py-3 border border-gray-300 text-gray-900 hover:bg-gray-100 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/FloatingPhantom"
                className="flex items-center gap-3 px-6 py-3 border border-gray-300 text-gray-900 hover:bg-gray-100 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-600 text-center">
            © 2025 Shubh Gupta. Built with React and TypeScript.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Portfolio;