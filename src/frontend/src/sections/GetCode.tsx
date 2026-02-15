import { Download, FolderTree, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import MotionHeading from '../components/MotionHeading';
import MotionReveal from '../components/MotionReveal';
import CodeBlockWithCopy from '../components/CodeBlockWithCopy';

export default function GetCode() {
  return (
    <section id="get-code" className="py-20 md:py-32 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionHeading className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow-glow">
            Get the <span className="text-neon">Code</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Download the complete source bundle and push it to GitHub
          </p>
        </MotionHeading>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Download Section */}
          <MotionReveal delay={0.1}>
            <Card className="border-neon/30 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <Download className="w-6 h-6 text-neon" />
                  <span>Step 1: Download the Source Bundle</span>
                </CardTitle>
                <CardDescription className="text-base">
                  The platform cannot provide a ZIP file directly. Instead, download the complete source bundle as a text file.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-neon/10 border border-neon/50 text-neon hover:bg-neon/20 hover:border-neon transition-all duration-300 hover:shadow-glow"
                >
                  <a
                    href="/source-bundle.txt"
                    download="nexithm-source-bundle.txt"
                    className="flex items-center justify-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span className="font-semibold">Download source-bundle.txt</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </MotionReveal>

          {/* Reconstruction Instructions */}
          <MotionReveal delay={0.2}>
            <Card className="border-neon/30 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <FolderTree className="w-6 h-6 text-neon" />
                  <span>Step 2: Reconstruct the Project Locally</span>
                </CardTitle>
                <CardDescription className="text-base">
                  Follow these steps to create the project structure from the bundle:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ol className="list-decimal list-inside space-y-3 text-foreground/90">
                  <li className="pl-2">
                    <strong className="text-neon">Open the downloaded file</strong> in your text editor (VS Code, Sublime, etc.)
                  </li>
                  <li className="pl-2">
                    <strong className="text-neon">Look for file boundaries</strong> marked by lines like:
                    <code className="block mt-2 ml-6 text-sm bg-background/50 border border-neon/20 rounded px-3 py-2 font-mono">
                      ```typescript filepath=frontend/src/App.tsx
                    </code>
                  </li>
                  <li className="pl-2">
                    <strong className="text-neon">Create each file</strong> in your local project directory using the exact path shown in the filepath marker
                  </li>
                  <li className="pl-2">
                    <strong className="text-neon">Copy the code</strong> between the markers into each corresponding file
                  </li>
                  <li className="pl-2">
                    <strong className="text-neon">Repeat</strong> for all files in the bundle (backend, frontend, config files, etc.)
                  </li>
                </ol>
                <div className="mt-6 p-4 bg-neon/5 border border-neon/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-neon">Tip:</strong> The bundle includes installation instructions at the top. Make sure to run <code className="text-neon font-mono">npm install</code> or <code className="text-neon font-mono">pnpm install</code> after creating all files.
                  </p>
                </div>
              </CardContent>
            </Card>
          </MotionReveal>

          {/* GitHub Publishing */}
          <MotionReveal delay={0.3}>
            <Card className="border-neon/30 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <Github className="w-6 h-6 text-neon" />
                  <span>Step 3: Push to GitHub</span>
                </CardTitle>
                <CardDescription className="text-base">
                  Initialize a Git repository and push your code to GitHub:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-neon mb-2">Initialize and commit:</h4>
                    <CodeBlockWithCopy
                      code={`git init
git add .
git commit -m "Initial commit: Nexithm website"`}
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-neon mb-2">Add remote and push:</h4>
                    <CodeBlockWithCopy
                      code={`git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main`}
                    />
                  </div>

                  <div className="p-4 bg-neon/5 border border-neon/30 rounded-lg space-y-3">
                    <p className="text-sm font-semibold text-neon">Optional: Create a Pull Request</p>
                    <p className="text-sm text-muted-foreground">
                      If you're working on a branch and want to create a PR:
                    </p>
                    <CodeBlockWithCopy
                      code={`git checkout -b feature/your-feature-name
git add .
git commit -m "Add new feature"
git push -u origin feature/your-feature-name`}
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      Then visit your repository on GitHub and click <strong className="text-neon">"Compare & pull request"</strong>, or use the GitHub CLI:
                    </p>
                    <CodeBlockWithCopy
                      code={`gh pr create --base main --head feature/your-feature-name --title "Your PR title" --body "Description"`}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
