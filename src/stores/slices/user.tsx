import { Product } from "@/interface";
import { createSlice } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";


enum UserRole {
    OWNER = "OWNER",
    ADMIN = "ADMIN",
    MEMBER = "MEMBER",
}

enum UserStatus {
    ACTIVE = "ACTIVE",
    BANNED = "BANNED",
    TEMPORARY_BAN = "TEMPORARY_BAN"
}

enum ReceiptStatus {
    SHOPPING = "SHOPPING", // Khách đang lựa, cart
    PENDING = "PENDING", // chờ shop xác nhận
    ACCEPTED = "ACCEPTED", // shop đã ok chờ vận chuyển tới nhận
    SHIPPING = "SHIPPING", // bên vận chuyển thao tác
    DONE = "DONE" // khách đã nhận hàng và hoàn tất thủ tục thanh toán
}

export interface User {
    id: number;
    avatar: string;
    email: string;
    emailAuthentication: boolean;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    role: UserRole;
    status: UserStatus;
    createAt: String;
    updateAt: String;
}

export interface Guest {
    id: number;
    name: string;
    numberPhone: string;
    email: string;
    receipts: Receipt[];
}


export interface ReceiptDetail {
    id: number;
    receiptId: number;
    optionId: number;
    quantity: number;
    receipt: Receipt;
    option: {
        id: number;
        name: string;
        productId: number;
        product: Product;
        product_option_images: {
            id: number;
            url: string;
        };
    }
}

export interface Receipt {
    id: number;
    userId: number;
    guestId: number;
    user: User;
    guest: Guest;
    total: number;
    status: ReceiptStatus;
    createAt: string;
    accepted: string;
    shipAt: string;
    doneAt: string;
    detail: ReceiptDetail[]
}
export interface UserState {
    data: User | null;
    reLoad: boolean;
    socket: null | Socket;
    receipts: null | Receipt[];
    cart: null | Receipt;
    cartPayQr: null | string;
}

export const initialState: UserState = {
    data: null,
    reLoad: false,
    socket: null,
    receipts: null,
    cart: null,
    cartPayQr: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setData: function (state, action) {
            return {
                ...state,
                data: action.payload
            }
        },
        setSocket: function (state, action) {
            return {
                ...state,
                socket: action.payload
            }
        },
        setReceipt: function (state, action) {
            return {
                ...state,
                receipts: action.payload
            }
        },
        setCart: function (state, action) {
            return {
                ...state,
                cart: action.payload
            }
        },
        setCartPayQr: function (state, action) {
            return {
                ...state,
                cartPayQr: action.payload
            }
        },
        reload: function (state) {
            return {
                ...state,
                reLoad: !state.reLoad
            }
        }
    }
})

export const userAction = {
    ...userSlice.actions
}

export const userReducer = userSlice.reducer