import { Link, useLoaderData } from "react-router-dom";
import PopularFood from "../HomePage/PopularFood/PopularFood";
import { useEffect, useState } from "react";
import axios from "axios";
import "./foodes.css";
import HeaderTytle from "/src/Components/HeaderTytle";

const FoodItems = () => {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const [searching, setsearching] = useState(false);

  const [searchingItem, setsearchingItem] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    axios.get("https://testhalal-server.vercel.app/totalItems").then((res) => {
      setTotalItems(res.data.count);
      setLoading(false);
    });
  }, []);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    fetch(
      `https://testhalal-server.vercel.app/foods?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [currentPage, itemsPerPage]);

  const handlePagination = (e) => {
    const val = parseInt(e.target.value);
    console.log(val);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // const filterFood = foodData.filter(item => item.name.toLowerCase().includes(e.target.search.value.toLowerCase()))
    // setFoods(filterFood);
    setsearching("true");
    axios
      .get("https://testhalal-server.vercel.app/foods/search", {
        params: {
          query: e.target.search.value.toLowerCase(),
        },
      })
      .then((response) => {
        setFoods(response?.data);
        if (response?.data.length == 0) {
          setsearchingItem(false);
        } else {
          setsearchingItem(true);
        }
      })
      .catch((error) => {
        console.error("Error searching for items:", error);
      });
  };
  if (loading) {
    return (
      <div className="h-screen w-screen grid content-center justify-center">
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
  return (
    <div>
      <HeaderTytle title="Food Items"></HeaderTytle>
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
              Welcome
            </h3>
            <p className="italic text-xl font-semibold text-white">
              Home &gt; Food Item
            </p>
          </div>
        </div>
      </div>
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
              required
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
      {searchingItem ? (
        <PopularFood foodData={foods}></PopularFood>
      ) : (
        <div className="text-center">
          <h1 className="text-5xl text-center mb-4 font-extrabold dark:text-white">
            No food Found
          </h1>
          <Link to={"/dashboard/addfood"}>
            <button className=" border-2 border-[#eb0029] text-white bg-[#eb0029] hover:bg-white hover:text-[#eb0029] font-medium rounded-lg text-sm px-10 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              Add a Food
            </button>
          </Link>
        </div>
      )}

      {!searching ? (
        <div className="pagination ">
          {pages.map((page) => (
            <button
              className={currentPage === page ? "selected" : "notselect"}
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page + 1}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FoodItems;
