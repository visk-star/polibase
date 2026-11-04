import heroImage from '../assets/polibase-hero-white-house.png'

export default function Home({ onNavigate, text }) {
  const homeText = text.home

  return (
    <div>
      <section className="relative overflow-hidden bg-white">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center sm:object-right"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-white/58" aria-hidden="true" />
        <div className="absolute inset-0 bg-[rgba(255,255,255,0.22)] sm:bg-[rgba(255,255,255,0)]" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase text-civic-purple">{homeText.badge}</p>
            <h1 className="mt-4 text-5xl font-black tracking-normal text-civic-ink sm:text-6xl lg:text-7xl">{homeText.title}</h1>
            <p className="mt-6 text-xl leading-8 text-slate-700">
              {homeText.subtitle}
            </p>
            <p className="mt-4 inline-flex rounded-lg bg-white/80 px-3 py-2 text-sm font-bold text-civic-purple shadow-soft">
              {homeText.focus}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => onNavigate('map')}
                className="rounded-lg bg-civic-blue px-5 py-3 text-base font-bold text-white shadow-soft transition hover:bg-blue-700"
              >
                {homeText.exploreMap}
              </button>
              <button
                onClick={() => onNavigate('basics')}
                className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-base font-bold text-civic-ink transition hover:border-slate-400 hover:bg-slate-50"
              >
                {homeText.learnBasics}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-civic-ink">{homeText.whoTitle}</h2>
          <p className="mt-4 leading-7 text-civic-muted">
            {homeText.whoText}
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {homeText.audiences.map((audience) => (
            <div key={audience} className="rounded-xl border border-slate-200 bg-white p-5 text-center font-bold shadow-soft">
              {audience}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
