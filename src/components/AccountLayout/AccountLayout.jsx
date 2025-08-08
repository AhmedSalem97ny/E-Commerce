import { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  faUser,
  faHeart,
  faStar,
  faMapPin,
  faCreditCard,
  faRightFromBracket,
  faGauge,
  faBox,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Authcontext } from "../../context/Auth.context";

export default function AccountLayout() {

const {userInfo}= useContext(Authcontext);



return (
  <section className="min-h-screen bg-gray-50 p-4">
    <div className="container mx-auto flex flex-col md:flex-row gap-6">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white p-4 rounded-lg shadow">
        {/* User Info */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center mb-2">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <h2 className="font-semibold">{userInfo.name || "User"}</h2>
          <p className="text-sm text-gray-500">{userInfo.email}</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {/* Orders - always visible */}
          <NavLink
            to="orders"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
                isActive
                  ? "bg-green-100 text-green-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <FontAwesomeIcon icon={faBox} className="w-4 h-4" />
            Orders
          </NavLink>

          {/* Wishlist - always visible */}
          <NavLink
            to="wishlist"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
                isActive
                  ? "bg-green-100 text-green-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <FontAwesomeIcon icon={faHeart} className="w-4 h-4" />
            Wishlist
          </NavLink>

          {/* Extra links - hidden on small/medium, visible on large */}
          <div className="hidden lg:flex flex-col gap-2">
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-green-100 text-green-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <FontAwesomeIcon icon={faGauge} className="w-4 h-4" />
              Dashboard
            </NavLink>

            <NavLink
              to="favorites"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-green-100 text-green-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
              Favorites
            </NavLink>

            <NavLink
              to="addresses"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-green-100 text-green-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <FontAwesomeIcon icon={faMapPin} className="w-4 h-4" />
              Addresses
            </NavLink>

            <NavLink
              to="payments"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-green-100 text-green-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <FontAwesomeIcon icon={faCreditCard} className="w-4 h-4" />
              Payment Methods
            </NavLink>

            <NavLink
              to="details"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-green-100 text-green-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
              Account Details
            </NavLink>

            <NavLink
              to="logout"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-green-100 text-green-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="w-4 h-4"
              />
              Logout
            </NavLink>
          </div>
        </nav>
      </aside>

      {/* Content Area */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow">
        <Outlet />
      </div>
    </div>
  </section>
);

}

