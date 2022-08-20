import React, { useEffect, useState } from 'react'
import axios from 'axios'
// let timeout = {};
export default function UseEffectDemo() {
    const [arrProduct,setArrProduct] = useState([
        {id:1,name:'product 1',price:1000,image:"https://i.pravatar.cc"}
    ])
    const [count,setCount] = useState(60)
    const renderProduct = () =>{
        // goi api
        return arrProduct.map((prod,index)=>{
            return <div className="col-4" key={index}>
                <div className="card">
                    <img src={prod.image} alt="..." />
                    <div className="card-body bg-dark text-light">
                        <h3>{prod.name}</h3>
                        <p>{prod.price}</p>
                        <button className='btn btn-success'>Add to Cart</button>
                    </div>
                </div>
            </div>
        })
    }
    //https://shop.cyberlearn.vn/api/Product
    const getApi = async() =>{
        try{
            const result = await axios({
                url : "https://shop.cyberlearn.vn/api/Product",
                method:"GET",
            })
            // console.log(result.data.content)
            setArrProduct(result.data.content)
        }catch(err){
            console.log({err})
        }
    }
    

    useEffect(()=>{
        
        getApi();

    // timeout =  setInterval(()=>{
    //         setCount((count)=>{
    //             return count - 1
    //         })
    //     },1000)

    //     return () => {
    //         clearInterval(timeout)
    //     }
    },[])
  return (
    <div className='container'>
        <h3>Count : {count}</h3>
        <hr />
        <h3>Shoes App</h3>
        <div className="row">
            {renderProduct()}
        </div>
    </div>
  )
}
