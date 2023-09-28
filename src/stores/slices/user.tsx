import { User } from "@/interface";
import { createSlice } from "@reduxjs/toolkit";



const initialState: null | User = null;

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setData: function (state, action) {
            return action.payload
        }
    }
})

export const userAction = {
    ...userSlice.actions
}

export const userReducer = userSlice.reducer