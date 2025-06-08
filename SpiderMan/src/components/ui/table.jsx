import React from 'react';

export const Table = ({ children, className = '' }) => (
  <table className={`min-w-full text-sm ${className}`}>{children}</table>
);

export const TableHeader = ({ children, className = '' }) => (
  <thead className={className}>{children}</thead>
);

export const TableHead = ({ children, className = '' }) => (
  <th className={`px-4 py-2 text-left font-semibold ${className}`}>{children}</th>
);

export const TableBody = ({ children, className = '' }) => (
  <tbody className={className}>{children}</tbody>
);

export const TableRow = ({ children, className = '' }) => (
  <tr className={className}>{children}</tr>
);

export const TableCell = ({ children, className = '' }) => (
  <td className={`px-4 py-2 ${className}`}>{children}</td>
);
