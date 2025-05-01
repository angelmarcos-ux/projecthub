import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: {
    value: string;
    direction: 'up' | 'down';
  };
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, trend }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-5 transition-transform hover:scale-[1.02]">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-neutral-500">{title}</h3>
          <p className="text-2xl font-bold text-neutral-900 mt-1">{value}</p>
        </div>
        <div className="p-2 bg-neutral-100 rounded-full">
          {icon}
        </div>
      </div>
      
      {trend && (
        <div className="mt-4 flex items-center">
          <div 
            className={`flex items-center text-xs font-medium rounded-full px-2 py-1 mr-2
              ${trend.direction === 'up' ? 'bg-success-50 text-success-600' : 'bg-error-50 text-error-600'}`}
          >
            {trend.direction === 'up' ? (
              <ArrowUpRight size={12} className="mr-1" />
            ) : (
              <ArrowDownRight size={12} className="mr-1" />
            )}
            {trend.value}
          </div>
          <span className="text-xs text-neutral-500">vs last month</span>
        </div>
      )}
    </div>
  );
};

export default StatsCard;