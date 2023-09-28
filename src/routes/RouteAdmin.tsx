import { Route } from "react-router-dom";
import AdminCategory from "../pages/admins/AdminCategory";
import AdminProduct from "../pages/admins/AdminProduct";
import AdminCategoryDetail from "@/pages/admins/AdminCategoryDetail";

export default

    <>
        <Route>
          
            <Route path="category" element={<AdminCategory></AdminCategory>} ></Route>
            <Route path="categorydetail" element={<AdminCategoryDetail></AdminCategoryDetail>} ></Route>
            <Route path="product" element={<AdminProduct></AdminProduct>} ></Route>
            
        </Route>
    </>
