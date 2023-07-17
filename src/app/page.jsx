"use client";
import { useEffect, useState } from "react";
import Loader from "./components/loaders/BoxLoader/Loader";
export default function Home() {
 const [loading, setloading] = useState(true);
 useEffect(() => {
  setTimeout(() => {
   setloading(false);
  }, 2000);
 }, []);

 return (
  <main className="">
   {loading && <Loader />}
   {!loading && (
    <div className="flex justify-center items-center h-screen">
     <h1 className="text-2xl ease-in delay-700 ">We are Coming Soon :)</h1>
    </div>
   )}
  </main>
 );
}
