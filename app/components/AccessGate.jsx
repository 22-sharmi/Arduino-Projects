"use client";
import { useState, useEffect } from "react";

export default function AccessGate({ children }) {
  const [hasAccess, setHasAccess] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const secretCode = "sharmi2025"; // you can customize this

  useEffect(() => {
    const allowed = sessionStorage.getItem("access_granted");
    if (allowed === "true") setHasAccess(true);
  }, []);

  const handleAccess = () => {
    if (input === secretCode) {
      sessionStorage.setItem("access_granted", "true");
      setHasAccess(true);
    } else {
      setError(true);
    }
  };

  if (hasAccess) return children;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/70 z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-xl text-center space-y-4">
        <h2 className="text-xl font-semibold">🔐 Enter Secret Code</h2>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 rounded border dark:bg-gray-800 dark:text-white"
          placeholder="Enter the code"
        />
        {error && <p className="text-red-500 text-sm">Incorrect code. Try again.</p>}
        <button
          onClick={handleAccess}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
}