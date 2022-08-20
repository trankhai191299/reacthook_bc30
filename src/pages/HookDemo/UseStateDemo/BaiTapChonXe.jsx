import React, { useState } from 'react'

export default function BaiTapChonXe() {

    const [img,setImg] = useState('./img/products/red-car.jpg')
    const handleColor = (color) =>{
        setImg(`./img/products/${color}-car.jpg`)
    }
  return (
    <div >
        <h3>Bai tap chon xe</h3>
        <div className="row">
            <div className="col-6">
                <img src={img} alt="car" className='w-100'/>
            </div>
            <div className="col-6">
                <button className='btn btn-danger mx-2 text-white' onClick={()=>{
                    handleColor('red')
                }}>Red</button>
                <button className='btn btn-dark mx-2 text-white' onClick={()=>{
                    setImg('./img/products/black-car.jpg')
                }}>Black</button>
                <button className='btn btn-secondary mx-2' onClick={()=>{
                    setImg('./img/products/silver-car.jpg')
                }}>Silver</button>
                <button className='btn btn-light mx-2 border' onClick={()=>{
                    setImg('./img/products/steel-car.jpg')
                }}>Steel</button>
            </div>
        </div>
    </div>
  )
}
