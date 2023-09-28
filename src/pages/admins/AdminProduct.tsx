import React from 'react'
import "./adminproduct.scss"
import ModalAddNewProduct from '@/components/modal/ModalAddNewProduct'
export default function AdminProduct() {
    return (
        <div className='container'>
            <div className='navbar'>
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
                            <th>TITLE</th>
                            <th>AVATAR</th>
                        </tr>
                   </thead>
                   <tbody></tbody>
                </table>
            </div>
        </div>
    )
}
