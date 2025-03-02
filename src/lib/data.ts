
// Mock data for the financial app
import { 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  Shield, 
  BarChart3, 
  PieChart
} from "lucide-react";

// Transaction data for the graph
export const transactionData = [
  { month: 'Jan', income: 4200, expenses: 3100 },
  { month: 'Feb', income: 4500, expenses: 3300 },
  { month: 'Mar', income: 4100, expenses: 3400 },
  { month: 'Apr', income: 5200, expenses: 3800 },
  { month: 'May', income: 5100, expenses: 3900 },
  { month: 'Jun', income: 5600, expenses: 4100 },
  { month: 'Jul', income: 5200, expenses: 4300 },
  { month: 'Aug', income: 5900, expenses: 4100 },
  { month: 'Sep', income: 6100, expenses: 4200 },
  { month: 'Oct', income: 6300, expenses: 4400 },
  { month: 'Nov', income: 6700, expenses: 4600 },
  { month: 'Dec', income: 7200, expenses: 5100 },
];

// Savings data
export const savingsData = {
  currentSavings: 24680,
  savingsGoal: 50000,
  savingsRate: 18, // percentage of income
  monthlySavingsAverage: 1250,
  savingsGrowth: 32, // percentage growth year over year
  lastMonthSavings: 1450,
};

// Investment recommendations
export const investmentRecommendations = [
  {
    id: 1,
    title: "Growth Stock Portfolio",
    description: "Based on your savings rate, a diversified growth stock portfolio could yield significant returns.",
    riskLevel: "Medium",
    expectedReturn: "8-12%",
    icon: TrendingUp,
    color: "bg-finance-blue",
  },
  {
    id: 2,
    title: "Index Fund Strategy",
    description: "Your consistent savings pattern suggests an index fund approach would align with your goals.",
    riskLevel: "Low-Medium",
    expectedReturn: "6-9%",
    icon: BarChart3,
    color: "bg-finance-green",
  },
  {
    id: 3,
    title: "Dividend Income Focus",
    description: "With your current savings, focusing on dividend stocks could generate passive income.",
    riskLevel: "Low",
    expectedReturn: "4-7%",
    icon: PieChart,
    color: "bg-finance-purple",
  },
  {
    id: 4,
    title: "High-Yield Savings",
    description: "For short-term goals, consider allocating some funds to high-yield savings accounts.",
    riskLevel: "Very Low",
    expectedReturn: "2-4%",
    icon: Shield,
    color: "bg-finance-yellow",
  },
];

// Market news
export const marketNews = [
  {
    id: 1,
    title: "Tech Stocks Rally as Inflation Concerns Ease",
    summary: "Technology shares led a market rally after new economic data suggested inflation may be cooling.",
    source: "Financial Times",
    time: "2 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80",
    trending: true,
    category: "Technology",
  },
  {
    id: 2,
    title: "Federal Reserve Signals Potential Rate Cut",
    summary: "The Fed chairman indicated the central bank may consider rate cuts in the coming months if economic data supports such action.",
    source: "Wall Street Journal",
    time: "5 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80",
    trending: true,
    category: "Economy",
  },
  {
    id: 3,
    title: "Oil Prices Drop on Supply Concerns",
    summary: "Crude oil prices fell sharply as major producers announced plans to increase output in response to global demand.",
    source: "Reuters",
    time: "8 hours ago",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&q=80",
    trending: false,
    category: "Commodities",
  },
  {
    id: 4,
    title: "Retailer Earnings Exceed Expectations",
    summary: "Major retail chains reported quarterly earnings above analyst expectations, citing strong consumer spending.",
    source: "Bloomberg",
    time: "1 day ago",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
    trending: false,
    category: "Retail",
  },
];

// Recent transactions
export const recentTransactions = [
  {
    id: 1,
    merchant: "Amazon",
    amount: -84.76,
    date: "Today",
    category: "Shopping",
  },
  {
    id: 2,
    merchant: "Uber",
    amount: -12.99,
    date: "Yesterday",
    category: "Transportation",
  },
  {
    id: 3,
    merchant: "Payroll Deposit",
    amount: 2750.00,
    date: "Mar 15",
    category: "Income",
  },
  {
    id: 4,
    merchant: "Starbucks",
    amount: -5.40,
    date: "Mar 14",
    category: "Food & Drink",
  },
  {
    id: 5,
    merchant: "Netflix",
    amount: -17.99,
    date: "Mar 10",
    category: "Entertainment",
  },
];
