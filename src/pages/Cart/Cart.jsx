import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTrash,
  faTruck,
  faLock,
  faShoppingBag,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../context/Cart.context";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router";
import CartSkeleton from "../../components/skeleton/CartSkeleton";
import PageMetaData from "../../components/PageMetaData/PageMetaData";

const CartPage = () => {
  const { cartInfo, isLoading } = useContext(CartContext);

  if (isLoading) {
    return <CartSkeleton />;
  }

  const { numOfCartItems, data } = cartInfo;
  const { products, totalCartPrice } = data;

  return (
    <>
    <PageMetaData title="Shopping Cart" description="Your Cart Items"/>
    <title>Shopping Cart</title>
    <meta name="description" content="Your Shopping Cart" />
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-start">
      <div className="w-full max-w-7xl flex flex-col gap-10">
        {/* Cart & Summary */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Shopping Cart & Coupon Group */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Shopping Cart */}
            <div className="bg-white p-6 space-y-5 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
             {products.length > 0 &&  <p className="text-gray-600 mt-1 mb-5">
                {numOfCartItems} items in your cart
              </p>}
                
              {products.length > 0 ? products.map((product) => (
                <CartItem key={product.id} productInfo={product} />
              )) : 
              <div className="py-10 space-y-4 text-center">
                <p>Your Cart is empty <FontAwesomeIcon icon={faShoppingCart} className="ms-2"/></p>
                <p>you can continue shopping from <Link to="/" className="text-primary-600">{""} here</Link></p>
              </div>
              }
            </div>

           
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-md h-fit">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal ({numOfCartItems} items)</span>
                <span>{totalCartPrice} EGP</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">{products.length >0 ? 70 : 0} EGP</span>
              </div>
              
              <div className="flex justify-between">
                <span>Tax</span>
                <span>{Math.trunc(totalCartPrice*0.14)}</span>
              </div>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4 border-t pt-4">
              <span>Total</span>
              <span>{Math.trunc(totalCartPrice+(products.length >0 ? 70 : 0)+totalCartPrice*0.14)}</span>
            </div>
            <Link to={`/checkout`} className="bg-green-600 w-full text-center text-white mt-6 py-2 rounded">
              Proceed to Checkout
            </Link>
            <button className="w-full border mt-2 py-2 rounded">
              Continue Shopping
            </button>

            {/* Secure info */}
            <div className="mt-6 text-sm text-gray-600 space-y-4">
              <p className="flex p-4 items-start gap-3">
                <FontAwesomeIcon
                  icon={faTruck}
                  className="text-green-600 mt-1"
                />
                <span>
                  <strong>Free Delivery</strong>
                  <br />
                  Your order qualifies for free delivery. Estimated delivery:
                  2–3 business days
                </span>
              </p>
              <p className="flex bg-primary-400/40 rounded-xl p-4 items-start gap-3">
                <FontAwesomeIcon
                  icon={faLock}
                  className="text-green-600 mt-1"
                />
                <span>
                  <strong>Secure Checkout</strong>
                  <br />
                  Your payment information is protected with 256-bit SSL
                  encryption
                </span>
              </p>
            </div>
          </div>
        </div>

        
      
      </div>
    </div>
  </>);
};

export default CartPage;
