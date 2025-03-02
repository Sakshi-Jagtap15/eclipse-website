
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import TransactionGraph from '../components/TransactionGraph';
import SavingsCard from '../components/SavingsCard';
import InvestmentRecommendations from '../components/InvestmentRecommendations';
import MarketNews from '../components/MarketNews';
import { Zap } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      
      <div className="my-12 text-center">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Eclipse AI</span> - Your Financial Companion
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Rome wasn't built in a day, and neither are your finances. Let Eclipse AI help you build a solid financial future.
        </p>
      </div>
      
      <TransactionGraph />
      <SavingsCard />
      <InvestmentRecommendations />
      <MarketNews />
      
      <div className="mt-16 eclipse-card relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-finance-neon-purple opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-finance-neon-blue opacity-5 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to take control of your finances?</h2>
              <p className="text-muted-foreground mb-6">
                Eclipse AI will analyze your financial data and provide personalized recommendations to help you achieve your goals. Get started today!
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="button-primary">Start Now</button>
                <button className="button-secondary">Learn More</button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 relative">
                <div className="absolute inset-0 bg-neon-circle opacity-20 rounded-full animate-pulse-soft"></div>
                <div className="absolute inset-4 bg-neon-circle opacity-30 rounded-full animate-pulse-soft" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute inset-8 bg-finance-eclipse-card-light rounded-full flex items-center justify-center">
                  <div className="text-4xl text-finance-neon-blue">
                    <Zap className="h-12 w-12 neon-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
