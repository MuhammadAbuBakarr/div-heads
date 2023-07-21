"use client";
import React, { useState } from "react";
import axios from "axios";
import fiverrIcons from "@/app/data/icons/fiverrIcons.json";
import Image from "next/image";
const DownloadSvg = () => {
 const [links, setlinks] = useState([]);

 //  const checkLink = async (link) => {
 //   try {
 //    const response = await axios.get(link);
 //    if (response.status === 200) {
 //     return true;
 //    }
 //   } catch (error) {
 //    return false;
 //   }
 //  };
 // Validate SVG WITH FETCHING HEADER OF URL
 //  const isSVGURLHeaderCheck = async (url) => {
 //   try {
 //    const response = await fetch(url, { method: "HEAD" });

 //    if (response.headers.get("content-type")?.includes("image/svg+xml")) {
 //     return true;
 //    }

 //    return false;
 //   } catch (error) {
 //    return false;
 //   }
 //  };
 // CheckSVGURL
 //  const isSVGURL = async (url) => {
 //   return new Promise((resolve) => {
 //    const img = new Image();

 //    img.onload = function () {
 //     resolve(this.naturalWidth > 0);
 //    };

 //    img.onerror = function () {
 //     resolve(false);
 //    };

 //    img.src = url;
 //   });
 //  };
 //  const HandleDownload = async () => {
 //   const urls = [];
 //   for (let i = 1000; i <= 3000; i++) {
 //    const url = `https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/${i}.svg`;
 //    const working = await isSVGURLHeaderCheck(url);
 //    if (working) {
 //     setlinks((prev) => [...prev, url]);
 //    }
 //   }
 //  };
 //  const saveValidUrlsAsJson = () => {
 //   const dataToSave = JSON.stringify(links, null, 2);
 //   const blob = new Blob([dataToSave], { type: "application/json" });
 //   const url = URL.createObjectURL(blob);
 //   const link = document.createElement("a");
 //   link.href = url;
 //   link.download = "validUrls.json";
 //   document.body.appendChild(link);
 //   link.click();
 //   document.body.removeChild(link);
 //   URL.revokeObjectURL(url);
 //   //   download(url, "validUrls.json");
 //  };

 return (
  <>
   <div className="flex flex-col space-y-5 justify-center items-center py-5">
    <h1 className="text-3xl ">Fiverr Icons</h1>
    <div className="flex justify-center items-center mt-4 px-5  gap-10 flex-wrap">
     {fiverrIcons?.map((link) => (
      <Image key={link} src={link} width={48} height={48} loading="lazy" alt="" />
     ))}
    </div>
   </div>
  </>
 );
};

export default DownloadSvg;
