import React,{useState} from 'react'
import BaiTapChonXe from './BaiTapChonXe'

export default function UseStateDemo() {
  /*
    useState: hàm của react cung cấp
    ... Không gọi hàm trong if , switch
    [giá trị thay đổi, hàm set lại giá trị mới] = useState(giá trị ban đầu)
  */
  const [like,setLike] = useState(1)

  return (
    <div>
      <div className="container">
        <div className="card w-25">
          <img src="https://i.pravatar.cc?u=25" alt="avatar" />
          <div className="card-body">
            <h3>Khai Tran</h3>
            <p>Tuoi: 23</p>
            <p>Like: {like}</p>
            <button className='btn btn-danger' onClick={()=>{
              setLike(like + 1)
            }}>Like</button>
          </div>
        </div>
        <hr />
        <BaiTapChonXe/>
      </div>
    </div>
  )
}
