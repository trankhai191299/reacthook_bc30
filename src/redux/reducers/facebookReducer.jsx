import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComment :[
        {name:'khai1',content:"bruh1"},
        {name:'khai2',content:"bruh2"},
    ]
}

const facebookReducer = createSlice({
  name: 'facebookReducer',
  initialState,
  reducers: {
    addComment:(state,action) =>{
        const userComment = action.payload
        state.arrComment.push({...userComment})
    }
  }
});

export const {addComment} = facebookReducer.actions

export default facebookReducer.reducer