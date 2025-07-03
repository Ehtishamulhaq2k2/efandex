export interface StatCardTypes {
  title: string;
  value: string;
  subtitle: string;
  change: string;
  isPositive: boolean;
  color: '#3b82f6' | '#22c55e' | 'red';
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
