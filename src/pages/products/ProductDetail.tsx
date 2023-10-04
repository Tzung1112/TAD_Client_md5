import React, { useEffect, useState } from 'react'
import "./productdetail.scss"
import SubmitButton from '@/components/button/ButtonSubmit'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Product } from '@/interface';
import { StoreType } from '@/stores';
import api from '@/services/api';


export default function ProductDetail() {
    const {id}:any = useParams()

    const productStore: any = useSelector((store: StoreType) => {
        return store.productStore;
    });
    const userStore = useSelector((store: StoreType) => {
        return store.userStore
       
    })
    console.log("🚀 ~ file: ProductDetail.tsx:24 ~ userStore ~ userStore:", userStore)
    const [isActive, setIsActive] = useState(null);


    const handleClicks = (index: any) => {
        setIsActive(index);
      
    };
    const [optionsIndex,setOptionsIndex]=useState(0)
    const [product, setProduct]= useState<Product | null>(null);
    console.log("🚀 ~ file: ProductDetail.tsx:34 ~ ProductDetail ~ product:", product)
    const [quantity, setQuantity]=useState(1)
    const [quantitys, setQuantitys]=useState(0)
  
    useEffect(()=>{
       if(id){
        api.productApi.findProductById(id)
        .then((res) => {
            console.log("ress",res.data[0]);
            setProduct(res.data[0])
        }).catch((err) => {
            
        });
       }
    },[id])
    function handleAddtocart(){
        if(userStore.socket) {
            userStore.socket.emit("addToCart", {
                receiptId: userStore.cart?.id,
                optionId: product?.product_options[optionsIndex].id,
                quantity: quantity
            })
        }
    }

    function handleChangeImage(url: string) {
        const mainImage = document.querySelector('.main__product__image') as HTMLImageElement;
        if (mainImage) {
            mainImage.src = url;
        }
    }
  return (
    <div className='container_productdetail'>
       
           
                <div className='product_detail'>
                <>
                  <div key={product?.id} className='img'>
                  <div className="img_item">  
                   <img src={product?.pictures[0].url} alt=""  className='main__product__image'  />
                   </div>
                  <div className="img_detail">
                    {product?.pictures.map((picture:any)=>( <div className="detail">
                          <img src={picture.url} alt="" onMouseOver={() => handleChangeImage(picture.url)} />
                    </div>))}

                  </div>
            </div>
            <div className='item'>
                <div className="title">
                    <div className='product_title'>
                          <h1>{product?.name}</h1>
                          <p>{product?.price}đ</p>
                          <div className='size'>
                              <div>Kích cỡ áo</div>:
                              {product?.product_options.map((size:any, index:number)=>(  <span  key={ size.id}   className={`custom-span ${isActive === size.id ? 'active' : ''}`} 
                              onClick={() => {handleClicks(size.id), setOptionsIndex(index)}}>{size.name}</span>))}
                               </div>
                         
                    </div>
                    <div className="product_des">
                          <h3>Chính sách đổi hàng</h3>
                          <span>- Quần , áo : Được đổi hàng trong vòng 30 ngày kể từ ngày mua . - Giày dép , áo len : Được đổi trong vòng 07 ngày , được bảo hành 60 ngày kể từ ngày mua . Phụ kiện ( thắt lưng , vi , túi xách , ... ) : Không được đổi trả , được bảo hành trong vòng 60 ngày . - Nội y , caravat , khẩu trang , kẹp , nơ , nút , khăn : Không đổi hàng - Áo ngực , đồ ngủ , đồ mặc nhà , đồ thể thao , áo hai dây hàng dệt : Được đổi trong vòng 14 ngày</span>
                      
                          <span> Màu sắc sản phẩm trên website và thực tế có thể chênh lệch không đáng kể ) do điều kiện ánh sáng của môi trường và thiết bị công nghệ khác nhau .
</span>
                    </div>
                    <div className="product_addtocart">
                        <div className='quantity'>
                       {/* { userStore.cart?.detail.map((item, index) =>{
                        return <input type="number"  defaultValue={item.quantity} onChange={(e) => {
                                userStore.socket?.emit("addToCart", {
                                receiptId: item.receiptId,
                                optionId: item.optionId,
                                quantity: Number(e.target.value)
                              })
                            }}/>
                        })} */}
                       
                             {/*  <span onClick={()=>{if(quantity>1){setQuantity(quantity-1)}}}><i className="fa-solid fa-minus"></i></span> */}<span>{quantity}</span>{/* <span onClick={()=>{setQuantity(quantity+1)}}><i className="fa-solid fa-plus"></i></span> */}
                        </div>
                        <SubmitButton label="Thêm Vào Giỏ Hàng" className='button' onClick={handleAddtocart}></SubmitButton>
                    </div>
                </div>
            </div>
                </>
                </div>
     
          
       
        <div className="product_carousel">
          
        </div>
    </div>
  )
}
