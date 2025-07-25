import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faStarHalfAlt,
  faPlus,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { getAllProducts } from "../../services/products-service";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const YouMayAlsoLike = ({ productDetails }) => {
  const { category } = productDetails;
  const [relatedProducts, setRelatedProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  async function fetchRelatedProducts() {
    try {
      setIsLoading(true);
      const response = await getAllProducts({ category: category._id });
      if (response.success) {
        setIsLoading(false);
        setRelatedProducts(response.data.data);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }

  useEffect(() => {
    fetchRelatedProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-white py-8 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            You May Also Like
          </h2>
          <div className="flex space-x-2">
            <button className="previous-btn p-2 rounded-full border border-gray-300 hover:bg-gray-50">
              <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600" />
            </button>
            <button className="next-btn p-2 rounded-full border border-gray-300 hover:bg-gray-50">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-gray-600"
              />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            navigation={{ nextEl: ".next-btn", prevEl: ".previous-btn" }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {relatedProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard productInfo={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
