import React from 'react'

export default function AdminTemplate(props) { //props.Component
  return (
    <div>
        <div className="d-flex" style={{minHeight:'100vh'}}>
            <div className="menu w-25 bg-dark text-light pt-5">
                <nav className='d-flex flex-column'>
                    <a href="#">Quan ly nguoi dung</a>
                    <a href="#">Quan ly san pham</a>
                </nav>
            </div>
            <div className="content w-75">
                <props.Component/>
            </div>
        </div>
    </div>
  )
}
