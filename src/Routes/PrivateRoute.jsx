import { useContext } from "react";
import { AuthContext } from "../Authantication/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return<div className="h-screen w-screen grid content-center justify-center">
           <h1 className="text-7xl font-bold">
            Loading......
           </h1>
        </div>
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to={'/signin'}></Navigate>
    );
};

export default PrivateRoute;