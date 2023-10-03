import React, { useEffect, useState } from 'react'
import "./adminproduct.scss"
import ModalAddNewProduct from '@/components/modal/ModalAddNewProduct'
import { useSelector } from 'react-redux';
import { Product } from '@/interface';
import ButtonSubmit from '@/components/button/ButtonSubmit';
import { StoreType } from '@/stores';
import api from '@/services/api';
export default function AdminProduct() {
    const productStore: any = useSelector((store: StoreType) => {
        return store.productStore;
    });
    console.log("🚀 ~ file: AdminProduct.tsx:9 ~ constproductStore:any=useSelector ~ productStore:", productStore)
   
    const[ showModal, setShowModal]=useState(false)
    const [idProduct,setIdProduct]=useState("")
    console.log("🚀 ~ file: AdminProduct.tsx:17 ~ AdminProduct ~ idProduct:", idProduct)
    const [optionValue, setOptionValue] = useState(''); // Khởi tạo giá trị ban đầu là chuỗi rỗng
    console.log("🚀 ~ file: AdminProduct.tsx:19 ~ AdminProduct ~ optionValue:", optionValue)

    const handleInputChange = (e:any) => {
      // Lấy giá trị từ ô input và cập nhật vào state
      setOptionValue(e.target.value);
    };
    function handleAddOptons(idProduct:string, optionValue:any){
        let data={
            productId:idProduct,
            name:optionValue
        }
        api.productApi.createProductOption(data)
        .then((res) => {
            alert("thanh cong")
            setShowModal(false)
        }).catch((err) => {
            
        });
        setOptionValue('');
    };

    // Sau khi truyền giá trị, bạn có thể làm các công việc khác ở đây
    // Ví dụ: Đặt lại giá trị của optionValue thành chuỗi rỗng
  useEffect(()=>{

  },[productStore])
        
  
    return (
        <div className='YTOcontainer'>
            <div className='navaaabar'>
                <div className="nav_item"> <h1>PRODUCT MANAGER</h1>
                    <span><i className="fa-regular fa-bell"></i> </span>
                    <span><i className="fa-regular fa-envelope"></i></span></div>
            </div>
            <div className='search'>
                <input className='inputs' type="text" name="search" placeholder="Search Product.." />
                <ModalAddNewProduct></ModalAddNewProduct>
            </div>
            <div className='body'>
                <table>
                   <thead>
                        <tr>
                            <th>STT</th>
                            <th>NAME</th>
                            <th>AVATAR</th>
                            <th>PRICE</th>
                            <th>OPTIONS</th>
                            <th> ADD OPTIONS</th>
                        </tr>
                   </thead>
                   <tbody>
                    {productStore.data.map((item:Product, index:number)=>(<tr>
                        <td>{index+1}</td>
                        <td>

                            {item.name}</td>
                        <td>
                        <img width={100} src= {item.avatar} alt="" />
                           </td>
                        <td>{item.price}</td>
                        <td style={{textAlign:"center"}}>{item.product_options.map((options:any)=>( <div  style={{display:"flex"}}><p>Size:</p><p>{options.name}</p></div>))}</td>
                        <td><span onClick={()=>{
                            setIdProduct(item.id)
                            setShowModal(true)
                        }}> Add Option</span></td>
                    </tr>))}
                       
                   
                   </tbody>
                </table>
            </div>
            {showModal?( <div className='modal'>
                <div className='inputOption'>
                        <h4>Add Option</h4>
                        <label htmlFor="">Nhập Tên Options:</label>
                        <input type="text" name="optionsitem"
                         value={optionValue} // Giá trị của ô input
                         onChange={handleInputChange} // Sự kiện khi ô input thay đổi
                        />
                        <ButtonSubmit label="Add" onClick={()=>{
                            handleAddOptons(idProduct,optionValue)
                        
                        }}></ButtonSubmit>
                </div>
            </div>):( <div></div>)}
        </div>
    )
}
