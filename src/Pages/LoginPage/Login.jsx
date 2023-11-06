import { useContext } from 'react';
import gicon from '/src/assets/google.png'
import { AuthContext } from '../../Authantication/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const {login, googleSignup} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const HandelLogin = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      Swal.fire({
        icon: 'success',
        title: 'Log in successfully',
        showConfirmButton: false,
        timer: 1500
      })
      navigate(location?.state ? location.state : '/')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Swal.fire({
        icon: 'error',
        title: errorMessage,
        showConfirmButton: false,
        timer: 3000
      })
    });
  }


  const handelGoogle = () =>{
    googleSignup()
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      Swal.fire({
        icon: 'success',
        title: 'Log in successfully',
        showConfirmButton: false,
        timer: 1500
      })
      navigate(location?.state ? location.state : '/')
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }
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
      <div className=" max-w-2xl m-auto my-5 p-5">
      <h3 className="text-2xl md:text-3xl text-gray-900 mb-5 lg:text-4xl font-bold">
              Log in
            </h3>
        <div>
        <form onSubmit={HandelLogin}>
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
            Sign in
          </button>
        </form>
        </div>
        <div className="mt-5 flex flex-wrap md:flex-nowrap justify-between">
        <div className='flex gap-2 justify-end'>
            <p className="text-lg font-semibold" href="#">Sign in with - </p>
            <img onClick={handelGoogle} className='w-6' src={gicon} alt="" />
            </div>
            <div className=''>
                <a className="border-b-2 text-lg font-semibold border-transparent hover:border-[#eb0029]" href="/signup">Or create a account ?</a>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Login;
