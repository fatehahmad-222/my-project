"use client";


import { useState } from "react";

export default function ABC(){
    const [msg,setmessage]= useState("")
    const click = () =>{
        setmessage("clicked");
    };
    return(
        <div className="h-screen w-screen bg-amber-200 relative flex items centre justify-center">
        <button onClick={click}>
            Click Me
            <p>{msg}</p>
        </button>
        </div>
    );
}