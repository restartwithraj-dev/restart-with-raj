import Image from "next/image";

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
    </div>
  );
}
