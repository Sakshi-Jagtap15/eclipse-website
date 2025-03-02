
import React from 'react';
import { ChevronRight, BarChart2, PieChart, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-6">
            <div className="inline-block">
              <span className="chip bg-finance-blue bg-opacity-10 text-finance-blue">
                Smart Financial Management
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Visualize your finances with clarity
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Track your financial journey with intuitive dashboards, personalized insights, and smart investment recommendations.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="button-primary">
                Get Started
              </button>
              <button className="button-secondary group">
                View Demo
                <ChevronRight className="inline-block ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="pt-8 flex flex-col sm:flex-row gap-6">
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-finance-green bg-opacity-10 text-finance-green mr-3">
                  <BarChart2 size={20} />
                </div>
                <div>
                  <p className="font-medium">Transaction Tracking</p>
                  <p className="text-sm text-muted-foreground">Real-time updates</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-finance-purple bg-opacity-10 text-finance-purple mr-3">
                  <PieChart size={20} />
                </div>
                <div>
                  <p className="font-medium">Savings Analysis</p>
                  <p className="text-sm text-muted-foreground">Clear visualization</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-finance-blue bg-opacity-10 text-finance-blue mr-3">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="font-medium">Smart Investments</p>
                  <p className="text-sm text-muted-foreground">Personalized advice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card p-4 md:p-8 overflow-hidden relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-finance-blue opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-10 w-60 h-60 bg-finance-purple opacity-10 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
              alt="Financial Dashboard Preview" 
              className="rounded-lg shadow-soft w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
