import {
  ArrowBigDown,
  ArrowBigUp,
  ChevronDown,
} from "lucide-react";
import React from "react";
import { StatChart } from "./StatusChart";

interface StatCardData {
  title: string;
  value: string;
  subtitle: string;
  change: string;
  isPositive: boolean;
  color: string;
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
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6 hover:shadow-md transition-shadow w-full max-w-full min-w-0">
      {/* Header with dropdown and trend */}
      <div className="flex items-start justify-between mb-4 sm:mb-6">
        <div className="relative">
          <select
            value={selectedPeriod}
            onChange={handlePeriodChange}
            className="text-xs sm:text-sm text-gray-600 bg-transparent border border-gray-200 rounded-lg px-2 sm:px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-6 sm:pr-8"
          >
            <option value="Last Month">Last Month</option>
            <option value="Last 3 Months">Last 3 Months</option>
            <option value="Last 6 Months">Last 6 Months</option>
            <option value="Last Year">Last Year</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400 pointer-events-none" />
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2">
          {stat.isPositive ? (
            <ArrowBigUp className="w-6 h-6 sm:w-10 sm:h-10 text-green-500" />
          ) : (
            <ArrowBigDown className="w-6 h-6 sm:w-10 sm:h-10 text-red-500" />
          )}

          <span
            className={`text-xs sm:text-sm font-medium ${
              stat.isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {stat.change}
          </span>
        </div>
      </div>

      {/* Content with title, value, and chart */}
      <div className="flex items-end justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 truncate">
            {stat.title}
          </h3>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
            {stat.value}
          </p>
          <p className="text-xs sm:text-sm text-gray-500">{stat.subtitle}</p>
        </div>
        <div className="ml-2 sm:ml-4 flex-shrink-0">
          <StatChart color={stat.color} isPositive={stat.isPositive} />
        </div>
      </div>
    </div>
  );
};
