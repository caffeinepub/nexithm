import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Globe, Layout, Server, Brain } from 'lucide-react';
import MotionHeading from '../components/MotionHeading';
import MotionReveal from '../components/MotionReveal';

const services = [
  {
    icon: Globe,
    title: 'Full-Stack Web Development',
    points: [
      'End-to-end website and web application development',
      'Frontend + Backend integration',
      'Scalable and performance-focused solutions',
    ],
  },
  {
    icon: Layout,
    title: 'Frontend Development',
    points: [
      'Modern UI using React / Next.js',
      'Responsive and user-friendly design',
      'Clean and maintainable code',
    ],
  },
  {
    icon: Server,
    title: 'Backend Development',
    points: ['API development', 'Secure authentication', 'Database integration'],
  },
  {
    icon: Brain,
    title: 'AI-Based Applications',
    points: [
      'AI-powered tools and automation',
      'Intelligent web applications',
      'Real-world problem solving using AI',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-40 bg-accent/20 relative overflow-hidden" tabIndex={-1}>
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(oklch(var(--neon)) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--neon)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <MotionHeading className="mb-8 font-black">
            Our Services
          </MotionHeading>
          <div className="w-32 neon-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <MotionReveal key={index} delay={index * 100}>
              <Card
                className="group h-full hover:shadow-neon transition-all duration-500 hover:-translate-y-2 border-neon/30 hover:border-neon bg-card/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-neon/10 flex items-center justify-center mb-6 group-hover:bg-neon/20 transition-all group-hover:scale-110 duration-300 border border-neon/30 group-hover:shadow-glow-sm">
                    <service.icon className="w-8 h-8 text-neon" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-neon mt-2 shadow-glow-sm" />
                        <span className="text-muted-foreground text-base md:text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
