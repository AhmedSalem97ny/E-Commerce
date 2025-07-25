import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faRotateLeft,
  faShieldHalved,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
export default function HomeFeatures() {
  return <>
  
   <div className="flex flex-wrap justify-center gap-10 py-8 bg-white">
  {/* Free Delivery */}
  <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg shadow-sm px-6 py-5 w-72">
    <div className="bg-green-100 p-3 rounded-full">
      <FontAwesomeIcon icon={faTruck} className="text-green-500 text-xl" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">Free Delivery</h4>
      <p className="text-sm text-gray-500">Orders $50 or more</p>
    </div>
  </div>

  {/* 30 Days Return */}
  <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg shadow-sm px-6 py-5 w-72">
    <div className="bg-green-100 p-3 rounded-full">
      <FontAwesomeIcon icon={faRotateLeft} className="text-green-500 text-xl" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">30 Days Return</h4>
      <p className="text-sm text-gray-500">Satisfaction guaranteed</p>
    </div>
  </div>

  {/* Secure Payment */}
  <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg shadow-sm px-6 py-5 w-72">
    <div className="bg-green-100 p-3 rounded-full">
      <FontAwesomeIcon icon={faShieldHalved} className="text-green-500 text-xl" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">Secure Payment</h4>
      <p className="text-sm text-gray-500">100% protected checkout</p>
    </div>
  </div>

  {/* 24/7 Support */}
  <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg shadow-sm px-6 py-5 w-72">
    <div className="bg-green-100 p-3 rounded-full">
      <FontAwesomeIcon icon={faHeadset} className="text-green-500 text-xl" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">24/7 Support</h4>
      <p className="text-sm text-gray-500">Ready to help anytime</p>
    </div>
  </div>
</div>
  
  
  </>
}
