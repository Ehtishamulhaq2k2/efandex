export type TimePeriod =
  | "Last Month"
  | "Last 3 Months"
  | "Last 6 Months"
  | "Last Year";

export interface StatCardTypes {
  title: string;
  color: string;
  data: Record<
    TimePeriod,
    {
      value: string;
      subtitle: string;
      change: string;
      isPositive: boolean;
    }
  >;
}


export interface Booking {
  id: string;
  name: string;
  status: 'Completed' | 'In Progress' | 'Cancelled';
  price: string;
  capacity: string;
  duration: string;
  statusColor: 'green' | 'yellow' | 'red';
}

export interface Registration {
  id: string;
  name: string;
  category: 'Guest' | 'Host';
  joinDate: string;
  email: string;
  categoryColor: '#E6F7F8' | '#DCB21E33';
}

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}
