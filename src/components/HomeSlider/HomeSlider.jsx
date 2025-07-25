import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import homeSliderImg from "../../assets/Images/home-slider-1.png";

export default function HomeSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        modules={[Pagination, Navigation]}
        pagination={{clickable:true}}
        navigation
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${homeSliderImg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overlay text-white py-24 bg-gradient-to-r from-primary-600/95 to-primary-600/40">
              <div className="container space-y-3 pl-20">
                <h2 className="text-2xl font-bold">
                  Fresh products delivered <br /> to your door
                </h2>
                <p>Get 20% off for your first order</p>
                <div className="space-x-3">
                  <button className="btn hover:bg-gray-200 text-primary-600 bg-white border-2 border-white">
                    Shop Now
                  </button>
                  <button className="btn border-2 hover:bg-white hover:text-primary-600 border-white bg-transparent text-white ">
                    View Deals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${homeSliderImg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overlay text-white py-24 bg-gradient-to-r from-primary-600/95 to-primary-600/40">
              <div className="container space-y-3 pl-20">
                <h2 className="text-2xl font-bold">
                  Fresh products delivered <br /> to your door
                </h2>
                <p>Get 20% off for your first order</p>
                <div className="space-x-3">
                  <button className="btn hover:bg-gray-200 text-primary-600 bg-white border-2 border-white">
                    Shop Now
                  </button>
                  <button className="btn border-2 hover:bg-white hover:text-primary-600 border-white bg-transparent text-white ">
                    View Deals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${homeSliderImg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overlay text-white py-24 bg-gradient-to-r from-primary-600/95 to-primary-600/40">
              <div className="container space-y-3 pl-20">
                <h2 className="text-2xl font-bold">
                  Fresh products delivered <br /> to your door
                </h2>
                <p>Get 20% off for your first order</p>
                <div className="space-x-3">
                  <button className="btn hover:bg-gray-200 text-primary-600 bg-white border-2 border-white">
                    Shop Now
                  </button>
                  <button className="btn border-2 hover:bg-white hover:text-primary-600 border-white bg-transparent text-white ">
                    View Deals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
