import React from 'react'
import "./register.scss"
import SubmitButton from '../../components/button/ButtonSubmit'
import api from '../../services/api';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
export default function Register() {
  const navigate = useNavigate()
  const formik=useFormik({
    initialValues:{
      email:"",
      userName:"",
      firstName:"",
      lastName:"",
      password:"",
      confirmedPassword:"",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .required("Bắt Buộc")
        .min(4, "Phải có ít nhất 4 ký tự"),
      email: Yup.string()
        .required("Bắt Buộc")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          "Vui lòng nhập địa chỉ email hợp lệ"
        ),
      password: Yup.string()
        .required("Bắt Buộc")
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
          "Mật khẩu phải từ 7-19 ký tự và chứa ít nhất một chữ cái, một số và một ký tự đặc biệt"
        ),
      confirmedPassword: Yup.string()
        .required("Bắt Buộc")
        .oneOf([Yup.ref("password"), null!], "Mật khẩu phải trùng khớp"),
      firstName: Yup.string()
        .required("Bắt Buộc")
        .matches(
          /^([a-zA-Z ]){2,30}$/,
          "Họ và tên đệm không được chứa số và có độ dài tối đa 30 ký tự."
        ),
      lastName: Yup.string()
        .required("Bắt Buộc")
        .matches(
          /^([a-zA-Z ]){2,30}$/,
          "Tên không được chứa số và có độ dài tối đa 30 ký tự."
        ),
    }),

    onSubmit: (values) => {
      window.alert("Form submitted");

    },

  })
  const handleSubmit= async (e:any)=>{
    e.preventDefault();

    const newUser = {
      userName: formik.values.userName,
      email: formik.values.email,
      firstName: formik.values.firstName,
      lastName: formik.values.lastName,
      password: formik.values.password
    };
    console.log("🚀 ~ file: Register.tsx:70 ~ handleSubmit ~ newUser:", newUser)
    
    await api.userApi.register(newUser)
      .then(res => {
       
        if (res.status != 200) {
          message.warning("Đăng Kí Thất Bại")
        } else {
          message.success("Đăng Kí Thành Công")
          setTimeout(() => {
            navigate("/login")
          }, 2000)
        }
      })
      .catch(err => {
        console.log("🚀 ~ file: Register.tsx:83 ~ handleSubmit ~ err:", err)
        
      })

    
  }
  
  return (
    <div className='register_container'>
     <div className='register'>
        <div className='img'>
          <img src="https://www.anphuoc.com.vn/Data/Sites/1/Product/7858/thumbs/fb2009_2.jpg" alt="" />
        </div>
        <form action="" className='form' onSubmit={handleSubmit}>
          <h1>ĐĂNG KÍ TÀI KHOẢN</h1>
          <label htmlFor="">Tên tài khoản</label>
          <input type="text" name='userName' onChange={formik.handleChange} />
          {formik.errors.userName ?(
            <p className="errorMsg"> {formik.errors.userName} </p>
          ) : (<p className="errorMsg"> </p>)}
          <label htmlFor="">Email</label>
          <input type="text" name='email' onChange={formik.handleChange} />
          {formik.errors.email ? (
            <p className="errorMsg"> {formik.errors.email} </p>
          ) : (<p className="errorMsg"> </p>)}
          <label htmlFor="" >Mật khẩu</label>
          <input type="password" name='password' onChange={formik.handleChange} />
          {formik.errors.password ? (
            <p className="errorMsg"> {formik.errors.password} </p>
          ) : (<p className="errorMsg"> </p>)}
          <label htmlFor="" >Xác nhận mật khẩu</label>
          <input type="password" name='confirmedPassword' onChange={formik.handleChange} />
          {formik.errors.confirmedPassword ? (
            <p className="errorMsg"> {formik.errors.confirmedPassword} </p>
          ) : (<p className="errorMsg"> </p>)}
          <label htmlFor="" >Tên</label>
          <input type="text" name='lastName' onChange={formik.handleChange} />
          {formik.errors.lastName ? (
            <p className="errorMsg"> {formik.errors.lastName} </p>
          ) : (<p className="errorMsg"> </p>)}
          <label htmlFor="" >Họ</label>
          <input type="text" name='firstName' onChange={formik.handleChange} />
          {formik.errors.firstName ? (
            <p className="errorMsg"> {formik.errors.firstName} </p>
          ) : (<p className="errorMsg"> </p>)}
          <div className='button'> <SubmitButton
            label={"SUBMIT"}></SubmitButton></div>
        </form>

     </div>
    </div>
  )
}
