export const CategoryBadge: React.FC<{
  category: "Guest" | "Host";
}> = ({ category }) => {
  const isGuest = category === "Guest";

  const bgColor = isGuest ? "bg-[#E6F7F8]" : "bg-[#DCB21E33]";
  const textColor = isGuest ? "text-[#00A3B4]" : "text-[#F9A221]";
  const dotColor = isGuest ? "bg-[#00A3B4]" : "bg-[#F9A221]";

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}
    >
      <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${dotColor}`}></div>
      {category}
    </span>
  );
};
