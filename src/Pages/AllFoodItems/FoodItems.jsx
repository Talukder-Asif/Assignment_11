import { Link, useLoaderData } from "react-router-dom";
import PopularFood from "../HomePage/PopularFood/PopularFood";
import { useEffect, useState } from "react";
import axios from "axios";
import "./foodes.css"

const FoodItems = () => {
  const [foods, setFoods] = useState([])
    const[searching, setsearching] = useState(false);

    const[searchingItem, setsearchingItem] = useState(true);
  const[totalItems, setTotalItems] = useState(0);
  useEffect(()=>{
      axios.get('http://localhost:5000/totalItems')
      .then(res => setTotalItems(res.data.count));
    },[])
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const numberOfPages = Math.ceil(totalItems / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        fetch(`http://localhost:5000/foods?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [currentPage, itemsPerPage]);

    const handlePagination = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);
    }




  const handleSearch = (e) =>{
    e.preventDefault();
    // const filterFood = foodData.filter(item => item.name.toLowerCase().includes(e.target.search.value.toLowerCase()))
    // setFoods(filterFood);
        setsearching('true')
    axios.get('http://localhost:5000/foods/search', {
        params: {
          query: e.target.search.value.toLowerCase(),
        }
      })
      .then((response) => {
        setFoods(response?.data)
        if(response?.data.length==0){
            setsearchingItem(false)
        }
        else{
            setsearchingItem(true)
        }
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
      {
        searchingItem? <PopularFood foodData={foods}></PopularFood> :
        <div className="text-center">
        <h1 className="text-5xl text-center mb-4 font-extrabold dark:text-white">No food Found</h1>
        <Link to={'/'} ><button className=" border-2 border-[#eb0029] text-white bg-[#eb0029] hover:bg-white hover:text-[#eb0029] font-medium rounded-lg text-sm px-10 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Add a Food</button></Link>
        </div>
      }

      {
        !searching? <div className='pagination '>
                {
                    pages.map(page => <button
                        className={currentPage === page ? 'selected' : 'notselect'}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >{page+1}</button>)
                }
                
            </div>:null
      }
    </div>
  );
};

export default FoodItems;
