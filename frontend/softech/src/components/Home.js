import Footer from "./Footer";
import Header from "./Header";
import  "../output.css";
import MainContent from "./content/MainContent";
import Login from "./Login";
export default function Home(){
    return(
        <>
            <div className="">
            <div className="h-screen flex flex-col justify-between">
            <div className=" drop-shadow-lg"> 
                <Header />
            </div>
            
            <div className="flex-1  bg-orange-400">
            
                <Login/>
            </div>

            <div>
                <Footer/>
            </div>
            </div>
            </div>

        </>

    );
}