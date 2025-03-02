
import React from 'react';
import { savingsData } from '../lib/data';
import { PiggyBank, Target, TrendingUp, DollarSign } from 'lucide-react';

const SavingsCard: React.FC = () => {
  const { currentSavings, savingsGoal, savingsRate, monthlySavingsAverage, savingsGrowth, lastMonthSavings } = savingsData;
  
  // Calculate percentage to goal
  const percentToGoal = Math.min(Math.round((currentSavings / savingsGoal) * 100), 100);
  
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="mt-10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
      <div className="glass-card p-6 md:p-8">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-finance-purple bg-opacity-20 flex items-center justify-center mr-3">
            <PiggyBank className="text-finance-purple" size={20} />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Savings Overview</h2>
            <p className="text-muted-foreground">Track your progress towards financial goals</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-xl card-hover">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium">Current Savings</h3>
                  <DollarSign className="text-finance-green" size={18} />
                </div>
                <p className="text-3xl font-bold mb-1">{formatCurrency(currentSavings)}</p>
                <div className="text-sm text-finance-green flex items-center mb-6">
                  <TrendingUp size={14} className="mr-1" />
                  <span>+{formatCurrency(lastMonthSavings)} last month</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Monthly Average</span>
                  <span className="font-medium">{formatCurrency(monthlySavingsAverage)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Savings Rate</span>
                  <span className="font-medium">{savingsRate}% of income</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass p-6 rounded-xl card-hover">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium">Savings Goal</h3>
                  <Target className="text-finance-blue" size={18} />
                </div>
                <p className="text-3xl font-bold mb-3">{formatCurrency(savingsGoal)}</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span className="font-medium">{percentToGoal}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-finance-blue rounded-full transition-all duration-1000" 
                      style={{ width: `${percentToGoal}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Annual Growth</span>
                  <span className="font-medium text-finance-green">+{savingsGrowth}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-5 rounded-xl bg-gradient-radial from-finance-blue/5 to-transparent border border-finance-blue/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-medium mb-1">Boost Your Savings</h3>
              <p className="text-muted-foreground max-w-md">Increase your savings rate by just 2% to reach your goal 4 months earlier.</p>
            </div>
            <button className="button-primary whitespace-nowrap">Adjust Savings Rate</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCard;
