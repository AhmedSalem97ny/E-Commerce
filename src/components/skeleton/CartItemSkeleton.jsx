import React from 'react';

export default function CartItemSkeleton() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 p-4 bg-white rounded-lg shadow-md animate-pulse">
      {/* Left Section: Image & Info */}
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

      {/* Right Section: Quantity, Price, Delete */}
      <div className="flex items-center gap-4 md:gap-6 w-full md:w-1/3 justify-end mt-4 md:mt-0">
        {/* Quantity Controls */}
        <div className="flex items-center gap-1">
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
          <div className="w-8 h-4 bg-gray-200 rounded" />
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
        </div>
        {/* Price */}
        <div className="h-4 w-16 bg-gray-200 rounded" />
        {/* Delete Button */}
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
}
