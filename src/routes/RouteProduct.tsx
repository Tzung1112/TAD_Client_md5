import LazyLoad from '@/components/lazy_loadings/lazyLoading';
import Product from '@/pages/products/Product';
import ProductDetail from "@/pages/products/ProductDetail";
import ProductList from "@/pages/products/ProductList";
import { Route } from "react-router-dom";

export default

    <>
        <Route>
            <Route path="product/:categoryId" element={<Product></Product>} >
                <Route path="productlist/:categoryDetaillId" element={<ProductList></ProductList>} >
                </Route>
            </Route>
            <Route path="productdetail/:id" element={LazyLoad(() => import("../pages/products/ProductDetail"))()} >
            </Route>
        </Route>
    </>