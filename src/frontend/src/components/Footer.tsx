import { Heart, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'nexithm-app'
  );

  return (
    <footer className="bg-card border-t border-neon/30 py-12 relative overflow-hidden">
      {/* Subtle neon glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/assets/generated/nexithm-wordmark.dim_1200x300.png"
              alt="Nexithm"
              className="h-8 w-auto opacity-90"
            />
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-center text-lg">Ideas Crafted Into Reality</p>

          {/* Neon Divider */}
          <div className="w-full max-w-xs neon-divider" />

          {/* Download Source Bundle Button */}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-neon/50 text-neon hover:bg-neon/10 hover:border-neon transition-all duration-300 hover:shadow-glow-sm group"
          >
            <a
              href="/source-bundle.txt"
              download="nexithm-source-bundle.txt"
              className="flex items-center space-x-2"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span className="font-semibold">Download Source Bundle</span>
            </a>
          </Button>

          {/* Copyright and Attribution */}
          <div className="flex flex-col items-center space-y-2 text-sm text-muted-foreground">
            <p>© {currentYear} Nexithm. All rights reserved.</p>
            <p className="flex items-center space-x-1">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-neon fill-neon" />
              <span>using</span>
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon hover:underline font-medium transition-all hover:text-shadow-glow"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
