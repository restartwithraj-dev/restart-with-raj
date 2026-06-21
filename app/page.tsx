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
    </div>

  );
}

