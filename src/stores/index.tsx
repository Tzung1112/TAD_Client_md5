
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './slices/user';
import { categoryReducer } from './slices/category';
import { productReducer } from './slices/product';

const RootReducer = combineReducers({
    userStore: userReducer,
    categoryStore: categoryReducer,
    productStore: productReducer
})

export type StoreType = ReturnType<typeof RootReducer>;

export const store = configureStore({
    reducer: RootReducer
})