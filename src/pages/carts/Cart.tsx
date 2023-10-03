import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { StoreType } from '@/stores'
import {QRCode} from 'antd'
import "./carts.scss"
export default function CartCom() {

  const userStore = useSelector((store: StoreType) => {
    return store.userStore
  })


  console.log("userStore.cartPayQr",userStore.cartPayQr);
  

  const removeFromCart = (receiptId:any, optionId:any) => {
    // Gửi yêu cầu xóa sản phẩm đến máy chủ thông qua WebSocket
    userStore.socket?.emit("removeFromCart", { receiptId, optionId });
  };



  // ... phần hiển thị giỏ hàng và xử lý sự kiện ở đây
  return (
    <div className='cart_container'> 
        <div className="cart_show">
          <h1>Giỏ Hàng Của Bạn Có <span style={{borderBottom:"3px solid red", textAlign:"center"}}>{userStore.cart?.detail.reduce((value, cur) => {
                    return value += cur.quantity
                }, 0)}</span> Sản Phẩm </h1>
          <table>
            <thead>
            <tr>
              <td>Stt</td>
              <td>Tên Sản Phẩm</td>
              <td>Hình Sản Phẩm</td>
              <td>Giá</td>
              <td> Số Lượng</td>
              <td>Tổng Tiền</td>
              <td >Xóa Sản Phẩm</td>
            </tr>
            </thead>
            <tbody>
              {userStore.cart?.detail.map((item, index)=>{
                return  <tr>
                <td>Stt</td>
                <td>{item.option.product.name}</td>
                <td><img style={{width:"100px", height:"100px"}} src={item.option.product.avatar} alt="" /></td>
                <td>{item.option.product.price}đ</td>
                <td><input style={{width:"50px", fontSize:"30px"}} min={1} type="number"  defaultValue={item.quantity} onChange={(e) => {
                  userStore.socket?.emit("addToCart", {
                  receiptId: item.receiptId,
                  optionId: item.optionId,
                  quantity: Number(e.target.value)
                })
              }}/></td>
                <td>{item.quantity * item.option.product.price}đ</td>
              <td ><button  onClick={() => removeFromCart(item.receiptId, item.optionId)}>Xóa </button></td>

              </tr>
              })}
               
           
            </tbody>
          </table>
          <div className='checkout'>
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
          <div>
          <input name='payMode' type="radio"  value={"CASH"} defaultChecked/>Cash
          <input name='payMode' type="radio"  value={"ZALO"} />Zalo
          </div>
          <div>
            <div>
            {
        userStore.cartPayQr && <QRCode value={userStore.cartPayQr} icon='https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2022/7/9/photo1657324993775-1657324993859181735127.jpg'/>
      }
            </div>
            </div>
          <div className='total'>Tổng Thanh Toán : {userStore.cart?.detail.reduce((value, cur) => {
                    return value += cur.quantity*cur.option.product.price
                }, 0)}đ</div>
          <button className='buttoncheckout' type='submit'>Thanh Toán</button>
       </form>
          </div>
          
        </div>

      {/* {
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
       </form> */}
    </div>
  )
}
