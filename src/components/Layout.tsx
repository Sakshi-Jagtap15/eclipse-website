
import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-custom pb-16">
        {children}
      </main>
      <footer className="border-t border-border py-8 mt-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold text-lg mb-1">Visionary Finance</h3>
              <p className="text-sm text-muted-foreground">Simplifying your financial journey</p>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Visionary Finance. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
