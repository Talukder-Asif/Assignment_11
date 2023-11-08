import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Authantication/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navigation } from "swiper/modules";
import Swal from "sweetalert2";
import HeaderTytle from "/src/Components/HeaderTytle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyFootItems = () => {
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    // axios.get(`https://testhalal-server.vercel.app/dashboard/foods/${user.email}`,{withCredentials: true} )
    axiosSecure.get(`/dashboard/foods/${user.email}`).then((res) => {
      setLoading(false);
      setFoodData(res.data);
    });
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
        // axios.delete(`https://testhalal-server.vercel.app/food/${id}`,{withCredentials: true} )
        axiosSecure.delete(`/food/${id}`).then((res) => {
          if (res?.data?.acknowledged) {
            Swal.fire({
              title: "Deleted!",
              confirmButtonColor: "#eb0029",
              text: "Your file has been deleted.",
              icon: "success",
            });
            setFoodData(foodData.filter((data) => data._id !== id));
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
  if (loading) {
    return (
      <div className="min-h-[400px] grid content-center justify-center">
        <div className="text-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-32 h-32 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#eb0029]"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-7xl font-bold">Loading....</h1>
      </div>
    );
  }

  if (foodData.length === 0) {
    return <h1 className="text-4xl md:text-7xl font-bold">No Food Added</h1>;
  }
  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-3">
      <HeaderTytle title="My Food"></HeaderTytle>
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
