import { CheckCircle, Circle } from "lucide-react";

export const StatusBadge: React.FC<{
  status: string;
  color: "green" | "yellow" | "red";
}> = ({ status, color }) => {
  const colors = {
    green: "bg-green-100 text-green-800 border-green-200",
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
    red: "bg-red-100 text-red-800 border-red-200",
  };

  const dotColors = {
    green: "text-green-500",
    yellow: "text-yellow-500",
    red: "text-red-500",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors[color]}`}
    >
      {status === "Completed" ? (
        <CheckCircle className="mr-1 w-4 h-4 text-green-500" />
      ) : (
        <Circle
          className={`mr-1 w-3 h-3 ${dotColors[color]}`}
          fill="currentColor"
        />
      )}
      {status}
    </span>
  );
};
