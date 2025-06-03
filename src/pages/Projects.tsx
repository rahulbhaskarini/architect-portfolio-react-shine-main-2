import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Layers, Zap, BarChart3 } from "lucide-react";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Migrations", "SPFx", "AI", "Power Platform", "Automation"];

  const projects = [
    {
      title: "Enterprise Power Platform Migration",
      client: "Fortune 500 Financial Services",
      category: "Migrations",
      technologies: ["Power Apps", "Power Automate", "SharePoint", "Azure"],
      description: "Led comprehensive migration of legacy systems to modern Power Platform infrastructure.",
      contributions: [
        "Architected scalable Power Apps solutions for 5,000+ users",
        "Implemented automated workflows reducing processing time by 70%",
        "Designed governance framework for enterprise-wide adoption"
      ],
      impact: "Saved 250 person-days annually through automation"
    },
    {
      title: "AI-Powered Document Processing",
      client: "Healthcare Organization",
      category: "AI",
      technologies: ["AI Builder", "Power Automate", "SharePoint", "Azure Cognitive Services"],
      description: "Developed intelligent document processing system using AI Builder and Power Platform.",
      contributions: [
        "Implemented OCR and form recognition for medical documents",
        "Created automated approval workflows with AI-driven insights",
        "Built real-time dashboards for processing metrics"
      ],
      impact: "Reduced document processing time by 80%"
    },
    {
      title: "Modern SharePoint Intranet",
      client: "Manufacturing Conglomerate",
      category: "SPFx",
      technologies: ["SPFx", "React", "TypeScript", "Microsoft Graph"],
      description: "Designed and developed modern intranet solution with custom SPFx web parts.",
      contributions: [
        "Built responsive SPFx components with React and TypeScript",
        "Integrated Microsoft Graph APIs for enhanced functionality",
        "Implemented role-based access and content management"
      ],
      impact: "Improved employee engagement by 45%"
    },
    {
      title: "Automated HR Onboarding Platform",
      client: "Technology Services Company",
      category: "Automation",
      technologies: ["Power Apps", "Power Automate", "Teams", "Azure AD"],
      description: "Created comprehensive HR onboarding platform with automated workflows.",
      contributions: [
        "Designed intuitive Power Apps interface for HR teams",
        "Automated employee provisioning and access management",
        "Integrated with Teams for seamless collaboration"
      ],
      impact: "Reduced onboarding time from 5 days to 2 hours"
    },
    {
      title: "Business Intelligence Dashboard",
      client: "Retail Chain",
      category: "Power Platform",
      technologies: ["Power BI", "Azure SQL", "Power Automate", "Excel"],
      description: "Built comprehensive BI solution for real-time business insights.",
      contributions: [
        "Created interactive Power BI dashboards with drill-down capabilities",
        "Implemented automated data refresh and alerting systems",
        "Designed mobile-responsive reports for field teams"
      ],
      impact: "Enabled data-driven decisions improving revenue by 15%"
    },
    {
      title: "Legacy System Integration",
      client: "Government Agency",
      category: "Migrations",
      technologies: ["Power Apps", "SQL Server", "Web APIs", "Azure Functions"],
      description: "Integrated multiple legacy systems into unified Power Platform solution.",
      contributions: [
        "Built custom connectors for legacy system integration",
        "Designed data migration strategies with minimal downtime",
        "Created unified user interface replacing 5 separate systems"
      ],
      impact: "Consolidated 5 systems into 1 unified platform"
    },
    {
      title: "Custom SPFx Extensions Suite",
      client: "Educational Institution",
      category: "SPFx",
      technologies: ["SPFx", "React", "PnP JS", "Microsoft Graph"],
      description: "Developed suite of custom SPFx extensions for enhanced SharePoint experience.",
      contributions: [
        "Built application customizers for branding and navigation",
        "Created field customizers for improved data input",
        "Developed command set extensions for bulk operations"
      ],
      impact: "Enhanced user productivity by 30%"
    },
    {
      title: "Intelligent Contract Management",
      client: "Legal Services Firm",
      category: "AI",
      technologies: ["AI Builder", "Power Apps", "SharePoint", "Power Automate"],
      description: "AI-powered contract management system with automated review and approval.",
      contributions: [
        "Implemented AI-based contract analysis and risk assessment",
        "Built automated routing based on contract type and value",
        "Created real-time tracking and notification system"
      ],
      impact: "Reduced contract review time by 60%"
    },
    {
      title: "Field Service Automation",
      client: "Utilities Company",
      category: "Automation",
      technologies: ["Power Apps", "Power Automate", "Power BI", "GPS Integration"],
      description: "Mobile-first field service application with automated scheduling and tracking.",
      contributions: [
        "Built offline-capable mobile app for field technicians",
        "Implemented GPS-based automated check-ins and reporting",
        "Created predictive maintenance alerts using IoT data"
      ],
      impact: "Improved field efficiency by 40%"
    },
    {
      title: "Executive Dashboard Suite",
      client: "Pharmaceutical Company",
      category: "Power Platform",
      technologies: ["Power BI", "Azure Synapse", "Power Automate", "Excel"],
      description: "Executive-level dashboards providing real-time business insights across departments.",
      contributions: [
        "Designed KPI-focused dashboards for C-level executives",
        "Implemented automated data aggregation from multiple sources",
        "Created mobile-optimized views for on-the-go access"
      ],
      impact: "Enabled faster strategic decision-making"
    }
  ];

  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <div className="min-h-screen">
      {/* Enhanced Banner Section */}
      <div className="relative py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-900/20 dark:via-indigo-900/20 dark:to-blue-900/20 overflow-hidden">
        {/* App dashboard graphics */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-12 bg-purple-300/30 rounded-lg shadow-lg"></div>
          <div className="absolute top-16 right-20 w-16 h-10 bg-indigo-300/30 rounded-lg shadow-lg"></div>
          <div className="absolute bottom-20 left-20 w-24 h-14 bg-blue-300/30 rounded-lg shadow-lg"></div>
          <div className="absolute bottom-32 right-16 w-18 h-12 bg-purple-300/30 rounded-lg shadow-lg"></div>
          
          {/* Dashboard grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 gap-4 h-full p-8">
              {Array.from({ length: 32 }).map((_, i) => (
                <div key={i} className="bg-indigo-400/20 rounded"></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-4 bg-white/20 dark:bg-black/20 rounded-full px-6 py-3 backdrop-blur-sm">
                <Layers className="w-6 h-6 text-purple-600" />
                <Zap className="w-6 h-6 text-indigo-600" />
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl sm:text-3xl font-semibold text-purple-800 dark:text-purple-200 mb-4">
                Turning Vision into Scalable Digital Platforms
              </p>
              <p className="text-lg text-purple-700 dark:text-purple-300 leading-relaxed">
                Showcase of enterprise solutions and digital transformation initiatives
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter)}
                className="transition-all duration-300 hover:scale-105"
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border border-purple-100 dark:border-purple-900/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-purple-600">{project.title}</h3>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 rounded text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-medium">{project.client}</p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contributions */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Contributions:</h4>
                  <ul className="space-y-1">
                    {project.contributions.map((contribution, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-purple-500 mr-2 mt-1">•</span>
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center">
                    <span className="text-xs text-muted-foreground mr-2">Impact:</span>
                    <span className="text-sm font-medium text-purple-600">{project.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-20 text-center animate-fade-in">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Project Impact Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">300+</div>
                  <div className="text-sm text-muted-foreground">Person-Days Saved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Users Impacted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
