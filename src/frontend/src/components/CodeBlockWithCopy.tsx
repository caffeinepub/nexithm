import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeBlockWithCopyProps {
  code: string;
  language?: string;
}

export default function CodeBlockWithCopy({ code, language = 'bash' }: CodeBlockWithCopyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = code;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (e) {
        console.error('Failed to copy:', e);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="relative group">
      <pre className="bg-card border border-neon/30 rounded-lg p-4 overflow-x-auto text-sm font-mono text-foreground/90 shadow-glow-sm">
        <code className={language}>{code}</code>
      </pre>
      <Button
        onClick={handleCopy}
        size="sm"
        variant="ghost"
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity border border-neon/30 bg-background/80 backdrop-blur-sm hover:bg-neon/10 hover:border-neon"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 mr-1 text-neon" />
            <span className="text-neon">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 mr-1" />
            <span>Copy</span>
          </>
        )}
      </Button>
    </div>
  );
}
