import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EntityCards from './components/EntityCards';
import EntityTable from './components/EntityTable';
import { Rocket, Star, Home } from 'lucide-react';

const sampleData = [
  { type: 'constituency', name: 'Gandhinagar North', parent: 'District: Gandhinagar • State: Gujarat', notes: 'Urban region' },
  { type: 'taluka', name: 'Kalol', parent: 'Constituency: Gandhinagar North', notes: '' },
  { type: 'village', name: 'Adalaj', parent: 'Taluka: Gandhinagar • Constituency: Gandhinagar North', notes: 'Heritage stepwell' },
];

export default function App() {
  const [role, setRole] = useState('user');
  const [query, setQuery] = useState('');

  const stats = { constituencies: 182, talukas: 250, villages: 18000, users: 24 };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sampleData;
    return sampleData.filter((item) =>
      [item.type, item.name, item.parent, item.notes].some((f) => (f || '').toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
      <Header role={role} />

      <main className="mx-auto max-w-6xl px-4 py-6">
        <section className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Welcome to Geo Masters</h2>
            <p className="text-sm text-muted-foreground">Browse Gujarat’s constituencies, talukas, and villages with a clean, role-aware UI.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setRole('user')}
              className={`inline-flex items-center gap-1 rounded-md border px-3 py-2 text-sm transition ${
                role === 'user' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'hover:bg-muted'
              }`}
              aria-pressed={role === 'user'}
            >
              <Home className="h-4 w-4" /> User View
            </button>
            <button
              onClick={() => setRole('admin')}
              className={`inline-flex items-center gap-1 rounded-md border px-3 py-2 text-sm transition ${
                role === 'admin' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' : 'hover:bg-muted'
              }`}
              aria-pressed={role === 'admin'}
            >
              <Star className="h-4 w-4" /> Admin View
            </button>
          </div>
        </section>

        <section className="mb-6">
          <SearchBar value={query} onChange={setQuery} />
        </section>

        <section className="mb-8">
          <EntityCards stats={stats} />
        </section>

        <section className="mb-8">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-medium">Recently Viewed Entities</h3>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Rocket className="h-3.5 w-3.5" /> Demo data
            </span>
          </div>
          <EntityTable data={filtered} />
        </section>

        <section className="rounded-lg border bg-white p-4">
          <h4 className="font-medium">What’s next</h4>
          <p className="mt-1 text-sm text-muted-foreground">
            This UI scaffold mirrors the planned role-based experience. Wire it to your API to enable authentication, CRUD operations, and route guards for admin vs. user sections.
          </p>
        </section>
      </main>
    </div>
  );
}
