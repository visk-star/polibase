export default function WhyItMatters({ text }) {
  const mattersText = text.whyItMattersPage

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase text-civic-purple">{mattersText.badge}</p>
        <h1 className="mt-3 text-4xl font-black text-civic-ink">{mattersText.title}</h1>
        <p className="mt-4 leading-7 text-civic-muted">
          {mattersText.intro}
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {mattersText.topics.map((topic, index) => (
          <article key={topic.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-slate-900 font-bold text-white">
              {index + 1}
            </div>
            <h2 className="text-xl font-bold text-civic-ink">{topic.title}</h2>
            <p className="mt-3 leading-7 text-civic-muted">{topic.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
