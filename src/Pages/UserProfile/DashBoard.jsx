import { useContext } from "react";
import { AuthContext } from "../../Authantication/AuthProvider/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
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
              Profile of {user.displayName}
            </h3>
            <p className="italic text-xl font-semibold text-white">
              TestHalal, Best Halal
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl m-auto lg:flex flex-nowrap flex-col md:flex-row my-3 lg:my-10">
        <div className="lg:w-1/4 lg:pl-3 max-h-[500px] gap-3 flex justify-evenly flex-wrap flex-row lg:flex-col ">
          <NavLink
            className="p-2 md:p-5 xyz text-[#eb0029] rounded my-2 text-center font-semibold text-sm md:text-base lg:text-xl lg:w-3/4 border-2 hover:border-[#eb0029] border-[#010f1c] bg-[#010f1c]"
            to={"/dashboard"}
          >
            Profile
          </NavLink>
          <NavLink
            className="p-2 md:p-5 xyz text-[#eb0029] rounded my-2 text-center font-semibold text-sm md:text-base lg:text-xl lg:w-3/4 border-2 hover:border-[#eb0029] border-[#010f1c] bg-[#010f1c]"
            to={"/dashboard/addfood"}
          >
            Add Products
          </NavLink>
          <NavLink className="p-2 md:p-5 xyz text-[#eb0029] rounded my-2 text-center font-semibold text-sm md:text-base lg:text-xl lg:w-3/4 border-2 hover:border-[#eb0029] border-[#010f1c] bg-[#010f1c]">
            My Products
          </NavLink>
          <NavLink className="p-2 md:p-5 xyz text-[#eb0029] rounded my-2 text-center font-semibold text-sm md:text-base lg:text-xl lg:w-3/4 border-2 hover:border-[#eb0029] border-[#010f1c] bg-[#010f1c]">
            My Order
          </NavLink>
        </div>

        <div className="lg:w-3/4 px-3 lg:border-4 lg:border-black">
          <div className="lg:py-3 lg:pl-3">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
