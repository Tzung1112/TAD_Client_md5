import React from 'react'
import "./footer.scss"
export default function Footer() {
  return (
    <div className='footer_container'>
          <div className='footer_main'>
            <table>
                  <thead>
                                <tr>
                                      <th style={{ color: "red" }}>AN PHƯỚC GROUP</th>
                                      <th>CHĂM SÓC KHÁCH HÀNG</th>
                                      <th>LIÊN KẾT NHANH</th>
                                      <th>KẾT NỐI VỚI CHÚNG TÔI</th>
                                </tr>
                  </thead>
               
                  <tbody>
                                <tr>
                                      <td>100/11-12 An Dương Vương, P.9, Q.5, TP. Hồ Chí Minh, Việt Nam</td>
                                      <td>Hướng dẫn mua hàng</td>
                                      <td>Bộ sưu tập</td>
                                      <td style={{ display: "flex", justifyContent: "space-around" }}>
                                            <i className="fa-brands fa-facebook"> </i>
                                            <i className="fa-brands fa-instagram"></i>
                                            <i className="fa-brands fa-youtube"></i>
                                            <i className="fa-brands fa-twitter"></i></td>

                                </tr>
                                <tr>
                                      <td>GPKD Số: 0301241545</td>
                                      <td>Hướng dẫn chọn kích cỡ An Phước - Pierre Cardin</td>
                                      <td>Tin thời trang</td>
                                      <td><img style={{ height: "80px" }} src="../img/logo/logosalenoti.png" alt="" /></td>
                                </tr>
                                <tr>
                                      <td>Ngày cấp: 26/04/1993GPKD Số: 0301241545</td>
                                      <td>Hướng dẫn chọn kích cỡ Anamai - Bonjour</td>
                                      <td>Tin tức - Sự kiện</td>

                                </tr>
                                <tr>
                                      <td>Tư vấn mua hàng: 1800 888 618</td>
                                      <td>Thời gian giao hàng</td>
                                      <td>Hệ thống cửa hàng An Phước - Pierre Cardin</td>
                                </tr>
                                <tr>
                                      <td>Văn phòng: +84.28.3835.0059</td>
                                      <td>Chính sách bảo mật</td>
                                      <td>Hệ thống cửa hàng Anamai - Bonjour</td>
                                </tr>
                                <tr>
                                      <td>CSKH: 1800 888 618</td>
                                      <td>Chính sách đổi hàng</td>
                                      <td>Tuyển dụng</td>
                                </tr>
                                <tr>
                                      <td>Fax: +84.28.3835.0058</td>
                                      <td>Cam kết chất lượng</td>
                                      <td>Cảnh giác giả mạo An Phước - Pierre Cardin </td>
                                </tr>
                  </tbody>
            </table>
          </div>
          <div className='footer'>
              Copyright © 2020 - 2023 An Phước.
          </div>
    </div>
  )
}
