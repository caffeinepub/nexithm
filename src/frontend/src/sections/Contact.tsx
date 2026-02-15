import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, AlertCircle } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Alert, AlertDescription } from '@/components/ui/alert';
import MotionHeading from '../components/MotionHeading';
import MotionReveal from '../components/MotionReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    description: '',
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-accent/20 relative overflow-hidden" tabIndex={-1}>
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
            Contact Us
          </MotionHeading>
          <div className="w-32 neon-divider mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Details */}
          <MotionReveal delay={100}>
            <div className="space-y-6">
              <Card className="border-neon/30 hover:border-neon hover:shadow-neon transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-xl md:text-2xl">
                    <Mail className="w-7 h-7 text-neon" />
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:sunithasherin008@gmail.com"
                    className="text-muted-foreground hover:text-neon transition-colors text-lg md:text-xl font-medium"
                  >
                    sunithasherin008@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-neon/30 hover:border-neon hover:shadow-neon transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-xl md:text-2xl">
                    <SiWhatsapp className="w-7 h-7 text-neon" />
                    <span>WhatsApp</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://wa.me/917868941233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-neon transition-colors text-lg md:text-xl font-medium"
                  >
                    +91 7868941233
                  </a>
                </CardContent>
              </Card>

              <div className="hidden lg:block pt-8">
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">
                  Ready to bring your ideas to life? Get in touch with us and let's discuss how we can help you build
                  something amazing.
                </p>
              </div>
            </div>
          </MotionReveal>

          {/* Contact Form */}
          <MotionReveal delay={200}>
            <Card className="border-neon/30 bg-card/80 backdrop-blur-sm hover:shadow-neon transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl md:text-3xl">
                  <MessageSquare className="w-7 h-7 text-neon" />
                  <span>Chat With Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">Client Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-background/50 border-neon/30 focus:border-neon focus:ring-neon transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-base">Mobile Number</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Your mobile number"
                      required
                      className="bg-background/50 border-neon/30 focus:border-neon focus:ring-neon transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-base">Project Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                      className="bg-background/50 border-neon/30 focus:border-neon focus:ring-neon resize-none transition-all"
                    />
                  </div>

                  {showAlert && (
                    <Alert className="border-destructive/50 bg-destructive/10">
                      <AlertCircle className="h-4 w-4 text-destructive" />
                      <AlertDescription className="text-destructive">
                        Email sending is currently disabled. Please contact us directly via email or WhatsApp using the
                        details provided.
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-transparent border-2 border-neon text-neon hover:bg-neon hover:text-background shadow-neon hover:shadow-neon-lg transition-all duration-300 font-bold text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
