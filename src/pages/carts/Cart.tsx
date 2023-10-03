import React from 'react'
import {useSelector} from 'react-redux'
import { StoreType } from '@/stores'
import {QRCode} from 'antd'
export default function CartCom() {

  const userStore = useSelector((store: StoreType) => {
    return store.userStore
  })


  return (
    <div>
      {
        userStore.cartPayQr && <QRCode value={userStore.cartPayQr} icon='https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2022/7/9/photo1657324993775-1657324993859181735127.jpg'/>
      }
  
      <ul>
        {
          userStore.cart?.detail.map((item, index) => {
            return <li key={Date.now() * Math.random()}>
              STT: {index + 1} Name: {item.option.product.name + `[${item.option.name}]`} 
              Quantity: <input type="number"  defaultValue={item.quantity} onChange={(e) => {
                  userStore.socket?.emit("addToCart", {
                  receiptId: item.receiptId,
                  optionId: item.optionId,
                  quantity: Number(e.target.value)
                })
              }}/>
               Price: {item.option.product.price}, Total: {item.quantity * item.option.product.price} 
            </li>
          })
        }
      </ul>

       <form onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          let payMode  = (e.target as any).payMode.value;
          console.log("payMode", payMode)
          if(payMode == "CASH") {
            userStore.socket?.emit("payCash", {
              receiptId: userStore.cart?.id,
              userId: userStore.data?.id
            })
          }

          if(payMode == "ZALO") {
            userStore.socket?.emit("payZalo", {
              receiptId: userStore.cart?.id,
              userId: userStore.data?.id
            })
          }

       }}>
          <input name='payMode' type="radio"  value={"CASH"} defaultChecked/>Cash
          <input name='payMode' type="radio"  value={"ZALO"} />Zalo
          <button type='submit'>Thanh Toán</button>
       </form>
    </div>
  )
}
