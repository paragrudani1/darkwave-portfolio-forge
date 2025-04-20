
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: "🧠",
      skills: ["Generative AI", "LangChain", "Self-RAG", "LLMs", "GPT-4", "AI Agents"]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["Node.js", "Python", "PostgreSQL", "Flask", "API Design", "Scalable Systems"]
    },
    {
      title: "Frontend Technologies",
      icon: "🖥️",
      skills: ["React.js", "JavaScript", "TypeScript", "HTML/CSS", "Responsive Design"]
    },
    {
      title: "DevOps & Infrastructure",
      icon: "🚀",
      skills: ["Docker", "AWS", "CI/CD", "Performance Optimization", "Caching"]
    },
    {
      title: "Project Management",
      icon: "📊",
      skills: ["Agile Methodologies", "Team Leadership", "Technical Planning"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit spans various domains, with specialized focus on backend development and AI technologies.
          </p>
          <div className="h-1 w-20 bg-primary/50 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-glass border-white/5 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader>
                <div className="flex items-center mb-2">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <CardTitle>{category.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {category.title === "AI & Machine Learning" 
                    ? "Building intelligent systems that solve real-world problems"
                    : category.title === "Backend Development"
                    ? "Creating robust and scalable server-side applications"
                    : category.title === "Frontend Technologies"
                    ? "Developing responsive and intuitive user interfaces"
                    : category.title === "DevOps & Infrastructure"
                    ? "Optimizing deployment and infrastructure management"
                    : "Leading teams and managing technical projects effectively"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
