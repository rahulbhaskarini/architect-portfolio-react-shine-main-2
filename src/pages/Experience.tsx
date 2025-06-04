
import { Calendar, Users, Building, Laptop, Code } from "lucide-react";
import { motion } from "framer-motion";



const Experience = () => {
  const experiences = [
    {
      company: "Cognizant",
      role: "Solution Architect ",
      duration: "2008 - Present",
      location: "Hyderabad, India",
      description: "Leading digital transformation initiatives and Power Platform implementations for Fortune 500 clients.",
      highlights: [
        "Architected enterprise-scale Power Platform solutions serving 10,000+ users",
        "Led migration projects from legacy systems to modern SharePoint Online environments",
        "Mentored cross-functional teams on modern development practices and Power Platform capabilities",
        "Delivered AI-powered automation solutions reducing manual effort by 60%"
      ],
      technologies: ["Power Platform", "Azure", "SharePoint", "React", "AI/ML", "PowerShell"]
    },
    {
      company: "Wipro",
      role: "Technical Lead",
      duration: "2006 - 2008",
      location: "Bangalore, India",
      description: "Spearheaded SharePoint and Office 365 implementations while building modern web applications.",
      highlights: [
        "Led a team of 15+ developers on large-scale SharePoint projects",
        "Designed and implemented SPFx solutions for enhanced user experiences",
        "Established best practices for code quality and deployment processes",
        "Achieved 98% client satisfaction score across multiple project deliveries"
      ],
      technologies: ["SharePoint", "Office 365", "SPFx", "JavaScript", "C#", ".NET"]
    },
    {
      company: "CES Limited",
      role: "Software Engineer",
      duration: "2005 - 2005",
      location: "Hyderabad, India",
      description: "Started career developing web applications and gradually moved to enterprise solutions architecture.",
      highlights: [
        "Developed custom web applications using .NET technologies",
        "Contributed to the architectural design of multiple enterprise applications",
        "Gained expertise in database design and optimization",
        "Received recognition for innovative problem-solving approaches"
      ],
      technologies: ["ASP.NET", "C#", "SQL Server", "JavaScript", "HTML/CSS", "Web Services"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Banner Section */}
      <div className="relative py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20 overflow-hidden">
        {/* Professional geometric elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-20 h-20 bg-green-300/20 rounded-full"></div>
          <div className="absolute top-32 left-40 w-16 h-16 bg-emerald-300/20 rounded-full"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-teal-300/20 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-300/30 rounded-full blur-sm"></div>
          <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-emerald-300/30 rounded-full blur-sm"></div>
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-4 bg-white/20 dark:bg-black/20 rounded-full px-6 py-3 backdrop-blur-sm">
                <Calendar className="w-6 h-6 text-green-600" />
                <Users className="w-6 h-6 text-emerald-600" />
                <Building className="w-6 h-6 text-teal-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Experience
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl sm:text-3xl font-semibold text-green-800 dark:text-green-200 mb-4">
                19+ Years of Building Enterprise Solutions
              </p>
              <p className="text-lg text-green-700 dark:text-green-300 leading-relaxed">
                across Power Platform, Azure, and SharePoint
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-teal-500"></div>

            <div className="relative flex flex-col md:block">
  {/* Vertical Timeline Line */}
  <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-green-100 to-green-300 dark:from-green-900/20 dark:to-green-800/20 transform -translate-x-1/2"></div>

  {experiences.map((exp, index) => {
    const isLeft = index % 2 === 0;

    return (
      <motion.div
        key={index}
        className={`relative mb-16 md:w-1/2 ${
          isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
        }`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {/* Timeline Dot */}
        <div className="absolute left-2 md:left-1/2 transform -translate-x-1/2 -translate-y-1 w-4 h-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-full border-4 border-background shadow-lg z-10"></div>

        {/* Experience Card */}
        <div className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-green-100 dark:border-green-900/30">
          {/* Header with Optional Role Icon */}
          <div className={`mb-4 flex items-center ${isLeft ? "justify-end" : "justify-start"}`}>
            {exp.role === "Developer" && <Laptop className="w-5 h-5 text-green-500 mr-2" />}
            {exp.role === "Team Lead" && <Users className="w-5 h-5 text-green-500 mr-2" />}
            {exp.role === "Solution Architect" && <Code className="w-5 h-5 text-green-500 mr-2" />}
            <h3 className="text-2xl font-bold text-green-600">{exp.role}</h3>
          </div>

          <h4 className="text-xl font-semibold mb-2">{exp.company}</h4>

          {/* Duration & Location */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-muted-foreground mb-4">
            <span className="font-medium flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {exp.duration}
            </span>
            <span className="flex items-center">
              <Building className="w-4 h-4 mr-1" />
              {exp.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

          {/* Highlights */}
          <div className="mb-4">
            <h5 className="font-semibold mb-2">Key Achievements:</h5>
            <ul className="space-y-1">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h5 className="font-semibold mb-2">Technologies:</h5>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  })}
</div>

          </div>

          {/* Summary Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 animate-fade-in">
            <div className="text-center p-6 bg-card rounded-lg shadow-sm border border-green-100 dark:border-green-900/30">
              <div className="text-3xl font-bold text-green-600 mb-2">19+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm border border-green-100 dark:border-green-900/30">
              <div className="text-3xl font-bold text-green-600 mb-2">3</div>
              <div className="text-sm text-muted-foreground">Major Organizations</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm border border-green-100 dark:border-green-900/30">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm border border-green-100 dark:border-green-900/30">
              <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Professionals Trained</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
