import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Component:(props)=>{
        return <p>Default</p>
    }
}

const drawerReducer = createSlice({
  name: 'drawerComponent',
  initialState,
  reducers: {
    setComponent:(state,action)=>{
        //lay component tu payload
        const Component = action.payload
        state.Component = Component
    }
  }
});

export const {setComponent} = drawerReducer.actions

export default drawerReducer.reducer