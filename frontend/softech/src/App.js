import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import LoginContext, { useLogin } from "./components/context/LoginContext";
import "./output.css";
import Login from "./components/Login";
import Signup from "./components/signup";
import MainContent from "./components/content/MainContent";
import Forget from "./components/Forget";
import StudentHome from "./components/student/StudentHome";
import Logout from "./components/Logout";
import Profile from "./components/student/Profile";
import StudyMaterial from "./components/student/StudyMaterial";
import PageNotFound from "./components/PageNotFound";
import WhatIsST from "./components/student/studyMaterials/WhatIsST";
export default function App() {

   const {login}= useLogin();
   function Auth({children}){
      if(login){
         return children;

      }else{
         return <Navigate to="/home"/>
      }
   }
  
   const router=createBrowserRouter(
   [
      {
      
      path:"/home",
      element:<Home/>,
      errorElement:<PageNotFound />,
      children:[
         {
            path:'/home/',
            element:<MainContent />
         },
         {
            path:'/home/signup',
            element:<Signup />
         },
         {
            path:'/home/login',
            element:<Login/>
         },
         {
            path:'/home/forget',
            element:<Forget/>
         },
         {
            path:'/home/studentHome',
            element:<Auth><StudentHome /></Auth>
         },
         {
            path:'/home/logout',
            element:<Auth><Logout /></Auth>
         },
         {
            path:'/home/profile',
            element:<Auth><Profile/></Auth>
         },
         {
            path:'/home/studyMaterial',
            element:<Auth><StudyMaterial /></Auth>,
            children:[
               {
                  path:'/home/studyMaterial/whtIsST',
                  element:<Auth><WhatIsST /></Auth>
               }
            ]
         },
         {
            path:'/home/*',
            element:<PageNotFound />
         }


   ]

     }
]
  ) 

  return (
     
        <RouterProvider router={router}/>
    
        
      
    );
}

