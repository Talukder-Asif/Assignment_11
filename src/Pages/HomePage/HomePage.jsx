import { useLoaderData } from "react-router-dom";
import Slider from "./Slider/Slider";
import PopularFood from "./PopularFood/PopularFood";
import FoodMenu from "./FoodMenu/FoodMenu";
import HeaderTytle from "/src/Components/HeaderTytle";

const HomePage = () => {
    const foodData = useLoaderData();
    return (
        <div>
            <HeaderTytle title='Home Page'></HeaderTytle>
            <Slider></Slider>
            <PopularFood pageName={'home'} foodData={foodData}></PopularFood>
            {/* Adviser */}
            <div style={{backgroundImage: "url(https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/offer_banner_1.jpg)"}} className="mt-16 bg-no-repeat bg-cover bg-center">
            <div className="max-w-7xl m-auto md:py-20 p-5 lg:py-36 md:grid grid-cols-2 ">
            <div className="space-y-2 md:space-y-5">
            <p className="italic text-xl font-semibold text-white">Today Special Offer</p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">DELICIOUS <br /> BURGER</h3>
            <p className="italic text-xl font-semibold text-[#eb0029]">THE BEST BURGER PIZZAN</p>
            </div>
                <div  className="relative hidden md:inline -ml-20 lg:-ml-40">
                <img src="https://themeholy.com/wordpress/pizzan/wp-content/plugins/pizzan-core/assets/img/discount_bg_9.svg"  />
                <p className="absolute top-[30px] left-[65px] text-center font-bold text-lg">UP TO <br />
                <span className="text-2xl text-[#eb0029]">20%</span><br />
                DISCOUNT</p>
                </div>
            </div>
            </div>
            <FoodMenu></FoodMenu>

        </div>
    );
};

export default HomePage;