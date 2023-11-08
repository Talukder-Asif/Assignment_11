import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import HeaderTytle from "/src/Components/HeaderTytle";

const OneBlog = () => {
  const params = useParams();
  const id = params.id;
  const blogs = useLoaderData();
  const blog = blogs.find((b) => b.id === id);
  return (
    <div>
    <HeaderTytle title={blog.title}></HeaderTytle>
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

      <div className="max-w-7xl m-auto  my-5">
        <h2 className="text-gray-900 font-bold text-xl md:text-2xl lg:text-3xl py-5 border-b-2 border-[#eb0029]">
          {blog.title}
        </h2>
        <img className="w-full my-5" src={blog.image} alt="" />
        <p>{blog.short_description}</p>
      </div>
    </div>
  );
};

export default OneBlog;
