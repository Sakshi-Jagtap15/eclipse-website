import React from 'react';
import { ChevronRight, BarChart2, PieChart, TrendingUp, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-6">
            <div className="inline-block">
              <span className="chip bg-finance-neon-blue bg-opacity-10 text-finance-neon-blue flex items-center">
                <Zap size={12} className="mr-1" />
                Smart Financial Tracking
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to <span className="text-gradient">Eclipse</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Track your money, analyze your spending patterns, and get AI-powered investment recommendations all in one place.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="button-primary">
                Start Now
              </button>
              <button className="neon-button group">
                See Demo
                <ChevronRight className="inline-block ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="pt-8 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-finance-neon-green bg-opacity-10 text-finance-neon-green mr-3">
                  <BarChart2 size={20} />
                </div>
                <div>
                  <p className="font-medium">AI Analysis</p>
                  <p className="text-sm text-muted-foreground">Powered by Eclipse AI</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-finance-neon-purple bg-opacity-10 text-finance-neon-purple mr-3">
                  <PieChart size={20} />
                </div>
                <div>
                  <p className="font-medium">Expense Tracking</p>
                  <p className="text-sm text-muted-foreground">Visual breakdowns</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-finance-neon-orange bg-opacity-10 text-finance-neon-orange mr-3">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="font-medium">Investment Tips</p>
                  <p className="text-sm text-muted-foreground">Market insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="eclipse-card p-4 md:p-8 overflow-hidden relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-finance-neon-blue opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-10 w-60 h-60 bg-finance-neon-purple opacity-10 rounded-full blur-3xl"></div>
            <div className="relative">
              <img 
                src="/lovable-uploads/f33ceed9-e873-4833-9051-e627e3d7e501.png" 
                alt="Eclipse app on mobile devices" 
                className="w-full h-auto max-w-[120%] mx-auto rounded-lg shadow-none transform scale-110"
                style={{
                  filter: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.2))"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
