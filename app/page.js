"use client";

import { useState } from "react";
import projects from "./data/projects.json";
import ProjectCard from "./components/projectCard";
import Header from "./components/header";

const allCategories = ["All", ...new Set(projects.map((p) => p.category))];

export default function HomePage() {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All"
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <div className="min-h-screen px-4 md:px-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="max-w-6xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Arduino Projects</h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-1 rounded-full text-sm font-medium border transition-all ${
                selected === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}
