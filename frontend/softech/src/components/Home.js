import Footer from "./Footer";
import Header from "./Header";
import  "../output.css";
import MainContent from "./content/MainContent";
import Login from "./Login";
import Signup from "./signup";
import { useLogin } from "./context/LoginContext";
import { Outlet } from "react-router-dom";
export default function Home(){
    
    return(
        <>
            <div className="">
            <div className="h-screen flex flex-col justify-between">
            <div className=" drop-shadow-lg"> 
                <Header />
            </div>
            
            <div className="flex-1  bg-orange-400">
            
              <Outlet />
            </div>

            <div>
                <Footer/>
            </div>
            </div>
            </div>

        </>

    );
}