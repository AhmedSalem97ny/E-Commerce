import {
  faArrowRight,
  faChevronLeft,
  faCircleInfo,
  faCreditCard,
  faLock,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik, yupToFormErrors } from "formik";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import * as yup from "yup";
import { CartContext } from "../../context/Cart.context";
import Loading from "../../components/Loading/Loading";
import { CreateOrder } from "../../services/payment-service";
import { toast } from "react-toastify";

export default function Checkout() {
  const { cartInfo, isLoading, setCartInfo } = useContext(CartContext);
  const navigate = useNavigate();

  async function handleCreatingOrder(values) {
    try {
      const response = await CreateOrder({
        cartId,
        shippingAddress: values.shippingAddress,
        paymentMethod: values.paymentMethod,
      });

      if (response.success) {
        if (response.data.session) {
          toast.loading("Redirecting to payment gateway");
          setTimeout(() => {
            location.href = response.data.session.url;
          }, 3000);
        }


        toast.success("Order created successfully");
        setCartInfo({
          numberOfCartItems: 0,
          data: {
            products: [], 
            totalCartPrice: 0,
        }})
        setTimeout(() => {
          navigate("/orders");
        }, 3000);



      }
    } catch (error) {
      console.log(error);
    }
  }

  const validationSchema = yup.object({
    paymentMethod: yup.string().required("Payment method is required"),
    shippingAddress: yup.object({
      details: yup.string().required("Address details are required"),
      phone: yup
        .string()
        .required("Phone number is required")
        .matches(/^(\+2)?01[0125][0-9]{8}$/, "Invalid phone number"),
      city: yup.string().required("City is required"),
    }),
  });

  const formik = useFormik({
    initialValues: {
      paymentMethod: "online",
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
    },
    validationSchema,
    onSubmit: handleCreatingOrder,
  });

  function handlePaymentChange(e) {
    formik.setFieldValue("paymentMethod", e.target.value);
  }

  if (isLoading) return <Loading />;

  const { cartId, numberOfCartItems, data } = cartInfo;
  const { totalCartPrice, products } = data;

  return (
    <>
      <section>
        <div className="container max-w-6xl py-6 px-4 sm:px-6">
          <form className="" onSubmit={formik.handleSubmit} action="">
            <div>
              <h1 className="text-2xl font-bold mb-6">Checkout</h1>
              <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8">
                <div className="payment-method lg:col-span-8 md:col-span-6 col-span-1">
                  <div className="payment-options bg-white shadow-sm p-6 rounded-lg mb-6">
                    <h2 className="text-xl font-bold">Payment method</h2>
                    <div>
                      <label
                        className={`flex gap-4 hover:border-primary-600 transition-colors duration-300 items-center border border-gray-400 p-4 rounded-lg ${formik.values.paymentMethod === "cod" ? "bg-primary-200 border-primary-500" : ""}`}
                        htmlFor="cod"
                      >
                        <input
                          type="radio"
                          name="payment"
                          value="cod"
                          id="cod"
                          className="size-4"
                          onChange={(e) => handlePaymentChange(e)}
                          checked={formik.values.paymentMethod === "cod"}
                        />
                        <div className="w-full">
                          <div className="flex flex-wrap justify-between items-center w-full min-w-0">
                            <div className="flex items-center gap-4">
                              <FontAwesomeIcon
                                icon={faMoneyBill1Wave}
                                className="text-2xl text-primary-600"
                              />
                              <div>
                                <h3 className="font-semibold">
                                  Cash on Delivery
                                </h3>
                                <p className="text-gray-600 sm:text-sm">
                                  Pay when your order arrives
                                </p>
                              </div>
                            </div>
                            <span className="text-primary-700">
                              No extra charge
                            </span>
                          </div>
                          {formik.values.paymentMethod === "cod" && (
                            <div className="ml-5 mt-3 flex items-center border text-primary-600 border-primary-600/50 rounded-md">
                              <FontAwesomeIcon
                                icon={faCircleInfo}
                                className="p-2"
                              />
                              <p>
                                Please keep exact change ready for haste-free
                                delivery
                              </p>
                            </div>
                          )}
                        </div>
                      </label>

                      <label
                        className="flex gap-4 mt-2 hover:border-primary-600 transition-colors duration-300 items-center border border-gray-400 p-4 rounded-lg"
                        htmlFor="online"
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={`online`}
                          id="online"
                          className="size-4"
                          onChange={(e) => handlePaymentChange(e)}
                          checked={formik.values.paymentMethod === "online"}
                        />
                        <div className="w-full">
                          <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-4">
                              <FontAwesomeIcon
                                icon={faCreditCard}
                                className="text-2xl text-primary-600"
                              />
                              <div>
                                <h3 className="font-semibold">
                                  Online Payment
                                </h3>
                                <p className="text-gray-600 sm:text-sm">
                                  Pay securely with credit card or digital
                                  wallet
                                </p>
                              </div>
                            </div>
                            <span className="text-primary-700">
                              Recommended
                            </span>
                          </div>
                          {formik.values.paymentMethod === "online" && (
                            <div className="ml-5 mt-3 py-3 flex items-center border text-blue-600 border-blue-600/50 rounded-md">
                              <FontAwesomeIcon
                                icon={faCircleInfo}
                                className="p-2"
                              />
                              <p>
                                You will be redirected to a secure payment
                                gateway to complete your transaction
                              </p>
                            </div>
                          )}
                        </div>
                      </label>
                    </div>
                  </div>

                 <div className="shipping-adress space-y-3 bg-white shadow-sm p-6 rounded-lg">
  <h2 className="text-xl font-semibold">Shipping Address</h2>

  {/* Address Details */}
  <div className="address flex flex-col gap-2">
    <label htmlFor="addressDetails">Address details</label>
    <textarea
      id="addressDetails"
      placeholder="Enter your full address details"
      className="form-control min-h-20 max-h-160"
      name="shippingAddress.details"
      value={formik.values.shippingAddress.details}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    ></textarea>
    {formik.touched.shippingAddress?.details &&
      formik.errors.shippingAddress?.details && (
        <div className="text-red-600 text-sm">
          {formik.errors.shippingAddress.details}
        </div>
      )}
  </div>

  <div className="flex flex-col md:flex-row gap-3">
    {/* Phone */}
    <div className="phone mb-3 flex flex-col gap-2 flex-1">
      <label htmlFor="phone">Phone Number</label>
      <input
        className="form-control"
        type="tel"
        placeholder="+2001097973568"
        name="shippingAddress.phone"
        value={formik.values.shippingAddress.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.shippingAddress?.phone &&
        formik.errors.shippingAddress?.phone && (
          <div className="text-red-600 text-sm">
            {formik.errors.shippingAddress.phone}
          </div>
        )}
    </div>

    {/* City */}
    <div className="city flex flex-col gap-2 flex-1">
      <label htmlFor="city">City</label>
      <input
        className="form-control"
        type="text"
        placeholder="Cairo"
        id="city"
        name="shippingAddress.city"
        value={formik.values.shippingAddress.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.shippingAddress?.city &&
        formik.errors.shippingAddress?.city && (
          <div className="text-red-600 text-sm">
            {formik.errors.shippingAddress.city}
          </div>
        )}
    </div>
  </div>
</div>

                </div>

                <div className="order-summary lg:col-span-4 md:col-span-6 col-span-1 bg-white shadow-sm rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                  <div className="cart-tems p-2 max-h-48 overflow-auto border-b space-y-5 border-gray-500/20 mb-4">
                    {products.map((product) => (
                      <div
                        key={product._id}
                        className="item flex gap-2 items-center"
                      >
                        <img
                          src={product.product.imageCover}
                          alt="item"
                          className="size-12 object-cover rounded-lg bg-gray-200"
                        />
                        <div>
                          <h3>{product.product.title}</h3>
                          <span className="text-xs text-gray">
                            Qty: {product.count}
                          </span>
                        </div>
                        <span className="ms-auto text-sm">
                          {product.price} EGP
                        </span>
                      </div>
                    ))}
                  </div>

                  <ul className="*:flex *:justify-between *:items-center py-3 space-y-3">
                    <li>
                      <span>Subtotal</span>
                      <span>{totalCartPrice} EGP</span>
                    </li>
                    <li>
                      <span>Delivery</span>
                      <span>70 EGP</span>
                    </li>
                    <li>
                      <span>Tax</span>
                      <span>{Math.trunc(totalCartPrice * 0.14)} EGP</span>
                    </li>
                    <li className="font-semibold border-t border-gray-500/20 mt-6 pt-3">
                      <span>Total</span>
                      <span>
                        {Math.trunc(
                          totalCartPrice +
                            70 +
                            Math.trunc(totalCartPrice * 0.14)
                        )}{" "}
                        EGP
                      </span>
                    </li>
                  </ul>

                  <div className="buttons space-y-3 mt-6">
                    <button
                      type="submit"
                      className="bg-primary-600 text-white flex gap-2 btn items-center w-full text-center"
                    >
                      <span className="mx-auto text-center">
                        Proceed to payment
                      </span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>

                    <Link
                      to={`/Cart`}
                      className="text-primary-600 flex items-center gap-2 w-full justify-center"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                      <span>Previous step</span>
                    </Link>
                  </div>

                  <div className="mt-6 border border-gray-200 rounded-md p-4 text-sm">
                    <h3 className="font-semibold mb-2">Secure Checkout</h3>
                    <p className="flex items-center gap-2 text-gray-700">
                      <FontAwesomeIcon icon={faLock} />
                      Your payment information is secure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
