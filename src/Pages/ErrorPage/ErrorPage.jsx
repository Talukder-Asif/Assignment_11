import { Link, useRouteError } from 'react-router-dom';
import image from "/src/assets/error.png"
const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
        <div className="max-w-7xl m-auto text-center items-center content-center md:grid grid-cols-2 min-h-screen bg-yellow-400">
            <img className=' ' src={image} alt="" />
            <div>
            <h2 className="text-9xl font-bold text-black">{error.status}</h2>
            <h3 className="text-4xl font-bold text-black">{error.statusText}</h3>
            <Link className="text-2xl underline font-bold text-black" to={"/"}><button className="text-white hover:text-white border border-[#eb0029] bg-[#eb0029] hover:bg-black font-medium rounded-lg text-sm md:px-5 px-3  py-1 md:py-1.5 text-center mr-2 md:mr-3 ">Go Home</button></Link>
            </div>

        </div>            
        </div>
    );
};

export default ErrorPage;