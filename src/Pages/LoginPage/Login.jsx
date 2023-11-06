const Login = () => {
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
              Home &gt; Food Items &gt; {category} &gt; {name}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl m-auto my-5">

      </div>
    </div>
  );
};

export default Login;
