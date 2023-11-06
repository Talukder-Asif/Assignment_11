import gicon from '/src/assets/google.png'
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
              Welcome
            </h3>
            <p className="italic text-xl font-semibold text-white">
              Page &gt; Sign in
            </p>
          </div>
        </div>
      </div>
      <div className="items-center max-w-2xl m-auto my-5 p-5">
        <div>
        <form>
          <div className="mb-6">
            <input
              type="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your Email Address"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className=" border-2 border-[#eb0029] text-white bg-[#eb0029] hover:bg-white hover:text-[#eb0029] font-medium rounded-lg text-base px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 w-full dark:focus:ring-red-900"
          >
            Submit
          </button>
        </form>
        </div>
        <div className="mt-5 flex flex-wrap md:flex-nowrap justify-between">
            <div className=''>
                <a className="border-b-2 text-lg font-semibold border-transparent hover:border-[#eb0029]" href="#">Create a account ?</a>
            </div>
            <div className='flex gap-2 justify-end'>
            <p className="text-lg font-semibold" href="#">Or Sign in with - </p>
            <img className='w-6' src={gicon} alt="" />

            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
