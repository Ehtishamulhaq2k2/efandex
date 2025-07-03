import { Bell, Menu } from "lucide-react";

export const Header: React.FC<{
  isDrawerOpen?: boolean;
  setIsDrawerOpen?: (val: boolean) => void;
}> = ({ isDrawerOpen, setIsDrawerOpen }) => (
  <header className="bg-white shadow-sm border-b border-gray-200 px-3 sm:px-4 md:px-6 py-3 md:py-4 sticky top-0 z-20">
    <div className="flex items-center justify-between">
      {/* Mobile Menu Button */}
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsDrawerOpen && setIsDrawerOpen(!isDrawerOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg mr-2"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-lg font-bold text-gray-900">Efandex</h1>
      </div>

      {/* Right Side Content */}
      <div className="flex items-center space-x-2 sm:space-x-4 ml-auto">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
        </button>

        <div className="flex items-center space-x-2">
          <span className="text-xs sm:text-sm font-medium text-gray-700">
            EN
          </span>
          <span className="text-xs sm:text-sm text-gray-500">USD</span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-white text-xs sm:text-sm font-medium">A</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);
