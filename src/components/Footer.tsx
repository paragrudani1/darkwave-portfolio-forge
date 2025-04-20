
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/parag-rudani',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:contact@example.com',
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-2xl font-bold text-gradient">Parag.dev</p>
            <p className="text-muted-foreground mt-2">Building scalable solutions with code & AI</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank" 
                rel="noreferrer"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Parag Rudani. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-8">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
