import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  period: string;
  isPositive: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, period, isPositive }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-gray-500 text-sm">{title}</h3>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? '+' : ''}{change}
        </span>
      </div>
      <p className="text-sm text-gray-500">{period}</p>
    </div>
  );
};

export default StatsCard;