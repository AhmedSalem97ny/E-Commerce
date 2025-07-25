import React from 'react'

export default function ShippingTab() {
  return (
    <div>
<div className="bg-white ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">Shipping & Returns</h2>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Shipping Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Shipping Information</h3>
            
            <div className="space-y-4">
              {/* Standard Shipping */}
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="text-gray-700 font-medium mb-1 sm:mb-0">Standard:</span>
                <span className="text-gray-600">3-5 business days ($4.99)</span>
              </div>
              
              {/* Express Shipping */}
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="text-gray-700 font-medium mb-1 sm:mb-0">Express:</span>
                <span className="text-gray-600">1-2 business days ($9.99)</span>
              </div>
              
              {/* Free Shipping */}
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="text-gray-700 font-medium mb-1 sm:mb-0">Free shipping:</span>
                <span className="text-gray-600">Orders over $50</span>
              </div>
            </div>
          </div>
          
          {/* Return Policy */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Return Policy</h3>
            
            <div className="space-y-4">
              {/* Time Limit */}
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="text-gray-700 font-medium mb-1 sm:mb-0">Time limit:</span>
                <span className="text-gray-600">30 days</span>
              </div>
              
              {/* Condition */}
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="text-gray-700 font-medium mb-1 sm:mb-0">Condition:</span>
                <span className="text-gray-600">Unopened original packaging</span>
              </div>
              
              {/* Refund */}
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="text-gray-700 font-medium mb-1 sm:mb-0">Refund:</span>
                <span className="text-gray-600">Full refund available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    </div>
  )
}
