
import { GraduationCap, Users, Award } from "lucide-react";

const Training = () => {
  const trainings = [
    {
      title: "Power Platform Fundamentals",
      type: "Corporate Training",
      duration: "3 Days",
      participants: "15+",
      description: "Comprehensive introduction to Microsoft Power Platform covering Power Apps, Power BI, and Power Automate fundamentals.",
      topics: [
        "Power Apps canvas and model-driven app development",
        "Power BI dashboard creation and data visualization",
        "Power Automate workflow automation",
        "Integration patterns and best practices"
      ],
      organizations: ["Cognizant", "Client Organizations", "Microsoft Community"]
    },
    {
      title: "Advanced SPFx Development",
      type: "Technical Workshop",
      duration: "2 Days",
      participants: "10+",
      description: "Deep-dive into SharePoint Framework development using React, TypeScript, and modern web technologies.",
      topics: [
        "SPFx architecture and development lifecycle",
        "React and TypeScript best practices",
        "Microsoft Graph API integration",
        "Deployment and ALM strategies"
      ],
      organizations: ["Wipro", "Developer Communities", "Microsoft Events"]
    },
    {
      title: "AI Integration with Power Platform",
      type: "Specialized Workshop",
      duration: "1 Day",
      participants: "120+",
      description: "Hands-on training on integrating AI capabilities with Power Platform using AI Builder and Azure Cognitive Services.",
      topics: [
        "AI Builder models and prebuilt AI services",
        "Custom AI model training and deployment",
        "Intelligent document processing",
        "AI-powered business process automation"
      ],
      organizations: ["Microsoft", "AI Community Events", "Enterprise Clients"]
    },
    {
      title: "Modern SharePoint Architecture",
      type: "Certification Program",
      duration: "5 Days",
      participants: "20+",
      description: "Comprehensive training on modern SharePoint architecture, governance, and best practices.",
      topics: [
        "SharePoint Online architecture and planning",
        "Information architecture and content strategy",
        "Security and compliance frameworks",
        "Migration strategies and change management"
      ],
      organizations: ["Multiple Fortune 500 Companies", "Government Agencies"]
    }
  ];

  const certifications = [
    {
      name: "Microsoft Certified: Power Platform Solution Architect Expert",
      issuer: "Microsoft",
      year: "2023",
      credentialId: "MCPPS-2023-001",
      description: "Advanced certification demonstrating expertise in designing and implementing Power Platform solutions."
    },
    {
      name: "AI and Machine Learning Specialization",
      issuer: "IIIT Hyderabad",
      year: "2022",
      credentialId: "IIITH-AI-2022",
      description: "Specialized program focusing on AI/ML applications in enterprise environments."
    },
    {
      name: "Microsoft Certified: Azure Solutions Architect Expert",
      issuer: "Microsoft",
      year: "2021",
      credentialId: "MCASA-2021-456",
      description: "Expert-level certification for designing Azure-based enterprise solutions."
    },
    {
      name: "Certified ScrumMaster (CSM)",
      issuer: "Scrum Alliance",
      year: "2020",
      credentialId: "CSM-2020-789",
      description: "Certification in Agile project management and Scrum methodology."
    },
    {
      name: "AWS Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      year: "2023",
      credentialId: "AWS-SAP-2023-123",
      description: "Professional-level certification for designing distributed systems on AWS."
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      year: "2022",
      credentialId: "GCP-PCA-2022-456",
      description: "Professional certification for designing and managing Google Cloud solutions."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Banner Section */}
      <div className="relative py-20 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 dark:from-cyan-900/20 dark:via-sky-900/20 dark:to-blue-900/20 overflow-hidden">
        {/* Professional learning graphics */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-16 h-12 bg-cyan-300/20 rounded-lg"></div>
          <div className="absolute top-20 right-24 w-12 h-8 bg-sky-300/20 rounded-lg"></div>
          <div className="absolute bottom-20 left-16 w-20 h-14 bg-blue-300/20 rounded-lg"></div>
          
          {/* Professional circles representing people/knowledge */}
          <div className="absolute top-32 left-1/3 w-8 h-8 bg-cyan-400/30 rounded-full"></div>
          <div className="absolute top-40 right-1/3 w-6 h-6 bg-sky-400/30 rounded-full"></div>
          <div className="absolute bottom-32 left-1/2 w-10 h-10 bg-blue-400/30 rounded-full"></div>
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-4 bg-white/20 dark:bg-black/20 rounded-full px-6 py-3 backdrop-blur-sm">
                <GraduationCap className="w-6 h-6 text-cyan-600" />
                <Users className="w-6 h-6 text-sky-600" />
                <Award className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Training & Mentoring
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl sm:text-3xl font-semibold text-cyan-800 dark:text-cyan-200 mb-4">
                Mentoring Teams on Power Platform, Azure & GenAI Tools
              </p>
              <p className="text-lg text-cyan-700 dark:text-cyan-300 leading-relaxed">
                Empowering teams and individuals through comprehensive training programs and mentoring
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Training Programs */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Training Programs</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {trainings.map((training, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in border border-cyan-100 dark:border-cyan-900/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-cyan-600">{training.title}</h3>
                      <span className="px-2 py-1 bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 rounded text-xs font-medium">
                        {training.type}
                      </span>
                    </div>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>Duration: {training.duration}</span>
                      <span>Participants: {training.participants}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {training.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Topics:</h4>
                    <ul className="space-y-1">
                      {training.topics.map((topic, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-cyan-500 mr-2 mt-1">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Organizations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {training.organizations.map((org, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                        >
                          {org}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Professional Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border border-cyan-100 dark:border-cyan-900/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl">
                      {cert.issuer.charAt(0)}
                    </div>
                    <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
                    <p className="text-cyan-600 font-medium">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.year}</p>
                  </div>

                  <p className="text-sm text-muted-foreground text-center mb-3">
                    {cert.description}
                  </p>

                  <div className="text-center">
                    <span className="text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training Impact */}
          <div className="mt-20 animate-fade-in">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-center mb-8">Training Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Professionals Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Training Sessions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Organizations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">6</div>
                  <div className="text-sm text-muted-foreground">Major Certifications</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">Interested in Training or Mentoring?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I offer customized training programs and one-on-one mentoring sessions for individuals and teams looking to excel in Power Platform, modern web development, and AI technologies.
            </p>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
