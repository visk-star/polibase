import ExplainerCard from '../components/ExplainerCard.jsx'

export default function LearnBasics({ text }) {
  const basicsText = text.basics

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase text-civic-blue">{basicsText.badge}</p>
        <h1 className="mt-3 text-4xl font-black text-civic-ink">{basicsText.title}</h1>
        <p className="mt-4 leading-7 text-civic-muted">
          {basicsText.intro}
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {basicsText.cards.map((item) => (
          <ExplainerCard key={item.title} label={basicsText.label} {...item} />
        ))}
      </div>
    </section>
  )
}
