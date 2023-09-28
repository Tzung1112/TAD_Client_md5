import React, { useEffect } from 'react'
import "./productlist.scss"
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { StoreType } from '@/stores'
import api from '@/services/api'
import { productAction } from '@/stores/slices/product'
export default function ProductList() {
    const nagidate=useNavigate()
    const dispatch = useDispatch()

    const { categoryDetaillId }: any = useParams()
 
    
    const productStore: any = useSelector((store: StoreType) => {
        return store.productStore;

    });
    useEffect(() => {
        api.productApi.findProduct(categoryDetaillId)
            .then(res => {
                dispatch(productAction.addProduct(res.data.data));
            });
    }, []);
    console.log("🚀 ~ file: ProductList.tsx:12 ~ constproductStore:any=useSelector ~ productStore:", productStore)
  return (
    <div className='product_list'>
 
          <div className="card_item" onClick={()=>nagidate("/productdetail")}>
              <div className="img">
                  <img src="https://www.anphuoc.com.vn/Data/Sites/1/Product/6076/thumbs/(r)-snn-ap-2322-01.jpg" alt="" />
              </div>
              <div className='content'>
                  <span>Áo Sơ mi Nữ ngắn tay An Phước ASNNO2322</span>
                  <p>Mới</p>
                  <span>798.000 đ</span>
              </div>
          </div>
          <div className="card_item">
              <div className="img">
                  <img src="https://www.anphuoc.com.vn/Data/Sites/1/Product/6076/thumbs/(r)-snn-ap-2322-01.jpg" alt="" />
              </div>
              <div className='content'>
                  <span>Áo Sơ mi Nữ ngắn tay An Phước ASNNO2322</span>
                  <p>Mới</p>
                  <span>798.000 đ</span>
              </div>
          </div>
          <div className="card_item">
              <div className="img">
                  <img src="https://www.anphuoc.com.vn/Data/Sites/1/Product/6076/thumbs/(r)-snn-ap-2322-01.jpg" alt="" />
              </div>
              <div className='content'>
                  <span>Áo Sơ mi Nữ ngắn tay An Phước ASNNO2322</span>
                  <p>Mới</p>
                  <span>798.000 đ</span>
              </div>
          </div>
          <div className="card_item">
              <div className="img">
                  <img src="https://www.anphuoc.com.vn/Data/Sites/1/Product/6076/thumbs/(r)-snn-ap-2322-01.jpg" alt="" />
              </div>
              <div className='content'>
                  <span>Áo Sơ mi Nữ ngắn tay An Phước ASNNO2322</span>
                  <p>Mới</p>
                  <span>798.000 đ</span>
              </div>
          </div>
         
    </div>
  )
}
function dispatch(arg0: { payload: any; type: "product/addProduct" }) {
    throw new Error('Function not implemented.')
}

