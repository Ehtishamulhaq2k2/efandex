import {
  AlertCircle,
  BookOpen,
  Building,
  FileText,
  Home,
  LogOut,
  Settings,
  Users,
} from "lucide-react";
import { Booking, MenuItem, Registration, StatCardTypes } from "../types/types";

export const mockStats: StatCardTypes[] = [
  {
    title: "Active Users",
    value: "3632",
    subtitle: "Overall last month",
    change: "+30.5626%",
    isPositive: true,
    color: "#3b82f6",
  },
  {
    title: "Total Properties",
    value: "10k+",
    subtitle: "Overall last month",
    change: "+30.5626%",
    isPositive: true,
    color: "#22c55e",
  },
  {
    title: "Total Revenue",
    value: "$900K",
    subtitle: "Overall this month",
    change: "-30.5626%",
    isPositive: false,
    color: "red",
  },
];

export const mockBookings: Booking[] = [
  {
    id: "1",
    name: "Olivia Daddario",
    status: "Completed",
    price: "$633.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
    statusColor: "green",
  },
  {
    id: "2",
    name: "Jack Paul",
    status: "In Progress",
    price: "$231.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
    statusColor: "yellow",
  },
  {
    id: "3",
    name: "Mr Alexendar",
    status: "Cancelled",
    price: "$260.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
    statusColor: "red",
  },
  {
    id: "4",
    name: "Arnold Archer",
    status: "Completed",
    price: "$900.00",
    capacity: "60 (Seated)",
    duration: "24 May - 28 May 2024",
    statusColor: "green",
  },
];

export const mockRegistrations: Registration[] = [
  {
    id: "1",
    name: "Olivia Daddario",
    category: "Guest",
    joinDate: "Jan 13, 2022",
    email: "Userefandax1234@gmail.com",
    categoryColor: "green",
  },
  {
    id: "2",
    name: "Jack Paul",
    category: "Host",
    joinDate: "Jan 12, 2022",
    email: "Userefandax1234@gmail.com",
    categoryColor: "yellow",
  },
  {
    id: "3",
    name: "Mr Alexendar",
    category: "Guest",
    joinDate: "Jan 12, 2022",
    email: "Userefandax1234@gmail.com",
    categoryColor: "green",
  },
  {
    id: "4",
    name: "Arnold Archer",
    category: "Host",
    joinDate: "Jan 12, 2022",
    email: "Userefandax1234@gmail.com",
    categoryColor: "yellow",
  },
  {
    id: "5",
    name: "Jack Paul",
    category: "Guest",
    joinDate: "Jan 12, 2022",
    email: "Userefandax1234@gmail.com",
    categoryColor: "green",
  },
];

export const menuItems: MenuItem[] = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "properties", label: "Properties", icon: Building },
  { id: "users", label: "User Management", icon: Users },
  { id: "bookings", label: "Bookings", icon: BookOpen },
  { id: "disputes", label: "Dispute Centre", icon: AlertCircle },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "privacy", label: "Privacy Policy", icon: FileText },
  { id: "logout", label: "Logout", icon: LogOut },
];
