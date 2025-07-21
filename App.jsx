import React from 'react';

export default function App() {
  return (
    <main className="flex flex-col md:flex-row gap-8 p-10 max-w-6xl mx-auto text-center">
      <div
        onClick={() => window.location.href='/residential'}
        className="flex-1 cursor-pointer bg-white hover:bg-blue-50 p-10 rounded-2xl shadow-lg border border-slate-200 transition-all"
      >
        <h2 className="text-2xl font-semibold mb-3 text-slate-800">Residential Services</h2>
        <p className="text-slate-600">
          Gutter Vac, Roof Scrapes, Drive Cleans – Simple booking & friendly service
        </p>
      </div>
      <div
        onClick={() => window.location.href='/commercial'}
        className="flex-1 cursor-pointer bg-white hover:bg-slate-100 p-10 rounded-2xl shadow-lg border border-slate-200 transition-all"
      >
        <h2 className="text-2xl font-semibold mb-3 text-slate-800">Commercial Services</h2>
        <p className="text-slate-600">
          Licensed Waste Removal – 24hr Emergency Callouts – South West Coverage
        </p>
      </div>
    </main>
  );
}
