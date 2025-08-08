import { createContext, useEffect, useState } from "react";
import { verifyToken } from "../services/auth-service";


export const Authcontext = createContext(null);

export default function Authprovider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("token") || sessionStorage.getItem("token")
  );
  const [isLoading, setIsLoading] = useState(true);

const[isAuthenticated, setIsAuthenticated] = useState(false);
const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")));

useEffect( ()=>{
  const checkAuth = async () => {
    try {
      setIsLoading(true);
      const response = await verifyToken()
      if(response.success){
        setIsLoading(false);
        setIsAuthenticated(true);
        setUserInfo(response.data.decoded)
        localStorage.setItem("userInfo", JSON.stringify(response.data.decoded));
      }
    } catch (error) {
console.log(error);
      setIsLoading(false);
    }

  }
  checkAuth();
},[token])
 

  function logOut() {
    setToken(null);
    setUserInfo(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
   sessionStorage.removeItem("userInfo");
    sessionStorage.removeItem("token");
  }

  return (
    <Authcontext.Provider value={{ token, setToken, logOut, isAuthenticated, userInfo, isLoading}}>
      {children}
    </Authcontext.Provider>
  );
}







