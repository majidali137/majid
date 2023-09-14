import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer"

export default function AppLayout() {
  return (
    <div className="overscroll-contain">
      <NavBar/>

      <Outlet/>

      
      <Footer/>
    </div>
  );
}
