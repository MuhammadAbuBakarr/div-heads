import Image from "next/image";
import React from "react";
// import logo from "";
const Navbar = () => {
 const navItems = ["Home", "Our Projects", "img", "Services", "Contact Us"];
 const NavItemList = navItems.map((item, index) => {
  if (item === "img") {
   return (
    <Image key={index} src={"/divheads.svg"} width={"70"} height={"70"} alt="" className="" />
   );
  }
  return <h1 key={index}>{item}</h1>;
 });
 return (
  <>
   <div className="flex justify-center w-full items-center gap-x-32 py-5  backColor text-white ">
    {NavItemList}
   </div>
  </>
 );
};

export default Navbar;
