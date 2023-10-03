import React, { useEffect, useState } from 'react'
import "./productlist.scss"
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { StoreType } from '@/stores'
import api from '@/services/api'
import { findProduct, productAction } from '@/stores/slices/product'
import { Product } from '@/interface'
export default function ProductList() {
    const nagidate=useNavigate()
    const dispatch = useDispatch()
    const { categoryDetaillId }: any = useParams()
    const productStore: any = useSelector((store: StoreType) => {
        return store.productStore;
    });
    console.log("🚀 ~ file: ProductList.tsx:16 ~ constproductStore:any=useSelector ~ productStore:", productStore)
    const productlist:any=productStore.data.filter((item:Product)=>item.categoryDetailId==categoryDetaillId)
   
  return (
    <div className='product_list'>
        {productlist.map((item:any)=>( <div key={item.id} className="card_item" onClick={()=>nagidate(`/productdetail/${item.id}`)}>
            <div className="img">
            <img src={item?.avatar} alt="" />
            </div>
            <div className='content'>
                <span>{item?.name}</span>
                <p>Mới</p>
                <span>{item?.price}</span>
            </div>
        </div>))}
           

      
           
    
         
    </div>
  )
}


