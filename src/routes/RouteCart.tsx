import LazyLoad from "@/components/lazy_loadings/lazyLoading";
import { Route } from "react-router-dom";

export default 
   
<>
<Route>
  
    <Route path="cart" element={LazyLoad(() => import("../pages/carts/Cart"))()} ></Route>
    <Route path="purchase-history" element={LazyLoad(() => import("../pages/carts/Purchase"))()} ></Route>

</Route>
</>

