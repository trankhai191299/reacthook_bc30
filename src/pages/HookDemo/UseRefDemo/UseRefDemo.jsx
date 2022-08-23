import React, { useRef, useState } from 'react'

/*
    useState : lấy các input có thể bị chỉnh sửa
    useRef : đối vs form không chỉnh sửa
    useRef : lưu các giá trị sau khi render
*/
export default function UseRefDemo() {
    // const [userLogin,setUserLogin] = useState({
    //     username :"",
    //     password :""
    // })
    
    const userLoginRef = useRef({
        username :"",
        password :"",
    })
    const handleChange = (e) =>{
        let {id,value} = e.target;
        userLoginRef.current[id] = value
        // setUserLogin({
        //     ...userLogin,
        //     [id]:value,
        // })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
  return (
    <form className='container' onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="form-group">
            <p>username</p>
            <input type="text"  className='form-control' id='username' onInput={handleChange}/>
        </div>
        <div className="form-group">
            <p>password</p>
            <input type="password"  className='form-control' id='password' onInput={handleChange}/>
        </div>
        <div className="form-group">
            <button className='btn btn-success mt-3' type='submit'>Login</button>
        </div>
    </form>
  )
}
