"use client"
import { useEffect, useState } from 'react'
// import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setDark(true)
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setDark(true)
    }
  }

  return (
    <button onClick={toggleTheme} className="text-yellow-500 dark:text-yellow-300">
      {dark ? <p className='text-xl md:text-3xl'>🌞</p> : <p className='text-xl md:text-3xl'>🌜</p>}
    </button>
  )
}
