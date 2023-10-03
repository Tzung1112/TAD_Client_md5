import categoryModule from "./module/category.module";
import categorydetailModule from "./module/categorydetail.module";
import productModule from "./module/product.module";
import receiptModule from "./module/receipt.module";
import userModule from "./module/user.module";

export default {
    userApi: userModule,
    categoryApi: categoryModule,
    categorydetailApi: categorydetailModule,
    productApi:productModule,
    receiptApi:receiptModule
}