import Image from "next/image";
import React from "react";

const Header = () => {
 return (
  <>
   {/* Main Div  */}
   <div className="bgr flex justify-center px-[150px] ">
    {/* Left SIde  */}
    <div className="b w-[50%] py-16">
     <h1 className="font-bold text-6xl ">
      Let us solve your critical website development challenges
     </h1>
    </div>
    {/*  */}
    {/* Right Side */}
    <div className="bgr ">
     <Image src={"./header-img.svg"} width={475} height={475} />
    </div>
   </div>
  </>
 );
};

export default Header;
