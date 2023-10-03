import React, { FormEvent, useEffect, useRef, useState } from 'react'
import "./modaladdnewproduct.scss"
import SubmitButton from '../button/ButtonSubmit'
import ButtonSubmit from '../button/ButtonSubmit';
import api from '@/services/api';
import { Category, CategoryDetails, Picture } from '@/interface';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@/stores';
import { categoryAction,  } from '@/stores/slices/category';
import { ThunkDispatch } from '@reduxjs/toolkit';
export default function ModalAddNew() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const [categoryDetails, setCategoryDetails] = useState<CategoryDetails[]>()
  const [categoryDetailsId, setCategoryDetailsId]=useState(0)
  const [pictures, setPictures] = useState<Picture[]>([])
  const urlPreviewRef: React.MutableRefObject<HTMLImageElement|null>= useRef(null);
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

    formData.append("avatar", avatarFile!)

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
            <h4 className="input_category">Thêm Mới  Sản Phẩm</h4>
            <form action="" onSubmit={handleAddNew}>
              <div className="input_category_detail">
                <div className='uploadfile'>
              {/* */}
               <div className="avt">
           
                <input className='avatar'
                      name="avatar"
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        if (event.target.files!.length == 0) {
                          console.log("Chưa chọn hình!");
                        } else {
                          let blodUrl = URL.createObjectURL(event.target.files![0]);
                          urlPreviewRef.current!.src = blodUrl;
                          setAvatarFile(event.target.files![0])
                        }
                      }}
                      type="file"
            /> 
             <span>
              <p> Avatar:</p>
             
             <img
                style={{
                width: "100px",
                height: "100px",
                borderRadius:"50%"
                
              }}
              ref={urlPreviewRef}
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzj-g2tCVry_m5tMn3kFB2JHrbu1J7AukXYtOa6rXFxmULELmLJg_Q3ukvA1WJCcB0kbs&usqp=CAU"
            />
             </span>
            </div>
                  <input type="file" name="" multiple id="" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                    console.log("nhieu",e.target.files);
                    
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
                    <h5>Chọn Loại Sản Phẩm</h5>
                    <select name="category" id="" onChange={handleSelectChange} >
                      {categoryStore.data.map((item: Category) => (
                        <>
                          <option key={item.id} value={item.id} >{item.name}</option>

                        </>
                      ))}

                    </select>
                  </div>
                  <div className="categorydetail"> <h5>Chọn Danh Mục Sản Phẩm</h5>
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

