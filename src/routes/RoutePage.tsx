import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "../pages/admins/Admin";
import AdminCategory from "../pages/admins/AdminCategory";
import RouteAdmin from "./RouteAdmin";
import Register from "../pages/users/Register";
import Home from "../pages/homes/Home";
import RouteUser from "./RouteUser";
import RouteProduct from "./RouteProduct";

export default 
   
       <>
            <Route>
               <Route path="/" element={<Home></Home>} >
                    {RouteUser}
                    {RouteProduct}
               </Route>
                <Route path="admin" element={<Admin></Admin>} >
                     {RouteAdmin}
                </Route>
            </Route>
       </>
    
   
 
