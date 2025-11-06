import React from 'react';

const headers = [
  { key: 'type', label: 'Type' },
  { key: 'name', label: 'Name' },
  { key: 'parent', label: 'Hierarchy' },
  { key: 'notes', label: 'Notes' },
];

const Empty = () => (
  <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-10 text-center">
    <p className="text-sm font-medium">No data yet</p>
    <p className="text-xs text-muted-foreground">Connect to your API to populate Gujarat master data.</p>
  </div>
);

const EntityTable = ({ data }) => {
  if (!data || data.length === 0) return <Empty />;

  return (
    <div className="overflow-hidden rounded-lg border">
      <table className="w-full text-left text-sm">
        <thead className="bg-muted/50">
          <tr>
            {headers.map((h) => (
              <th key={h.key} className="px-4 py-2 font-medium text-muted-foreground">
                {h.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t hover:bg-muted/30">
              <td className="px-4 py-2 capitalize">{row.type}</td>
              <td className="px-4 py-2">{row.name}</td>
              <td className="px-4 py-2 text-muted-foreground">{row.parent}</td>
              <td className="px-4 py-2 text-muted-foreground">{row.notes || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EntityTable;
