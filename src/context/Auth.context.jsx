import { createContext, useState } from "react";

export const Authcontext = createContext(null);

export default function Authprovider({children}){


    const [token, setToken]= useState(localStorage.getItem("token") || sessionStorage.getItem("token"))

function logOut(){
    setToken(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
}

    return <Authcontext.Provider value={{token,setToken, logOut}}>
{children}
    </Authcontext.Provider>
}