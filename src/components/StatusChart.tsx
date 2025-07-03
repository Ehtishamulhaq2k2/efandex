interface StatChartProps {
  color: string;
  isPositive: boolean;
}

export const StatChart: React.FC<StatChartProps> = ({ color, isPositive }) => (
  <div className="w-20 h-12 relative">
    <svg viewBox="0 0 80 48" className="w-full h-full">
      <defs>
        <linearGradient
          id={`gradient-${color.replace("#", "")}`}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path
        d={
          isPositive ? "M0,40 Q20,20 40,15 T80,10" : "M0,10 Q20,25 40,30 T80,35"
        }
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d={
          isPositive
            ? "M0,40 Q20,20 40,15 T80,10 L80,48 L0,48 Z"
            : "M0,10 Q20,25 40,30 T80,35 L80,48 L0,48 Z"
        }
        fill={`url(#gradient-${color.replace("#", "")})`}
      />
    </svg>
  </div>
);
