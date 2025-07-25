import { faEye, faCodeCompare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calcDiscount } from "../../utils/discount-utils";
import Rating from "../Rating/Rating";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import Heart from "../Heart/Heart"; // ✅ Add this

export default function ProductCard({ productInfo }) {
  const {
    id,
    imageCover,
    priceAfterDiscount,
    price,
    ratingsQuantity,
    ratingsAverage,
    title,
    category,
  } = productInfo;

  const { handleAddingProductToCart } = useContext(CartContext);

  return (
    <div className="card relative rounded-xl shadow-lg overflow-hidden bg-white">
      <div>
        <Link className="block" to={`/product/${id}`}>
          <img className="h-60 mx-auto" src={imageCover} alt="" />
        </Link>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <span className="text-sm text-gray-500">{category.name}</span>
          <h2 className="font-semibold">
            <Link to={`/product/${id}`} className="line-clamp-1">{title}</Link>
          </h2>
        </div>
        <div className="rating flex gap-2 items-center">
          <Rating rating={ratingsAverage} />
          <span>{ratingsAverage}</span>
          <span>({ratingsQuantity})</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="price space-x-2">
            <span className="text-lg font-bold text-primary-600">
              {priceAfterDiscount ?? price} EGP
            </span>
            {priceAfterDiscount && (
              <del className="text-gray-500">{price} EGP</del>
            )}
          </div>
          <button
            onClick={() => handleAddingProductToCart({ id })}
            className="btn p-0 size-8 hover:bg-primary-700 bg-primary-600 text-white rounded-full"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      <div className="actions absolute top-4 right-4 text-gray-500 flex flex-col gap-4 *:hover:text-primary-600 *:transition-colors *:duration-200">
        <Heart product={productInfo} /> {/* ✅ This is now interactive */}
        <button>
          <FontAwesomeIcon icon={faCodeCompare} />
        </button>
        <Link to={`/product/${id}`}>
          <FontAwesomeIcon icon={faEye} />
        </Link>
      </div>

      {priceAfterDiscount && (
        <span className="badge absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-lg">
          -{calcDiscount({ price, priceAfterDiscount })}%
        </span>
      )}
    </div>
  );
}
