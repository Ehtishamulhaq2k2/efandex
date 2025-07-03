import { ChevronLeft, ChevronRight } from "lucide-react";

export const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => (
  <div className="px-4 py-3 sm:px-6 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4 border-t border-gray-200">
    {/* Previous Button */}
    <button
      onClick={() => onPageChange(Math.max(1, currentPage - 1))}
      disabled={currentPage === 1}
      className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
    >
      <ChevronLeft className="w-4 h-4" />
      <span>Previous</span>
    </button>

    {/* Page Numbers */}
    <div className="flex flex-wrap justify-center items-center space-x-1 sm:space-x-2">
      {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
        <button
          key={index}
          onClick={() =>
            typeof page === "number" ? onPageChange(page) : undefined
          }
          className={`w-8 h-8 rounded-lg ${
            page === currentPage
              ? "bg-gray-900 text-white"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}
    </div>

    {/* Next Button */}
    <button
      onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
      disabled={currentPage === totalPages}
      className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
    >
      <span>Next</span>
      <ChevronRight className="w-4 h-4" />
    </button>
  </div>
);
