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
      className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />

    {/* Right Command Icon (e.g., shortcut hint like ⌘) */}
    <Command className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
  </div>
);
