import axios from "axios"
import { NewUser, LoginUser } from "../../../interface"

export default {
    register: async (newUser: NewUser) => {
        return await axios.post(import.meta.env.VITE_SV_HOST+"user", newUser)
    },
    login: async (LoginUser: LoginUser) => {
        return await axios.post(import.meta.env.VITE_SV_HOST + "user" + "/login", LoginUser)
    }
}