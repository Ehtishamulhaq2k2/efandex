import React from "react";

interface StatChartProps {
  color: string;
  isPositive: boolean;
}

export const StatChart: React.FC<StatChartProps> = ({ color, isPositive }) => {
  // Decide image source based on `color` and `isPositive`
  let imageName = "";

  if (color === "#22c55e" && isPositive) {
    imageName = "/greenUp.png";
  } else if (color === "#3b82f6" && isPositive) {
    imageName = "/BlueUp.png";
  } else if (!isPositive) {
    imageName = "/redDown.png";
  }

  return (
    <div className="w-16 h-10 sm:w-20 sm:h-12 lg:w-24 lg:h-14 relative">
      <img
        src={imageName}
        alt="Trend Graph"
        className="w-full h-full object-contain"
      />
    </div>
  );
};
