import { Category } from "@/interface";
import api from "@/services/api";
import { AsyncThunkAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
    data: Category[];
}

const initialState: CategoryState = {
    data: [],
};

export const findCategory = createAsyncThunk(
    "category/findCategory",
    async () => {
        const result = await api.categoryApi.findCategory();
        return result.data;
    }
);

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        addCategory:(state, action)=>{
           state.data = [...action.payload];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(findCategory.fulfilled, (state, action) => {
            state.data = [...action.payload.data];
        });
    },
});

export const categoryAction = {
    ...categorySlice.actions,
     findCategory
};
export const categoryReducer = categorySlice.reducer;
