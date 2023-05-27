import { useLogin } from "./context/LoginContext";

export default function Logout(){
    const {setLogin}=useLogin();
    setLogin(false);
    return(
        <div>
            <h1>Logout Successful</h1>
        </div>
    );
}