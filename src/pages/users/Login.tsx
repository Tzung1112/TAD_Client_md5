import React from 'react'
import "./login.scss"
import SubmitButton from '../../components/button/ButtonSubmit'
import api from '@/services/api';
import { useNavigate } from 'react-router-dom';
import message from 'antd/es/message';
export default function Login() {
    const navigate = useNavigate()
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const User= {
            userNameOrEmail: e.target.userNameOrEmail.value,
            password: e.target.password.value
        };

        await api.userApi.login(User)
            .then(res => {

                if (res.status != 200) {

                } else {
                    
                    localStorage.setItem("token", res.data.token)
                    message.success("Đăng Nhập thành công")
                    setTimeout(() => {
                      navigate("/")
                    }, 2000)
                }
            })
            .catch(err => {

            })


    }
  return (
      <div className='login_container'>
          <div className='login'>
              <div className='img'>
                  <img src="https://www.anphuoc.com.vn/Data/Sites/1/Product/4360/thumbs/jqk_0304.jpg" alt="" />
              </div>
              <form action="" className='form' onSubmit={handleSubmit}>
                  <h1>ĐĂNG NHẬP</h1>
                  <label htmlFor="">Tài khoản hoặc Email</label>
                  <input type="text" name='userNameOrEmail'/>
                  <label htmlFor="">Mật khẩu</label>
                  <input type="password" name='password'/>
                  <div className='button' > <SubmitButton
                      label={"SUBMIT"}></SubmitButton></div>
              </form>

          </div>
      </div>
  )
}

