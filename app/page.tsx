"use client";
import { useState } from "react";

import Image from "next/image";
function StatCard({label, value}: {label: string; value: string}){
  return(
    <div className="rounded-xl border border-gray-200 p-6 text-center">
     <p className="text-sm text-gray-500">{label}</p>
     <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}
export default function Home() {
  const[text, setText]= useState("");
  const[trades,setTrades]= useState<string[]>([]);
  
  function addTrade(){
    if (text.trim()==="")return;
    setTrades([...trades,text])
    setText("")
  }
  return (
    <div className="flex flex-col items-center min-h-screen gap-10 p-8 text-center">
       <h1 className="text-7xl font-bold">
        Restart with Raj
       </h1>
       <p className="text-lg text-gray-400 max-w-xl">
        A live trading Lab- every trade,every loss, in the open
       </p>
       <button className="bg-black text-white font-semibold px-6 py-3 rounded-full">
        follow the journey 
       </button>
    <div className="flex gap-4 flex-wrap justify-center">
      <StatCard label="total trades" value="42"/>
      <StatCard label="win rate" value="50%" />
      <StatCard label="net Pnl" value="+$ 2,480"/>
      <StatCard label="Drawdown" value="4%"/>
      

    </div>
    <div className="flex felx-col items-center min-h-screen gap-10 p-8 text-center">
      <h1 className="text-7xl font-bold">
        Restart with raj
      </h1>
      <p className="text-lg text-gray-400 max-w-xl">
        a live trading lab- every trade , every loss, in the open 
      </p>
      <button className="bg-black text-white font-semibold px-6 py-3 rounded-full">
        Follow the journey
      </button>
      {/* New -the trade logger*/}
      <div className="flex flex-col items-center gap-3 mt-6 w-full max-w-md">
        <div className="flex gap-2 w-full">
          <input 
            value={text}
            onChange={(e)=> setText(e.target.value)}
            placeholder="e.g. XAUUSD long"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
           />
           <button 
            onClick={()=> addTrade()}
            className="bg-black text-white font-semibold px-5 py-2 rounded-lg"
           >
              add 
            </button>
        </div>
        <u1 className="w-full flex flex-col gap-2 ">
          {trades.map((trade,index)=>(
           <li
              key={index}
              className="flex justify-between items-cneter border border-gray-200 rounded-lg px-3 py-2"
           >
            <span>{trade}</span>
            <button 
            onClick={()=> setTrades(trades.filter((_,i)=>i !==index))}
            className="text-red-500 text-sm"
            >
              delete
            </button>
           </li>

          ))}
        </u1>

      
      
      </div>
    </div>
    </div>

  );
}

