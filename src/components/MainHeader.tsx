import { Bell } from "lucide-react";

export const Header: React.FC = () => (
  <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
    <div className="flex items-center justify-end">
      <Bell className="w-5 h-5 text-gray-600 mr-4" />
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">EN</span>
        <span className="text-sm text-gray-500">USD</span>
        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-medium">A</span>
        </div>
      </div>
    </div>
  </header>
);
