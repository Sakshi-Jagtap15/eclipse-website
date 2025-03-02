
import React, { useState, useEffect } from 'react';
import { Menu, X, BellIcon, Search, User, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-finance-eclipse-bg bg-opacity-80 backdrop-blur-md shadow-sm border-b border-white/5' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-finance-neon-blue flex items-center justify-center mr-3 shadow-neon">
              <Zap className="text-white h-6 w-6 neon-icon" />
            </div>
            <h1 className="text-xl font-semibold text-gradient">Eclipse</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-finance-neon-blue transition-colors">Dashboard</a>
            <a href="#" className="text-foreground hover:text-finance-neon-blue transition-colors">Transactions</a>
            <a href="#" className="text-foreground hover:text-finance-neon-blue transition-colors">Investments</a>
            <a href="#" className="text-foreground hover:text-finance-neon-blue transition-colors">News</a>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-finance-eclipse-card-light transition-colors">
              <Search size={20} className="text-white/70 hover:text-white transition-colors" />
            </button>
            <button className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-finance-eclipse-card-light transition-colors">
              <BellIcon size={20} className="text-white/70 hover:text-white transition-colors" />
            </button>
            <button className="p-1 rounded-full bg-finance-neon-blue bg-opacity-20 text-finance-neon-blue shadow-neon">
              <User size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-foreground hover:bg-finance-eclipse-card-light transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <a href="#" className="px-2 py-2 rounded-md hover:bg-finance-eclipse-card-light transition-colors">Dashboard</a>
              <a href="#" className="px-2 py-2 rounded-md hover:bg-finance-eclipse-card-light transition-colors">Transactions</a>
              <a href="#" className="px-2 py-2 rounded-md hover:bg-finance-eclipse-card-light transition-colors">Investments</a>
              <a href="#" className="px-2 py-2 rounded-md hover:bg-finance-eclipse-card-light transition-colors">News</a>
            </div>
            <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-white/5">
              <button className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-finance-eclipse-card-light transition-colors">
                <Search size={20} />
              </button>
              <button className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-finance-eclipse-card-light transition-colors">
                <BellIcon size={20} />
              </button>
              <button className="p-2 rounded-full bg-finance-neon-blue bg-opacity-20 text-finance-neon-blue shadow-neon">
                <User size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
