import { Product } from "@/interface";
import api from "@/services/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
interface ProductState{
    data:Product[]
}

const initialState:ProductState={
    data:[]
}
export const findProduct=createAsyncThunk(
    "product/findProduct",
    async ()=>{
        const result=await api.productApi.findProduct()
        return result.data
    }
)
const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        addProduct:(state, action)=>{
            state.data=[...action.payload];
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(findProduct.fulfilled,(state,action)=>{
            state.data=[...action.payload.data]
        })
    }
})

export const productAction={
    ...productSlice.actions,
    findProduct
}
export const productReducer=productSlice.reducer