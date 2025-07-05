"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AccessGate({ children }) {
  const [hasAccess, setHasAccess] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const secretCode = "sharmi2205";

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
      setTimeout(() => setError(false), 1000);
    }
  };

  if (hasAccess) return children;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/60 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 border border-gray-300 dark:border-gray-700 shadow-2xl rounded-xl p-8 w-[90%] max-w-sm text-center space-y-6 transition-all"
      >
        <h2 className="text-2xl font-bold tracking-wide text-gray-800 dark:text-white">
          🔐 Enter Secret Code
        </h2>

        <motion.input
          key={error ? "shake" : "normal"}
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter the code"
          className={`w-full px-4 py-2 rounded-md border transition-all duration-300 focus:outline-none dark:bg-gray-800 dark:text-white ${
            error
              ? "border-red-500 animate-shake"
              : "border-gray-300 focus:ring-2 focus:ring-blue-500"
          }`}
        />

        {error && (
          <p className="text-red-500 text-sm font-medium">
            ❌ Incorrect code. Try again.
          </p>
        )}

        <button
          onClick={handleAccess}
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-all shadow-md hover:shadow-lg"
        >
          🔓 Continue
        </button>
      </motion.div>
    </div>
  );
}
