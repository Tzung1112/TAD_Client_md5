import React, { useState } from 'react'
import "./navbar.scss"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { StoreType } from '@/stores'
import { Category, User } from '@/interface'
import { Modal } from 'antd'
import { userAction } from '@/stores/slices/user'
export default function Navbar() {
    const userStore = useSelector((store: StoreType) => {
        return store.userStore
    })
    console.log("🚀 ~ file: Navbar.tsx:11 ~ userStore ~ userStore:", userStore)
   
    const dispatch = useDispatch()
    
    const categoryStore: any = useSelector((store: StoreType) => {
        return store.categoryStore

    })
    console.log("🚀 ~ file: Navbar.tsx:15 ~ constcategoryStore:any=useSelector ~ categoryStore:", categoryStore)
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(null);


    const handleClick = (index: any) => {
        setIsActive(index);
      
    };
    const handleLogout = () => {
        Modal.confirm({
            content: "Bạn Có Muốn Đăng Xuất?",
            onOk: () => {
                localStorage.removeItem("token");
                userStore.socket?.disconnect()
                dispatch(userAction.setCart(null))
                dispatch(userAction.setData(null))
                dispatch(userAction.setReceipt(null))
                dispatch(userAction.setSocket(null))
            },
        });
    };
    
    return (

        <>
            <div className='header_top'>
                <div className="left_header">
                    <span><i className="fa-brands fa-facebook"></i></span>
                    <span> <i className="fa-brands fa-instagram"></i></span>
                    <span><i className="fa-brands fa-youtube"></i></span>
                    <span><i className="fa-brands fa-twitter"></i></span>
                    <span><i className="fa-solid fa-phone"></i></span>
                    <span>1800 888 618</span>
                    <span><i className="fa-regular fa-envelope"></i></span>
                    <span>cskh@anphuoc.com.vn</span>
                </div>
                <div className="right_header">
                    {!userStore.data? (  <><span><i className="fa-regular fa-registered"></i></span><span onClick={() => navigate("/register")}>Đăng Kí</span><span><i className="fa-solid fa-right-to-bracket"></i></span><span onClick={() => navigate("/login")}>Đăng Nhập</span></>)
                    :(
                       <>
                                <div className='user'>
                                    <img src={(userStore.data).avatar} alt="" />
                                    <div className='user_menu'>
                                        {userStore.data!.role=="ADMIN"&&(
                                        <><span  onClick={() => navigate("/admin/category")}>.AdminPage</span><br /></>)}
                                    
                                        <span>.Tùy Chỉnh</span><br />
                                        <span onClick={() => {
                                                    handleLogout()
                                                }}>.Đăng Xuất</span>
                                    </div>
                                    <div className='name'> <span>Xin Chào!!</span>{(userStore.data).firstName} {(userStore.data).lastName}</div>
                                </div>
                               
                       </>
                    ) }
                   
                   
                   
                </div>
            </div>
            <div className='nav_container'>
                <div className='home_icon'>
                    <img onClick={() => navigate("/")} src="../img/logo/logo.png" alt="" />
                </div>
                <div className='menu'>
                    
                    {categoryStore?.data.map((item:Category, index:number) => (
                        <span
                            key={index}
                            className={`custom-span ${isActive === index ? 'active' : ''}`}
                            onClick={() => {handleClick(index),
                                 navigate(`product/${item.id}/productlist/1`)}}
                        >
                            {item.name}
                        </span>
                    ))}
                    
                </div>
                <div className="search_cart">
                    <span><i className="fa-solid fa-magnifying-glass"></i></span>
                    <span className='qtt'><i onClick={() => navigate("/cart")} className="fa-solid fa-cart-shopping"></i>
                    <span>{userStore.cart?.detail.reduce((value, cur) => {
                    return value += cur.quantity
                }, 0)}</span>
                    </span>
                </div>
            </div>
        </>
    )
}
