import { Button } from '@/components/ui/button';
import { scrollToSection } from '../components/scroll';
import { useEffect, useRef } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScrollProgress();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system with neon glow
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles with neon cyan glow
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(0, 255, 255, ${particle.opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${particle.opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw connections with neon glow
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = 0.3 * (1 - distance / 120);
            ctx.shadowBlur = 8;
            ctx.shadowColor = `rgba(0, 255, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Parallax effect
  const parallaxY = prefersReducedMotion ? 0 : scrollY * 0.5;
  const opacity = prefersReducedMotion ? 1 : Math.max(0, 1 - scrollY / 600);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      tabIndex={-1}
    >
      {/* Background Image with parallax */}
      <div
        className="absolute inset-0 z-0 opacity-30 transition-transform duration-100"
        style={{
          backgroundImage: 'url(/assets/generated/nexithm-hero-bg.dim_2400x1350.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translateY(${parallaxY}px)`,
        }}
      />

      {/* Animated Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Gradient Overlay with neon tint */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-neon/5 via-transparent to-neon/5" />

      {/* Content */}
      <div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
        style={{ opacity }}
      >
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="font-black tracking-tighter animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="block neon-text">
              Ideas Crafted
            </span>
            <span className="block text-foreground">
              Into Reality
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            We build modern, scalable, and intelligent digital solutions using full-stack development and advanced
            technologies.
          </p>

          <div className="pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-10 py-7 bg-transparent border-2 border-neon text-neon hover:bg-neon hover:text-background shadow-neon hover:shadow-neon-lg transition-all duration-300 hover:scale-105 font-bold tracking-wide"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon/50 rounded-full flex items-start justify-center p-2 shadow-glow-sm">
          <div className="w-1 h-3 bg-neon rounded-full" />
        </div>
      </div>
    </section>
  );
}
