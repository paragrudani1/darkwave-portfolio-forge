
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Master the AI Whisper: How GPT-4.1 Changes How We Talk to Machines",
      excerpt: "The way we effectively communicate with models like GPT-4.1 is evolving. Learn advanced prompting techniques for better results.",
      image: "/lovable-uploads/96aec24e-5eb5-4724-b331-3bed5501e241.png",
      date: "22h ago",
      link: "https://paragrudani.medium.com",
      tags: ["AI", "GPT-4.1", "Prompting"]
    },
    {
      title: "Langchain: The Secret Sauce for Building Amazing AI Applications!",
      excerpt: "I've been diving deep into Langchain lately and I'm blown away by its potential. It's like the Lego bricks for building complex LLM-powered projects.",
      image: "/lovable-uploads/1772ccef-8827-4686-9fd5-fb7f86268d3f.png",
      date: "8mo ago",
      link: "#",
      tags: ["Langchain", "AI", "LLM"]
    },
    {
      title: "Exploring Self-RAG: A Breakthrough in Large Language Models",
      excerpt: "Self-RAG retrieves information only when necessary, making it more efficient and accurate than traditional RAG approaches.",
      image: "/lovable-uploads/1dfa56e0-737d-47d9-9f66-e682089ed782.png",
      date: "2mo ago",
      link: "#",
      tags: ["Self-RAG", "LLM", "AI"]
    },
    {
      title: "Node.js API Optimization: 40% Faster with Caching Strategies",
      excerpt: "It's amazing how small changes in database queries can drastically enhance performance!",
      image: "/lovable-uploads/fc391d1d-09b0-4140-8e2f-8996af7d2896.png",
      date: "2w ago",
      link: "#",
      tags: ["NodeJS", "Backend", "Performance"]
    }
  ];

  return (
    <section id="blog" className="section-padding bg-black/20 dot-grid">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Latest Articles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing insights and experiences from my journey in tech and AI.
          </p>
          <div className="h-1 w-20 bg-primary/50 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-glass border-white/5 overflow-hidden group h-full flex flex-col">
              <div className="md:flex">
                <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-3/5 flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg md:text-xl">{post.title}</CardTitle>
                      <Badge className="bg-primary/20 text-primary border-none ml-2 shrink-0">
                        {post.date}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="bg-white/5 hover:bg-white/10 text-foreground"
                        >
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <a 
                      href={post.link} 
                      className="text-primary hover:text-primary/90 flex items-center gap-1 transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read Article <ArrowRight size={14} />
                    </a>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://medium.com/@paragrudani" 
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 text-foreground border border-primary px-6 py-3 rounded-lg transition-all duration-300"
          >
            View All Articles <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
