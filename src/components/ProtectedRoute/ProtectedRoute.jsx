import { useContext } from "react";
import { Authcontext } from "../../context/Auth.context";
import { Navigate, useLocation } from "react-router";

export default function ProtectedRoute({children}){
    const location= useLocation();
    const {token}=useContext(Authcontext)

    if(token == null ){
        return <Navigate to="/login" state={{from: location.pathname}} />
    }else {
         return children
    }
}