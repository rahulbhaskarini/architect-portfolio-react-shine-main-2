
import { User } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Power Apps", level: 95 },
    { name: "Power BI", level: 90 },
    { name: "Power Automate", level: 92 },
    { name: "React.js", level: 88 },
    { name: "SPFx", level: 85 },
    { name: "PowerShell", level: 90 },
    { name: "Azure", level: 85 },
    { name: "GenAI", level: 80 },
    { name: "SharePoint", level: 95 },
    { name: "Microsoft 365", level: 93 },
    { name: "TypeScript", level: 85 },
    { name: "Solution Architecture", level: 95 },
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Banner Section */}
      <div className="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-orange-900/20 dark:via-red-900/20 dark:to-pink-900/20 overflow-hidden">
        {/* Soft workspace elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-200/30 rounded-full blur-xl" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-red-200/30 rounded-lg rotate-12 blur-lg" />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-orange-300/40 rounded-lg rotate-45 blur-md" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl sm:text-3xl font-semibold text-orange-800 dark:text-orange-200 mb-4">
                Driven by Innovation. Focused on Impact.
              </p>
              <p className="text-lg text-orange-700 dark:text-orange-300 leading-relaxed">
                Passionate Solution Architect with 19+ years of experience in transforming businesses through innovative technology solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Photo and Intro Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            {/* Enhanced Photo Placeholder */}
            <div className="animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-orange-100 via-amber-100 to-red-100 dark:from-orange-900/30 dark:via-amber-900/30 dark:to-red-900/30 rounded-2xl shadow-xl flex items-center justify-center border-4 border-white dark:border-gray-800">
                  <User className="w-32 h-32 text-orange-400/70" />
                </div>
                {/* Decorative elements around photo */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full blur-sm opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-amber-400 rounded-full blur-sm opacity-60"></div>
                <div className="absolute top-1/4 -left-6 w-4 h-4 bg-red-400 rounded-full blur-sm opacity-40"></div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4 italic">
                Professional photo coming soon
              </p>
            </div>

            {/* Quick Introduction */}
            <div className="flex-1 animate-fade-in">
              <h2 className="text-3xl font-semibold mb-6">Hello, I'm Rahul</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A passionate Solution Architect with over 19 years of experience in transforming businesses through innovative technology solutions. I specialize in Microsoft Power Platform, AI integration, and modern web development.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="text-2xl font-bold text-orange-600">19+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="text-2xl font-bold text-orange-600">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="text-2xl font-bold text-orange-600">300+</div>
                  <div className="text-sm text-muted-foreground">PDs Saved</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="text-2xl font-bold text-orange-600">500+</div>
                  <div className="text-sm text-muted-foreground">People Trained</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* About Text */}
            <div className="animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6">My Journey</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 19 years of experience in the technology industry, I've had the privilege of working with some of the world's leading organizations including Cognizant, Wipro, and CES. My journey has been focused on helping enterprises modernize their operations through cutting-edge technology solutions.
                </p>
                <p>
                  As a Solution Architect specializing in Microsoft Power Platform and AI, I've successfully delivered transformative solutions that have saved organizations hundreds of person-days while improving efficiency and user experience. My expertise spans across Power Apps, Power BI, Power Automate, and modern web development technologies.
                </p>
                <p>
                  Beyond technical implementation, I'm passionate about mentoring and training teams. I've conducted numerous training sessions and workshops, helping organizations build internal capabilities and ensuring sustainable technology adoption.
                </p>
                <p>
                  My educational background from NIT Warangal and specialized AI/ML training from IIIT Hyderabad have provided me with a strong foundation in both traditional software engineering and cutting-edge AI technologies.
                </p>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6">Key Achievements</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: "🏆",
                    title: "Client Excellence",
                    description: "Recognized by EY and Incyte for exceptional project delivery and innovation"
                  },
                  {
                    icon: "⚡",
                    title: "Automation Impact",
                    description: "Saved 300+ person-days through intelligent automation solutions"
                  },
                  {
                    icon: "🎓",
                    title: "Academic Excellence",
                    description: "Top 34 rank in EAMCET, B.Tech from NIT Warangal"
                  },
                  {
                    icon: "🧑‍🏫",
                    title: "Mentoring",
                    description: "Trained 500+ professionals in Power Platform and modern development practices"
                  },
                  {
                    icon: "🔧",
                    title: "Technical Leadership",
                    description: "Led digital transformation initiatives across multiple Fortune 500 companies"
                  },
                  {
                    icon: "🚀",
                    title: "Innovation",
                    description: "Pioneer in integrating AI/ML with traditional business applications"
                  }
                ].map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-orange-100 dark:border-orange-900/30"
                  >
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold mb-8 text-center">Technical Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Philosophy */}
          <div className="mt-20 text-center animate-fade-in">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">My Philosophy</h2>
              <blockquote className="text-lg italic text-muted-foreground max-w-2xl mx-auto">
                "Technology should empower people, not complicate their lives. My goal is to create solutions that are not just technically sound, but also intuitive and impactful for the end users."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
