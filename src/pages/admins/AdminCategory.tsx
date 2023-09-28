import React, { useEffect, useState } from 'react'
import "./admincategory.scss"
import ModalAddNew from '../../components/modal/ModalAddNewCateGory'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { StoreType } from '@/stores'
import { categoryAction, findCategory } from '@/stores/slices/category'
import api from '@/services/api'
import { Category } from '@/interface'
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
   useEffect(()=>{
     api.categoryApi.findCategory()
     .then(res=>{
       dispatch(categoryAction.addCategory(res.data.data))
     })
   }, [])

  return (
    <div className='containers'>
      <div className='navbar'>
        <div className="nav_item"> <h1>CATEGORY MANAGER</h1>
          <span><i className="fa-regular fa-bell"></i> </span>
          <span><i className="fa-regular fa-envelope"></i></span></div>
      </div>
      <div className='search'>
        <input className='inputs' type="text" name="search" placeholder="Search Category.." />
        <ModalAddNew></ModalAddNew>
      </div>
      <div className='body'>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>TITLE</th>
            </tr>
          </thead>
            <tbody>

            {categoryStore?.data?.map((item: any, index: number) => (
              <tr key={item.id}>
                <td>{index + 1}</td>

                <td>{item.name}</td>
              </tr>
            ))}
            </tbody>

        </table>
      </div>
    </div>
  )
}
