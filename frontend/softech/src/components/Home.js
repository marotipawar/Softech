import Footer from "./Footer";
import Header from "./Header";
import  "../output.css";
export default function Home(){
    return(
        <>
            <div className="">
            <div className="h-screen flex flex-col justify-between">
            <div className=" drop-shadow-lg"> 
                <Header />
            </div>
            
            <div className="flex-1 mx-8 ">
                
            </div>

            <div>
                <Footer/>
            </div>
            </div>
            </div>

        </>

    );
}