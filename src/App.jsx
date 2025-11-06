import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  const [isDark, setIsdark] = useState(false)

  return (
    <div className={` ${isDark ? 'bg-[#111]' : 'bg-white'} font-nunito `}>
      <Header />
      <div className='py-4 px-10 '>
        <Hero />
        <Projects />
        <Contact />
      </div>

    </div>
  )
}

export default App
