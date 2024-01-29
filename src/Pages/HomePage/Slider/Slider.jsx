// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "./slider.css";
const Slider = () => {
  return (
    <div
      style={{ backgroundImage: "url(https://i.ibb.co/rkqPmmy/Slider.jpg)" }}
      className="bg-cover bg-no-repeat py-10 bg-right-bottom "
    >
      <div className="max-w-7xl m-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" bg-transparent top-0 left-0 w-full relative">
            <div className="max-w-7xl p-5 md:p-10 m-auto md:flex items-center gap-5 ">
              <div className="md:w-7/12 lg:w-6/12 space-y-5">
                <p className="text-[#eb0029] text-xl italic">
                  Welcome to TestHalal
                </p>
                <h2 className="text-3xl z-0 md:text-5xl text-white font-bold">
                  ENJOY YOUR FAVORITE FOOD WITH FAMILY
                </h2>
                <p className="text-white ">
                  Experimentation in the kitchen and focus on excellence are
                  among our main driving forces in cooking.
                </p>

                <Link to={"/foodItems"}>
                  <button className="mt-5 border-2 border-[#eb0029] text-white bg-[#eb0029] hover:bg-white hover:text-[#eb0029] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Food Items
                  </button>
                </Link>
              </div>

              <div className="md:w-5/12 lg:w-6/12">
                {/* Main Img */}
                <img
                  src="https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/about_1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-transparent top-0 left-0 w-full relative">
            <div className="max-w-7xl p-5 md:p-10 m-auto md:flex items-center gap-5 ">
              <div className="md:w-7/12 lg:w-6/12 space-y-5">
                <p className="text-[#eb0029] text-xl italic">
                  Welcome to TestHalal
                </p>
                <h2 className="text-3xl md:text-5xl text-white font-bold">
                  GET BEST QUALITY FOOD FROM US{" "}
                </h2>
                <p className="text-white ">
                  Experimentation in the kitchen and focus on excellence are
                  among our main driving forces in cooking.
                </p>

                <Link to={"/foodItems"}>
                  <button className="mt-5 border-2 border-[#eb0029] text-white bg-[#eb0029] hover:bg-white hover:text-[#eb0029] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Food Items
                  </button>
                </Link>
              </div>

              <div className="md:w-5/12 lg:w-6/12">
                {/* Main Img */}
                <img src="https://i.ibb.co/1mjBppQ/Image-4.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-transparent top-0 left-0 w-full relative">
            <div className="max-w-7xl p-5 md:p-10 m-auto md:flex items-center gap-5 ">
              <div className="md:w-7/12 lg:w-6/12 space-y-5">
                <p className="text-[#eb0029] text-xl italic">
                  Welcome to TestHalal
                </p>
                <h2 className="text-3xl md:text-5xl text-white font-bold">
                  GET BEST QUALITY FOOD FROM US
                </h2>
                <p className="text-white ">
                  Experimentation in the kitchen and focus on excellence are
                  among our main driving forces in cooking.
                </p>

                <Link to={"/foodItems"}>
                  <button className="mt-5 border-2 border-[#eb0029] text-white bg-[#eb0029] hover:bg-white hover:text-[#eb0029] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    Food Items
                  </button>
                </Link>
              </div>

              <div className="md:w-5/12 lg:w-6/12">
                {/* Main Img */}
                <img src="https://i.ibb.co/vhs7pzn/Image-6-1.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </div>
  );
};

export default Slider;
