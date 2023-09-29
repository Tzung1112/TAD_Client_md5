import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@/stores';
import { Category, CategoryDetails } from '@/interface';
import api from '@/services/api';
import { productAction } from '@/stores/slices/product';
import "./product.scss"
export default function Product() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [categoryDetaiId, setCategoryDetaiId]=useState(0)
    const { categoryId }: any = useParams();
    const categoryStore: any = useSelector((store: StoreType) => {
        return store.categoryStore;
    });
    const category: Category = categoryStore.data.find((item: any) => item.id == categoryId);
   useEffect(()=>{
    api.productApi.findAll()
    .then((res) => {
        dispatch(productAction.addProduct(res.data))
    }).catch((err) => {
        
    });
   },[])
    return (
        <div className='product_container'>
            <div className='title'>
                <div className='category_item'>
                    <h1>{category.name}</h1>
                    <h3>Áo sơ mi nam</h3>
                </div>
                <div className='item'>
                    <p>{category.name}</p>
                    <span>281 sản phẩm</span>

                </div>
            </div>
            <div className="product">
                <div className='category_detail'>
                    <ul>

                        {category.categoryDetails.map((item: CategoryDetails) => (<li key={item.id} onClick={() => {navigate(`product/productlist/${item.id}`),setCategoryDetaiId(Number(item.id))}}>{item.name}</li>))}

                    </ul>
                </div>
                <div className="product">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
}
