"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../components/themeToggle";

export default function FeedbackPage() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formcarry.com/s/ta260QPSIu7", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <>
      <main className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="flex justify-between items-center mb-6">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-500 dark:text-blue-300"
          >
            🚀 Arduino Hub
          </Link>
          <ThemeToggle />
        </div>
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">💬 Send us your feedback</h2>
          {submitted ? (
            <p className="text-green-500">
              Thanks! Your feedback was received successfully 🙌.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded border dark:bg-gray-700 dark:text-white"
                placeholder="What should we add, fix, or improve?"
                rows={5}
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Submit Feedback
              </button>
            </form>
          )}
        </div>
      </main>
    </>
  );
}
