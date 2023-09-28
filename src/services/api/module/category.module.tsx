import axios from "axios"
import { NewUser, LoginUser, NewCategory } from "../../../interface"

export default {
    create: async (newCategory: NewCategory) => {
        return await axios.post(import.meta.env.VITE_SV_HOST + "categories", newCategory)
    },
    findCategory: async () => {
        return await axios.get(import.meta.env.VITE_SV_HOST + "categories" + "/findAll")
    }
}