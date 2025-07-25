import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faCodeCompare,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import ProductCard from "../ProductCard/ProductCard";
import { getAllProducts } from "../../services/products-service";
import Loading from "../Loading/Loading";
import { calcTimeLeft } from "../../utils/counterdown";
import useProducts from "../../hooks/UseProducts";
import HomeDealsSkeleton from "../skeleton/HomeDealsSkeleton";

export default function HomeDeals() {

  const {products,error,isError,isLoading}=useProducts()
 
  const [timeleft, setTimeleft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


  useEffect(() => {
    const timer=setInterval(() => {
      const newTimeLeft = calcTimeLeft();
      setTimeleft(newTimeLeft)
    }, 1000);
    return function(){
      clearInterval(timer)
    }
  }, []);

  if (isLoading) {
    return <HomeDealsSkeleton/>;
  }

  const deals = products
    .filter((product) => product.priceAfterDiscount)
    .slice(0, 5);

  return (
    <>
      <section>
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-3">Deals of the days</h2>
              <div className="flex gap-2 items-center">
                <p>Offers end in:</p>
                <div className="counter flex gap-2 items-center">
                  <div className="size-7 text-sm text-white rounded-md flex justify-center items-center bg-gray-900  ">
                    {String(timeleft.hours).padStart(2, "0" )}
                  </div>
                  <span>:</span>
                  <div className="size-7 text-sm text-white rounded-md flex justify-center items-center bg-gray-900  ">
                     {String(timeleft.minutes).padStart(2, "0" )}
                  </div>
                  <span>:</span>
                  <div className="size-7 text-sm text-white rounded-md flex justify-center items-center bg-gray-900  ">
                     {String(timeleft.seconds).padStart(2, "0" )}
                  </div>
                </div>
              </div>
            </div>
            <Link
              to={`/deals`}
              className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
            >
              {" "}
              View All Deals
            </Link>
          </div>

          <div className="grid py-8  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
            {deals.map((product) => (
              <ProductCard key={product.id} productInfo={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
