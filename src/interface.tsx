export interface PropsButtonSubmit {
    onClick?: () => void| undefined;
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
        category: Category;
        products: Product[];
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
//

    enum ReceiptStatus {
        SHOPPING = "SHOPPING", // Khách đang lựa, cart
        PENDING = "PENDING", // chờ shop xác nhận
        ACCEPTED = "ACCEPTED", // shop đã ok chờ vận chuyển tới nhận
        SHIPPING = "SHIPPING", // bên vận chuyển thao tác
        DONE = "DONE" // khách đã nhận hàng và hoàn tất thủ tục thanh toán
    }

    export interface Guest {
        id: string;
        name: string;
        numberPhone: string;
        email: string;
        receipts: Receipt[];
    }
    
    
    export interface ReceiptDetail {
        id: string;
        receiptId: string;
        optionId: string;
        quantity: number;
        receipt: Receipt;
        option: {
            id: string;
            name: string;
            productId: string;
            product: Product;
            product_option_images: {
                id: string;
                url: string;
            };
        }
    }
    
    export interface Receipt {
        id: string;
        userId: string;
        guestId: string;
        user: User;
        guest: Guest;
        total: number;
        status: ReceiptStatus;
        createAt: string;
        accepted: string;
        shipAt: string;
        doneAt: string;
        detail: ReceiptDetail[];
        payMode: PayMode
    }
export enum PayMode {
        CASH = "CASH",
        ZALO = "ZALO"
}
export interface Product{
        map(arg0: (item: Product) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
        id: string;
        name: string;
        description: string;
        price: number;
        categoryDetailId:number
        size: Size[];
        color: ProductColor;
        pictures: Productpicture[];
        avatar:string
        product_options:ProductOption[],
        categoryDetail: CategoryDetails; 
}
export interface ProductOption{
        id:number;
        productId:string;
        size: Size[]
}
export interface Size{
        id: number;
        name: string;  
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