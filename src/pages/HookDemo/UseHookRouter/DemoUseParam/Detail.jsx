import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams,NavLink} from 'react-router-dom'
import {getProductDetailApi} from '../../../../redux/reducers/productReducer'
export default function Detail() {
    // const [productDetail,setProductDetail] = useState({})
    const {productDetail} = useSelector(state=>state.productReducer)
    const dispatch = useDispatch()
    const params = useParams()
    const getProductDetail = async() =>{
        let {id} = params
        const actionThunk = getProductDetailApi(id)
        dispatch(actionThunk)
    }
    useEffect(()=>{
        getProductDetail()
    },[params.id])
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
