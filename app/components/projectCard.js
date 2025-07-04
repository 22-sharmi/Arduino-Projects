import Link from 'next/link'

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-[1.01]">
      <div className="mb-3 inline-block px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
        {project.category}
      </div>
      <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{project.title}</h2>
      <p className="text-base text-gray-700 dark:text-gray-300">{project.description}</p>
    </Link>
  )
}
