import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseStateDemo from "./pages/HookDemo/UseStateDemo/UseStateDemo";
import UseEffectDemo from "./pages/HookDemo/UseEffectDemo/UseEffectDemo";
import UseCallBackDemo from "./pages/HookDemo/UseCallBackDemo/UseCallBackDemo";
import UseMemoDemo from "./pages/HookDemo/UseMemoDemo/UseMemoDemo";
import UseRefDemo from "./pages/HookDemo/UseRefDemo/UseRefDemo";
//setup store
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import DemoNumber from "./pages/HookDemo/UseReduxDemo/DemoNumber/DemoNumber";
import DemoFacebookApp from "./pages/HookDemo/UseReduxDemo/DemoFacebookApp/DemoFacebookApp";
import LoginDemo from "./pages/HookDemo/UseHookRouter/LoginDemo/LoginDemo";
import Home from "./pages/HookDemo/UseHookRouter/DemoUseParam/Home";
import Detail from "./pages/HookDemo/UseHookRouter/DemoUseParam/Detail";
import DemoUseSearchParam from "./pages/HookDemo/UseHookRouter/DemoUseSearchParam/DemoUseSearchParam";
import DemoUseRoutes from "./pages/HookDemo/CustomHook/DemoUseRoutes";
import 'antd/dist/antd.css';
import AntdDemo from "./pages/AntdDemo/AntdDemo";
import './assets/scss/style.scss'
import Login from "./pages/Login/Login";
//Cau hinh hisory
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Profile from "./pages/Profile/Profile";
import HocDemo from "./pages/HocDemo/HocDemo";
import AdminPage from "./pages/AdminPage/AdminPage";
import AdminTemplate from "./templates/AdminTemplate";
import { Drawer } from "antd";
import DrawerHoc from "./HOC/DrawerHoc";
export const history = createBrowserHistory({ window });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <DrawerHoc/>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="detail" >
            <Route path=":id" element={<Detail />}></Route>
          </Route>
          <Route path="hocdemo" element={<HocDemo />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="search" element={<DemoUseSearchParam />}></Route>
          <Route path="customhook" element={<DemoUseRoutes />}></Route>
          <Route path="useState" element={<UseStateDemo />}></Route>
          <Route path="useEffect" element={<UseEffectDemo />}></Route>
          <Route path="usecallback" element={<UseCallBackDemo />}></Route>
          <Route path="usememo" element={<UseMemoDemo />}></Route>
          <Route path="useref" element={<UseRefDemo />}></Route>
          <Route path="reduxdemonumber" element={<DemoNumber />}></Route>
          <Route path="reduxdemonfbapp" element={<DemoFacebookApp />}></Route>
          <Route path="logindemo" element={<LoginDemo />}></Route>
          <Route path="antd" element={<AntdDemo />}></Route>
          
        </Route>
      </Routes>
      <Routes>
        <Route path="admin" element={<AdminPage/>}>
          <Route path="users" element={<AdminTemplate Component={AntdDemo}/>}></Route>
          <Route index element={<AdminTemplate Component={Login}/>}></Route>
          <Route path="useref" element={<AdminTemplate Component={UseRefDemo}/>}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
