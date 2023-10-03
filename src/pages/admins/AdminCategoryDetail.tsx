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
  console.log("🚀 ~ file: AdminCategoryDetail.tsx:18 ~ constcategoryStore:any=useSelector ~ categoryStore:", categoryStore)
  console.log("🚀 ~ file: AdminCategory.tsx:17 ~ constcategoryStore:any=useSelector ~ categoryStore:", categoryStore.data)
  useEffect(() => {
    dispatch(findCategory())
  }, [])
   useEffect(()=>{
     api.categoryApi.findCategory()
     .then(res=>{
       dispatch(categoryAction.addCategory(res.data.data))
     })
   }, [categoryStore])

  return (
    <div className='Product_containers'>
      <div className='navbarwww'>
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
             
              <th>CATEGORY</th>
              <th>CATEGORYDETAILS</th>  
            </tr>
         </thead>
          <tbody>
            <span></span>
            {categoryStore.data.map((item:any, index:number)=>(
               <tr>
               <td>{index+1}</td>
               <td>{item.name}</td>
               <td> {item.categoryDetails.map((items:any, id:number)=>( <span><span>{id+1}.</span>{items.name} </span> ))}</td>
                
             </tr>
            ))}
           
          </tbody>
         

        </table>
      </div>
    </div>
  )
}
