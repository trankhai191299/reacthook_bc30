import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams,NavLink} from 'react-router-dom'

export default function Detail() {
    const [productDetail,setProductDetail] = useState({})
    const params = useParams()
    const getProductDetailApi = async() =>{
        let {id} = params
        try{
            let result = await axios({
                url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
                method:"GET"
            })
            setProductDetail(result.data.content)
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        getProductDetailApi()
    },[])
  return (
    <div className='container'>
        <h3>Params: Product - {params.id}</h3>
        <div className="row">
            <div className="col-4">
                <img className='w-100' src={productDetail.image} alt={productDetail.name} />
            </div>
            <div className="col-8">
                <h2>{productDetail.name}</h2>
            </div>
        </div>
        <h3>Related Product</h3>
        <div className="row mt-2">
            {productDetail.relatedProducts?.map((item,index)=>{
                return  <div className='col-4 mt-2' key={index}>
                <div className="card">
                    <img src={item.image} alt={item.name} />
                    <div className="card-body bg-dark text-white">
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        <NavLink className='btn btn-success' to={`/detail/${item.id}`}>View detail</NavLink>
                    </div>
                </div>
                </div>
                })
            }
        </div>
    </div>
  )
}
