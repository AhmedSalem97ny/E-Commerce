import React from 'react';

export default function HomecategoriesSkeleton() {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Shop By Category</h2>
          <div className="flex gap-2 items-center text-primary-600">
            <span>View All Categories</span>
            <div className="w-5 h-5 bg-gray-200 rounded" />
          </div>
        </div>

        <div className="grid py-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="card p-4 rounded-xl shadow-md bg-white flex flex-col gap-2 items-center animate-pulse"
            >
              <div className="size-16 rounded-full bg-gray-200 mb-2" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
