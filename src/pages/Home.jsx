import heroImage from '../assets/polibase-hero-white-house.png'

export default function Home({ onNavigate, text }) {
  const homeText = text.home

  return (
    <div className="home-editorial">
      <section className="home-editorial__hero">
        <img src={heroImage} alt="" className="home-editorial__image" aria-hidden="true" />
        <div className="home-editorial__shade" aria-hidden="true" />

        <div className="home-editorial__hero-inner">
          <p className="home-editorial__eyebrow">{homeText.badge}</p>
          <div className="home-editorial__headline-wrap">
            <h1 className="home-editorial__headline">{homeText.title}</h1>
            <span className="home-editorial__rule" aria-hidden="true" />
          </div>
          <p className="home-editorial__intro">{homeText.subtitle}</p>

          <div className="home-editorial__actions">
            <button onClick={() => onNavigate('map')} className="home-editorial__primary">
              {homeText.exploreMap}
            </button>
            <button onClick={() => onNavigate('basics')} className="home-editorial__secondary">
              {homeText.learnBasics}
            </button>
          </div>

          <p className="home-editorial__focus">{homeText.focus}</p>
        </div>
      </section>

      <section className="home-editorial__audience">
        <div className="home-editorial__section-label" aria-hidden="true">WHO</div>
        <div className="home-editorial__audience-content">
          <p className="home-editorial__kicker">{homeText.whoTitle}</p>
          <h2 className="home-editorial__statement">{homeText.whoText}</h2>

          <div className="home-editorial__audience-grid">
            {homeText.audiences.map((audience, index) => (
              <div key={audience} className="home-editorial__audience-item">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{audience}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
