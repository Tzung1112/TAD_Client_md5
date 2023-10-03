import { Outlet, useNavigate } from "react-router-dom"
import "./admin.scss"
import RoutePage from "../../routes/RoutePage"
import RouteAdmin from "../../routes/RouteAdmin"

export default function Admin() {
    const navigate=useNavigate()
  return (
    <div className="Admin_container">
        <div className="sidebar_admin">
            <div className="sidebar_header">
                  <i className="fa-solid fa-bars"></i>
                  <h1>ADMIN</h1>
            </div>
              <div className="sidebar_main">
                <ul>
                    <li className="category">CATEGORY
                 <li className="item" onClick={() => navigate("/admin/category")}>MANAGER</li>
              
                        
                    </li>
            <li className="category">CATEGORY DETAIL
              <li className="item" onClick={() => navigate("/admin/categorydetail")}>MANAGER</li>


            </li>
                      <li className="category">PRODUCT
              <li className="item" onClick={() => navigate("/admin/product")}>MANAGER</li>
                    </li>
                     
                      <li className="category">RECEIPT
                          <li className="item" onClick={() => navigate("/admin/receipt")}>MANAGER</li>
                    </li>
                    <li className="category">USER
                          <li className="item">MANAGER</li>
                    </li>

                </ul>
              </div>
        </div>
        <div className="main_admin">
              <Outlet/>
        </div>
    </div>
  )
}
