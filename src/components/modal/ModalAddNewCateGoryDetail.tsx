import React, { FormEvent, useEffect, useState } from 'react'
import "./modaladdnewcategorydetail.scss"
import SubmitButton from '../button/ButtonSubmit'
import ButtonSubmit from '../button/ButtonSubmit';
import api from '@/services/api';
import { Category, NewCategory } from '@/interface';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@/stores';
import { categoryAction, findCategory } from '@/stores/slices/category';
import { AsyncThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
export default function ModalAddNew() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const categoryStore: any = useSelector((store: StoreType) => {
    return store.categoryStore

  })

 
    const [show,setShow]=useState(false)
  const handleSetShow = () => {
    // Xử lý sự kiện khi nút "Submit" được nhấn
    setShow(true)
  };
  const handleAddNew = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const NewCategory={
      name: (e.target as any).name.value,
    }
    api.categorydetailApi.create(NewCategory, (e.target as any).category.value)
    .then(res=>{
      console.log(res.data);
      alert("Thanh cong Them Moi")
      
    })
    .catch(err=>{console.log("err",err);
    })
   
  }
  return (
    <div className='modal_container'>
      <div className='button'>
        <SubmitButton
          label="ADD NEW"
          onClick={handleSetShow}
        />
      </div>
        {show ? (<div className='modal_item'>
            
        <i className="fa-solid fa-circle-xmark close" onClick={() => {
          setShow(false)
        }}></i>
            <div className='item'>
              <div className='input'>
            <h1 className="input_category">Thêm Mới Mục Sản Phẩm</h1>
           <form action="" onSubmit={handleAddNew}>
              <div className="input_category_detail">
                <h2>Nhập Tên Mục Sản Phẩm Mớifdsdsd</h2>
                <select name="category" id="">
                  {categoryStore.data.map((item:any) => (
                    <option value={item.id}>{item.name}</option>
                ))}
                 
                </select>
               
                <h2>Nhập Tên Mục Sản Phẩm Mới:</h2>
                <input type="text" name='name' />
                <ButtonSubmit label="Thêm Mới" className='addnew'></ButtonSubmit>
              </div>
           </form>
              </div>
            </div>
        </div>)
        :(<div ></div>)}
        
    </div>
  )
}

