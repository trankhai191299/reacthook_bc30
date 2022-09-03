import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

export default function Login() {

    //lay du lieu tu form
    const frm = useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        validationSchema: Yup.object().shape({
            email:Yup.string().required('email ko dc bo trong').email('email ko dung dinh dang'),
            password:Yup.string().required('mat khau ko dc bo trong').min(6,"pass tu 6 -32 ky tu").max(32,"pass tu 6 - 32 ky tu"),
        }),
        onSubmit : (values) =>{
            console.log(values)
        }
    })

  return (
    <form className='container' onSubmit={frm.handleSubmit}>
        <h3>Login</h3>
        <div className="form-group">
            <p>Email</p>
            <input type="email" className='form-control' id="email" name='email' onChange={frm.handleChange} onBlur={frm.handleBlur}/>
            {frm.errors.email?<span className='text-danger'>{frm.errors.email}</span>:""}
        </div>
        <div className="form-group">
            <p>Password</p>
            <input type="password" className='form-control' id="password" name='password' onChange={frm.handleChange} onBlur={frm.handleBlur}/>
            {frm.errors.password?<span className='text-danger'>{frm.errors.pasword}</span>:""}
        </div>
        <div className="form-group">
            <button className='btn btn-success'>Login</button>
        </div>
    </form>
  )
}
