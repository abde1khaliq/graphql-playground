import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-screen-2xl mx-auto px-20 py-12">
        <div className="grid grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <img
              src="https://i.postimg.cc/qRbwX8Tk/graphql-Playgroud-logo.png"
              alt="GraphQL Playground"
              className="h-10 mb-2"
            />
            <p className="text-sm text-neutral-600 leading-relaxed">
              Interactive platform to explore and learn GraphQL with real-world
              examples.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-900">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://graphql.org/learn"
                  className="text-neutral-600 hover:text-[#e535ab] transition-colors"
                >
                  Learn Graphql
                </a>
              </li>
              <li>
                <a
                  href="https://graphql.org/learn/introduction/"
                  className="text-neutral-600 hover:text-[#e535ab] transition-colors"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-900">
              About Me
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://abdelkhaliq.vercel.app"
                  className="text-neutral-600 hover:text-[#e535ab] transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/abde1khaliq"
                  className="text-neutral-600 hover:text-[#e535ab] transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-neutral-900">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="text-neutral-600 hover:text-[#e535ab] transition-colors">
                  MIT License
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/abde1khaliq/graphql-playground"
                  className="text-neutral-600 hover:text-[#e535ab] transition-colors"
                >
                  Contributing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200 flex items-center justify-between">
          <p className="text-sm text-neutral-600">
            © 2026 GraphQL Playground. Built with ❤️ for developers.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/abde1khaliq"
              className="text-neutral-600 hover:text-[#e535ab] transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/abde1khaliq"
              className="text-neutral-600 hover:text-[#e535ab] transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-abdelkhaliq-32355133a/"
              className="text-neutral-600 hover:text-[#e535ab] transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
