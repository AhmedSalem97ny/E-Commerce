import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSearch,
  faPhone,
  faEnvelope,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router';
import NotFoundImage from '../../assets/Images/undraw_feeling-blue_8si6.svg'
export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      {/* Image */}
      <img
        src={NotFoundImage}
        alt="Page Not Found"
        className="max-w-sm w-full mb-6"
      />

      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Oops! Page Not Found
      </h1>

      {/* Subheading */}
      <p className="text-gray-600 mb-6 max-w-md">
        The page you're looking for seems to have gone shopping!
        <br />
        Don’t worry, our fresh products are still available for you.
      </p>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <NavLink
          to="/"
          className="bg-green-600 text-white px-6 py-2 rounded flex items-center justify-center gap-2 hover:bg-green-700 transition"
        >
          <FontAwesomeIcon icon={faHome} />
          Back to Home
        </NavLink>
        <NavLink
          to="/products"
          className="border border-green-600 text-green-600 px-6 py-2 rounded flex items-center justify-center gap-2 hover:bg-green-50 transition"
        >
          <FontAwesomeIcon icon={faSearch} />
          Search Products
        </NavLink>
      </div>

      {/* Contact Info */}
      <div className="bg-green-100/40  p-6 rounded-lg w-full max-w-xl text-center">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">Need Help?</h2>
        <p className="text-gray-600 mb-3">
          Our customer support team is here to assist you 24/7
        </p>
        <ul className="text-sm flex items-center justify-between text-gray-700 space-y-2">
          <li>
            <FontAwesomeIcon icon={faPhone} className="text-green-600 mr-2" />
            +1 (800) 123-4567
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className="text-green-600 mr-2" />
            support@freshcart.com
          </li>
          <li>
            <FontAwesomeIcon icon={faComments} className="text-green-600 mr-2" />
            Live Chat
          </li>
        </ul>
      </div>
    </div>
  );
}
