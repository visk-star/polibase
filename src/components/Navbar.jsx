import { useState } from 'react'

const navItems = [
  { id: 'home', labelKey: 'home' },
  { id: 'map', labelKey: 'map' },
  { id: 'basics', labelKey: 'basics' },
  { id: 'parties', labelKey: 'parties' },
  { id: 'matters', labelKey: 'whyItMatters' },
  { id: 'news', labelKey: 'news' },
  { id: 'quiz', labelKey: 'quiz' }
]

const languageOptions = [
  { id: 'en', label: 'EN' },
  { id: 'pt', label: 'PT' },
  { id: 'es', label: 'ES' }
]

export default function Navbar({ activePage, language, onLanguageChange, onNavigate, text }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigate = (page) => {
    onNavigate(page)
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          className="flex items-center gap-2 text-left"
          onClick={() => handleNavigate('home')}
          aria-label={text.homeAria}
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-civic-ink text-sm font-bold text-white">
            PB
          </span>
          <span>
            <span className="block text-lg font-bold leading-tight">PoliBase</span>
            <span className="block text-xs text-civic-muted">{text.tagline}</span>
          </span>
        </button>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher language={language} label={text.languageLabel} onLanguageChange={onLanguageChange} />
          <button
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-civic-ink"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {text.menu}
          </button>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  activePage === item.id
                    ? 'bg-slate-900 text-white'
                    : 'text-civic-muted hover:bg-slate-100 hover:text-civic-ink'
                }`}
              >
                {text[item.labelKey]}
              </button>
            ))}
          </div>
          <LanguageSwitcher language={language} label={text.languageLabel} onLanguageChange={onLanguageChange} />
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`rounded-lg px-3 py-2 text-left text-sm font-semibold ${
                  activePage === item.id
                    ? 'bg-slate-900 text-white'
                    : 'text-civic-muted hover:bg-slate-100 hover:text-civic-ink'
                }`}
              >
                {text[item.labelKey]}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function LanguageSwitcher({ language, label, onLanguageChange }) {
  return (
    <div className="flex rounded-lg border border-slate-200 bg-white p-1" aria-label={label}>
      {languageOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => onLanguageChange(option.id)}
          className={`rounded-md px-2 py-1 text-xs font-bold transition ${
            language === option.id
              ? 'bg-civic-purple text-white'
              : 'text-civic-muted hover:bg-slate-100 hover:text-civic-ink'
          }`}
          aria-pressed={language === option.id}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
