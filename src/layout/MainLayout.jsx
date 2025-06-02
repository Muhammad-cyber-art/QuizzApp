import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  
  return (
    <div className="w-full h-screen flex justify-center flex-col items-center   ">
    <Navbar/>
     <main className="">
      <Outlet />
      </main> 
    </div>
  );
}

export default MainLayout;
