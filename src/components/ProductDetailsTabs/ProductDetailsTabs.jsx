import React, { useEffect, useState } from "react";
import ProductInfoTab from "./ProductInfoTab";
import ReviewTab from "./ReviewTab";
import ShippingTab from "./ShippingTab";

const ProductDetailsSection = ({productDetails}) => {
  const [activeTab, setActiveTab] = useState("details");

  function getActiveTab() {
    switch (activeTab) {
      case "details":
        return <ProductInfoTab productDetails={productDetails} />;
      case "reviews":
        return <ReviewTab />;
      case "shipping":
        return <ShippingTab />;
      default:
        return <ProductInfoTab />;
    }
  }

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:flex md:space-x-8">
            <button 
            onClick={()=>setActiveTab("details")}
            className={`${activeTab == "details" && "border-b-2 border-green-500 text-green-600 "} text-gray-600 font-medium pb-2 md:pb-4 px-1 text-left md:text-center`}>
              Product Details
            </button>

            <button 
            onClick={()=>setActiveTab("reviews")}

            className={`${activeTab == "reviews" && "border-b-2 border-green-500 text-green-600 "} text-gray-600 font-medium pb-2 md:pb-4 px-1 text-left md:text-center`}>
              Reviews
            </button>
            <button 
            onClick={()=>setActiveTab("shipping")}

            className={`${activeTab == "shipping" && "border-b-2 border-green-500 text-green-600 "} text-gray-600 font-medium pb-2 md:pb-4 px-1 text-left md:text-center`}>
              Shipping & Returns
            </button>
          </div>
        </div>
        <div className="p-6">{getActiveTab()}</div>
      </div>
    </div>
  );
};

export default ProductDetailsSection;
