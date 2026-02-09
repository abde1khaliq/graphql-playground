import { Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="z-50 w-full border-b border-neutral-100 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-14 items-center justify-evenly gap-6">
        <div className="flex items-center">
          <img
            src="https://i.postimg.cc/qRbwX8Tk/graphql-Playgroud-logo.png"
            alt="GraphQL Playground"
            className="h-8"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.abde1khaliqcom/"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/abde1khaliq/graphql-playground"
              target="_blank"
              rel="noreferrer"
            >
              <Code className="h-5 w-5" />
              <span className="sr-only">Github Repository</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
