import React, { useEffect, useState } from 'react';
import "./adreceipt.scss";
import ModalAddNewProduct from '@/components/modal/ModalAddNewProduct';
import { useSelector } from 'react-redux';
import { Product, Receipt } from '@/interface';
import ButtonSubmit from '@/components/button/ButtonSubmit';
import { StoreType } from '@/stores';
import api from '@/services/api';
import moment from 'moment';

export default function AdminReceipt() {
    const [receipt, setReceipt] = useState<Receipt[] | null>(null);

    useEffect(() => {
        api.receiptApi.findReceipt()
            .then((res) => {
                setReceipt(res.data.data);
            })
            .catch((err) => {
                // Xử lý lỗi
            });
    }, []);

    return (
        <div className='YTOcontainerss'>
            <div className='navaaabar'>
                <div className="nav_item">
                    <h1>RECEIPT MANAGER</h1>
                    <span><i className="fa-regular fa-bell"></i> </span>
                    <span><i className="fa-regular fa-envelope"></i></span>
                </div>
            </div>
            <div className='search'>
                <input className='inputs' type="text" name="search" placeholder="Search Product.." />
            </div>
            <div className='body'>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>USER NAME</th>
                            <th>STATUS</th>
                            <th>TOTAL</th>
                            <th>CREATED AT</th>
                            <th>PAY MODE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {receipt?.map((item: Receipt, index: number) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.user.userName}</td>
                                <td>{item.status}</td>
                                <td>{item.total}</td>
                                <td>{moment(Number(item.createAt)).format('DD/MM/YYYY HH:mm:ss')}</td>
                                <td>{item.payMode}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
