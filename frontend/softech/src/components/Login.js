import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useLogin } from "./context/LoginContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();

    const handleUname = (e)=>{
        setUsername(e.target.value);
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }

    const {checkLogin, login} = useLogin();
    
    const submitLogin = ()=>{
       if(checkLogin(username, password)){
            navigate('/home/studentHome');
       }
     
    }

    return(
             <div className="w-full max-w-xs mx-auto mt-10">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                         <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-orange-500 focus:shadow-outline"
                             id="username" 
                             type="text" 
                             placeholder="Username" 
                             name="username"
                             defaultValue={username} 
                             onChange={handleUname}></input>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-orange-500 focus:shadow-outline" 
                            id="password" 
                            type="password"
                            name="password" 
                            placeholder="******************"
                            defaultValue={password}
                            onChange={handlePassword}
                            >
                         </input>
                        
                 </div>
                    <div className="flex items-center justify-between">
                      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                       type="button" onClick={submitLogin}>Sign In</button>
                       <Link className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-700" 
                       to="/home/forget"> Forgot Password?</Link>
                   </div>
                   <div className="mt-4 text-center">
                   <span> Not Register? </span><Link to="/home/signup" className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-700 text-center"
                    >Sign Up</Link>
                   </div>
                    </form>
  
                    </div>
             );
}