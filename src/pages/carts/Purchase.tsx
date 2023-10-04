import React from 'react'
import "./puchase.scss"
import { useSelector } from 'react-redux'
import { StoreType } from '@/stores'
import moment from 'moment'
import { Receipt } from '@/interface'
export default function Purchase() {
  
  const userStore = useSelector((store: StoreType) => {
    return store.userStore
  })
  console.log("🚀 ~ file: Purchase.tsx:10 ~ userStore ~ userStore:", userStore.receipts)
/*   const sortedReceipts = userStore.receipts?.sort((a:any, b:any) => b.createAt - a.createAt);
  console.log("🚀 ~ file: Purchase.tsx:13 ~ Purchase ~ sortedReceipts:", sortedReceipts) */
  return (
    <div className='puchase_container'>
      <h1>Cảm Ơn Quý Khách Đã Mua Hàng</h1>
      <table>
       <thead>
       <tr>
            <td>Stt</td>
            <td>Sản Phẩm</td>
            <td>Trạng Thái Đơn Hàng</td>
            <td>Tổng Thanh Toán</td>
            <td> Ngày Tạo Đơn</td>
            <td> Hình Thức THanh Toán</td>
          
        </tr>
       </thead>
       <tbody>
        {userStore.receipts?.map((item:any, index:number)=>( <tr key={item.id}>
            <td>{index+1}</td>
            <td><span>
            {item.detail.map((sp:any, i:number)=>( <span><span>{i+1}.{sp.option.product.name}[Size:{sp.option.name}][{sp.quantity}.sp]</span><br /></span>))}
              </span></td>
            <td>{item.status}</td>
            <td>{item.total}đ</td>
            <td> {moment(Number(item.createAt)).format('DD/MM/YYYY HH:mm:ss')}</td>
            <td>{item.payMode}</td>
        </tr>))}
      
       </tbody>
      </table>
    </div>
  )
}
