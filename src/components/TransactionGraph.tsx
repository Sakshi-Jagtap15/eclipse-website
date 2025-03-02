
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { transactionData, recentTransactions } from '../lib/data';
import { Clock, TrendingUp, TrendingDown } from 'lucide-react';

const TransactionGraph: React.FC = () => {
  const [timeframe, setTimeframe] = useState('year');
  
  // Get total income and expenses
  const totalIncome = transactionData.reduce((sum, item) => sum + item.income, 0);
  const totalExpenses = transactionData.reduce((sum, item) => sum + item.expenses, 0);
  const netSavings = totalIncome - totalExpenses;
  
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-3">
          <p className="font-medium text-sm">{label}</p>
          <p className="text-finance-green text-sm mt-1">
            Income: {formatCurrency(payload[0].value)}
          </p>
          <p className="text-finance-red text-sm">
            Expenses: {formatCurrency(payload[1].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
      <div className="glass-card p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Transaction Overview</h2>
            <p className="text-muted-foreground">Track your income and expenses over time</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2">
            <button 
              className={`px-4 py-2 text-sm rounded-md transition-colors ${
                timeframe === 'month' 
                  ? 'bg-finance-blue text-white' 
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
              onClick={() => setTimeframe('month')}
            >
              Month
            </button>
            <button 
              className={`px-4 py-2 text-sm rounded-md transition-colors ${
                timeframe === 'quarter' 
                  ? 'bg-finance-blue text-white' 
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
              onClick={() => setTimeframe('quarter')}
            >
              Quarter
            </button>
            <button 
              className={`px-4 py-2 text-sm rounded-md transition-colors ${
                timeframe === 'year' 
                  ? 'bg-finance-blue text-white' 
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
              onClick={() => setTimeframe('year')}
            >
              Year
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="glass p-5 rounded-xl">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Income</h3>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">{formatCurrency(totalIncome)}</p>
              <div className="w-8 h-8 rounded-full bg-finance-green bg-opacity-20 flex items-center justify-center">
                <TrendingUp size={16} className="text-finance-green" />
              </div>
            </div>
          </div>
          
          <div className="glass p-5 rounded-xl">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Expenses</h3>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">{formatCurrency(totalExpenses)}</p>
              <div className="w-8 h-8 rounded-full bg-finance-red bg-opacity-20 flex items-center justify-center">
                <TrendingDown size={16} className="text-finance-red" />
              </div>
            </div>
          </div>
          
          <div className="glass p-5 rounded-xl">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Net Savings</h3>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">{formatCurrency(netSavings)}</p>
              <div className="w-8 h-8 rounded-full bg-finance-blue bg-opacity-20 flex items-center justify-center">
                <TrendingUp size={16} className="text-finance-blue" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={transactionData}
              margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="month" 
                tick={{ fill: '#6b7280', fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <YAxis 
                tickFormatter={(value) => `$${value}`}
                tick={{ fill: '#6b7280', fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: '#e5e7eb' }}
                width={60}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="top" 
                height={36}
                wrapperStyle={{ paddingBottom: '10px' }}
              />
              <Area 
                type="monotone" 
                dataKey="income" 
                stackId="1" 
                stroke="#38b000" 
                fill="#38b000" 
                fillOpacity={0.2} 
                strokeWidth={2}
                name="Income"
              />
              <Area 
                type="monotone" 
                dataKey="expenses" 
                stackId="2" 
                stroke="#d00000" 
                fill="#d00000" 
                fillOpacity={0.2} 
                strokeWidth={2}
                name="Expenses"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Recent Transactions</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock size={14} className="mr-1" />
              <span>Last updated today</span>
            </div>
          </div>
          
          <div className="overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-muted-foreground border-b">
                  <th className="pb-3 font-medium">Merchant</th>
                  <th className="pb-3 font-medium">Category</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-muted hover:bg-muted/20 transition-colors">
                    <td className="py-3 font-medium">{transaction.merchant}</td>
                    <td className="py-3">{transaction.category}</td>
                    <td className="py-3">{transaction.date}</td>
                    <td className={`py-3 text-right font-medium ${
                      transaction.amount > 0 ? 'text-finance-green' : 'text-finance-red'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-center">
            <button className="text-finance-blue text-sm font-medium hover:underline">
              View all transactions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionGraph;
