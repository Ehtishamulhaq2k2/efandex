import {
  BookOpen,
  Building2,
  Home,
  LayoutGrid,
  LogOut,
  Settings,
  Share2,
  SlidersHorizontal,
} from "lucide-react";
import { Booking, Registration, StatCardTypes } from "../types/types";

export const mockStats: StatCardTypes[] = [
  {
    title: "Active Users",
    color: "#3b82f6",
    data: {
      "Last Month": {
        value: "3632",
        change: "+30.5626%",
        isPositive: true,
        subtitle: "Overall last month",
      },
      "Last 3 Months": {
        value: "8991",
        change: "+18.3%",
        isPositive: true,
        subtitle: "Overall last 3 months",
      },
      "Last 6 Months": {
        value: "14012",
        change: "+12.5%",
        isPositive: true,
        subtitle: "Overall last 6 months",
      },
      "Last Year": {
        value: "20201",
        change: "+5.2%",
        isPositive: true,
        subtitle: "Overall last year",
      },
    },
  },
  {
    title: "Total Properties",
    color: "#22c55e",
    data: {
      "Last Month": {
        value: "10k+",
        change: "+30.5626%",
        isPositive: true,
        subtitle: "Overall last month",
      },
      "Last 3 Months": {
        value: "26k+",
        change: "+22.1%",
        isPositive: true,
        subtitle: "Overall last 3 months",
      },
      "Last 6 Months": {
        value: "35k+",
        change: "+14.8%",
        isPositive: true,
        subtitle: "Overall last 6 months",
      },
      "Last Year": {
        value: "55k+",
        change: "+7.3%",
        isPositive: true,
        subtitle: "Overall last year",
      },
    },
  },
  {
    title: "Total Revenue",
    color: "#ef4444",
    data: {
      "Last Month": {
        value: "$900K",
        change: "-30.5626%",
        isPositive: false,
        subtitle: "Overall this month",
      },
      "Last 3 Months": {
        value: "$2.1M",
        change: "-18.3%",
        isPositive: false,
        subtitle: "Overall last 3 months",
      },
      "Last 6 Months": {
        value: "$4.3M",
        change: "+9.1%",
        isPositive: true,
        subtitle: "Overall last 6 months",
      },
      "Last Year": {
        value: "$8.9M",
        change: "+25.6%",
        isPositive: true,
        subtitle: "Overall last year",
      },
    },
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
    categoryColor: "#E6F7F8",
  },
  {
    id: "2",
    name: "Jack Paul",
    category: "Host",
    joinDate: "Jan 12, 2022",
    email: "Userefandax1234@gmail.com",
    categoryColor: "#DCB21E33",
  },
  {
    id: "3",
    name: "Mr Alexendar",
    category: "Guest",
    joinDate: "Jan 12, 2022",
    email: "Userefandax1234@gmail.com",
    categoryColor: "#E6F7F8",
  },
  {
    id: "4",
    name: "Arnold Archer",
    category: "Host",
    joinDate: "Jan 12, 2022",
    email: "Userefandax1234@gmail.com",
    categoryColor: "#DCB21E33",
  },
  {
    id: "5",
    name: "Jack Paul",
    category: "Guest",
    joinDate: "Jan 12, 2022",
    email: "Userefandax1234@gmail.com",
    categoryColor: "#E6F7F8",
  },
  {
    id: "6",
    name: "Emma Watson",
    category: "Guest",
    joinDate: "Jan 14, 2022",
    email: "emmawatson@example.com",
    categoryColor: "#E6F7F8",
  },
  {
    id: "7",
    name: "Robert Downey",
    category: "Host",
    joinDate: "Jan 15, 2022",
    email: "rdj@example.com",
    categoryColor: "#DCB21E33",
  },
  {
    id: "8",
    name: "Sophia Turner",
    category: "Guest",
    joinDate: "Jan 16, 2022",
    email: "sophiat@example.com",
    categoryColor: "#E6F7F8",
  },
  {
    id: "9",
    name: "Chris Evans",
    category: "Host",
    joinDate: "Jan 17, 2022",
    email: "chrise@example.com",
    categoryColor: "#DCB21E33",
  },
];


export const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "properties", label: "Properties", icon: Building2 },
  { id: "users", label: "User Managment", icon: Share2 },
  { id: "bookings", label: "Bookings", icon: LayoutGrid },
  { id: "disputes", label: "Dispute Centre", icon: SlidersHorizontal },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "privacy", label: "Privacy Policy", icon: BookOpen },
  { id: "logout", label: "Logout", icon: LogOut },
];
