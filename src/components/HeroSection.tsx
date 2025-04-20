
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
    }[] = [];

    const colors = ['#0ea5e9', '#8b5cf6', '#06b6d4', '#ec4899'];

    // Create particles
    for (let i = 0; i < 50; i++) {
      const radius = Math.random() * 2 + 0.5;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Draw particles
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center section-padding overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20"></canvas>
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient text-glow">Parag Rudani</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium mb-6 text-foreground/90">
            Senior Backend Developer | Tech Enthusiast | Gen AI Expert
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building robust, scalable applications and diving deep into the world of Generative AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#projects" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a 
              href="#contact" 
              className="bg-transparent hover:bg-white/5 text-foreground border border-primary px-6 py-3 rounded-lg transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
          <span className="mb-2 text-sm">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full relative flex justify-center">
            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full absolute top-2 animate-float"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
