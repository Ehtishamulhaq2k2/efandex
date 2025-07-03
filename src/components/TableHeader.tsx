const TableHeader: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
        {children}
      </div>
    </div>
  </div>
);

export default TableHeader;
