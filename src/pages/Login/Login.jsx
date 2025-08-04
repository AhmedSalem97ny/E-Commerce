import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEnvelope,
  faLock,
  faCheckCircle,
  faUser,
  faStar,
  faTruckFast,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from "react-router";
import grocerycart from "../../assets/Images/How-deos-your-grocery-cart-look-like-pic.webp";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { API_CONFIG } from "../../config";
import { sendDataToLogin } from "../../services/auth-service";
import { Authcontext } from "../../context/Auth.context";
import PageMetaData from "../../components/PageMetaData/PageMetaData";

import { CartContext } from "../../context/Cart.context"; 


export default function Login() {

  const location = useLocation();
  const from = location?.state?.from || "/"

  const {setToken}= useContext(Authcontext)
const { refreshCart } = useContext(CartContext);

  const navigate = useNavigate();

  const [inCorrectCredentialsMsg, setinCorrectCredentialsMsg] = useState("");

  const [isShownPassword, setisShownPassword] = useState(false);

  function togglePasswordvisibility() {
    setisShownPassword(!isShownPassword);
  }

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  const validationSchema = yup.object({
    email: yup.string().required("email is required").email("Email is invalid"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        passwordRegex,
        "password should have a minimum of eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
  });

  async function handleLogin(values) {
  try {
    const response = await sendDataToLogin(values);
    if (response.success) {
      toast.success("Welcome back");

      setToken(response.data.token);

      if (values.rememberMe) {
        localStorage.setItem("token", response.data.token);
      } else {
        sessionStorage.setItem("token", response.data.token);
      }

      await refreshCart();


      setTimeout(() => {
        navigate(from); 
      }, 3000);
    }
  } catch (error) {
    setinCorrectCredentialsMsg(error.message);
  }
}


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema,
    onSubmit: handleLogin,
  });


function handleChange(e){
setinCorrectCredentialsMsg("")
  formik.handleChange(e);
}


  return (
    <>
    <PageMetaData title="Login - FreshCart" />
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Section (outside the white card) */}
        <section className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-8">
          <img
            src={grocerycart}
            alt="Shopping Cart"
            className="w-72 sm:w-80 lg:w-96 mx-auto"
          />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} className="text-green-600" />
            Fresh Groceries Delivered
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Join thousands of happy customers who trust FreshCart for their
            daily grocery needs.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm sm:text-base text-gray-600">
            <span>
              <FontAwesomeIcon
                icon={faTruckFast}
                className="mr-2 text-green-500"
              />
              Free Delivery
            </span>
            <span>
              <FontAwesomeIcon icon={faLock} className="mr-2 text-green-500" />
              Secure Payment
            </span>
            <span>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="mr-2 text-green-500"
              />
              24/7 Support
            </span>
          </div>
        </section>

        {/* Right Section - Login Form (inside white card with shadow) */}
        <section className="space-y-8 p-6 sm:p-10 rounded-2xl shadow-2xl bg-white border border-gray-100 w-full">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-600">
              Fresh<span className="text-gray-600">Cart</span>
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold">Welcome Back!</h3>
            <p className="text-gray-500 text-sm sm:text-base">
              Sign in to continue your fresh shopping experience
            </p>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 text-base sm:text-lg">
              <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
              <span>Continue with Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 text-base sm:text-lg">
              <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
              <span>Continue with Facebook</span>
            </button>
          </div>

          {/* Divider */}
          <div className="w-full h-0.5 relative bg-gray-300/40 my-6">
           
          </div>

          <form className="" onSubmit={formik.handleSubmit} action="">
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-base">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 text-base"
                  name="email"
                  value={formik.values.email}
                  onChange={handleChange}
                  onBlur={formik.handleBlur}
                />
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute right-4 top-4 text-gray-400"
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 mb-3">{formik.errors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-base mt-4">
                Password
              </label>
              <div className="relative">
                <input
                  type={isShownPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 text-base"
                  name="password"
                  value={formik.values.password}
                  onChange={handleChange}
                  onBlur={formik.handleBlur}
                />
                <button type="button" onClick={togglePasswordvisibility}>
                  {isShownPassword ? (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className="absolute right-4 top-4 text-gray-400"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEye}
                      className="absolute right-4 top-4 text-gray-400"
                    />
                  )}
                </button>
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 ">{formik.errors.password}</p>
              )}

              {inCorrectCredentialsMsg && (
                <p className="text-red-500 ">{inCorrectCredentialsMsg}</p>
              )}
              <div className="text-right mt-1">
                <Link to="/ForgotPassword" className="text-green-600 text-sm">
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="accent-green-600 w-4 h-4"
                value={formik.values.rememberMe}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Keep me signed in
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 text-lg flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faUser} />
              <span>Sign In</span>
            </button>
          </form>

          {/* Footer Links */}
          <p className="text-center text-sm mt-6">
            New to FreshCart?{" "}
            <Link to="/signup" className="text-green-600 font-semibold">
              Create an account
            </Link>
          </p>

          <div className="flex flex-wrap justify-center text-sm text-gray-400 gap-4 mt-4">
            <span>
              <FontAwesomeIcon icon={faLock} className="mr-1" />
              SSL Secured
            </span>
            <span>
              <FontAwesomeIcon icon={faUser} className="mr-1" />
              50K+ Users
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} className="mr-1" />
              4.9 Rating
            </span>
          </div>
        </section>
      </div>
    </main>
  </>);
}


