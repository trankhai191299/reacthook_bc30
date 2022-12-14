import React from 'react'
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'
export default function HeaderHome() {

  const {userLogin} = useSelector(state=>state.userReducer)
  const renderLoginNavItem = ()=>{
    if(userLogin===null){
      return  <NavLink className="nav-link" to="/login">
                Login (Authorize - token)
              </NavLink>
    }
    return  <NavLink className="nav-link" to="/profile">
              Hello! {userLogin.name}
            </NavLink>
  }
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="">
          Project Hook
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/logindemo">
                Login Demo
              </NavLink>
            </li>
            <li className="nav-item active">
              {renderLoginNavItem()}
            </li>
            {/* <li className="nav-item active">
              
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/hocdemo">
                HOC Demo
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hooks
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/useState">
                  UseState
                </NavLink>
                <NavLink className="dropdown-item" to="/useEffect">
                  UseEffect
                </NavLink>
                <NavLink className="dropdown-item" to="/usecallback">
                  UseCallback
                </NavLink>
                <NavLink className="dropdown-item" to="/usememo">
                  UseMemo
                </NavLink>
                <NavLink className="dropdown-item" to="/useref">
                  UseRef
                </NavLink>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hook Redux
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/reduxdemonumber">
                  DemoNumber
                </NavLink>
                <NavLink className="dropdown-item" to="/reduxdemonfbapp">
                  DemoFBApp
                </NavLink>
                <NavLink className="dropdown-item" to="/customhook">
                  useRoute (custom hook)
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/antd">
                Antd Demo
              </NavLink>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
