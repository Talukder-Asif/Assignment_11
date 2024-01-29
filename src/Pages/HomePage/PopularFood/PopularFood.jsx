import { Link } from "react-router-dom";
import "./pf.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularFood = ({ foodData, pageName }) => {
  return (
    <div className="mt-16">
      {
        pageName === 'home'?
        <div className="text-center space-y-3">
        <p className="italic text-xl font-semibold text-[#eb0029]">Best Food Menu</p>
        <h3 className="text-4xl font-bold">Our Popular Food Items</h3>
      </div>:
      null
      }
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl m-auto px-5">
        {foodData?.map((food) => (
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" key={food._id} className="mt-5 mb-5 relative abc bg-[#faf7f2] border border-gray-200 group hover:border-[#eb0029] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className=" my-8 m-auto max-w-[80%] rounded-full border-4 border-transparent group-hover:border-[#eb0029]"
                src={food.image}
                alt="product image"
              />
            <div className="px-5 pb-7 ">
                <h5 className="text-xl font-semibold text-center tracking-tight text-gray-900 dark:text-white">
                  {food.name}
                </h5>

                <div className="flex justify-between">
                <p className="text-center">Category : <span>{food.category}</span></p>
                <p className="text-center">Available : <span className="text-[#eb0029]">{food.quantity}</span></p>
                </div>
                
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  {food.price}$
                </span>
                <Link to={`/foods/${food._id}`} ><button className=" border-2 border-[#eb0029] text-white bg-[#eb0029] hover:bg-white hover:text-[#eb0029] font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Details</button></Link>
              </div>
              <img className=" w-10/12 border-none def hidden absolute bottom-0 " src="https://themeholy.com/wordpress/pizzan/wp-content/themes/pizzan/assets/img/fire.png" alt="" />
            </div>
          </div>
        ))}

      </div>
      {
        pageName === 'home'? <div className="text-center">
      <Link to={'/foodItems'} ><button className=" border-2 border-[#eb0029] text-white bg-[#eb0029] hover:bg-white hover:text-[#eb0029] font-medium rounded-lg text-sm px-10 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">See All Food</button></Link>
      </div>:
      null
      }
    </div>
  );
};

AOS.init();
export default PopularFood;
