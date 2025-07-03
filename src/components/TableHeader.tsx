const TableHeader: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="px-6 py-4 border-b border-gray-200">
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <div className="flex items-center space-x-3">{children}</div>
    </div>
  </div>
);

export default TableHeader;
