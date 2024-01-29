import axios from "axios";
import { useEffect, useState } from "react";
import "./foodmanu.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const FoodMenu = () => {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://testhalal-server.vercel.app/availablefoods")
      .then((response) => {
        setData(response.data);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoader(false);
      });
  }, []);
  return (
    <div>
      <div className="text-center mt-16 space-y-3">
        <p className="italic text-xl font-semibold text-[#eb0029]">
          Best Food Menu
        </p>
        <h3 className="text-2xl md:text-4xl font-bold">Our Available Food Items</h3>
      </div>
      <div className="max-w-7xl p-5 m-auto mt-5">
        {loader ? (
          <p>Loading</p>
        ) : (
          <div className="md:grid grid-cols-2 gap-x-5 justify-evenly">
            {data?.map((d, i) => (
              <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
              key={i}
                className={i==7 || i==6 ? 
                "flex abc items-center bg-[#faf7f2]  p-2 md:p-3 md:pl-5 shadow md:flex-row md:max-w-xl border-2  border-[#eb002777] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700":
                
                 "flex abc items-center bg-[#faf7f2] p-2 md:p-3 md:pl-5 shadow md:flex-row md:max-w-xl border-2 border-b-0 border-[#eb002777] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"}
              >
                <img
                  className="object-cover defg border-2 border-transparent p-2 rounded-full w-20 h-auto md:w-32 "
                  src={d.image}
                  alt=""
                />
                <div className="lg:grid grid-cols-3 w-full items-baseline gap-10">

                <div className="col-span-2 flex flex-col justify-between p-2 md:p-4 leading-normal">
                  <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {d.name}
                  </h5>
                  <p className="mb-2 md:mb-3 font-normal text-gray-800 dark:text-gray-400">
                  Shaif : <span className="text-[#eb0029]">{d.shelfName}</span>
                  </p>
                </div>
                  <div className="text-center md:text-right">
                  <button className="px-2 py-1  bg-[#eb0029] text-[#faf7f2] font-semibold rounded">${d.price}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
AOS.init();
export default FoodMenu;
