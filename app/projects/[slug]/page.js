import projects from "../../data/projects.json";
import Header from "../../components/header";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-4 md:px-10">
      <Header />
      <main className="max-w-4xl mx-auto space-y-6 py-10">
        <Link
          href="/"
          className="text-sm md:text-lg text-blue-500 hover:underline my-4 inline-flex items-center"
        >
          ← Go Back
        </Link>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p>{project.explanation}</p>

        {project.tinkercad && (
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              🔗 Tinkercad Simulation
            </h2>
            <a
              href={project.tinkercad}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600"
            >
              Click here to view on Tinkercad
            </a>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-semibold mb-2">🔧 Components</h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-blue-100 dark:bg-blue-900">
                <th className="p-2 border">Component</th>
                <th className="p-2 border">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {project.components.map((c, idx) => (
                <tr key={idx}>
                  <td className="border p-2">{c.name}</td>
                  <td className="border p-2 text-center">{c.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">💻 Code</h2>
          <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            <code>{project.code}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">📷 Circuit Diagram</h2>
          <img
            src={project.image}
            alt="Circuit diagram"
            className="rounded shadow"
          />
        </section>
      </main>
    </div>
  );
}
