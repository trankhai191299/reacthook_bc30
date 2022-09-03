//rxslice
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    arrProduct : [],
    productDetail :{}
}
/*-----------action creator----------*/
const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getProductAction: (state,action) => {
        const arrProduct = action.payload
        state.arrProduct = arrProduct
    },
    getProductDetailAction:(state,action) =>{
      const productDetail = action.payload
      state.productDetail = productDetail
    }
  }
});
/*-----------action {type,payload}----------*/
export const {getProductAction,getProductDetailAction} = productReducer.actions
export default productReducer.reducer
/*-----------action api----------*/
export const getProductApi = () =>{
  return async (dispatch) =>{
    try {
      const result = await axios({
        url:"https://shop.cyberlearn.vn/api/Product",
        method:"GET"
      })

      // setArrProduct(result.data.content)
      
      const action = getProductAction(result.data.content)
      dispatch(action)
      
    } catch (err) {
      console.log(err)
    }
  }
}

export const getProductDetailApi = (id) =>{
  return async (dispatch) => {
        try{
            let result = await axios({
                url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
                method:"GET"
            })
            // setProductDetail(result.data.content)
            const action = getProductDetailAction(result.data.content)
            dispatch(action)
        }catch(e){
            console.log(e)
        }
  }
}
// const addProductApi = () =>{
//   return async (dispatch) =>{
//     // thuc thi add api
//     //axios them
//     //axios getAll
//     //thuc thi getAll
//     // dispatch(getProductApi())
//     //dispatch => dispatch cac thunk khac
//   }
// }
