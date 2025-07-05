import Link from 'next/link'
import ThemeToggle from './themeToggle'

export default function Header() {
  return (
    <header className="py-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-blue-500 dark:text-blue-300">
        🚀Arduino Hub
      </Link>
      <nav className="flex items-center space-x-4">
        <Link href="/feedback" title="Send Feedback" className='text-xl md:text-3xl'>💌</Link>
      <ThemeToggle />
      </nav>
    </header>
  )
}
