
import React from 'react';
import { investmentRecommendations } from '../lib/data';
import { ChevronRight, Sparkles } from 'lucide-react';

const InvestmentRecommendations: React.FC = () => {
  return (
    <section className="mt-10 animate-fade-in" style={{ animationDelay: '1s' }}>
      <div className="glass-card p-6 md:p-8">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 rounded-full bg-finance-yellow bg-opacity-20 flex items-center justify-center mr-3">
            <Sparkles className="text-finance-yellow" size={20} />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Investment Recommendations</h2>
            <p className="text-muted-foreground">Personalized based on your savings pattern</p>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {investmentRecommendations.map((item) => (
            <div key={item.id} className="glass p-6 rounded-xl card-hover flex flex-col h-full">
              <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4`}>
                <item.icon className="text-white" size={20} />
              </div>
              
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">{item.description}</p>
              
              <div className="mt-auto">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Risk Level</span>
                  <span className="font-medium">{item.riskLevel}</span>
                </div>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-muted-foreground">Expected Return</span>
                  <span className="font-medium">{item.expectedReturn}</span>
                </div>
                
                <button className="w-full text-sm flex items-center justify-center py-2 rounded-lg border border-finance-blue/30 text-finance-blue hover:bg-finance-blue/5 transition-colors">
                  Learn More
                  <ChevronRight size={14} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <button className="button-primary">
            Get Detailed Investment Plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentRecommendations;
