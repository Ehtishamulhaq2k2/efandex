import {
  Calendar,
  ChevronDown,
  Download,
  MoreHorizontal,
  MoveRight,
} from "lucide-react";
import { Pagination } from "./Paginations";
import { StatusBadge } from "./StatusBadge";
import TableHeader from "./TableHeader";
import { SearchInput } from "./SearchBar";
import { Booking } from "../types/types";
import { useState } from "react";

export const BookingsTable: React.FC<{
  bookings: Booking[];
  currentPage: number;
  onPageChange: (page: number) => void;
}> = ({ bookings, currentPage, onPageChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = bookings.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
      <TableHeader title="Recent Bookings">
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
        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800">
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
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Capacity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center space-x-1">
                  <span>Duration</span>
                  <ChevronDown className="w-3 h-3" />
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredItems.map((booking) => (
              <tr key={booking.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {booking.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge
                    status={booking.status}
                    color={booking.statusColor}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {booking.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.capacity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {booking.duration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black-600">
                  <div className="flex flex-row items-center space-x-2 transition-transform duration-200 hover:scale-105">
                    <button className="font-medium">
                      View Booking Details
                    </button>
                    <MoveRight />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={onPageChange}
      />
    </div>
  );
};
