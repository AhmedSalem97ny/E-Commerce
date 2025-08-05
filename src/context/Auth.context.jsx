import { createContext, useEffect, useState } from "react";
import { verifyToken } from "../services/auth-service";

export const Authcontext = createContext(null);

export default function Authprovider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("token") || sessionStorage.getItem("token")
  );


  const [isAuthenticated, setIsAuthenticated] = useState(false);
const[userInfo, setUserInfo] = useState(null);

  useEffect(() => {
  const checkAuthentication= async ()=>{
     try {
    const response= await verifyToken();
    if(response.success){
        setIsAuthenticated(true);
        setUserInfo(response.data.decoded);
    }
    
   } catch (error) {
    console.log(error);
    
   }
  }
 checkAuthentication()
  },[])

  function logOut() {
    setToken(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  }

  return (
    <Authcontext.Provider value={{ token, setToken, logOut, isAuthenticated, userInfo }}>
      {children}
    </Authcontext.Provider>
  );
}

