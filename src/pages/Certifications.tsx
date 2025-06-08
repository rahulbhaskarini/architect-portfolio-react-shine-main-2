import { Cloud, Award, Shield } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "Microsoft Certified: Power Platform Solution Architect Expert",
      issuer: "Microsoft",
      year: "2023",
      credentialId: "MCPPS-2023-001",
      description: "Expert-level certification demonstrating mastery in designing and implementing comprehensive Power Platform solutions for enterprise environments.",
      skills: ["Solution Architecture", "Power Apps", "Power BI", "Power Automate", "Power Virtual Agents"],
      badge: "🏆",
      level: "Expert"
    },
    {
      name: "AI and Machine Learning Specialization",
      issuer: "IIIT Hyderabad",
      year: "2022",
      credentialId: "IIITH-AI-2022",
      description: "Comprehensive specialization program covering advanced AI/ML concepts, deep learning, and practical applications in enterprise scenarios.",
      skills: ["Machine Learning", "Deep Learning", "Neural Networks", "AI Ethics", "Model Deployment"],
      badge: "🤖",
      level: "Specialization"
    },
    /*{
      name: "Microsoft Certified: Azure Solutions Architect Expert",
      issuer: "Microsoft",
      year: "2021",
      credentialId: "MCASA-2021-456",
      description: "Expert certification validating skills in designing and implementing solutions that run on Microsoft Azure cloud platform.",
      skills: ["Azure Architecture", "Cloud Security", "Data Storage", "Identity Management", "Cost Optimization"],
      badge: "☁️",
      level: "Expert"
    },
    {
      name: "Certified ScrumMaster (CSM)",
      issuer: "Scrum Alliance",
      year: "2020",
      credentialId: "CSM-2020-789",
      description: "Professional certification in Agile project management methodology and Scrum framework for effective team leadership.",
      skills: ["Agile Methodology", "Scrum Framework", "Team Leadership", "Project Management", "Sprint Planning"],
      badge: "🏃‍♂️",
      level: "Professional"
    },
    {
      name: "AWS Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      year: "2023",
      credentialId: "AWS-SAP-2023-123",
      description: "Advanced certification demonstrating expertise in designing distributed applications and systems on AWS platform.",
      skills: ["AWS Architecture", "Distributed Systems", "High Availability", "Disaster Recovery", "Cost Optimization"],
      badge: "🔧",
      level: "Professional"
    },*/
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      year: "2022",
      credentialId: "GCP-PCA-2022-456",
      description: "Professional-level certification for designing and managing robust, secure, scalable solutions using Google Cloud Platform.",
      skills: ["GCP Architecture", "Kubernetes", "Data Engineering", "Security", "DevOps"],
      badge: "🌟",
      level: "Professional"
    },
    {
      name: "Microsoft 365 Certified: Enterprise Administrator Expert",
      issuer: "Microsoft",
      year: "2021",
      credentialId: "M365-EA-2021-789",
      description: "Expert certification covering administration, security, and compliance of Microsoft 365 enterprise environments.",
      skills: ["M365 Administration", "Security & Compliance", "Identity Management", "Service Management", "Collaboration"],
      badge: "🛡️",
      level: "Expert"
    },
    /*{
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      year: "2022",
      credentialId: "CKA-2022-456",
      description: "Hands-on certification demonstrating skills in Kubernetes cluster administration and container orchestration.",
      skills: ["Kubernetes", "Container Orchestration", "Cluster Management", "Networking", "Security"],
      badge: "⚙️",
      level: "Professional"
    }*/
  ];

  const certificationsByLevel = {
    Expert: certifications.filter(cert => cert.level === "Expert"),
    Professional: certifications.filter(cert => cert.level === "Professional"),
    Specialization: certifications.filter(cert => cert.level === "Specialization")
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Banner Section */}
      <div className="relative py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-900/20 dark:via-gray-900/20 dark:to-zinc-900/20 overflow-hidden">
        {/* Clean minimal graphics */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-20 w-12 h-12 border-2 border-slate-300/40 rounded-lg"></div>
          <div className="absolute top-24 right-24 w-8 h-8 border-2 border-gray-300/40 rounded-full"></div>
          <div className="absolute bottom-20 left-16 w-16 h-16 border-2 border-zinc-300/40 rounded-full"></div>
          <div className="absolute bottom-32 right-20 w-10 h-10 border-2 border-slate-300/40 rounded-lg rotate-45"></div>
          
          {/* Provider icons representation */}
          <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-blue-500/20 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-orange-500/20 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-green-500/20 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-red-500/20 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-4 bg-white/20 dark:bg-black/20 rounded-full px-6 py-3 backdrop-blur-sm">
                <Cloud className="w-6 h-6 text-blue-600" />
                <Award className="w-6 h-6 text-orange-600" />
                <Shield className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-600 to-zinc-600 bg-clip-text text-transparent">
              Certifications
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                Certified Across Cloud, Automation, and AI Ecosystems
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Professional certifications demonstrating expertise across cloud platforms, AI/ML, and modern development practices
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Certification Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
            <div className="text-center p-6 bg-card rounded-lg shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="text-3xl font-bold text-slate-600 mb-2">8</div>
              <div className="text-sm text-muted-foreground">Total Certifications</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="text-3xl font-bold text-slate-600 mb-2">4</div>
              <div className="text-sm text-muted-foreground">Expert Level</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="text-3xl font-bold text-slate-600 mb-2">3</div>
              <div className="text-sm text-muted-foreground">Cloud Platforms</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="text-3xl font-bold text-slate-600 mb-2">2023</div>
              <div className="text-sm text-muted-foreground">Latest Achievement</div>
            </div>
          </div>

          {/* Certifications by Level */}
          {Object.entries(certificationsByLevel).map(([level, certs]) => (
            <div key={level} className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">
                {level} Level Certifications
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group border border-slate-100 dark:border-slate-800"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Badge and Level */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-4xl">{cert.badge}</div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        cert.level === "Expert" 
                          ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                          : cert.level === "Professional"
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                          : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                      }`}>
                        {cert.level}
                      </span>
                    </div>

                    {/* Certification Name */}
                    <h3 className="font-bold text-lg mb-2 group-hover:text-slate-600 transition-colors duration-300">
                      {cert.name}
                    </h3>

                    {/* Issuer and Year */}
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-slate-600 font-medium">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.year}</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Credential ID */}
                    <div className="pt-4 border-t border-border">
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Credential ID:</span>
                        <span className="font-mono">{cert.credentialId}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Skills Summary */}
          <div className="mt-20 animate-fade-in">
            <div className="bg-gradient-to-r from-slate-50 to-zinc-50 dark:from-slate-900/20 dark:to-zinc-900/20 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-center mb-8">Certification Areas of Expertise</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: "Cloud Architecture", count: 4 },
                  { name: "AI/ML", count: 2 },
                  { name: "Power Platform", count: 2 },
                  { name: "DevOps", count: 3 },
                  { name: "Security", count: 4 },
                  { name: "Project Management", count: 2 }
                ].map((area, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-slate-600 mb-2">{area.count}</div>
                    <div className="text-sm text-muted-foreground">{area.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Continuous Learning */}
          <div className="mt-16 text-center animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">Committed to Continuous Learning</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              These certifications represent my commitment to staying current with the latest technologies and best practices. 
              I continuously update my skills and pursue new certifications to deliver cutting-edge solutions to my clients.
            </p>
            <div className="text-sm text-muted-foreground">
              <em>All certifications are current and regularly renewed as per vendor requirements</em>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
