import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Plane, FileText, ShoppingCart } from 'lucide-react';
import MotionHeading from '../components/MotionHeading';
import MotionReveal from '../components/MotionReveal';

const projects = [
  {
    icon: Plane,
    title: 'AI Trip Planner',
    description: 'An intelligent travel planning application that creates personalized trip plans using AI.',
  },
  {
    icon: FileText,
    title: 'AI Resume Analyzer',
    description: 'A smart system that analyzes resumes and provides insights and improvements using AI.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Website',
    description: 'A complete online shopping platform with product management, cart, and secure checkout.',
  },
];

export default function Works() {
  return (
    <section id="works" className="py-24 md:py-40 bg-background relative overflow-hidden" tabIndex={-1}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <MotionHeading className="mb-8 font-black">
            Sample Projects
          </MotionHeading>
          <div className="w-32 neon-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <MotionReveal key={index} delay={index * 100}>
              <Card
                className="group h-full hover:shadow-neon transition-all duration-500 hover:-translate-y-2 border-neon/30 hover:border-neon bg-card/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-20 h-20 rounded-lg bg-neon/10 flex items-center justify-center mb-6 group-hover:bg-neon/20 transition-all group-hover:scale-110 duration-300 border border-neon/30 group-hover:shadow-glow-sm">
                    <project.icon className="w-10 h-10 text-neon" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
