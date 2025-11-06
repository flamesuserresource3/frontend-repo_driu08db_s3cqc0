import React from 'react';
import { Map, Shield, User } from 'lucide-react';

const Header = ({ role }) => {
  return (
    <header className="sticky top-0 z-20 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-indigo-600 text-white">
            <Map className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-lg font-semibold leading-tight">Geo Masters</h1>
            <p className="text-xs text-muted-foreground">Gujarat Geographic Master Data</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium">
            {role === 'admin' ? (
              <>
                <Shield className="h-3.5 w-3.5 text-indigo-600" aria-hidden="true" />
                Admin Mode
              </>
            ) : (
              <>
                <User className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                User Mode
              </>
            )}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
