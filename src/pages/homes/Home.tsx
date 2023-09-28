import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./home.scss"
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
export default function Home() {
  return (
    <div className='home_containers'>
          <Navbar></Navbar>
       
              <div className='content_body'>
                  <Outlet />
              </div>
       <Footer></Footer>
             
        
       
    </div>
  )
}
