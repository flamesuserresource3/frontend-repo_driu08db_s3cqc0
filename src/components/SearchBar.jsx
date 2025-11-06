import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange, placeholder = 'Search constituencies, talukas, villages…' }) => {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Global search"
        className="w-full rounded-md border bg-white px-10 py-2 text-sm outline-none ring-indigo-500 placeholder:text-muted-foreground focus:ring-2"
      />
    </div>
  );
};

export default SearchBar;
