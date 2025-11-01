import { Moon, Sun, Github, Instagram } from 'lucide-react'

export default function Navbar({ onToggleTheme, theme }) {
  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-[#121212]/70 backdrop-blur-md border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-xl">R<span className="text-accent">.</span></a>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#projects" className="hover:text-accent">Projects</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-accent inline-flex items-center gap-2">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href="https://www.instagram.com/xoxryz/" target="_blank" rel="noreferrer" className="hover:text-accent inline-flex items-center gap-2">
            <Instagram className="w-4 h-4" /> Instagram
          </a>
        </div>

        <button
          onClick={onToggleTheme}
          aria-label="Toggle dark mode"
          className="glass rounded-xl px-3 py-2 inline-flex items-center gap-2"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </nav>
    </header>
  )
}
