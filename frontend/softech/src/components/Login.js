import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

export default function Login(){
    return(
            
               
                   <div class="w-full max-w-xs mx-auto mt-10">
                        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                         <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                                Username
                            </label>
                            <input  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Password
                            </label>
                            <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                         </input>
                        
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-700" href="#">
        Forgot Password?
      </a>
    </div>
    <a className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-700 text-center" href="#">
        Forgot Password?
      </a>
  </form>
  
</div>
             
);
}