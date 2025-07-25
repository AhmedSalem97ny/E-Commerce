import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faShieldAlt
} from '@fortawesome/free-solid-svg-icons';
export default function ProductInfoTab({productDetails}) {
  return (
    <div className="bg-white">
      <div className="  mx-auto">
      

        {/* Product Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h2>
          <p className="text-gray-600 leading-relaxed">
            {productDetails.description}
          </p>
        </div>

        
      

        {/* Certifications Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h3>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
              <span className="text-green-800 font-medium">USDA Organic</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
              <FontAwesomeIcon icon={faShieldAlt} className="text-green-600" />
              <span className="text-green-800 font-medium">Non-GMO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
