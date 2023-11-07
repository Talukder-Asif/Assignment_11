import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Authantication/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navigation } from "swiper/modules";
import Swal from "sweetalert2";

const MyFootItems = () => {
  const { user } = useContext(AuthContext);

  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/dashboard/foods/${user.email}`)
      .then((res) => setFoodData(res.data));
  }, []);

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#eb0029",
      cancelButtonColor: "#010f1c",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/food/${id}`).then((res) => {
          if (res?.data?.acknowledged) {
            Swal.fire({
              title: "Deleted!",
              confirmButtonColor: "#eb0029",
              text: "Your file has been deleted.",
              icon: "success",
            });
            setFoodData(foodData.filter(data=> data._id !== id));
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          }
        });
      }
    });
  };

  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-3">
      {foodData.map((food) => (
        <div
          key={food._id}
          className="mt-5 mb-5 relative abc bg-[#faf7f2] border border-gray-200 hover:border-[#eb0029] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <img
            className="p-8 rounded-full"
            src={food.image}
            alt="product image"
          />
          <div className="px-5 pb-7 ">
            <h5 className="text-xl font-semibold text-center tracking-tight text-gray-900 dark:text-white">
              {food.name}
            </h5>

            <div className="flex justify-between">
              <p className="text-center">
                Price : <span>{food.price}$</span>
              </p>
              <p className="text-center">
                Available :
                <span className="text-[#eb0029]">{food.quantity}</span>
              </p>
            </div>

            <div className="flex items-center justify-between">
              <Link to={`/foods/${food._id}`}>
                <button className=" border-2 border-[#eb0029] text-white bg-[#eb0029] hover:bg-white hover:text-[#eb0029] font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  Details
                </button>
              </Link>
              <Link to={`/dashboard/update/${food._id}`}>
                <button className=" border-2 border-[#eb0029] hover:text-white hover:bg-[#eb0029] bg-[#df0e0e3d] text-[#eb0029] font-medium rounded-lg text-sm px-5 py-2.5 hover:dark:bg-red-600 dark:bg-red-700 dark:focus:ring-red-900">
                  Update
                </button>
              </Link>

              <button
                onClick={() => handelDelete(food._id)}
                className=" border-2 border-[#010f1c] text-white bg-[#010f1c] hover:bg-white hover:text-[#010f1c] font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                X
              </button>
            </div>
            <img
              className=" w-10/12 border-none def hidden absolute bottom-0 "
              src="https://themeholy.com/wordpress/pizzan/wp-content/themes/pizzan/assets/img/fire.png"
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyFootItems;
