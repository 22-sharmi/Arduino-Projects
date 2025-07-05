"use client";
import { useState } from "react";

export default function FeedbackForm() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just show confirmation. You can connect to backend later.
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow max-w-xl mx-auto my-10">
      <h2 className="text-xl font-semibold mb-4">💬 Your Feedback</h2>
      {submitted ? (
        <p className="text-green-600">Thank you! Your feedback has been received. 🙌</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            className="w-full p-3 rounded border dark:bg-gray-700 dark:text-white"
            rows="4"
            placeholder="Tell us what you think (what to add, improve, fix...)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
}
