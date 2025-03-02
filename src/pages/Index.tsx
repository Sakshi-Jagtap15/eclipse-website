
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import TransactionGraph from '../components/TransactionGraph';
import SavingsCard from '../components/SavingsCard';
import InvestmentRecommendations from '../components/InvestmentRecommendations';
import MarketNews from '../components/MarketNews';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <TransactionGraph />
      <SavingsCard />
      <InvestmentRecommendations />
      <MarketNews />
    </Layout>
  );
};

export default Index;
