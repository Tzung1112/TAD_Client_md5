import axios from "axios"
import { NewUser, LoginUser, NewCategory, NewProduct } from "../../../interface"

export default {
  
    create: async (categoryDetailsId: number, formData:any) => {
        return await axios.post(`${import.meta.env.VITE_SV_HOST}product/${categoryDetailsId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    findProduct: async (categoryDetailsId:number) => {
        return await axios.get(`${import.meta.env.VITE_SV_HOST}product/${categoryDetailsId}`)
    },
    findAll: async () => {
        return await axios.get(import.meta.env.VITE_SV_HOST + "product" + "/findAll")
    },
    findProductById: async (productId:string) => {
        return await axios.get(`${import.meta.env.VITE_SV_HOST}product/${productId}`)
    },
    createProductOption:async (data:any) => {
        return await axios.post(`${import.meta.env.VITE_SV_HOST}product-options`, data)
    },

}