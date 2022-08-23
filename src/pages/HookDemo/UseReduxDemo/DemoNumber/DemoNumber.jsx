import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeNumber } from '../../../../redux/reducers/numberReducer'

export default function DemoNumber() {
    const number = useSelector(state=>state.number)

    const dispatch = useDispatch()
  return (
    <div className='container'>
        <h3>Number: {number}</h3>
        <button className='btn btn-danger' onClick={()=>{
            // const action = {
            //     type : "CHANGE_NUMBER",
            //     payload : number + 1
            // }
            const action = changeNumber(number + 1)
            dispatch(action)
        }}>+</button>
    </div>
  )
}
