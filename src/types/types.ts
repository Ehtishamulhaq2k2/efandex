export interface StatCardTypes {
  title: string;
  value: string;
  subtitle: string;
  change: string;
  isPositive: boolean;
  color: 'blue' | 'red' | 'green';
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
  categoryColor: 'green' | 'yellow';
}

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}
