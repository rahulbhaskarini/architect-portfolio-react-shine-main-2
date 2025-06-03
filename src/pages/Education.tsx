import { GraduationCap, BookOpen, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Electronics and Communication Engineering",
      institution: "National Institute of Technology (NIT) Warangal",
      duration: "2000 - 2004",
      grade: "First Class",
      achievements: [
        
        "Secured Top 34 rank in EAMCET entrance examination",
        "Active member of Electronics and Communications Society",
        "Led multiple technical projects and hackathons",
        "Participated in inter-collegiate programming competitions"
      ],
      description: "Comprehensive Electronics and Communication education along with fundamentals of programming, algorithms, data structures, database systems, and software engineering principles.",
      logo: "🎓"
    },
    {
      degree: "AI/ML Specialization",
      field: "Artificial Intelligence and Machine Learning",
      institution: "International Institute of Information Technology (IIIT) Hyderabad",
      duration: "2021 - 2022",
      grade: "Distinction",
      achievements: [
        "Completed advanced coursework in Machine Learning algorithms",
        "Specialized in Deep Learning and Neural Networks",
        "Worked on real-world AI/ML projects with industry applications",
        "Published research on AI applications in enterprise automation",
        "Received recognition for innovative AI solution design"
      ],
      description: "Advanced specialization program focusing on cutting-edge AI/ML technologies, practical applications, and their integration with enterprise systems.",
      logo: "🤖"
    }
  ];

  const additionalLearning = [
    {
      title: "Microsoft Power Platform Developer",
      provider: "Microsoft Learn",
      year: "2023",
      description: "Comprehensive learning path covering advanced Power Platform development techniques"
    },
    {
      title: "AWS Solutions Architecture",
      provider: "AWS Training",
      year: "2023",
      description: "Advanced training in designing scalable solutions on Amazon Web Services"
    },
    {
      title: "React and Modern Web Development",
      provider: "Various Online Platforms",
      year: "2022",
      description: "Continuous learning in modern JavaScript frameworks and web development best practices"
    },
    {
      title: "Kubernetes and Container Orchestration",
      provider: "Linux Foundation",
      year: "2022",
      description: "Hands-on training in Kubernetes administration and container technologies"
    },
    {
      title: "Azure DevOps and CI/CD",
      provider: "Microsoft",
      year: "2021",
      description: "Professional development in DevOps practices and continuous integration/deployment"
    },
    {
      title: "Agile and Scrum Methodologies",
      provider: "Scrum Alliance",
      year: "2020",
      description: "Comprehensive training in Agile project management and Scrum framework"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Banner Section */}
      <div className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20 overflow-hidden">
        {/* Academic graphics */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-20 w-16 h-20 border-4 border-emerald-300/40 rounded-t-full"></div>
          <div className="absolute top-20 right-24 w-12 h-16 border-4 border-teal-300/40 rounded-t-full"></div>
          <div className="absolute bottom-20 left-16 w-20 h-24 border-4 border-cyan-300/40 rounded-t-full"></div>
          
          {/* Books representation */}
          <div className="absolute top-32 left-1/3 w-8 h-12 bg-emerald-300/30 rounded-sm shadow-md"></div>
          <div className="absolute top-28 left-1/3 ml-2 w-8 h-12 bg-teal-300/30 rounded-sm shadow-md"></div>
          <div className="absolute bottom-32 right-1/3 w-10 h-14 bg-cyan-300/30 rounded-sm shadow-md"></div>
          
          {/* Academic symbols */}
          <div className="absolute top-1/4 right-1/4 w-6 h-6 border-2 border-emerald-400/60 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-8 h-8 border-2 border-teal-400/60 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-4 bg-white/20 dark:bg-black/20 rounded-full px-6 py-3 backdrop-blur-sm">
                <GraduationCap className="w-6 h-6 text-emerald-600" />
                <BookOpen className="w-6 h-6 text-teal-600" />
                <Award className="w-6 h-6 text-cyan-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Education
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl sm:text-3xl font-semibold text-emerald-800 dark:text-emerald-200 mb-4">
                Lifelong Learner – Tech with Purpose
              </p>
              <p className="text-lg text-emerald-700 dark:text-emerald-300 leading-relaxed">
                Strong academic foundation combined with continuous professional development
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Formal Education */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Formal Education</h2>
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in border border-emerald-100 dark:border-emerald-900/30"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Institution Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="text-5xl">{edu.logo}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-emerald-600 mb-1">{edu.degree}</h3>
                          <h4 className="text-xl font-semibold mb-2">{edu.field}</h4>
                          <p className="text-lg text-muted-foreground mb-1">{edu.institution}</p>
                          <div className="flex flex-col sm:flex-row sm:gap-4 text-sm text-muted-foreground">
                            <span>{edu.duration}</span>
                            <span className="font-medium text-emerald-600">{edu.grade}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {edu.description}
                      </p>

                      <div>
                        <h5 className="font-semibold mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-emerald-500 mr-2 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className="flex items-center justify-center">
                      <div className="w-48 h-48 bg-gradient-to-br from-emerald-100 to-cyan-100 dark:from-emerald-900/30 dark:to-cyan-900/30 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-lg">
                        <div className="text-6xl opacity-50">{edu.logo}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Continuous Learning */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Continuous Learning & Professional Development</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalLearning.map((learning, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border border-emerald-100 dark:border-emerald-900/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    <h3 className="font-bold text-lg mb-2 text-emerald-600">{learning.title}</h3>
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                      <span className="font-medium">{learning.provider}</span>
                      <span>{learning.year}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {learning.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Philosophy */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-center mb-6">Educational Philosophy</h2>
              <div className="max-w-4xl mx-auto">
                <blockquote className="text-lg italic text-center text-muted-foreground mb-8">
                  "Learning is a lifelong journey. The foundation from prestigious institutions like NIT Warangal and IIIT Hyderabad, 
                  combined with continuous skill development, enables me to stay at the forefront of technology innovation."
                </blockquote>
                
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl mb-3">📚</div>
                    <h3 className="font-semibold mb-2">Strong Foundation</h3>
                    <p className="text-sm text-muted-foreground">
                      Premier engineering education providing solid technical fundamentals
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl mb-3">🔄</div>
                    <h3 className="font-semibold mb-2">Continuous Learning</h3>
                    <p className="text-sm text-muted-foreground">
                      Regular upskilling through certifications and specialized programs
                    </p>
                  </div>
                  <div>
                    <div className="text-3xl mb-3">🎯</div>
                    <h3 className="font-semibold mb-2">Practical Application</h3>
                    <p className="text-sm text-muted-foreground">
                      Immediate application of learning in real-world enterprise projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in">
            <div className="text-center p-6 bg-card rounded-lg shadow-sm border border-emerald-100 dark:border-emerald-900/30">
              <div className="text-3xl font-bold text-emerald-600 mb-2">2</div>
              <div className="text-sm text-muted-foreground">Degrees</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm border border-emerald-100 dark:border-emerald-900/30">
              <div className="text-3xl font-bold text-emerald-600 mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Professional Courses</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm border border-emerald-100 dark:border-emerald-900/30">
              <div className="text-3xl font-bold text-emerald-600 mb-2">34</div>
              <div className="text-sm text-muted-foreground">EAMCET Rank</div>
            </div>
            <div className="text-center p-6 bg-card rounded-lg shadow-sm border border-emerald-100 dark:border-emerald-900/30">
              <div className="text-3xl font-bold text-emerald-600 mb-2">19+</div>
              <div className="text-sm text-muted-foreground">Years Since Graduation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
