import { useState } from "react";
import { Header } from "../components/MainHeader";
import {
  mockBookings,
  mockRegistrations,
  mockStats,
} from "../constatnts/mockData";
import { StatCard } from "../components/StatCard";
import { Sidebar } from "../components/SideBar";
import { RegistrationsTable } from "../components/RegistrationTable";
import { BookingsTable } from "../components/BookingTable";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [currentBookingsPage, setCurrentBookingsPage] = useState<number>(1);
  const [currentRegistrationsPage, setCurrentRegistrationsPage] =
    useState<number>(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />

      {/* Main Content Area - Responsive width */}
      <div className="flex-1 flex flex-col md:ml-64 w-full overflow-hidden">
        <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />

        <main className="flex-1 p-3 sm:p-4 md:p-6 w-full max-w-full overflow-x-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {mockStats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>

          {/* Recent Bookings */}
          <div className="mb-6 md:mb-8">
            <BookingsTable
              bookings={mockBookings}
              currentPage={currentBookingsPage}
              onPageChange={setCurrentBookingsPage}
            />
          </div>

          {/* New User Registrations */}
          <div>
            <RegistrationsTable
              registrations={mockRegistrations}
              currentPage={currentRegistrationsPage}
              onPageChange={setCurrentRegistrationsPage}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
