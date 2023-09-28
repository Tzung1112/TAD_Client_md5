import Product from '@/pages/products/Product';
import ProductDetail from "@/pages/products/ProductDetail";
import ProductList from "@/pages/products/ProductList";
import { Route } from "react-router-dom";

export default

    <>
        <Route>
            <Route path="product/:categoryId" element={<Product></Product>} >
                <Route path="product/productlist/:categoryDetaillId" element={<ProductList></ProductList>} >
                </Route>
            </Route>
            <Route path="productdetail" element={<ProductDetail></ProductDetail>} >
            </Route>
        </Route>
    </>