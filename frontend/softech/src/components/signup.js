import { Link } from "react-router-dom";

export default function Signup(){
    return(
    
        <div className="bg-grey-lighter flex flex-col mt-4">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block appearance-none  border border-grey-light w-full p-3 rounded mb-4 focus:outline-orange-500 focus:shadow-outline"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-orange-500 focus:shadow-outline"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-orange-500 focus:shadow-outline"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-orange-500 focus:shadow-outline"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
                    >Create Account</button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <Link to="/home/" className="no-underline border-b border-grey-dark text-grey-dark">
                            Terms of Service
                        </Link> and 
                        <Link className="no-underline border-b border-grey-dark text-grey-dark" to="/home/">
                            Privacy Policy
                        </Link>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <Link to="/home/login" className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </Link>.
                </div>
            </div>
        </div>

    )
}