import React, { useState } from 'react'
import "./navbar.scss"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { StoreType } from '@/stores'
import { Category, User } from '@/interface'
export default function Navbar() {
    const userStore = useSelector((store: StoreType) => {
        return store.userStore
    })
    const categoryStore: any = useSelector((store: StoreType) => {
        return store.categoryStore

    })
    console.log("🚀 ~ file: Navbar.tsx:15 ~ constcategoryStore:any=useSelector ~ categoryStore:", categoryStore)
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(null);
    const [isActivea, setIsActivea] = useState(false);
    const [isActiveb, setIsActiveb] = useState(false);

    const handleClick = (index: any) => {
        setIsActive(index);
      
    };
    const handleClickkk = (index: any) => {
        setIsActiveb(!isActiveb);
       
    };

    const handleClickk = () => {
        setIsActivea(!isActivea);
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
                    {!userStore? (  <><span><i className="fa-regular fa-registered"></i></span><span onClick={() => navigate("/register")}>Đăng Kí</span><span><i className="fa-solid fa-right-to-bracket"></i></span><span onClick={() => navigate("/login")}>Đăng Nhập</span></>)
                    :(
                       <>
                                <div className='user'>
                                    <img src={(userStore as User).avatar} alt="" />
                                    <div className='user_menu'>
                                        <span>.Tùy Chỉnh</span><br />
                                        <span>.Đăng Xuất</span>
                                    </div>
                                    <div className='name'> <span>Xin Chào!!</span>{(userStore as User).firstName} {(userStore as User).lastName}</div>
                                </div>
                               
                       </>
                    ) }
                   
                   
                   
                </div>
            </div>
            <div className='nav_container'>
                <div className='home_icon'>
                    <img src="../img/logo/logo.png" alt="" />
                </div>
                <div className='menu'>
                    
                    {categoryStore?.data.map((item:Category, index:number) => (
                        <span
                            key={index}
                            className={`custom-span ${isActive === index ? 'active' : ''}`}
                            onClick={() => {handleClick(index),
                                 navigate(`product/${item.id}`)}}
                        >
                            {item.name}
                        </span>
                    ))}
                    
                </div>
                <div className="search_cart">
                    <span><i className="fa-solid fa-magnifying-glass"></i></span>
                    <span><i className="fa-solid fa-cart-shopping"></i></span>
                </div>
            </div>
        </>
    )
}
