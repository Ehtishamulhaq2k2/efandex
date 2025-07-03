import {
  Calendar,
  Download,
  MoreHorizontal,
  ChevronDown,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Registration } from "../types/types";
import { CategoryBadge } from "./CategoryBadge";
import { Pagination } from "./Paginations";
import { SearchInput } from "./SearchBar";
import TableHeader from "./TableHeader";
import { useState } from "react";

export const RegistrationsTable: React.FC<{
  registrations: Registration[];
  currentPage: number;
  onPageChange: (page: number) => void;
}> = ({ registrations, currentPage, onPageChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const usersPerPage = 6;

  // Filter users by search
  const filteredUsers = registrations.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage);

  // Export CSV
  const handleExport = () => {
    const headers = ["Name", "Category", "Join Date", "Email"];
    const rows = filteredUsers.map((item) => [
      item.name,
      item.category,
      item.joinDate,
      item.email,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((row) => row.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "user_registrations.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <TableHeader title="New User Registrations">
        <SearchInput
          placeholder="Search..."
          className="w-full"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Calendar className="w-4 h-4" />
          <span>Today</span>
        </button>
        <button
          onClick={handleExport}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
        >
          <Download className="w-4 h-4" />
          <span>Export</span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </TableHeader>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Join Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>Email</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentUsers.length > 0 ? (
              currentUsers.map((registration) => (
                <tr key={registration.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {registration.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <CategoryBadge category={registration.category} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {registration.joinDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {registration.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                    <button className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 hover:text-red-700 transition">
                      <XCircle className="w-4 h-4 mr-1" />
                      Decline
                    </button>
                    <button className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-600 border border-green-200 hover:bg-green-100 hover:text-green-700 transition">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-8 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};
