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
    const [avt, setAvt]=useState("")
    console.log("🚀 ~ file: ProductList.tsx:13 ~ ProductList ~ avt:", avt)
    const { categoryDetaillId }: any = useParams()
    const productStore: any = useSelector((store: StoreType) => {
        return store.productStore;
    });
   const product:any=productStore.data.find((item:any)=>item.categoryDetailId==categoryDetaillId)
  
   useEffect(()=>{
        setAvt(product.pictures[0].url)
   },[product])
   
   console.log("🚀 ~ file: ProductList.tsx:19 ~ ProductList ~ product:", product)
  return (
    <div className='product_list'>
 
          <div className="card_item" onClick={()=>nagidate("/productdetail")}>
              <div className="img">
              <img src={product.pictures[0].url} alt="" />
              </div>
              <div className='content'>
                  <span>{product.name}</span>
                  <p>Mới</p>
                  <span>{product.price}</span>
              </div>
          </div>
         
    </div>
  )
}


