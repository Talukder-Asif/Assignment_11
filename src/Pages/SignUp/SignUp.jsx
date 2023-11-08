import gicon from "/src/assets/google.png";
import { useContext, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authantication/AuthProvider/AuthProvider";
import HeaderTytle from "/src/Components/HeaderTytle";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, seterror] = useState(null);
  const { createUser, googleSignup, update } = useContext(AuthContext);
  const handelCreate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    seterror(null);
    // Check if the password is at least 6 characters long
    if (password.length < 6) {
      seterror(null);
      return seterror("Password must be at least 6 characters long.");
    }

    // Check if the password contains at least one capital letter
    if (!/[A-Z]/.test(password)) {
      return seterror("Password must contain at least one capital letter.");
    }

    // Check if the password contains at least one special character
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      return seterror("Password must contain at least one special character.");
    }
    return createUser(email, password)
      .then((result) => {
        const user = result.user;
      axios.post('https://testhalal-server.vercel.app/jwt', user, {withCredentials:true})
      .then(res=> console.log(res.data))
        update(name, photo);
        Swal.fire({
          icon: "success",
          title: "Sign up successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
          confirmButtonColor: "#f72c00",
        });
      });
  };
  const handelGoogle = () => {
    googleSignup()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        const user = result.user;
      axios.post('https://testhalal-server.vercel.app/jwt', user, {withCredentials:true})
      .then(res=> console.log(res.data))

        Swal.fire({
          icon: "success",
          title: "Sign up successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        Swal.fire({
          icon: "error",
          title: errorMessage,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };
  return (
    <div>
    <HeaderTytle title="Sing up"></HeaderTytle>
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
              Page &gt; Sign Up
            </p>
          </div>
        </div>
      </div>
      <div className=" max-w-2xl m-auto my-5 p-5">
        <h3 className="text-2xl md:text-3xl text-gray-900 mb-5 lg:text-4xl font-bold">
          Create a account
        </h3>
        <div>
          <form onSubmit={handelCreate}>
            <div className="grid grid-cols-2 gap-5">
              <div className="">
                <input
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="">
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your Email Address"
                  required
                />
              </div>
              <div className="">
                <input
                  type="text"
                  name="photo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your photo URL"
                  required
                />
              </div>
              <div className="">
                <input
                  type="password"
                  name="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            {
                error? <p className="text-red-600 py-2">{error}</p>:""
              }
            <button
              type="submit"
              className=" border-2 border-[#eb0029] text-white bg-[#eb0029] hover:bg-white hover:text-[#eb0029] font-medium rounded-lg text-base px-5 mt-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 w-full dark:focus:ring-red-900"
            >
              Sign up
            </button>
          </form>
        </div>
        <div className="mt-5 flex flex-wrap md:flex-nowrap justify-between">
          <div className="flex gap-2 justify-end">
            <p className="text-lg font-semibold" href="#">
              Sign up with -{" "}
            </p>
            <img onSubmit={handelGoogle} className="w-6" src={gicon} alt="" />
          </div>
          <div className="">
            <a
              className="border-b-2 text-lg font-semibold border-transparent hover:border-[#eb0029]"
              href="/signin"
            >
              Have any account ?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
