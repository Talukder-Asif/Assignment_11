import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Authantication/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const FoodOrder = () => {
  const { user } = useContext(AuthContext);
  const foodData = useLoaderData();
  const {
    name, _id, image, category, price, origine, quantity, shelfName, shortDescription, details, addBy,
  } = foodData;
const [formattedDate, setformattedDate] = useState(null);
useEffect(()=>{
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    setformattedDate(currentDate.toLocaleDateString(undefined, options));
},[])
// Send Oeder data to the database
const handelOrder = (e) => {
    e.preventDefault();
    const orderData ={
        food: name,
        food_id : _id,
        foodImage : image,
        foodCategory : category,
        orderQuantity: e.target.quantity.value,
        shafeName : shelfName,
        orderBy : user.displayName,
        orderdemail : user.email,
        orderDate : formattedDate
    }
    if(quantity < e.target.quantity.value){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            confirmButtonColor: "#eb0029",
            text: `We have ${quantity} items available now.`,
          });
    }else{
        Swal.fire({
            icon: "success",
            title: addBy,
            text: `We have ${quantity} items available now.`,
          });
    }
  };


if(addBy === user.email){
    return (
        <div>
      <div
        style={{
          backgroundImage:
            "url(https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/breadcumb_bg_2-1.jpg)",
        }}
        className=" bg-no-repeat bg-cover bg-center"
      >
        <div className="max-w-7xl m-auto md:py-20 p-5 md:pl-36 lg:py-24 ">
          <div className="space-y-2 md:space-y-5">
            <h3 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold">
              {name}
            </h3>
            <p className="italic text-xl font-semibold text-white">
              Food Items &gt; Order &gt; {name}
            </p>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl m-auto px-5 my-10">

      <div className="">
        <div className="border-2 px-5 py-2 mb-3 border-[#656160] md:grid grid-cols-5 justify-between items-center space-y-3">
          <img className="w-40 md:w-28 rounded-full" src={image} alt="" />
          <h4 className="text-center text-xl font-semibold">
            Food Name <br />{" "}
            <span className=" text-lg border-b-2 md:border-b-0  md:border-t-2 border-[#eb0029]">
              {name}
            </span>
          </h4>

          <h4 className="text-center text-xl font-semibold">
            Price <br />{" "}
            <span className=" text-lg border-b-2 md:border-b-0  md:border-t-2 border-[#eb0029]">
              ${price} Only
            </span>
          </h4>

          <form
            onSubmit={handelOrder}
            className="col-span-2 grid grid-cols-2 gap-10"
          >
            <div className="text-center text-xl font-semibold">
              <label className="block">Set quantity</label>
              <input
                name="quantity"
                className="border-2 w-10 border-gray-900"
                defaultValue={"1"}
                max={50}
                min={1}
                type="number"
              />
            </div>

            <button
              type="submit"
              className="py-1 px-4  bg-[#f72c00] text-white text-xl font-semibold"
            >
              Order
            </button>
          </form>
        </div>
      </div>

      <div className="absolute h-full w-full bg-[#ffffff5c] pt-[3%] top-0">
      <h3 className="text-3xl md:text-4xl text-center text-[#eb0029] lg:text-5xl font-bold">
              You can't buy your own food
            </h3>
      </div>

      </div>
    </div>
    )
        }

if (quantity === 0){
    return (
        <div>
      <div
        style={{
          backgroundImage:
            "url(https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/breadcumb_bg_2-1.jpg)",
        }}
        className=" bg-no-repeat bg-cover bg-center"
      >
        <div className="max-w-7xl m-auto md:py-20 p-5 md:pl-36 lg:py-24 ">
          <div className="space-y-2 md:space-y-5">
            <h3 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold">
              {name}
            </h3>
            <p className="italic text-xl font-semibold text-white">
              Food Items &gt; Order &gt; {name}
            </p>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl m-auto px-5 my-10">

      <div className="">
        <div className="border-2 px-5 py-2 mb-3 border-[#656160] md:grid grid-cols-5 justify-between items-center space-y-3">
          <img className="w-40 md:w-28 rounded-full" src={image} alt="" />
          <h4 className="text-center text-xl font-semibold">
            Food Name <br />{" "}
            <span className=" text-lg border-b-2 md:border-b-0  md:border-t-2 border-[#eb0029]">
              {name}
            </span>
          </h4>

          <h4 className="text-center text-xl font-semibold">
            Price <br />{" "}
            <span className=" text-lg border-b-2 md:border-b-0  md:border-t-2 border-[#eb0029]">
              ${price} Only
            </span>
          </h4>

          <form
            onSubmit={handelOrder}
            className="col-span-2 grid grid-cols-2 gap-10"
          >
            <div className="text-center text-xl font-semibold">
              <label className="block">Set quantity</label>
              <input
                name="quantity"
                className="border-2 w-10 border-gray-900"
                defaultValue={"1"}
                max={50}
                min={1}
                type="number"
              />
            </div>

            <button
              type="submit"
              className="py-1 px-4  bg-[#f72c00] text-white text-xl font-semibold"
            >
              Order
            </button>
          </form>
        </div>
      </div>

      <div className="absolute h-full w-full bg-[#ffffff5c] pt-[3%] top-0">
      <h3 className="text-3xl md:text-4xl text-center text-[#eb0029] lg:text-5xl font-bold">
              {name} is not Available
            </h3>
      </div>

      </div>
    </div>
    )
}
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/breadcumb_bg_2-1.jpg)",
        }}
        className=" bg-no-repeat bg-cover bg-center"
      >
        <div className="max-w-7xl m-auto md:py-20 p-5 md:pl-36 lg:py-24 ">
          <div className="space-y-2 md:space-y-5">
            <h3 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold">
              {name}
            </h3>
            <p className="italic text-xl font-semibold text-white">
              Food Items &gt; Order &gt; {name}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl m-auto px-5 my-10">
        <div className="border-2 px-5 py-2 mb-3 border-[#656160] md:grid grid-cols-5 justify-between items-center space-y-3">
          <img className="w-40 md:w-28 rounded-full" src={image} alt="" />
          <h4 className="text-center text-xl font-semibold">
            Food Name <br />{" "}
            <span className=" text-lg border-b-2 md:border-b-0  md:border-t-2 border-[#eb0029]">
              {name}
            </span>
          </h4>

          <h4 className="text-center text-xl font-semibold">
            Price <br />{" "}
            <span className=" text-lg border-b-2 md:border-b-0  md:border-t-2 border-[#eb0029]">
              ${price} Only
            </span>
          </h4>

          <form
            onSubmit={handelOrder}
            className="col-span-2 md:grid grid-cols-2 gap-10"
          >
            <div className="text-center text-xl font-semibold">
              <label className="block">Set quantity</label>
              <input
                name="quantity"
                className="border-2 w-10 border-gray-900"
                defaultValue={"1"}
                max={50}
                min={1}
                type="number"
              />
            </div>

            <div className="text-center mt-3">
            <button
              type="submit"
              className="py-1 px-4 bg-[#f72c00] text-white text-xl font-semibold"
            >
              Order
            </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-7xl space-y-3 m-auto px-5">
        <h3 className="text-3xl max-w-md m-auto md:text-4xl text-gray-900 lg:text-5xl font-bold text-center border-b-4 border-[#eb0029]">Buyer Information</h3>
        <h5 className="text-xl font-medium">Name : {user.displayName}</h5>
        <h5 className="text-xl font-medium">Email : {user.email}</h5>
        <h5 className="text-xl font-medium"> Date : {formattedDate}
        </h5>
      </div>
    </div>
  );
};

export default FoodOrder;
