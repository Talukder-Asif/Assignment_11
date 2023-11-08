import { Link, useLoaderData } from "react-router-dom";
import HeaderTytle from "/src/Components/HeaderTytle";
const Blog = () => {
  const news = useLoaderData();
  return (
    <div>
    <HeaderTytle title="Blog Page"></HeaderTytle>
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
              Home &gt; Blog
            </p>
          </div>
        </div>
      </div>


      <div className="max-w-7xl m-auto my-3 py-3 md:grid gap-10 justify-around grid-cols-2 lg:grid-cols-3">
        {
            news.map( data =>
                <div className="border-2 shadow-xl shadow-slate-900 border-black p-3 rounded-md"  key={data.id}>
                    <img className="w-full h-44" src={data.thumbnail} alt="" />
                    <h4 className="text-2xl font-bold text-gray-900 my-3">{data.title}</h4>
                    <Link to={`/blog/${data.id}`}><button className="text-base p-3 bg-[#eb0029] rounded-full font-semibold text-white">View More</button></Link>
                    
                </div>
            )
        }
      </div>
    </div>
  );
};

export default Blog;
