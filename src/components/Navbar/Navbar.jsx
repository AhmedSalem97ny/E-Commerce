 import {
  faAddressCard,
  faEnvelope,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBabyCarriage,
  faBars,
  faBolt,
  faCartShopping,
  faChevronDown,
  faEllipsis,
  faMagnifyingGlass,
  faPerson,
  faPersonDress,
  faPhone,
  faRightFromBracket,
  faSpinner,
  faSuitcaseMedical,
  faUserPlus,
  faWifi,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router";
import freshCartLogo from "../../assets/Images/freshcart-logo.svg";
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../context/Auth.context";
import { CartContext } from "../../context/Cart.context";
import { useonlineStatus } from "../../hooks/useOnlineStatus";
import useCategories from "../../hooks/useCategories";
export default function Navbar() {

const {isOnline} = useonlineStatus();
const { categories, isLoading: categoriesLoading } = useCategories();


  const { logOut, token } = useContext(Authcontext);
  const { cartInfo, isLoading } = useContext(CartContext);
  

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header>
        <div className="container">
          {/* Top Navbar */}
          <div className="hidden lg:flex text-sm  py-2 justify-between items-center border-b border-gray-300/30">
            <ul className="flex gap-5 items-center *:flex *:gap-2 *:items-center">
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+1 (800) 123-4567">+1 (800) 123-4567</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:support@freshcart.com">support@freshcart.com</a>
              </li>

              {isOnline && (
                <li className="flex gap-2 text-primary-600 items-center">
                  <FontAwesomeIcon icon={faWifi} />
                  <span>Online</span>
                </li>
              )}
            </ul>

            <ul className="flex gap-5 items-center">
              <li>
                <Link to={`track-order`}>Track Order</Link>
              </li>
              <li>
                <Link to={`about`}>About </Link>
              </li>
              <li>
                <Link to={`contact`}>Contact</Link>
              </li>

              <li>
                <select name="" id="">
                  <option value="">EGP</option>
                  <option value="">SAR</option>
                  <option value="">AED</option>
                </select>
              </li>

              <li>
                <select name="" id="">
                  <option value="ar">العربية</option>
                  <option value="en">English</option>
                </select>
              </li>
            </ul>
          </div>
          {/* Main Navigation */}
          <nav className="flex justify-between items-center py-5">
            <h1>
              <Link to={`/`}>
                <img src={freshCartLogo} alt="Fresh Cart Logo" />
              </Link>
            </h1>

            <search className="relative hidden lg:block">
              <input
                placeholder="Search For Products"
                className="form-control min-w-96"
                type="text"
              />
              <FontAwesomeIcon
                className="absolute right-2 top-1/2 -translate-1/2"
                icon={faMagnifyingGlass}
              />
            </search>

            <ul className="hidden lg:flex gap-8 items-center">
              <li>
                <NavLink
                  to={`wishlist`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-primary-600 bg-primary-100" : ""
                    } flex flex-col gap-2 hover:text-primary-600 transition-colors duration-200`;
                  }}
                >
                  <FontAwesomeIcon className="text-xl" icon={faHeart} />
                  <span className="text-sm">Wishlist</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`cart`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-primary-600" : ""
                    } flex flex-col gap-2 hover:text-primary-600 transition-colors duration-200`;
                  }}
                >
                  <div className="relative">
                    <FontAwesomeIcon
                      className="text-xl"
                      icon={faCartShopping}
                    />
                    <span className="absolute size-5 flex justify-center items-center rounded-full bg-primary-600 text-white text-sm right-0 top-0 -translate-y-1/2">
                      {isLoading ? (
                        <FontAwesomeIcon icon={faSpinner} spin />
                      ) : (
                        cartInfo?.numOfCartItems ?? 0
                      )}
                    </span>
                  </div>
                  <span className="text-sm">Cart</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`account`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-primary-600" : ""
                    } flex flex-col gap-2 hover:text-primary-600 transition-colors duration-200`;
                  }}
                >
                  <FontAwesomeIcon className="text-xl" icon={faUser} />
                  <span className="text-sm">Account</span>
                </NavLink>
              </li>

              {!token ? (
                <>
                  <li>
                    <NavLink
                      to={`signup`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600" : ""
                        } flex flex-col gap-2 hover:text-primary-600 transition-colors duration-200`;
                      }}
                    >
                      <FontAwesomeIcon className="text-xl" icon={faUserPlus} />
                      <span className="text-sm">Sign Up</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`login`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600" : ""
                        } flex flex-col gap-2 hover:text-primary-600 transition-colors duration-200`;
                      }}
                    >
                      <FontAwesomeIcon
                        className="text-xl"
                        icon={faAddressCard}
                      />
                      <span className="text-sm">Login</span>
                    </NavLink>
                  </li>
                </>
              ) : (
                <li
                  onClick={logOut}
                  className="cursor-pointer  flex flex-col gap-2 hover:text-primary-600 transition-colors duration-200"
                >
                  <FontAwesomeIcon
                    className="text-xl"
                    icon={faRightFromBracket}
                  />
                  <span className="text-sm">Logout</span>
                </li>
              )}
            </ul>

            <button
              className="lg:hidden btn bg-primary-600 text-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </nav>
        </div>

        {/* Category Navigation */}

        <nav className="hidden lg:block bg-gray-100 py-4">
          <div className="container flex gap-8 items-center">
            <div className="relative group">
              <button className="btn flex items-center gap-3 bg-primary-600 text-white hover:bg-primary-700">
                <FontAwesomeIcon icon={faBars} />
                <span>All Categories</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>

              <menu className="hidden z-40 group-hover:block absolute top-10 min-w-60 bg-white shadow  divide-y-2 divide-gray-300/20 rounded-lg *:py-3 *:hover:bg-gray-100 *:px-3">
                <li>
                  <Link  to={`/categories`} className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      className="text-primary-600 text-xl  "
                      fixedWidth
                      icon={faPerson}
                    />
                    <span>Men's fashion</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/categories`} className="flex gap-2 items-center">
                    {" "}
                    <FontAwesomeIcon
                      className="text-primary-600 text-xl "
                      fixedWidth
                      icon={faPersonDress}
                    />
                    <span>Women's fashion</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/categories`} className="flex gap-2 items-center">
                    {" "}
                    <FontAwesomeIcon
                      className="text-primary-600 text-xl "
                      fixedWidth
                      icon={faBabyCarriage}
                    />
                    <span>Baby & Toys</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/categories`} className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      className="text-primary-600 text-xl "
                      fixedWidth
                      icon={faSuitcaseMedical}
                    />
                    <span>Beauty & Health</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/categories`} className="flex gap-2 items-center">
                    {" "}
                    <FontAwesomeIcon
                      className="text-primary-600 text-xl "
                      fixedWidth
                      icon={faBolt}
                    />
                    <span>Electronics</span>
                  </Link>
                </li>
                <li>
                  <Link to={`/Categories`} className="flex gap-2 items-center">
                    {" "}
                    <FontAwesomeIcon
                      className="text-primary-600 text-xl "
                      fixedWidth
                      icon={faEllipsis}
                    />
                    <span>View All Categories</span>
                  </Link>
                </li>
              </menu>
            </div>

            <ul className="flex gap-5">
              <li>
                <NavLink to={`/`}>Home</NavLink>
              </li>
             
              <li>
                <NavLink to={`/FeaturedProductsPage`}>Featured Products</NavLink>
              </li>
              <li>
                <NavLink to={`/offers`}>Offers</NavLink>
              </li>
              <li>
                <NavLink to={`/brands`}>Brands</NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* OffCanvas */}
        {isMenuOpen && (
          <>
            <div
              className="cursor-pointer background fixed z-30 inset-0 bg-black/50"
              onClick={toggleMenu}
            ></div>
            <div className=" offcanvas overflow-y-auto space-y-5 fixed z-40 bg-white top-0 bottom-0 p-5 animate-slide-in">
              <div className="flex justify-between items-center  border-b border-gray-300/50 pt-5 pb-4">
                <img src={freshCartLogo} alt="Fresh Cart Logo" />
                <button onClick={toggleMenu} className="btn rounded-full">
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <search className="relative">
                <input
                  placeholder="Search For Products"
                  className="form-control min-w-64"
                  type="text"
                />
                <FontAwesomeIcon
                  className="absolute right-2 top-1/2 -translate-1/2"
                  icon={faMagnifyingGlass}
                />
              </search>

              <div>
                <h2 className="text-xl font-bold">Main Menu</h2>

                <ul className=" *:hover:bg-gray-200 transition-colors duration-300 space-y-2 mt-3">
                  <li>
                    <NavLink
                      to={`wishlist`}
                      onClick={toggleMenu}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600 bg-primary-100" : ""
                        } flex  gap-2 transition-colors duration-200 px-2 py-3`;
                      }}
                    >
                      <FontAwesomeIcon className="text-xl" icon={faHeart} />
                      <span className="text-sm">Wishlist</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`cart`}
                      onClick={toggleMenu}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600 bg-primary-100" : ""
                        } flex  gap-2 transition-colors duration-200 px-2 py-3`;
                      }}
                    >
                      <div className="relative">
                        <FontAwesomeIcon
                          className="text-xl"
                          icon={faCartShopping}
                        />
                        <span className="absolute size-5 flex justify-center items-center rounded-full bg-primary-600 text-white text-sm left-3 top-0 -translate-y-1/2">
                            {isLoading ? (
                        <FontAwesomeIcon icon={faSpinner} spin />
                      ) : (
                        cartInfo?.numOfCartItems ?? 0
                      )}
                        </span>
                      </div>
                      <span className="text-sm">Cart</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`account`}
                      onClick={toggleMenu}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600 bg-primary-100" : ""
                        } flex  gap-2 transition-colors duration-200 px-2 py-3`;
                      }}
                    >
                      <FontAwesomeIcon className="text-xl" icon={faUser} />
                      <span className="text-sm">Account</span>
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-300/50 pt-5">
                <h2 className="text-xl font-bold">Account</h2>
                <ul className=" *:hover:bg-gray-200 transition-colors duration-300 space-y-2 mt-3">
                  {!token ? (
                    <>
                      <li>
                        <NavLink
                          to={`signup`}
                          onClick={toggleMenu}
                          className={({ isActive }) => {
                            return `${
                              isActive ? "text-primary-600 bg-primary-100" : ""
                            } flex  gap-2 transition-colors duration-200 px-2 py-3`;
                          }}
                        >
                          <FontAwesomeIcon
                            className="text-xl"
                            icon={faUserPlus}
                          />
                          <span className="text-sm">Sign Up</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={`login`}
                          onClick={toggleMenu}
                          className={({ isActive }) => {
                            return `${
                              isActive ? "text-primary-600 bg-primary-100" : ""
                            } flex  gap-2 transition-colors duration-200 px-2 py-3`;
                          }}
                        >
                          <FontAwesomeIcon
                            className="text-xl"
                            icon={faAddressCard}
                          />
                          <span className="text-sm">Login</span>
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <li
                      onClick={logOut}
                      
                      className="cursor-pointer  flex  gap-2 transition-colors duration-200 px-2 py-3"
                    >
                      <FontAwesomeIcon
                        className="text-xl"
                        icon={faRightFromBracket}
                      />
                      <span className="text-sm">Logout</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}

