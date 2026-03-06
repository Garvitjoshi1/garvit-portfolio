"use client"

import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg border dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
    >
      {theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}
    </button>
  )
}