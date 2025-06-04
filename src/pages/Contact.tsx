import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import RahulLogo from "/public/assets/icons/RahulLogo.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Banner Section */}
      <div className="relative py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 dark:from-rose-900/20 dark:via-pink-900/20 dark:to-red-900/20 overflow-hidden">
        {/* Professional communication graphics */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-20 w-16 h-12 bg-rose-300/20 rounded-lg"></div>
          <div className="absolute top-20 right-24 w-12 h-8 bg-pink-300/20 rounded-lg"></div>
          <div className="absolute bottom-20 left-16 w-20 h-14 bg-red-300/20 rounded-lg"></div>
          
          {/* Communication bubbles */}
          <div className="absolute top-32 left-1/3 w-8 h-6 bg-rose-300/30 rounded-full"></div>
          <div className="absolute top-36 left-1/3 w-6 h-4 bg-pink-300/30 rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-10 h-8 bg-red-300/30 rounded-full"></div>
          
          {/* Envelope elements */}
          <div className="absolute top-40 right-1/4 w-8 h-6 bg-rose-400/20 rounded-sm"></div>
          <div className="absolute bottom-40 left-1/4 w-6 h-4 bg-pink-400/20 rounded-sm"></div>
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-4 bg-white/20 dark:bg-black/20 rounded-full px-6 py-3 backdrop-blur-sm">
                <Mail className="w-6 h-6 text-rose-600" />
                <MessageSquare className="w-6 h-6 text-pink-600" />
                <Send className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">
              Contact
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl sm:text-3xl font-semibold text-rose-800 dark:text-rose-200 mb-4">
                Let's Collaborate – Drop a Message Below
              </p>
              <p className="text-lg text-rose-700 dark:text-rose-300 leading-relaxed">
                Ready to transform your business with innovative technology solutions? I'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
           <div className="flex items-center space-x-4 p-4 bg-card rounded-lg shadow-sm border border-rose-100 dark:border-rose-900/30">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-red-500 rounded-lg flex items-center justify-center text-white">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <a
                href="mailto:rahul.bhaskarini@gmail.com"
                className="text-muted-foreground hover:underline"
              >
                rahul.bhaskarini@gmail.com
              </a>
            </div>
          </div>
 <div className="flex items-center space-x-4 p-4 bg-card rounded-lg shadow-sm border border-rose-100 dark:border-rose-900/30">
      <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-red-500 rounded-lg flex items-center justify-center text-white">
        <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-semibold">LinkedIn</h3>
        <a
          href="https://linkedin.com/in/rahulbhaskarini"
          className="text-muted-foreground hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/rahulbhaskarini
        </a>
      </div>
    </div>

    <div className="flex items-center space-x-4 p-4 bg-card rounded-lg shadow-sm border border-rose-100 dark:border-rose-900/30">
      <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-red-500 rounded-lg flex items-center justify-center text-white">
        <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-semibold">GitHub</h3>
        <a
          href="https://github.com/rahulbhaskarini"
          className="text-muted-foreground hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/rahulbhaskarini
        </a>
      </div>
    </div>

         <div className="flex items-center space-x-4 p-4 bg-card rounded-lg shadow-sm border border-rose-100 dark:border-rose-900/30">
          <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-red-500 rounded-lg flex items-center justify-center text-white">
            
            <img src="/assets/RahulLogo.svg" alt="Rahul Bhaskarini Logo" className="w-6 h-6"/>
          </div>
          <div>
            <h3 className="font-semibold">Website</h3>
            <a
              href="https://www.rahulbhaskarini.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:underline"
            >
              rahulbhaskarini.com
            </a>
          </div>
        </div>

              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20 rounded-lg">
                <h3 className="font-semibold mb-3">What I Can Help You With:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2 mt-1">•</span>
                    Power Platform solution architecture and implementation
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2 mt-1">•</span>
                    SharePoint migration and modernization
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2 mt-1">•</span>
                    AI/ML integration with business applications
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2 mt-1">•</span>
                    Modern web development with React and TypeScript
                  </li>
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-2 mt-1">•</span>
                    Training and mentoring programs
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" hidden={false}>
              <div className="bg-card rounded-lg p-8 shadow-lg border border-rose-100 dark:border-rose-900/30">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                      disabled={true}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or requirements..."
                      disabled={true}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    disabled={true}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Response Time Notice */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="bg-gradient-to-r from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Quick Response Guaranteed</h3>
              <p className="text-muted-foreground">
                I typically respond to all inquiries within 24 hours. For urgent matters, please mention it in your message subject.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
