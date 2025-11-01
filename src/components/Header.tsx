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
            <a href="#nexus" className="text-foreground hover:text-primary transition-colors uppercase">
              Nexus
            </a>
            <a href="#vault" className="text-foreground hover:text-primary transition-colors uppercase">
              Vault
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors uppercase">
              About
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors uppercase">
              Services
            </a>
            <a href="#content" className="text-foreground hover:text-primary transition-colors uppercase">
              Content
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
