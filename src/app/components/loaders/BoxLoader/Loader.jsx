import React from "react";
import "./loader.css";
const Loader = () => {
 return (
  <>
   <div className="flex flex-col justify-center items-center h-screen ">
    <div className="loader">
     <div className="loader-square"></div>
     <div className="loader-square"></div>
     <div className="loader-square"></div>
     <div className="loader-square"></div>
     <div className="loader-square"></div>
     <div className="loader-square"></div>
     <div className="loader-square"></div>
    </div>
    <h1>Loading...</h1>
   </div>
  </>
 );
};

export default Loader;
