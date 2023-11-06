/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import image1 from '/src/assets/testHalal.png';
import logo from '/src/assets/Logo.png'
import "./navbar.css"

const navStyle = "block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-gray-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
let dropdownClick = false;
const navs = <>
    <li>
        <NavLink to="/" className={navStyle} aria-current="page">Home</NavLink>
      </li>
      <li>
        <NavLink to="/foodItems" className={navStyle}>Food Items</NavLink>
      </li>
      <li>
        <NavLink to="/blog" className={navStyle}>Blog</NavLink>
      </li>
</>
const NavBar = () => {
    const handelDropdown = () =>{
        dropdownClick = !dropdownClick;
        const elememts = document.getElementById('mobileManu')
        if(dropdownClick){
            elememts.classList.remove("hidden");
            elememts.classList.add("absolute");
            elememts.classList.add("top-12");
            elememts.classList.add("right-10");
            elememts.classList.add("z-50");
        }else{
            elememts.classList.add("hidden");
            elememts.classList.remove("absolute");
            elememts.classList.remove("top-12");
            elememts.classList.remove("right-10");
            elememts.classList.remove("z-50");
        }
    }


    return (
<div>
    
<nav className="bg-[#010f1c] border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex items-center justify-between mx-auto px-2 md:px-4 py-2">
  <Link to="/" className="flex items-center">
      <img src={logo} className="h-10 md:h-14 md:mr-3" alt="Flowbite Logo" />
  </Link>

  <div className="flex items-center md:order-2">

        <Link to="/signin">
        <button className="text-white hover:text-white border border-[#eb0029] hover:bg-[#eb0029] font-medium rounded-lg text-sm md:px-5 px-3  py-1 md:py-1.5 text-center mr-2 md:mr-3 ">Login</button>
        </Link>

{/* Dashboard Button */}
      <Link to={'/userName'}>
      <button className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
        <img className="md:w-8 w-6 md:h-8 h-6 rounded-full" src={image1}/>
      </button>
      </Link>


      <button onClick={handelDropdown} type="button" className="inline-flex items-center p-2 md:w-10 md:h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none ring-2 ring-gray-400 " >
        <svg className="md:w-5 w-4 md:h-5 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>

  <div className="items-center justify-between w-1/2 hidden md:flex md:w-auto md:order-1" id="mobileManu">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg bg-[#010f1c] md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#010f1c] ">
     {
        navs
     }
    </ul>
  </div>
  </div>
</nav>

</div>
    );
};

export default NavBar;