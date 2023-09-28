import React, { useEffect, useState } from 'react'
import "./admincategorydetail.scss"
import ModalAddNew from '../../components/modal/ModalAddNewCateGory'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { StoreType } from '@/stores'
import { categoryAction, findCategory } from '@/stores/slices/category'
import api from '@/services/api'
import { Category } from '@/interface'
import ModalAddNewCateGoryDetail from '@/components/modal/ModalAddNewCateGoryDetail'
export default function AdminCategory() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const [category, setCategory] = useState<Category>()
  const categoryStore: any = useSelector((store: StoreType) => {
    return store.categoryStore

  })
  console.log("🚀 ~ file: AdminCategory.tsx:17 ~ constcategoryStore:any=useSelector ~ categoryStore:", categoryStore.data)
  useEffect(() => {
    dispatch(findCategory())
  }, [])
  /*  useEffect(()=>{
     api.categoryApi.findCategory()
     .then(res=>{
       dispatch(categoryAction.addCategory(res.data.data))
     })
   }, []) */

  return (
    <div className='containers'>
      <div className='navbar'>
        <div className="nav_item"> <h1>CATEGORY MANAGER</h1>
          <span><i className="fa-regular fa-bell"></i> </span>
          <span><i className="fa-regular fa-envelope"></i></span></div>
      </div>
      <div className='search'>
        <input className='inputs' type="text" name="search" placeholder="Search Category.." />
        <ModalAddNewCateGoryDetail></ModalAddNewCateGoryDetail>
      </div>
      <div className='body'>
        <table>
         <thead>
            <tr>
              <th>STT</th>
              <th>TITLE</th>
            </tr>
         </thead>
          <tbody></tbody>
         

        </table>
      </div>
    </div>
  )
}
