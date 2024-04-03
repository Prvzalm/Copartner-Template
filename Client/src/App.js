import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";
import Main from "./components/Main";
import OTP from "./components/OTP";
import Success from "./components/Success";

function App() {

  const token = sessionStorage.getItem('token');

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" errorElement={<ErrorPage/>} element={<Main token={token}/>}>
        <Route path="login" element={<Login />} />
        <Route path="otp" element={<OTP />} />
        <Route path="success" element={<Success />} />
      </Route>
    )
  );

  return (
    <div className="bg-[#06030E] overflow-hidden z-10">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
