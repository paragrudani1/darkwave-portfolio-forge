
import { Code, Briefcase, Star } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-black/20 dot-grid">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="h-1 w-20 bg-primary/50 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3">
            <div className="animated-border">
              <div className="bg-black rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/5b436c1a-67f1-4e47-b3b4-b2e2b2506fa3.png" 
                  alt="Parag Rudani" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <p className="text-lg mb-6 text-muted-foreground">
              As a Senior Backend Developer at EasySocial.io with over 4 years of hands-on experience, I specialize in building robust, scalable web applications using Node.js, React, PostgreSQL, and Python. From architecting backend infrastructure to optimizing API performance, I love solving complex technical problems that push systems forward.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-glass p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 text-primary mr-3">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">By Day</h3>
                </div>
                <p className="text-muted-foreground">Working with a fast-moving team building automation-first solutions for global clients.</p>
              </div>
              
              <div className="bg-glass p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 text-primary mr-3">
                    <Code size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">By Night</h3>
                </div>
                <p className="text-muted-foreground">Deep-diving into Generative AI, building agents and tools that automate workflows and spark creativity.</p>
              </div>
              
              <div className="bg-glass p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 text-primary mr-3">
                    <Star size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">Always</h3>
                </div>
                <p className="text-muted-foreground">Writing and sharing about exploring new technologies, from caching techniques to Self-RAG and LLM advancements.</p>
              </div>
            </div>

            <div className="bg-glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Let's connect if:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  You're looking to collaborate on AI, backend architecture, or automation projects
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  You need freelance backend help for a product you're building
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  You just enjoy chatting about tech, startups, or dev life
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
