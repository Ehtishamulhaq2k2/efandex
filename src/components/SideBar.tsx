import React from "react";
import { menuItems } from "../constatnts/mockData";
import { SearchInput } from "./SearchBar";
import { Menu, X } from "lucide-react";

export const Sidebar: React.FC<{
  activeTab: string;
  onTabChange: (tab: string) => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (val: boolean) => void;
}> = ({ activeTab, onTabChange, isDrawerOpen, setIsDrawerOpen }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredItems = menuItems.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleItemClick = (tab: string) => {
    onTabChange(tab);
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 bg-white shadow-sm border-r border-gray-200 h-full fixed top-0 left-0 z-30">
        <div className="p-4 lg:p-6">
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Efandex</h1>
        </div>

        <div className="px-3 lg:px-4 mb-4 lg:mb-6">
          <SearchInput
            placeholder="Search..."
            className="w-full"
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
          />
        </div>

        <nav className="px-3 lg:px-4 space-y-1 h-full overflow-y-auto pb-20">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            const isLogout = item.id === "logout";

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : isLogout
                    ? "text-red-600 hover:bg-red-50"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="mr-3 w-4 h-4 flex-shrink-0" />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer Sidebar */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsDrawerOpen(false)}
          ></div>

          {/* Drawer Panel */}
          <div className="relative w-80 max-w-[90vw] bg-white shadow-lg h-full z-50 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h1 className="text-xl font-bold text-gray-900">Efandex</h1>
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Search */}
            <div className="p-4 border-b border-gray-200">
              <SearchInput
                placeholder="Search..."
                className="w-full"
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchTerm(e.target.value)
                }
              />
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {filteredItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                const isLogout = item.id === "logout";

                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "bg-gray-900 text-white"
                        : isLogout
                        ? "text-red-600 hover:bg-red-50"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="mr-3 w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};