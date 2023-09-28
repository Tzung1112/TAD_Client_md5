import React, { FormEvent, useEffect, useState } from 'react'
import "./modaladdnewproduct.scss"
import SubmitButton from '../button/ButtonSubmit'
import ButtonSubmit from '../button/ButtonSubmit';
import api from '@/services/api';
import { Category, CategoryDetails, NewCategory, Picture } from '@/interface';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@/stores';
import { categoryAction, findCategory } from '@/stores/slices/category';
import { AsyncThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { async } from 'rxjs';
export default function ModalAddNew() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const [categoryDetails, setCategoryDetails] = useState<CategoryDetails[]>()
  const [categoryDetailsId, setCategoryDetailsId]=useState(0)
  const [pictures, setPictures] = useState<Picture[]>([])
  console.log("🚀 ~ file: ModalAddNewProduct.tsx:16 ~ ModalAddNew ~ pictures:", pictures)
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const categoryStore: any = useSelector((store: StoreType) => {
    return store.categoryStore

  })

  const [show, setShow] = useState(false)
  const handleSetShow = () => {
    // Xử lý sự kiện khi nút "Submit" được nhấn
    setShow(true)
  };
  
  const handleAddNew =async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    const newProduct = {
      name: (e.target as any).name.value,
      description: (e.target as any).description.value,
      price: (e.target as any).price.value
    }
    formData.append("product", JSON.stringify(newProduct))
   for (let i in pictures) {

     await formData.append("picture", pictures[i].file)
    }
  
    try{
      api.productApi.create(categoryDetailsId, formData)
        .then(res => {
          console.log(res.data.data);
          alert("Thanh cong Them Moi")

        })
        .catch(err => {
          console.log("err", err);
        })

    }catch(err){
    console.log("🚀 ~ file: ModalAddNewProduct.tsx:51 ~ handleAddNew ~ err:", err)

    }
   

  }
  useEffect(() => {
    api.categoryApi.findCategory()
      .then(res => {
        dispatch(categoryAction.addCategory(res.data.data))
      })
  }, [])
  const handleSelectChange = (e: any) => {
    const selectedId = Number((e.target as any).value);
    for (let i in categoryStore.data) {
      if (categoryStore.data[i].id === selectedId) {
        setCategoryDetails(categoryStore.data[i].categoryDetails)
      }
    }
  };
  const handleCategorydetailChange = (e: any) => {
    const selectedId = Number((e.target as any).value);
    setCategoryDetailsId(selectedId)
  };

  return (
    <div className='modal_containers'>
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
            <h1 className="input_category">Thêm Mới  Sản Phẩm</h1>
            <form action="" onSubmit={handleAddNew}>
              <div className="input_category_detail">
                <div className='uploadfile'>
                  <input type="file" name="" multiple id="" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                    console.log("(e.target.files", (e.target.files));
                    if (e.target.files) {
                      if (e.target.files.length > 0) {
                        let tempPictures: Picture[] = [];
                        for (let i in e.target.files) {
                          if (i == "length") {
                            break
                          }
                          tempPictures.push({
                            file: e.target.files[i],
                            url: URL.createObjectURL(e.target.files[i])
                          })
                        }
                        setPictures(tempPictures)
                       
                      }
                    }
                    
                  }} />
                  <div className='imgs'>
                    {
                      pictures.map(picture => <div className='img'>
                        <img src={picture.url}  />
                    </div>
                       )
                    }
                   
                  </div>
                </div>
                <div className='category_item'>
                  <div className='category'>
                    <h3>Chọn Loại Sản Phẩm</h3>
                    <select name="category" id="" onChange={handleSelectChange} >
                      {categoryStore.data.map((item: Category) => (
                        <>
                          <option key={item.id} value={item.id} >{item.name}</option>

                        </>
                      ))}

                    </select>
                  </div>
                  <div className="categorydetail"> <h3>Chọn Danh Mục Sản Phẩm</h3>
                    <select name="categorydetail" id="" onChange={handleCategorydetailChange}>
                      {categoryDetails?.map((detail: any) => (<option value={detail.id}>{detail.name}</option>))}
                    </select>    </div>
                </div>
                <div className='title'>
                  <div className="name">
                    <label htmlFor="">Tên:</label>
                    <input type="text" name="name" />

                  </div>
                  <div className="price">
                    <label htmlFor="">Giá:</label>

                    <input type="text" name="price" />
                  </div>
                  <div className='des'>
                    <label htmlFor="">Mô Tả:</label>
                    <input type="text" name='description'/></div>
                </div>
                <ButtonSubmit label="Thêm Mới" className='addnew'></ButtonSubmit>
              </div>
            </form>
          </div>
        </div>
      </div>)
        : (<div ></div>)}

    </div>
  )
}

