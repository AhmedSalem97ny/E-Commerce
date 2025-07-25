import React from 'react';

export default function CartSkeleton() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-start">
      <div className="w-full max-w-7xl flex flex-col gap-10">
        {/* Cart & Summary */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Shopping Cart & Coupon Group */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Shopping Cart Skeleton */}
            <div className="bg-white p-6 space-y-5 rounded-xl shadow-md animate-pulse">
              <div className="h-8 w-48 bg-gray-200 rounded mb-6" />
              <div className="h-4 w-32 bg-gray-200 rounded mb-5" />
              {/* Skeleton items */}
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-start gap-4 p-4 bg-gray-100 rounded-lg">
                    {/* Left Section */}
                    <div className="flex gap-4 items-start w-full md:w-2/3">
                      <div className="w-20 h-20 rounded bg-gray-200" />
                      <div className="flex flex-col gap-2">
                        <div className="h-4 w-32 bg-gray-200 rounded" />
                        <div className="h-3 w-24 bg-gray-200 rounded" />
                        <div className="flex items-center gap-2 mt-2">
                          <div className="h-3 w-12 bg-gray-200 rounded" />
                          <div className="h-3 w-6 bg-gray-200 rounded" />
                        </div>
                      </div>
                    </div>
                    {/* Right Section */}
                    <div className="flex items-center gap-4 md:gap-6 w-full md:w-1/3 justify-end mt-4 md:mt-0">
                      <div className="flex items-center gap-1">
                        <div className="w-8 h-8 bg-gray-200 rounded-full" />
                        <div className="w-8 h-4 bg-gray-200 rounded" />
                        <div className="w-8 h-8 bg-gray-200 rounded-full" />
                      </div>
                      <div className="h-4 w-16 bg-gray-200 rounded" />
                      <div className="w-8 h-8 bg-gray-200 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary Skeleton */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-md h-fit animate-pulse">
            <div className="h-8 w-48 bg-gray-200 rounded mb-6" />
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <div className="h-4 w-32 bg-gray-200 rounded" />
                <div className="h-4 w-16 bg-gray-200 rounded" />
              </div>
              <div className="flex justify-between">
                <div className="h-4 w-24 bg-gray-200 rounded" />
                <div className="h-4 w-12 bg-gray-200 rounded" />
              </div>
              <div className="flex justify-between">
                <div className="h-4 w-16 bg-gray-200 rounded" />
                <div className="h-4 w-10 bg-gray-200 rounded" />
              </div>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4 border-t pt-4">
              <div className="h-4 w-20 bg-gray-200 rounded" />
              <div className="h-4 w-16 bg-gray-200 rounded" />
            </div>
            <div className="bg-gray-200 h-10 w-full rounded mt-6" />
            <div className="bg-gray-200 h-10 w-full rounded mt-2" />
            <div className="mt-6 space-y-4">
              <div className="flex p-4 items-start gap-3">
                <div className="bg-gray-200 rounded-full w-8 h-8" />
                <div>
                  <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                  <div className="h-3 w-40 bg-gray-200 rounded" />
                </div>
              </div>
              <div className="flex bg-gray-100 rounded-xl p-4 items-start gap-3">
                <div className="bg-gray-200 rounded-full w-8 h-8" />
                <div>
                  <div className="h-4 w-32 bg-gray-200 rounded mb-2" />
                  <div className="h-3 w-40 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
