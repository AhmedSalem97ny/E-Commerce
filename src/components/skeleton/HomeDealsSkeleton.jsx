import React from 'react';

export default function HomeDealsSkeleton() {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-3">Deals of the days</h2>
            <div className="flex gap-2 items-center">
              <p>Offers end in:</p>
              <div className="counter flex gap-2 items-center">
                <div className="size-7 text-sm text-white rounded-md flex justify-center items-center bg-gray-300 animate-pulse" />
                <span>:</span>
                <div className="size-7 text-sm text-white rounded-md flex justify-center items-center bg-gray-300 animate-pulse" />
                <span>:</span>
                <div className="size-7 text-sm text-white rounded-md flex justify-center items-center bg-gray-300 animate-pulse" />
              </div>
            </div>
          </div>
          <div className="w-32 h-6 bg-gray-200 rounded animate-pulse" />
        </div>

        <div className="grid py-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="card rounded-xl shadow-lg overflow-hidden bg-white animate-pulse flex flex-col"
            >
              <div className="h-48 w-full bg-gray-200" />
              <div className="p-4 space-y-3">
                <div className="h-4 w-24 bg-gray-200 rounded mb-2" />
                <div className="h-5 w-40 bg-gray-200 rounded mb-2" />
                <div className="flex gap-2 items-center mb-2">
                  <div className="h-4 w-16 bg-gray-200 rounded" />
                  <div className="h-4 w-8 bg-gray-200 rounded" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <div className="h-5 w-20 bg-gray-200 rounded" />
                    <div className="h-4 w-12 bg-gray-200 rounded" />
                  </div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full" />
                </div>
              </div>
              <div className="absolute top-4 right-4 flex flex-col gap-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
              </div>
              <div className="absolute top-4 left-4 h-6 w-16 bg-gray-200 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
