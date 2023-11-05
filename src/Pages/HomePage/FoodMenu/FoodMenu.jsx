import axios from "axios";
import { useEffect, useState } from "react";

const FoodMenu = () => {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/availablefoods")
      .then((response) => {
        setData(response.data);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoader(false);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <div className="text-center mt-16 space-y-3">
        <p className="italic text-xl font-semibold text-[#eb0029]">
          Best Food Menu
        </p>
        <h3 className="text-4xl font-bold">Our Available Food Items</h3>
      </div>
      <div className="max-w-7xl p-5 m-auto mt-5">
        {loader ? (
          <p>Loading</p>
        ) : (
          <div className="md:grid grid-cols-2 gap-x-5 justify-evenly">
            {data?.map((d) => (
              <a
                href="#"
                className="flex flex-col items-center bg-white border-none border-gray-200 p-3 pl-5 shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover rounded-full w-full h-96 md:h-auto md:w-32 "
                  src={d.image}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {d.name}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Shaif Name : {d.shelfName}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodMenu;
