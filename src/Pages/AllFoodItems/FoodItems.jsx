import { useLoaderData } from "react-router-dom";
import PopularFood from "../HomePage/PopularFood/PopularFood";
import { useState } from "react";
import axios from "axios";

const FoodItems = () => {
  const foodData = useLoaderData();


  
  const [foods, setFoods] = useState(foodData);
  const handleSearch = (e) =>{
    e.preventDefault();
    // const filterFood = foodData.filter(item => item.name.toLowerCase().includes(e.target.search.value.toLowerCase()))
    // setFoods(filterFood);

    axios.get('http://localhost:5000/foods/search', {
        params: {
          query: e.target.search.value.toLowerCase(),
        }
      })
      .then((response) => {
        setFoods(response.data)
      })
      .catch((error) => {
        console.error('Error searching for items:', error);
      });
      
  }


  return (
    <div>
      <div className="w-3/4 max-w-4xl m-auto my-10">
        <form onSubmit={handleSearch}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              name="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-[#eb002732] rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search a item..."
              
            />
            <button
              type="submit"
              className="absolute right-2.5 bottom-2 focus:ring-4 focus:outline-none focus:ring-[#eb00275f] font-medium rounded-lg text-sm px-4 py-2 border-2 border-[#eb0029] text-white bg-[#eb0029] hover:bg-white hover:text-[#eb0029]  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <PopularFood foodData={foods}></PopularFood>
    </div>
  );
};

export default FoodItems;
