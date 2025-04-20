
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Back End Developer",
      company: "EasySocial.io",
      period: "Feb 2023 - Present",
      duration: "2 years 3 months",
      location: "Bengaluru, Karnataka, India",
      description: "Specializing in architecting backend infrastructure and optimizing API performance for scalable applications.",
      skills: ["Node.js", "PostgreSQL", "API Design", "Scalability", "Performance Optimization", "Caching"]
    },
    {
      title: "Full Stack Developer",
      company: "EasySocial.io",
      period: "Jul 2020 - Jul 2024",
      duration: "4 years 1 month",
      location: "Bengaluru, Karnataka, India",
      description: "Worked with a fast-moving team building automation-first solutions for global clients.",
      skills: ["React.js", "Python", "JavaScript", "TypeScript", "Flask", "Full Stack Development"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-black/20 dot-grid">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over 4 years of professional experience in building robust web applications.
          </p>
          <div className="h-1 w-20 bg-primary/50 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start md:justify-center">
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
                
                <Card className={`bg-glass border-white/5 w-full md:max-w-[calc(50%-2.5rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 text-primary mr-3">
                        <Briefcase size={18} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between items-center text-sm text-muted-foreground">
                      <span>{exp.period}</span>
                      <Badge variant="outline" className="ml-2">{exp.duration}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="bg-white/5 hover:bg-white/10 text-foreground"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
