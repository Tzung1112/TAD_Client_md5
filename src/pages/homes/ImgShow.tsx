import React from 'react'
import "./imgshow.scss"
export default function ImgShow() {
  return (
    <div className='ImgShow'>
        <div className="img_show_row">
            <h4>Khám phá các sản phẩm cao cấp từ An Phước - Pierre Cardin</h4>
            <div className="row_img">
                <div className="img">
                <img src="../categoryimg/1.jpg" alt="" />
                </div>
                <div className="img">
                <img src="../categoryimg/2.jpg" alt="" />
                </div>
                <div className="img">
                <img src="../categoryimg/3.jpg" alt="" />
                </div>
                <div className="img">
                <img src="../categoryimg/4.jpg" alt="" />
                </div>
                <div className="img">
                <img src="../categoryimg/5.jpg" alt="" />
                </div>
                
               
            </div>
        </div>
        <div className="show_product">
            <div className="left_product">
                <h4>Today's Outfit</h4>
                <div className='product_img'>
                    <img src="https://www.anphuoc.com.vn/Data/Sites/1/Banner/fb1609.jpg" alt="" />
                </div>
            </div>
            <div className="right_product">
            <h4>Sản phẩm nổi bật </h4>
            <div className='product_imgs'>
           <div  className="card_item" >
            <div className="img">
            <img src="../productimgs/1.jpg" alt="" />
            </div>
            <div className='content'>
                <span>Áo sơ mi Nam tay dài Pierre Cardin - PSD001531</span>
             
                <span>2.878.000 đ</span>
            </div>
        </div>
        <div  className="card_item" >
            <div className="img">
            <img src="../productimgs/2.jpg" alt="" />
            </div>
            <div className='content'>
                <span>Áo sơ mi Nam tay ngắn Pierre Cardin - PSN001488</span>
       
                <span>2.244.000 đ</span>
            </div>
        </div>
        <div  className="card_item" >
            <div className="img">
            <img src="../productimgs/3.jpg" alt="" />
            </div>
            <div className='content'>
                <span>Áo Thun Nam tay ngắn An Phước - ATH000684</span>
            
                <span>995.000 đ</span>
            </div>
        </div>
        <div  className="card_item" >
            <div className="img">
            <img src="../productimgs/4.png" alt="" />
            </div>
            <div className='content'>
                <span>Áo Thun Nữ An Phước - ATHN00684</span>
              
                <span>820.000 đ</span>
            </div>
        </div>
            </div>
            
            </div>
        </div>
    </div>
  )
}
