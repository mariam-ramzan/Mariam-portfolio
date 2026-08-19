import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Process from './components/Process'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Activity from './components/Activity'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ui/ScrollProgress'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <ScrollProgress />

      {/* Keyboard users ke liye skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Experience />
        <Education />
        <Certifications />
        <Activity />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
