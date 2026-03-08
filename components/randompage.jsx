"use client";

import { useState } from "react";

export default function RandomPage() {
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
  ]);

  const shuffleItems = () => {
    // Shuffle array randomly
    setItems((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 to-cyan-500  text-white flex flex-col items-center justify-start">
      {/* Header */}
      <header >
         <div className=" flex items-end justify-end rounded-b-full bg-black size-10 animate-bounce">
      </div>
      </header>
      <div className="animate-caret-blink bg-amber-700 rounded-t-full size-7">
  
</div>

      {/* Hero Section */}
      <section className="my-10 flex flex-col items-center gap-4">
        <p className="text-lg">Click the button to shuffle the items:</p>
        <button
          onClick={shuffleItems}
          className="px-6 py-3 rounded-lg bg-white text-blue-600 font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Shuffle Items
        </button>
      </section>

      {/* List */}
      <ul className="space-y-2 text-xl">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="bg-white/20 px-4 py-2 rounded-md backdrop-blur-sm shadow-md"
          >
            {item}
          </li>
        ))}
      </ul>

      
     
    </div>
    
    
  );
}