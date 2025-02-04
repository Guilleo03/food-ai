import { Button } from "./ui/button";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site";
import Linkedin from "@/icons/Linkedin";

export function Header() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container max-w-[1280px] flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Logo />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild variant={"ghost"} className="hover:bg-transparent">
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
