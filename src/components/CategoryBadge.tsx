export const CategoryBadge: React.FC<{
  category: string;
  color: "green" | "yellow";
}> = ({ category, color }) => {
  const colors = {
    green: "bg-green-100 text-green-800 border-green-200",
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
  };

  const dotColors = {
    green: "bg-green-500",
    yellow: "bg-yellow-500",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors[color]}`}
    >
      <div
        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${dotColors[color]}`}
      ></div>
      {category}
    </span>
  );
};
