import React from 'react';

export default function ProductCardSkeleton() {
  return (
    <div className="card relative rounded-xl shadow-lg overflow-hidden bg-white animate-pulse">
      {/* Image Skeleton */}
      <div className="h-60 w-full bg-gray-200" />
      <div className="p-4 space-y-3">
        {/* Category Skeleton */}
        <div className="h-4 w-24 bg-gray-200 rounded mb-2" />
        {/* Title Skeleton */}
        <div className="h-5 w-40 bg-gray-200 rounded mb-2" />
        {/* Rating Skeleton */}
        <div className="flex gap-2 items-center mb-2">
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-8 bg-gray-200 rounded" />
        </div>
        {/* Price Skeleton */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="h-5 w-20 bg-gray-200 rounded" />
            <div className="h-4 w-12 bg-gray-200 rounded" />
          </div>
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
        </div>
      </div>
      {/* Actions Skeleton */}
      <div className="absolute top-4 right-4 flex flex-col gap-4">
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
        <div className="w-8 h-8 bg-gray-200 rounded-full" />
      </div>
      {/* Badge Skeleton */}
      <div className="absolute top-4 left-4 h-6 w-16 bg-gray-200 rounded-lg" />
    </div>
  );
}

