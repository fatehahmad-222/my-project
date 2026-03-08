"use client";

import { useEffect, useState } from "react";

export default function TestMongo() {
  const [status, setStatus] = useState("Checking...");
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch("/api/test-connection")
      .then(res => res.json())
      .then(data => {
        if (data.message === "MongoDB connected!") {
          setStatus("✅ MongoDB Connected!");
          setCollections(data.collections.map(col => col.name));
        } else {
          setStatus("❌ Connection Failed");
        }
      })
      .catch(err => setStatus("❌ Connection Failed: " + err.message));
  }, []);

  return (
    <div style={{ padding: "50px", fontFamily: "Arial" }}>
      <h1>MongoDB Connection Test</h1>
      <p>Status: {status}</p>
      {collections.length > 0 && (
        <>
          <h3>Collections:</h3>
          <ul>
            {collections.map((c, idx) => (
              <li key={idx}>{c}</li>
            ))}
          </ul>
        </>
      )}
    </div>
    
  );
}
