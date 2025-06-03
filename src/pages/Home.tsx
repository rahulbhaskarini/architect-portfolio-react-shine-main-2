
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Zap, 
  BarChart3, 
  GitBranch, 
  Code, 
  Settings, 
  Terminal, 
  Cloud, 
  Brain, 
  Share2, 
  Building, 
  FileCode, 
  Server 
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrosoft,       // Microsoft 365 / Power Platform umbrella
  faReact,           // React.js
  faNodeJs,          // Node.js
  faGithub,          // fallback or for SPFx (GitHub-based dev)
} from "@fortawesome/free-brands-svg-icons";

import {
  faBolt,            // Power Apps
  faChartBar,        // Power BI
  faProjectDiagram,  // Power Automate
  faCogs,            // SPFx
  faTerminal,        // PowerShell
  faCloud,           // Azure
  faBrain,           // GenAI
  faShareAlt,        // SharePoint
  faBoxes,           // Microsoft 365 alternative
  faFileCode,        // TypeScript
  faServer           // Node.js (if you prefer over brand icon)
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  // Define technology expertise with FontAwesome icons
  // Using FontAwesome for better consistency and flexibility
  // You can also use Lucide icons if you prefer, but FontAwesome is more comprehensive for this use case.
  // Note: Ensure you have the FontAwesome icons installed and configured in your project.
  // You can install FontAwesome with: npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons

  const technologies = [
  { name: "Power Apps", icon: faBolt },
  { name: "Power BI", icon: faChartBar },
  { name: "Power Automate", icon: faProjectDiagram },
  { name: "React.js", icon: faReact },
  { name: "SPFx", icon: faCogs },
  { name: "PowerShell", icon: faTerminal },
  { name: "Azure", icon: faCloud },
  { name: "GenAI", icon: faBrain },
  { name: "SharePoint", icon: faShareAlt },
  { name: "Microsoft 365", icon: faBoxes }, // or use faMicrosoft
  { name: "TypeScript", icon: faFileCode },
  { name: "Node.js", icon: faNodeJs }
];


  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background with Tech Gradients and Animated Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300" />
      
      {/* Animated Code Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-green-400 font-mono text-xs animate-pulse">
          {'{ "innovation": true, "impact": "enterprise" }'}
        </div>
        <div className="absolute top-32 right-20 text-blue-400 font-mono text-xs animate-pulse delay-1000">
          {'const solutions = powerPlatform.build()'}
        </div>
        <div className="absolute bottom-32 left-20 text-purple-400 font-mono text-xs animate-pulse delay-500">
          {'AI.integrate(enterprise.systems)'}
        </div>
      </div>
      
      {/* Abstract Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-500" />
        <div className="absolute top-40 right-40 w-32 h-32 bg-cyan-500/30 rotate-45 rounded-lg blur-lg animate-bounce" />
        <div className="absolute bottom-40 left-40 w-24 h-24 bg-pink-500/30 rotate-12 rounded-lg blur-lg animate-bounce delay-700" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in">
          {/* Enhanced Headline */}
          <div className="mb-6">
           
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Rahul Bhaskarini
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/90 mb-4">
              Solution Architect | Power Platform & AI Mentor
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Helping enterprises modernize, automate, and innovate using Microsoft 365 & AI
            <br />
            <span className="text-cyan-300 font-medium">19+ years of transforming businesses through technology</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 text-blue font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            <div className="text-center p-4 bg-white/10 dark:bg-black/20 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="text-3xl font-bold text-cyan-300 mb-2">19+</div>
              <div className="text-sm text-white/70">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-white/10 dark:bg-black/20 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="text-3xl font-bold text-cyan-300 mb-2">300+</div>
              <div className="text-sm text-white/70">PDs Saved via Automation</div>
            </div>
            <div className="text-center p-4 bg-white/10 dark:bg-black/20 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="text-3xl font-bold text-cyan-300 mb-2">50+</div>
              <div className="text-sm text-white/70">Enterprise Projects</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToNext}
            className="animate-bounce text-white/60 hover:text-cyan-300 transition-colors duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>

      {/* Technology Expertise Section */}
      <section className="relative z-10 py-20 bg-background/95 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Technology Expertise</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized in Microsoft Power Platform, Modern Web Development, and AI Solutions
            </p>
          </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="text-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center text-white">
              <FontAwesomeIcon icon={tech.icon} className="w-6 h-6" />
            </div>
            <div className="text-sm font-medium">{tech.name}</div>
          </div>
        ))}
      </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
