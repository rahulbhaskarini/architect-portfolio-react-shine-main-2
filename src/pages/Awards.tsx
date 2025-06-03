import { Trophy, Star, Medal } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      title: "Excellence in Innovation Award",
      organization: "EY (Ernst & Young)",
      year: "2023",
      category: "Client Recognition",
      description: "Recognized for innovative Power Platform solutions that transformed client's business processes and delivered exceptional value.",
      impact: "Reduced operational costs by 40% and improved process efficiency by 60%",
      project: "Enterprise Automation Suite for Global Financial Services Client",
      icon: "🏆",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Outstanding Project Delivery Award",
      organization: "Incyte Corporation",
      year: "2022",
      category: "Client Appreciation",
      description: "Acknowledged for exceptional project management and technical delivery of complex SharePoint migration and modernization project.",
      impact: "Delivered project 2 weeks ahead of schedule with zero critical issues",
      project: "SharePoint Online Migration and Modernization",
      icon: "🎖️",
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Automation Champion",
      organization: "Cognizant",
      year: "2023",
      category: "Internal Recognition",
      description: "Recognized for developing innovative automation solutions that saved 300+ person-days across multiple client engagements.",
      impact: "Saved 300+ person-days through intelligent automation solutions",
      project: "Cross-client Automation Framework Development",
      icon: "⚡",
      color: "from-green-400 to-blue-500"
    },
    {
      title: "Top Performer - Q4 2022",
      organization: "Cognizant",
      year: "2022",
      category: "Performance Excellence",
      description: "Achieved highest performance rating for consistent delivery excellence and client satisfaction across all assigned projects.",
      impact: "Maintained 100% client satisfaction score throughout the year",
      project: "Multiple High-Priority Client Engagements",
      icon: "⭐",
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Technical Excellence Award",
      organization: "Cognizant",
      year: "2017",
      category: "Technical Innovation",
      description: "Honored for developing cutting-edge Automation scripts and establishing best practices for SharePoint Migration projects",
      impact: "Framework adopted across 15+ projects, improving development efficiency by 50%",
      project: "Modern SharePoint Development Framework",
      icon: "💡",
      color: "from-indigo-400 to-blue-500"
    },
    {
      title: "EAMCET Top 34 Rank Achievement",
      organization: "Andhra Pradesh State Government",
      year: "2000",
      category: "Academic Excellence",
      description: "Secured rank 34 in the highly competitive EAMCET entrance examination among over 200,000 candidates.",
      impact: "Secured admission to premier engineering college - NIT Warangal",
      project: "Engineering Entrance Examination",
      icon: "🎓",
      color: "from-red-400 to-pink-500"
    }
  ];

  const recognitionStats = [
    { label: "Awards Received", value: "6", icon: "🏆" },
    { label: "Client Organizations", value: "3", icon: "🏢" },
    { label: "Years of Recognition", value: "5", icon: "📅" },
    { label: "Person-Days Saved", value: "300+", icon: "⚡" }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Banner Section */}
      <div className="relative py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-900/20 dark:via-amber-900/20 dark:to-orange-900/20 overflow-hidden">
        {/* Trophy and medal graphics with sparkles */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-20 w-8 h-10 bg-yellow-400/30 rounded-t-full"></div>
          <div className="absolute top-20 right-24 w-6 h-8 bg-amber-400/30 rounded-full"></div>
          <div className="absolute bottom-20 left-16 w-10 h-12 bg-orange-400/30 rounded-t-full"></div>
          
          {/* Sparkle effects */}
          <div className="absolute top-24 left-1/4 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-1/4 w-1 h-1 bg-amber-400/60 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-orange-400/60 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-24 right-1/3 w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse delay-1000"></div>
          
          {/* Ribbon effects */}
          <div className="absolute top-1/3 left-10 w-16 h-1 bg-gradient-to-r from-yellow-400/30 to-amber-400/30 rounded-full rotate-12"></div>
          <div className="absolute bottom-1/3 right-10 w-20 h-1 bg-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-full -rotate-12"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-4 bg-white/20 dark:bg-black/20 rounded-full px-6 py-3 backdrop-blur-sm">
                <Trophy className="w-6 h-6 text-yellow-600" />
                <Star className="w-6 h-6 text-amber-600" />
                <Medal className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Awards & Recognition
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl sm:text-3xl font-semibold text-yellow-800 dark:text-yellow-200 mb-4">
                Recognized for Innovation and Impact
              </p>
              <p className="text-lg text-yellow-700 dark:text-yellow-300 leading-relaxed">
                Acknowledged excellence in innovation, technical delivery, and client satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Recognition Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
            {recognitionStats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-yellow-100 dark:border-yellow-900/30"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-yellow-600 mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Awards Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group border border-yellow-100 dark:border-yellow-900/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Award Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{award.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300">
                        {award.title}
                      </h3>
                      <p className="text-lg font-semibold text-muted-foreground">{award.organization}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-yellow-600">{award.year}</div>
                    <div className="text-xs text-muted-foreground">{award.category}</div>
                  </div>
                </div>

                {/* Award Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {award.description}
                </p>

                {/* Project */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-1">Related Project:</h4>
                  <p className="text-sm text-yellow-600 font-medium">{award.project}</p>
                </div>

                {/* Impact */}
                <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2 flex items-center">
                    <span className="mr-2">📈</span>
                    Impact:
                  </h4>
                  <p className="text-sm text-muted-foreground font-medium">{award.impact}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Recognition Timeline */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-center mb-12">Recognition Timeline</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 to-orange-500"></div>

              {awards.slice().reverse().map((award, index) => (
                <div
                  key={index}
                  className={`relative mb-8 animate-fade-in ${
                    index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-8"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 -translate-y-1 w-4 h-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full border-4 border-background shadow-lg"></div>

                  {/* Content */}
                  <div className="ml-12 md:ml-0 bg-card rounded-lg p-4 shadow-md border border-yellow-100 dark:border-yellow-900/30">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-yellow-600">{award.title}</h4>
                      <span className="text-sm font-medium text-muted-foreground">{award.year}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{award.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonials Section */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-center mb-8">What Clients Say</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <blockquote className="text-lg italic text-muted-foreground mb-4">
                    "Rahul's innovative approach to Power Platform solutions transformed our business processes. 
                    His technical expertise and commitment to excellence are truly exceptional."
                  </blockquote>
                  <cite className="text-sm font-medium text-yellow-600">- EY Project Sponsor</cite>
                </div>
                <div className="text-center">
                  <blockquote className="text-lg italic text-muted-foreground mb-4">
                    "Outstanding delivery and attention to detail. Rahul consistently exceeded our expectations 
                    and delivered solutions that provided immediate business value."
                  </blockquote>
                  <cite className="text-sm font-medium text-yellow-600">- Incyte Technology Lead</cite>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">Ready to Achieve Excellence Together?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's work together to create innovative solutions that drive business value and earn recognition for excellence.
            </p>
            <button className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
