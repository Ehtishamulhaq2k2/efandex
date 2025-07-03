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

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {mockStats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>

          {/* Recent Bookings */}
          <BookingsTable
            bookings={mockBookings}
            currentPage={currentBookingsPage}
            onPageChange={setCurrentBookingsPage}
          />

          {/* New User Registrations */}
          <RegistrationsTable
            registrations={mockRegistrations}
            currentPage={currentRegistrationsPage}
            onPageChange={setCurrentRegistrationsPage}
          />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
