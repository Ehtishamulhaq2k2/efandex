import { Bell, Menu, Globe } from "lucide-react";

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
      <div className="flex items-center space-x-3 sm:space-x-4 ml-auto">
        {/* Bell Icon */}
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell className="w-5 h-5 text-black" />
        </button>

        {/* Language & Currency Switcher */}
        <div className="flex items-center bg-[#F5F5F5] rounded-full px-3 py-1 text-sm font-medium text-gray-700">
          <Globe className="w-4 h-4 mr-1 text-black" />
          <span className="text-black">EN</span>
          <span className="mx-1 text-gray-400">|</span>
          <span>USD</span>
        </div>

        {/* Profile Button */}
        <div className="flex items-center border-2 border-black rounded-full px-2 py-1 h-10">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 ml-2 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  </header>
);
