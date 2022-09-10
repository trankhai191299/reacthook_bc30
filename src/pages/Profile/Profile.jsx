import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getProductApi } from "../../redux/reducers/productReducer";
import { ACCESS_TOKEN, getStore } from "../../util/tools";


export default function Profile() {
  const { userLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch()
  useEffect(()=>{
    //khi trang vua load => goi api
    if(getStore(ACCESS_TOKEN)){
      dispatch(getProductApi())
    }
  },[])
  // if(!getStore(ACCESS_TOKEN)){
  //   //neu chua dang nhap => chuyen huong trang
  //   alert("Dang nhap de vao day")
  //   return <Navigate to='/login'></Navigate>
  // }
  return (
    <div className='container-fluid'>

            <div className="d-flex align-items-start">
                
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <div>
                        <img src={userLogin?.avatar} className="w-100" alt="..." />
                    </div>
                    <button className="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true">Profile</button>
                    <button className="nav-link" id="v-pills-history-tab" data-bs-toggle="pill" data-bs-target="#v-pills-history" type="button" role="tab" aria-controls="v-pills-history" aria-selected="false">Orderhistory</button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        Profile
                    </div>
                   
                    <div className="tab-pane fade" id="v-pills-history" role="tabpanel" aria-labelledby="v-pills-history-tab">
                        {userLogin?.ordersHistory?.map((orderItem,index)=>{
                          return <div className="mt-2" key={index}>
                            <h3>Order Detail</h3>
                            <table className="table">
                              <thead>
                              <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Image</th>
                              </tr>
                              </thead>
                              <tbody>
                              {orderItem.orderDetail?.map((item,index)=>{
                                return <tr key={index}>
                                  <td>{item.name}</td>
                                  <td>1</td>
                                  <td>
                                    <img src={item.image} alt="..." width={50} height={50} style={{objectFit:'cover'}}/>
                                  </td>
                                </tr>
                              })}
                              </tbody>
                            </table>
                          </div>
                        })}
                    </div>
                </div>
            </div>

        </div>
  );
}
