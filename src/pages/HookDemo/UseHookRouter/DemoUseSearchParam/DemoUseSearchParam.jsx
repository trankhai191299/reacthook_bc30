import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSearchParams,NavLink } from "react-router-dom";

export default function DemoUseSearchParam() {
    let [searchParams, setSearchParams] = useSearchParams();
    let keywordRef = useRef('')
    let [arrProduct,setArrProduct] = useState([])
    let timeoutRef = useRef('')
    const getProductByKeyword = async() =>{
        try {
            //lay keyword
            let keyword = searchParams.get('keyword')
            if(keyword.trim()!== '' && keyword != null){
            let result = await axios({
                url:"https://shop.cyberlearn.vn/api/Product?keyword="+keyword,
                method : "GET",
            })
            setArrProduct(result.data.content)
            clearTimeout(timeoutRef.current)
            }else{
                setArrProduct([])
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        
        //call api
        getProductByKeyword()
        
    },[keywordRef.current])


    const handleChange = (e) =>{
        keywordRef.current = e.target.value
        // 
        timeoutRef = setTimeout(() => {
            setSearchParams({keyword:keywordRef.current})
        }, 1000);
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setSearchParams({keyword:keywordRef.current})
    }
  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <h3>Search</h3>
        <div className="form-group">
          <p>Nhập từ khoá</p>
          <div className="input-group-prepend">
            <input
              className="form-control"
              id="keywordRef"
              onChange={handleChange}
            />
            <button className="btn bg-dark text-white">Search</button>
          </div>
        </div>
        <div className="mt-2">
          <p>Kết quả tìm kiếm</p>
          <div className="row">
            {arrProduct.map((shoe,index)=>{
                return <div className="col-4 my-2" key={index}>
                    <div className="card">
                        <img src={shoe.image} alt={shoe.name} />
                        <div className="card-body">
                            <p>{shoe.name}</p>
                            <p>{shoe.price}$</p>
                            <NavLink className="btn btn-success" to={`/detail/${shoe.id}`}>View Detail</NavLink>
                        </div>
                    </div>
                </div>
            })}
          </div>
        </div>
      </form>
    </div>
  );
}
