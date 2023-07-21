"use client";
import { useEffect, useState } from "react";
import Loader from "./components/loaders/BoxLoader/Loader";
import DownloadSvg from "./components/test-code/DownloadSvg";
export default function Home() {
 const [loading, setloading] = useState(true);
 useEffect(() => {
  setTimeout(() => {
   setloading(false);
  }, 2000);
 }, []);

 return (
  <main className="flex justify-center flex-col py-10 items-center">
   {loading && <Loader />}
   {!loading && (
    <div className="flex justify-center items-center h-screen">
     <h1 className="text-2xl ease-in delay-700 ">We are Coming Soon :)</h1>
    </div>
   )}
  </main>
 );
}
