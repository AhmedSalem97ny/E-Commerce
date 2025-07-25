import { RouterProvider, createBrowserRouter } from "react-router";
import Layout from "./components/Layout/Layout";
import { children } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Categories from "./pages/Categories/Categories";
import Checkout from "./pages/Checkout/Checkout";
import ForgetPassword from "./pages/ForgotPassword/ForgotPassword";
import Notfound from "./pages/NotFound/Notfound";
import Orders from "./pages/Orders/Orders";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import SearchProducts from "./pages/SearchProducts/SearchProducts";
import Signup from "./pages/Signup/Signup";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import Wishlist from "./pages/Wishlist/Wishlist";
import Brands from "./pages/Brands/Brands";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Authprovider from "./context/Auth.context";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CartProvider from "./context/Cart.context";
import OfflineScreen from "./components/OfflineScreen/OfflineScreen";
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { WishlistProvider } from "./context/Wishlist.context";
import { useWishlist } from "./context/Wishlist.context";
import CategoryProductsPage from "./pages/CategoryProductsPage/CategoryProductsPage";
import BrandDetails from "./pages/BrandDetails/BrandDetails";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import VerifyResetCode from "./pages/VerifyResetCode/VerifyResetCode";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import FeaturedProductsPage from "./pages/FeaturedProductsPage/FeaturedProductsPage";
import Offers from "./pages/Offers/Offers";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ScrollToTop />
          <Layout />
        </>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
  path: "/category/:id",
  element: <CategoryProductsPage />
},
        {
          path: "Login",
          element: <Login />,
        },
        {
          path: "Brands",
          element: <Brands />,
        },
        {
          path: "Offers",
          element: <Offers />,
        },
        {
          path: "FeaturedproductsPage",
          element: <FeaturedProductsPage />,
        },
        {
          path: "/brands/:id",
          element: <BrandDetails />
        },
        {
          path: "Cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "Categories",
          element: <Categories />,
        },
        {
          path: "Checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },
       
        {
          path: "*",
          element: <Notfound />,
        },
        {
          path: "Orders",
          element: (
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          ),
        },
        {
          path: "product/:id",
          element: <ProductDetails />,
        },
        {
          path: "SearchProducts",
          element: <SearchProducts />,
        },
        {
          path: "Signup",
          element: <Signup />,
        },
        {
          path: "Verify-Email",
          element: <VerifyEmail />,
        },
        {
          path: "wishlist",
          element: (
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          ),
        },
        {
          path: "ForgotPassword",
          element: <ForgotPassword />,
        },
        {
          path: "/verify-reset-code",
          element: <VerifyResetCode />,
        },
        {
          path: "/reset-password",
          element: <ResetPassword />,
        },
      ],
    },
  ]);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
        staleTime: 2 * 60 * 1000, // 2 minutes
        gcTime: 5 * 60 * 1000,
        refetchInterval: 1000, // 5 minutes
        refetchIntervalInBackground: true,
        retry: 5,
        retryDelay: 1000, // 1 second
      },
      mutations: {
        retry: 1,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <OfflineScreen>
          <Authprovider>
            <CartProvider>
              <WishlistProvider> {/* Wrap your app with WishlistProvider */}
                <RouterProvider router={router} />
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  closeButton={false}
                  closeOnClick={true}
                />
              </WishlistProvider>
            </CartProvider>
          </Authprovider>
        </OfflineScreen>
      </QueryClientProvider>
    </>
  );
}

export default App;
