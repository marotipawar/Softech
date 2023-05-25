import "../output.css";
import {Link} from 'react-router-dom';
import { faHouse,faRightToBracket,faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Header(){
    return(
        <div className="text-gray-700 p-4 sm:flex justify-between bg-gray-100">
        <div className="sm:flex items-center space-x-4 justify-center">
            <div className="text-2xl font-semibold hover:text-orange-500 cursor-pointer">
                <a href="#">Softtech </a>
        </div>
        <nav className="">
                <ul className="sm:flex items-center space-x-2 font-medium">
                    <li className="hover:text-orange-500 cursor-pointer"><FontAwesomeIcon icon={faHouse} /><a className="p-2 rounded-md ">Home</a></li>
                    <li className=""><a href="#" className="p-2 rounded-md hover:text-orange-500 cursor-pointer">Todo</a></li>
                    <li className=""><a href="/root/todoList" className=" p-2 rounded-md hover:text-orange-500 cursor-pointer">Todo List</a></li>
                </ul>
            </nav>  
        </div>
        <div>
            <nav>
                <ul className="sm:flex space-x-4">
                    <li className=""><a href="/root/logout" className="px-3 py-1 rounded-lg bg-green-500 text-gray-100"><FontAwesomeIcon icon={faRightToBracket} /> Sign in</a></li>
                    <li className=""><a href="/root/logout" className="px-3 py-1 rounded-lg bg-orange-500 text-gray-100"><FontAwesomeIcon icon={faRightFromBracket} />Log out</a></li>
                </ul>
            </nav>
        </div>
        </div>
   
    );
}