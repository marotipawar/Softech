import "../output.css";
import {Link} from 'react-router-dom';
import { faHouse,faRightToBracket,faRightFromBracket,faUser,faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLogin } from "./context/LoginContext";
export default function Header(){
    const{login}=useLogin();
   
   
    return(
        <div className="text-gray-700 p-4 sm:flex justify-between bg-gray-100">
        <div className="sm:flex items-center space-x-4 justify-center">
            <div className="text-2xl font-semibold hover:text-orange-500 cursor-pointer">
               <div className="flex flex-col mr-8">
               <Link to="/home/" href="#" className="font-bold text-2xl">SOFTTECH </Link>
               <p className="font-light text-sm">Taining | Placement</p>
               </div>
        </div>
        <nav className="">
                <ul className="sm:flex items-center space-x-2 font-medium">
                    <li className="hover:text-orange-500 cursor-pointer">{login && <Link to="/home/studentHome" className="p-2 rounded-md "><FontAwesomeIcon icon={faHouse} />Home</Link>}</li>
                    <li className="">{login && <Link to="/home/profile" className="p-2 rounded-md hover:text-orange-500 cursor-pointer"><FontAwesomeIcon icon={faUser} />Profile</Link>}</li>
                    <li className="">{login && <Link to="/home/studyMaterial" className=" p-2 rounded-md hover:text-orange-500 cursor-pointer"><FontAwesomeIcon icon={faGraduationCap} />Study Material</Link>}</li>
                </ul>
            </nav>  
        </div>
        <div className="flex items-center">
            <nav>
                <ul className="sm:flex space-x-4">
                    <li className="">{!login && <Link to="/home/login" className="px-3 py-1 rounded-lg bg-green-500 hover:bg-green-700 text-gray-100"><FontAwesomeIcon icon={faRightToBracket} /> Sign in</Link>}</li>
                    <li className="">{login && <Link to="/home/logout" className="px-3 py-1 rounded-lg bg-orange-500 hover:bg-orange-700 text-gray-100"><FontAwesomeIcon icon={faRightFromBracket} />Log out</Link>}</li>
                </ul>
            </nav>
        </div>
        </div>
   
    );
}