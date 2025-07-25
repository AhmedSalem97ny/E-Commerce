import {
  faShieldHalved,
  faStar,
  faTruckFast,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import reviewAuthorImg from "../../assets/Images/review-author.png";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { API_CONFIG } from "../../config";
import { sendDataToSignup } from "../../services/auth-service";
import { checkPasswordStrength } from "../../utils/validation";
import PageMetaData from "../../components/PageMetaData/PageMetaData";

export default function Signup() {
  const navigate = useNavigate();

  const [IsExistError, setIsExistError] = useState(null);

  const phoneRegex = /^(\+2)?01[0125][0-9]{8}$/;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  const validationSchema = yup.object({
    name: yup.string().required("name is required"),
    email: yup.string().required("email is required").email("Email is invalid"),
    phone: yup
      .string()
      .required("phone Number is required")
      .matches(phoneRegex, "Please enter phone nnmber in Egyptian format"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        passwordRegex,
        "password should have a minimum of eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
    rePassword: yup
      .string()
      .required("confirming password is required")
      .oneOf([yup.ref("password")], "password should be the same"),
    terms: yup
      .boolean()
      .oneOf([true], "you must agree to terms and conditions"),
  });

  async function handleSignup(values) {
    try {
      const response = await sendDataToSignup(values);

      if (response.success) {
        toast.success("Your Account Has Been Created");
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      }
    } catch (error) {
      setIsExistError(error.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
    validationSchema,
    onSubmit: handleSignup,
  });

  const passwordFeedback = checkPasswordStrength(formik.values.password);

  return (
    <>
      <PageMetaData
        title="Signup - FreshCart"/>
      <main className="py-12">
        <div className="container grid lg:grid-cols-2 lg:gap-12 ">
          {/*Left Side*/}
          <div className="space-y-8 py-10">
            <div className="welcome">
              <h2 className="text-4xl font-bold">
                Welcome To <span className="text-primary-600">Freshcart</span>
              </h2>
              <p className="text-lg mt-2">
                Join thousands of happy customers who enjoy fresh groceries
                delivered <br /> right to their doorstep.
              </p>
            </div>

            <ul className="*:flex *:items-center *:gap-3 space-y-5">
              <li>
                <div className="icon size-12 rounded-full bg-primary-200 text-xl flex justify-center items-center text-primary-700">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="content">
                  <h3 className="font-semibold">premium Quality</h3>
                  <p className="text-gray-600">
                    Premium quality products sourced from trusted suppliers.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon size-12 rounded-full bg-primary-200 text-xl flex justify-center items-center text-primary-700">
                  <FontAwesomeIcon icon={faTruckFast} />
                </div>
                <div className="content">
                  <h3 className="font-semibold">Fast Delivery</h3>
                  <p className="text-gray-600">
                    Same-day delivery available in most areas
                  </p>
                </div>
              </li>
              <li>
                <div className="icon size-12 rounded-full bg-primary-200 text-xl flex justify-center items-center text-primary-700">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </div>
                <div className="content">
                  <h3 className="font-semibold">Secure Shopping</h3>
                  <p className="text-gray-600">
                    Your data and payments are completely secure
                  </p>
                </div>
              </li>
            </ul>

            <div className="review p-6 rounded-xl bg-white shadow-md">
              <div className="flex items-center gap-3">
                <img
                  src={reviewAuthorImg}
                  className="size-12 rounded-full"
                  alt="Sarah Johnson image"
                />
                <div>
                  <h3>Sarah Johnson</h3>
                  <div>
                    <FontAwesomeIcon
                      className="text-yellow-400"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-400"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-400"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-400"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-400"
                      icon={faStar}
                    />
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                <p className="mt-2">
                  "Freshcart has transformed my shopping experience. The quality
                  of the products is outstanding, and the delivery is always on
                  time. Highly recommended"
                </p>
              </blockquote>
            </div>
          </div>
          {/*Right Side*/}
          <div className="p-10 space-y-8 shadow-xl bg-white rounded=xl">
            <div className="text-center">
              <h2 className="text-3xl font-semibold">Create Your Account</h2>
              <p className="mt-1">Start your fresh journey with us today</p>
            </div>

            <div className="flex gap-2 *:flex *:gap-2 *:items-center *:justify-center *:w-full *:hover:bg-gray-200">
              <button className="btn bg-transparent border border-gray-400/40">
                <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
                <span>Google</span>
              </button>
              <button className="btn bg-transparent border border-gray-400/40">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-700" />
                <span>Facebook</span>
              </button>
            </div>
            <div className="w-full h-0.5 relative bg-gray-300/40">
              <span className="absolute left-1/2 top-1/2 -translate-1/2 px-4 bg-white">
                Or
              </span>
            </div>

            <form
              className="space-y-7"
              action=""
              onSubmit={formik.handleSubmit}
            >
              <div className="Name flex flex-col gap-1">
                <label htmlFor="name">Name*</label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  placeholder="Ali"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500">{formik.errors.name}</p>
                )}
              </div>

              <div className="email flex flex-col gap-1">
                <label htmlFor="email">Email*</label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  placeholder="ali@example.com"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500">{formik.errors.email}</p>
                )}
                {IsExistError && (
                  <p className="text-red-500">*{IsExistError}</p>
                )}
              </div>

              <div className="phone flex flex-col gap-1">
                <label htmlFor="phone">Phone*</label>
                <input
                  className="form-control"
                  type="tel"
                  id="phone"
                  placeholder="Phone +209 593 402"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500">{formik.errors.phone}</p>
                )}
              </div>

              <div className="password flex flex-col gap-1">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control mb-3"
                  type="password"
                  id="password"
                  placeholder="Create a strong Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                

                {formik.values.password && (
                  <div className="password-strength flex gap-2 items-center">
                    <div className="bar w-full rounded-xl overflow-hidden h-1 bg-gray-300">
                      <div
                        className={`progress ${passwordFeedback.width} ${passwordFeedback.background} h-full`}
                      ></div>
                    </div>
                    <div>
                      <span className="text-nowrap w-28 text-center">{passwordFeedback.text}</span>
                    </div>
                  </div>
                )}

                {formik.touched.password && formik.errors.password ? (
                  <p className="text-red-500 ">{formik.errors.password}</p>
                ) : (
                  <p className="text-sm -mt-2">
                    Must be at leat 8 characters with numbers and symbols
                  </p>
                )}
              </div>

              <div className="rePassword flex flex-col gap-1">
                <label htmlFor="rePassword">Confirm Password*</label>
                <input
                  className="form-control"
                  type="password"
                  id="rePassword"
                  placeholder="Confirm your Password"
                  name="rePassword"
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.rePassword && formik.errors.rePassword && (
                  <p className="text-red-500">{formik.errors.rePassword}</p>
                )}
              </div>

              <div className="terms">
                <div className=" flex gap-2 items-center mb-2">
                  <input
                    className="accent-primary-600 size-4  "
                    type="checkbox"
                    name="terms"
                    id="terms"
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor="terms">
                    i agree to the{" "}
                    <Link className="text-primary-600 underline" to={`/terms`}>
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      className="text-primary-600 underline"
                      to={`/privacy-policy`}
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {formik.touched.terms && formik.errors.terms && (
                  <p className="text-red-500">{formik.errors.terms}</p>
                )}
              </div>

              <button
                className="btn bg-primary-600 text-white flex gap-2 items-center hover:bg-primary-700 justify-center w-full"
                type="submit"
              >
                <FontAwesomeIcon icon={faUserPlus} />
                <span>Create My Account</span>
              </button>
            </form>

            <p className="text-center pt-8 border-t border-gray-300/40">
              Already have an account?{" "}
              <Link className="text-primary-600 underline" to={`/Login`}>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
