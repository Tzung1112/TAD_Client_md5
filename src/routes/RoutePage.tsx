import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "../pages/admins/Admin";
import AdminCategory from "../pages/admins/AdminCategory";
import RouteAdmin from "./RouteAdmin";
import Register from "../pages/users/Register";
import Home from "../pages/homes/Home";
import RouteUser from "./RouteUser";
import RouteProduct from "./RouteProduct";
import RouteHome from "./RouteHome";
import LazyLoad from "@/components/lazy_loadings/lazyLoading";
import RouteCart from "./RouteCart";

export default 
   
       <>
            <Route>
               <Route path="/" element={LazyLoad(() => import("../pages/homes/Home"))()}  >
                    {RouteHome}
                    {RouteUser}
                    {RouteProduct}
                    {RouteCart}
               </Route>
                <Route path="admin"  element={LazyLoad(() => import("../pages/admins/Admin"))()} >
                     {RouteAdmin}
                </Route>
            </Route>
       </>
    
   
 
