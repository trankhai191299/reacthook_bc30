import React from 'react'
import { useDispatch } from 'react-redux'
import ModalHoc from '../../HOC/ModalHoc'
import { setComponent } from '../../redux/reducers/drawerReducer'
import Home from '../HookDemo/UseHookRouter/DemoUseParam/Home'
import LoginDemo from '../HookDemo/UseHookRouter/LoginDemo/LoginDemo'
import UseRefDemo from '../HookDemo/UseRefDemo/UseRefDemo'

let LoginModalComponent = new ModalHoc(LoginDemo)
export default function HocDemo() {
    const dispatch = useDispatch()
  return (
    <div>
        <button
        type="button"
        className="btn btn-success m-5"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
        onClick={()=>{
            const action = setComponent(UseRefDemo)
            dispatch(action)
        }}
      >
        Open Login
      </button>
      <button
        type="button"
        className="btn btn-primary m-5"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
        // onClick={()=>{
        //     const action = setComponent(Home)
        //     dispatch(action)
        // }}
      >
        Open home
      </button>

    </div>
  )
}
