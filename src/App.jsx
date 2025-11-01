import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useTheme } from './useTheme'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className="min-h-screen font-inter">
      <Navbar onToggleTheme={toggle} theme={theme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
