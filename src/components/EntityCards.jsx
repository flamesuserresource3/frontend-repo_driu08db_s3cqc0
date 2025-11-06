import React from 'react';
import { Building2, Landmark, House, Users } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, accent }) => (
  <div className="rounded-xl border bg-white p-4 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="mt-1 text-2xl font-semibold">{value}</p>
      </div>
      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${accent}`}>
        <Icon className="h-5 w-5 text-white" aria-hidden="true" />
      </div>
    </div>
  </div>
);

const EntityCards = ({ stats }) => {
  const { constituencies = 0, talukas = 0, villages = 0, users = 0 } = stats || {};
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard icon={Landmark} label="Constituencies" value={constituencies} accent="bg-indigo-600" />
      <StatCard icon={Building2} label="Talukas" value={talukas} accent="bg-emerald-600" />
      <StatCard icon={House} label="Villages" value={villages} accent="bg-amber-600" />
      <StatCard icon={Users} label="Users" value={users} accent="bg-rose-600" />
    </div>
  );
};

export default EntityCards;
