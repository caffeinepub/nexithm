import { Code2, Users, Palette, Shield } from 'lucide-react';
import MotionHeading from '../components/MotionHeading';
import MotionReveal from '../components/MotionReveal';

const specializations = [
  { icon: Code2, text: 'Full-stack development' },
  { icon: Users, text: 'Client-focused product design' },
  { icon: Palette, text: 'Clean UI/UX' },
  { icon: Shield, text: 'Scalable and secure applications' },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-background relative overflow-hidden" tabIndex={-1}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <MotionHeading className="mb-8 font-black">
              About Nexithm
            </MotionHeading>
            <div className="w-32 neon-divider mx-auto" />
          </div>

          <MotionReveal delay={100}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 font-light">
              Nexithm is a freelance full-stack development studio focused on building high-quality digital products.
              We work closely with clients to understand their ideas, design user-friendly interfaces, and develop
              powerful backend systems.
            </p>
          </MotionReveal>

          <MotionReveal delay={200}>
            <div className="pt-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-neon">We specialize in:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {specializations.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 rounded-lg bg-card/50 border border-neon/20 hover:border-neon hover:shadow-neon transition-all duration-300 group backdrop-blur-sm"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-neon/10 flex items-center justify-center group-hover:bg-neon/20 transition-all group-hover:shadow-glow-sm border border-neon/30">
                      <item.icon className="w-7 h-7 text-neon" />
                    </div>
                    <p className="text-lg md:text-xl text-foreground/90 pt-3 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={300}>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed pt-12 font-light">
              Our goal is to transform client ideas into reliable, real-world digital solutions with precision and
              creativity.
            </p>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
