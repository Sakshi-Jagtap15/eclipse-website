
import React from 'react';
import Header from './Header';
import { Zap } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-finance-eclipse-bg">
      <Header />
      <main className="container-custom pb-16">
        {children}
      </main>
      <footer className="border-t border-white/5 py-8 mt-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <div className="w-8 h-8 rounded-lg bg-finance-neon-blue flex items-center justify-center mr-3 shadow-neon">
                <Zap className="text-white h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-gradient">Eclipse Finance</h3>
                <p className="text-sm text-muted-foreground">Your path to financial clarity</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Eclipse Finance. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
