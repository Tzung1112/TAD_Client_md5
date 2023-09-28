import axios from "axios"
import { NewUser, LoginUser, NewCategory, NewCategoryDetail } from "../../../interface"

export default {
    create: async (newCategorydetail: NewCategoryDetail, categoryId:number ) => {
        return await axios.post(`${import.meta.env.VITE_SV_HOST}categorydetail/${categoryId}`, newCategorydetail)
    },
    findCategory: async () => {
        return await axios.get(import.meta.env.VITE_SV_HOST + "categorydetail" + "/findAll")
    }
}