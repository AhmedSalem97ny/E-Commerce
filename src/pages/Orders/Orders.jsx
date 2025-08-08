import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faShoppingCart,
  faCheckCircle,
  faTimesCircle,
  faTruck,
  faEye,
  faRedo,
  faCreditCard,
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Authcontext } from "../../context/Auth.context";
import Loading from "../../components/Loading/Loading";
import { getUserOrders } from "../../services/orders-service";

const Orders = () => {
  const { userInfo } = useContext(Authcontext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchOrders() {
    try {
      setIsLoading(true);
      setError(null);

      if (!userInfo?.id) {
        setIsLoading(false);
        setError("User not authenticated");
        return;
      }

      const response = await getUserOrders(userInfo.id);

      if (response.success) {
        setOrders(response.data || []);
      } else {
        setError(response.message || "Failed to fetch orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setError(error.message || "An error occurred while fetching orders");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (userInfo?.id) {
      fetchOrders();
    }
  }, [userInfo?.id]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="text-center py-16">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
            <FontAwesomeIcon icon={faTimesCircle} className="text-red-500 text-4xl mb-4" />
            <p className="text-red-600 text-lg font-semibold mb-2">Error loading orders</p>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={fetchOrders}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const hasOrders = orders.length > 0;

return (
  <div className="max-w-7xl mx-auto p-4 sm:p-6">
    {/* Header */}
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-1">My Orders</h1>
      <p className="text-gray-500">Track and manage your orders easily</p>
    </div>

    {!hasOrders ? (
      // Empty State
      <div className="text-center py-20">
        <div className="bg-gray-50 rounded-2xl p-10 max-w-md mx-auto shadow-sm">
          <FontAwesomeIcon icon={faBoxOpen} size="4x" className="text-gray-300 mb-6" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">No orders yet</h3>
          <p className="text-gray-500 mb-6">Start shopping to see your orders here</p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg inline-flex items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            Start Shopping
          </button>
        </div>
      </div>
    ) : (
      // Orders List
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            {/* Order Header */}
            <div className="bg-gray-50 px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 border-b border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <h3 className="text-lg font-semibold text-gray-900">Order #{order.id}</h3>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium w-fit ${
                    order.isPaid
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={order.isPaid ? faCheckCircle : faTimesCircle}
                    className="mr-1"
                  />
                  {order.isPaid ? "Paid" : "Unpaid"}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                Placed on {new Date(order.createdAt || Date.now()).toLocaleDateString()}
              </div>
            </div>

            {/* Order Body */}
            <div className="p-4 sm:p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6">
              
              {/* Product Items */}
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 lg:gap-4">
                {order.cartItems.slice(0, 3).map((item) => (
                  <div key={item._id} className="flex flex-col items-center gap-1">
                    <div className="relative">
                      <img
                        src={item.product.imageCover || "/placeholder-image.jpg"}
                        alt={item.product.name}
                        className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg border"
                      />
                      {item.count > 1 && (
                        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {item.count}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-medium text-gray-900 truncate w-14 sm:w-16">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-gray-500">{item.price} EGP</p>
                  </div>
                ))}
                {order.cartItems.length > 3 && (
                  <div className="text-gray-500 font-medium text-sm">
                    +{order.cartItems.length - 3} more
                  </div>
                )}
              </div>

              {/* Price + Delivery */}
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center sm:justify-between lg:items-start xl:items-center gap-4 lg:gap-6">
                <p className="text-lg sm:text-xl font-bold text-gray-800">
                  Total: {order.totalOrderPrice} EGP
                </p>
                <div className="flex items-start gap-3 text-center sm:text-left">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400 mt-1 hidden sm:block" />
                  <div>
                    <p className="text-sm text-gray-500">Delivered to</p>
                    <p className="font-medium text-gray-900 text-sm">
                      {order.shippingAddress.city}, {order.shippingAddress.details}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2 w-full sm:w-auto sm:min-w-[150px]">
                {order.isPaid ? (
                  <>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg inline-flex items-center justify-center text-sm">
                      <FontAwesomeIcon icon={faTruck} className="mr-2" /> Track Order
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-1.5 rounded-lg text-sm">
                      Cancel Order
                    </button>
                  </>
                ) : (
                  <>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-1.5 rounded-lg inline-flex items-center justify-center text-sm">
                      <FontAwesomeIcon icon={faCreditCard} className="mr-2" /> Complete Payment
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-lg inline-flex items-center justify-center text-sm">
                      <FontAwesomeIcon icon={faRedo} className="mr-2" /> Reorder Items
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

};

export default Orders;


