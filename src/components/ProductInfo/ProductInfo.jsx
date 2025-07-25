import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faShoppingCart,
  faShare,
  faHeart,
  faMinus,
  faPlus,
  faTruck,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import Rating from "../Rating/Rating";
import { calcDiscount } from "../../utils/discount-utils";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { CartContext } from "../../context/Cart.context";
import Heart from "../Heart/Heart";

const ProductInfo = ({ productDetails }) => {
  const {
    id,
    title,
    description,
    category,
    images,
    price,
    priceAfterDiscount,
    ratingsAverage,
    quantity,
    ratingsQuantity,
  } = productDetails;

  const {handleAddingProductToCart} = useContext(CartContext)

  return (
    <div className="container">
      <div className="bg-white  pt-4 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images Section */}
            <div className="space-y-4 lg:w-96">
              <ReactImageGallery
              showNav={false}
              showPlayButton={false}
              showFullscreenButton={false}
                items={images.map((image) => {
                  return {
                    original: image,
                    thumbnail: image,
                  };
                })}
              />
            </div>

            {/* Product Details Section */}
            <div className="space-y-6 relative">
              {/* Stock Status */}
              <div>
                <span
                  className={`${
                    quantity > 0
                      ? "inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full"
                      : "inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full"
                  }`}
                >
                  {quantity > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                  <FontAwesomeIcon icon={faShare} className="text-gray-600" />
                </button>
                <Heart product={productDetails} />
              </div>

              {/* Product Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {title}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  <Rating rating={ratingsAverage} />
                </div>
                <span className="text-gray-600">
                  {ratingsAverage} ({ratingsQuantity} reviews)
                </span>
              </div>

              {/* Pricing */}
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-gray-900">
                  {priceAfterDiscount || price} EGP
                </span>
                {priceAfterDiscount ? (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      {price}EGP
                    </span>
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                      Save {calcDiscount({ price, priceAfterDiscount })}%
                    </span>
                  </>
                ) : (
                  ""
                )}
              </div>

              {/* Description */}
              <div className="text-gray-600 leading-relaxed">
                <p>{description}</p>
              </div>

              {/* Quantity */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Quantity:
                </label>
                <div className="flex items-center space-x-4">
                 
                  <span className="text-sm text-gray-500">
                    Only {quantity} left in stock
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button 
                onClick={()=>{
                  handleAddingProductToCart({id})
                }}
                className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 flex items-center justify-center space-x-2">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span>Add to Cart</span>
                </button>
                <button className="flex-1 bg-gray-100 text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-200">
                  Buy Now
                </button>
              </div>

              {/* Shipping Info */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                <div className="flex-1 min-w-[280px] flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <FontAwesomeIcon
                      icon={faTruck}
                      className="text-green-600"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Free Delivery</h4>
                    <p className="text-sm text-gray-600">
                      Free shipping on orders over $50
                    </p>
                  </div>
                </div>

                <div className="flex-1 min-w-[280px] flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <FontAwesomeIcon icon={faUndo} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      30 Days Return
                    </h4>
                    <p className="text-sm text-gray-600">
                      Satisfaction guaranteed or money back
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
