import { ChevronDown, TrendingDown, TrendingUp } from "lucide-react";
import { StatChart } from "./StatusChart";
import { StatCardTypes } from "../types/types";

import React from "react";
interface StatCardData {
  title: string;
  value: string;
  subtitle: string;
  change: string;
  isPositive: boolean;
  color: string;
}

interface StatChartProps {
  color: string;
  isPositive: boolean;
}

interface StatCardProps {
  stat: StatCardData;
}

type TimePeriod =
  | "Last Month"
  | "Last 3 Months"
  | "Last 6 Months"
  | "Last Year";

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const [selectedPeriod, setSelectedPeriod] =
    React.useState<TimePeriod>("Last Month");

  const handlePeriodChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedPeriod(event.target.value as TimePeriod);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-2">
          <select
            value={selectedPeriod}
            onChange={handlePeriodChange}
            className="text-sm text-gray-600 bg-transparent border border-gray-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Last Month">Last Month</option>
            <option value="Last 3 Months">Last 3 Months</option>
            <option value="Last 6 Months">Last 6 Months</option>
            <option value="Last Year">Last Year</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          {stat.isPositive ? (
            <TrendingUp className="w-4 h-4 text-green-500" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500" />
          )}
          <span
            className={`text-sm font-medium ${
              stat.isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {stat.change}
          </span>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {stat.title}
          </h3>
          <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
          <p className="text-sm text-gray-500">{stat.subtitle}</p>
        </div>
        <div className="ml-4">
          <StatChart color={stat.color} isPositive={stat.isPositive} />
        </div>
      </div>
    </div>
  );
};
