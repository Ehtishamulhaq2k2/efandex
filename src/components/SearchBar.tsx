import { Command, Search } from "lucide-react";

export const SearchInput: React.FC<{
  placeholder: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ placeholder, className = "", value, onChange }) => (
  <div className={`relative ${className}`}>
    {/* Left Search Icon */}
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />

    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full pl-10 pr-10 py-2 bg-[#F7F7F7] text-sm border border-transparent rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300"
    />

    {/* Right Command Icon */}
    <Command className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
  </div>
);
