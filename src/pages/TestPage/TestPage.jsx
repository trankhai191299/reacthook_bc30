import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function TestPage() {
    let [like,setLike] = useState(0)
    const handleClick = () =>{
        setLike(like=>++like)
    }
    useEffect(()=>{
        console.log("MESSAGE 1");
    },[])
    useEffect(()=>{
        console.log("MESSAGE 2");
    })
  return (
    <div className='container'>
        <div className="card col-3 m-2 p-3">
            <img className='card-img-top' src="https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg" alt="Iphone Xs Max" />
            <div className="card-body">
                <h4 className='card-title'>Iphone Xs Max</h4>
                <p className='card-text'>1000$</p>
                <p className='card-text'>Like:{like}</p>
                <button className='btn btn-success' onClick={handleClick}>Like</button>
            </div>
        </div>
    </div>
  )
}
