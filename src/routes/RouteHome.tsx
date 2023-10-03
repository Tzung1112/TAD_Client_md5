import HomeBody from "@/pages/homes/HomeBody";
import { Route } from "react-router-dom";
import LazyLoad from "../components/lazy_loadings/lazyLoading";



export default 
   
<>
<Route>
  
    <Route path="" element={LazyLoad(() => import("../pages/homes/HomeBody"))()} ></Route>
    
</Route>
</>


