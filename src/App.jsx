import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Map from './pages/Map.jsx'
import LearnBasics from './pages/LearnBasics.jsx'
import Parties from './pages/Parties.jsx'
import WhyItMatters from './pages/WhyItMatters.jsx'
import News from './pages/News.jsx'
import Quiz from './pages/Quiz.jsx'
import { translations } from './data/translations.js'

const pages = {
  home: Home,
  map: Map,
  basics: LearnBasics,
  parties: Parties,
  matters: WhyItMatters,
  news: News,
  quiz: Quiz
}

export default function App() {
  const [activePage, setActivePage] = useState('home')
  const [language, setLanguage] = useState('en')
  const CurrentPage = pages[activePage]
  const text = translations[language]

  const navigate = (page) => {
    setActivePage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-civic-paper text-civic-ink">
      <Navbar
        activePage={activePage}
        language={language}
        onLanguageChange={setLanguage}
        onNavigate={navigate}
        text={text.nav}
      />
      <main>
        <CurrentPage language={language} onNavigate={navigate} text={text} />
      </main>
      <Footer text={text.footer} />
    </div>
  )
}
