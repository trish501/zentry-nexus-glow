import { Button } from "@/components/ui/button";
import { Gamepad2 } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Gamepad2 className="w-8 h-8 text-primary text-glow" />
            <Button variant="outline" className="text-foreground hover:text-primary rounded-full border-2">
              Products
            </Button>
          </div>
          
          <nav className="flex items-center gap-8">
            <a href="#nexus" className="text-foreground hover:text-primary transition-colors">
              Nexus
            </a>
            <a href="#vault" className="text-foreground hover:text-primary transition-colors">
              Vault
            </a>
            <a href="#prologue" className="text-foreground hover:text-primary transition-colors">
              Prologue
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
