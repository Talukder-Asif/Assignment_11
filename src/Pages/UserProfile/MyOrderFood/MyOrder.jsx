import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Authantication/AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const { user } = useContext(AuthContext);

  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/order/${user.email}`)
      .then((res) => setOrderData(res.data));
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
        axios.delete(`http://localhost:5000/order/${id}`).then((res) => {
          if (res?.data?.acknowledged) {
            Swal.fire({
              title: "Deleted!",
              confirmButtonColor: "#eb0029",
              text: "Your file has been deleted.",
              icon: "success",
            });
            setOrderData(orderData.filter(data=> data._id !== id));
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
    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5">
      {orderData.map((data) => (
        <div
          key={data._id}
          className="mt-5 mb-5 relative abc bg-[#faf7f2] border border-gray-200 hover:border-[#eb0029] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <img
            className="p-8 rounded-full"
            src={data.foodImage}
            alt="product image"
          />
          <div className="px-5 pb-7 ">
            <h5 className="text-xl font-semibold text-center tracking-tight text-gray-900 dark:text-white">
              {data.food}
            </h5>

            <div className="flex justify-between">
              <p className="text-center">
                Quantity : <span>{data.orderQuantity}</span>
              </p>
              <p className="text-center">
                Category : <span>{data.foodCategory}</span>
              </p>
            </div>

            <p className="text-center mt-2">
              Order On :<span className="text-[#eb0029]">{data.orderDate}</span>
            </p>
            <div className="flex items-center justify-between">
              <Link to={`/foods/${data.food_id}`}>
                <button className=" border-2 border-[#eb0029] text-white bg-[#eb0029] hover:bg-white hover:text-[#eb0029] font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  Details
                </button>
              </Link>

              <button
                onClick={() => handelDelete(data._id)}
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

export default MyOrder;
