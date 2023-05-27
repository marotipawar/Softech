import { createContext, useContext, useState } from "react";

const LoginContextHandle=createContext();
export const useLogin= ()=>useContext(LoginContextHandle);

export default function LoginContext({children}){
    
    const [login, setLogin] = useState(false);
   

    function checkLogin(username, password){

        console.log('username :'+username+" password: "+password);
      
        
        if(username==='maroti' && password==='root')
        {
            setLogin(true)
            console.log('IN Check :'+username);
            
            
            console.log('Check '+login);
            

            return true;

        }else{

            setLogin(false);
            return false;
        }
    }

    return(
        <LoginContextHandle.Provider value={{login, setLogin, checkLogin}}>
            {children}
        </LoginContextHandle.Provider>
    );
}