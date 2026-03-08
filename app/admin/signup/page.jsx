"use client";

import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [message,setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,email,password})
    });

    const data = await res.json();
    setMessage(data.message || data.error);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSignup} className="space-y-4">

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign-up
          </button>

        </form>

        <p className="text-center text-sm mt-4 text-gray-600">
          Already have an account?{" "}
          <Link href="/admin/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>

        <p className="text-center mt-4 text-red-500">
          {message}
        </p>

      </div>

    </div>
  );
}