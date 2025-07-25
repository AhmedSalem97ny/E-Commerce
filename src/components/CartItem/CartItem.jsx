import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import Rating from '../Rating/Rating';
import { CartContext } from '../../context/Cart.context';

export default function CartItem({ productInfo }) {
  const { count, price, product } = productInfo;
  const { id, title, imageCover, category, ratingsAverage, priceAfterDiscount } = product;
  const { handleRemoveFromCart, handleupdateProductQuantity } = useContext(CartContext);
  const {isUpdating, setIsUpdating} = useState(false);


async function handleUpdate({id, count}) {
  setIsUpdating(true);
 await handleupdateProductQuantity({ id, count })  
  setIsUpdating(false);
}


  return (
    <div className={`flex flex-col md:flex-row items-start gap-4 p-4 bg-white rounded-lg shadow-md ${isUpdating && 'opacity-50'}`}>
      
      {/* Left Section: Image & Info */}
      <div className="flex gap-4 items-start w-full md:w-2/3">
        <img
          src={imageCover}
          alt={title}
          className="w-20 h-20 rounded object-cover"
        />
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-gray-500">{category.name}</p>
          <div className="flex items-center text-amber-400 text-sm">
            <Rating rating={ratingsAverage} />
            <span className="text-xs text-gray-500 ml-2">{ratingsAverage}</span>
          </div>
        </div>
      </div>

      {/* Right Section: Quantity, Price, Delete */}
      <div className="flex items-center gap-4 md:gap-6 w-full md:w-1/3 justify-end mt-4 md:mt-0">
        {/* Quantity Controls */}
        <div className="flex items-center gap-1">
          <button
            className="px-1.5 py-0.5 text-sm border rounded text-gray-600 hover:bg-gray-100"
            onClick={() => handleUpdate({ id, count: count - 1 })}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="font-medium w-5 text-center text-sm">{count}</span>
          <button
            className="px-1.5 py-0.5 text-sm border rounded text-gray-600 hover:bg-gray-100"
            onClick={() => handleupdateProductQuantity({ id, count: count + 1 })}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        {/* Price */}
        <p className="font-bold min-w-[70px] text-right text-sm">
          {priceAfterDiscount ?? price} EGP
        </p>

        {/* Delete Button */}
        <button
          onClick={() => handleRemoveFromCart({ id })}
          className="text-red-500 hover:text-red-700"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
