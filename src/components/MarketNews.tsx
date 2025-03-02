
import React, { useState } from 'react';
import { marketNews } from '../lib/data';
import { ChevronRight, Newspaper, TrendingUp, Clock } from 'lucide-react';

const MarketNews: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Technology', 'Economy', 'Commodities', 'Retail'];
  
  const filteredNews = activeCategory === 'All' 
    ? marketNews 
    : marketNews.filter(item => item.category === activeCategory);

  return (
    <section className="mt-10 animate-fade-in" style={{ animationDelay: '1.2s' }}>
      <div className="glass-card p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-finance-green bg-opacity-20 flex items-center justify-center mr-3">
              <Newspaper className="text-finance-green" size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Market News</h2>
              <p className="text-muted-foreground">Latest updates from financial markets</p>
            </div>
          </div>
          
          <div className="flex overflow-x-auto space-x-2 pb-2 md:pb-0">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 text-sm rounded-md whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-finance-blue text-white'
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredNews.map((news) => (
            <div key={news.id} className="glass p-6 rounded-xl card-hover relative overflow-hidden">
              <div className="flex gap-4">
                <div className="relative min-w-[100px] h-[100px] rounded-lg overflow-hidden">
                  <img 
                    src={news.imageUrl}
                    alt={news.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                  {news.trending && (
                    <div className="absolute top-0 left-0 bg-finance-red text-white text-xs px-2 py-1 rounded-br-lg flex items-center">
                      <TrendingUp size={10} className="mr-1" />
                      Trending
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <span className="chip bg-finance-light-blue bg-opacity-30 text-finance-blue text-xs">
                      {news.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock size={10} className="mr-1" />
                      {news.time}
                    </div>
                  </div>
                  
                  <h3 className="text-base font-medium line-clamp-2 mb-2">
                    {news.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3 flex-grow">
                    {news.summary}
                  </p>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xs text-muted-foreground">
                      Source: {news.source}
                    </span>
                    
                    <button className="text-finance-blue text-sm font-medium flex items-center hover:underline">
                      Read More
                      <ChevronRight size={14} className="ml-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <button className="button-secondary">
            View All Market News
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketNews;
