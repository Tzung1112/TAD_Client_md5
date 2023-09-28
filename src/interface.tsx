export interface PropsButtonSubmit {
    onClick?: () => void;
    label: React.ReactNode;
    className?: string;
}
export interface NewUser{
    
        email: string;

        firstName: string;

        lastName: string;

        userName: string;

        password: string;
}
export interface NewCategory {
        name: string;
}
export interface NewCategoryDetail {
        name: string;
}
export interface NewProduct {
     
        name: string;
        description: string;
        price: number;
        size: ProductSize;
        color: ProductColor;

}

export enum ProductSize {
        SMALL = 'Small',
        MEDIUM = 'Medium',
        LARGE = 'Large',
        // Thêm các giá trị kích thước khác tùy ý
}

export enum ProductColor {
        RED = 'Red',
        BLUE = 'Blue',
        GREEN = 'Green',
        // Thêm các giá trị màu sắc khác tùy ý
}
export interface Category {
        id:number;
        name: string;
        categoryDetails: CategoryDetails[]
}
export interface CategoryDetails{
        id: string;
        name: string;
}

export interface LoginUser{
        userNameOrEmail: string;
        password: string;
}
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
export interface Product{
        id: string;
        name: string;
        description: string;
        price: number;
        size: ProductSize;
        color: ProductColor;
        pictures: Productpicture[];
        categoryDetail: CategoryDetails[]; 
}
export interface Productpicture {
        id: string;
        url: string;
        product: Product;
}
export interface User {
        map: any;
        id: string;
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
export interface Picture {
        file: File;
        url?: string;
}