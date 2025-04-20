
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "EasySocial",
      period: "Sep 2020 - Present",
      description: "A comprehensive social media automation platform with AI-powered tools for content creation, scheduling, and analytics.",
      image: "/lovable-uploads/dbb566a9-cc45-4dad-a204-6b7befa35fa3.png",
      link: "#",
      skills: ["JavaScript", "Node.js", "React", "PostgreSQL", "AI Integration"]
    },
    {
      title: "Self-RAG Implementation",
      period: "2024",
      description: "A project exploring Self-RAG techniques that improve information retrieval and factual accuracy for large language models.",
      image: "/lovable-uploads/c0626873-0207-4277-a10f-3cf0a6d348f1.png",
      link: "#",
      skills: ["Python", "LangChain", "LLMs", "RAG", "Vector Databases"]
    },
    {
      title: "LangChain Social Media Agent",
      period: "2023",
      description: "A LangChain-powered agent that automates social media content creation workflows from ideation to posting.",
      image: "/lovable-uploads/d2756a28-5cb0-41de-a92c-f3560c57f4a1.png",
      link: "#",
      skills: ["Python", "LangChain", "GenAI", "Social Media API Integration"]
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing some of my notable work spanning backend development, AI, and automation.
          </p>
          <div className="h-1 w-20 bg-primary/50 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-glass border-white/5 overflow-hidden group h-full flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <Badge variant="outline" className="bg-black/50 text-white border-none">{project.period}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.skills.slice(0, 3).map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="bg-white/5 hover:bg-white/10 text-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {project.skills.length > 3 && (
                    <Badge 
                      variant="secondary" 
                      className="bg-white/5 hover:bg-white/10 text-foreground"
                    >
                      +{project.skills.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <a 
                  href={project.link} 
                  className="text-primary hover:text-primary/90 flex items-center gap-1 transition-colors"
                >
                  View Project <ArrowRight size={14} />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
