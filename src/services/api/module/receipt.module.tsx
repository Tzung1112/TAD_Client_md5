import axios from "axios"
import { NewUser, LoginUser, NewCategory } from "../../../interface"

export default {
    
    findReceipt: async () => {
        return await axios.get(import.meta.env.VITE_SV_HOST + "receipts")
    }
}