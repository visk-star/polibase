export default function Parties({ text }) {
  const partiesText = text.parties

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase text-civic-red">{partiesText.badge}</p>
        <h1 className="mt-3 text-4xl font-black text-civic-ink">{partiesText.title}</h1>
        <p className="mt-4 leading-7 text-civic-muted">
          {partiesText.intro}
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {partiesText.groups.map((group) => (
          <article key={group.name} className={`rounded-xl border p-6 shadow-soft ${group.color}`}>
            <h2 className="text-2xl font-bold text-civic-ink">{group.name}</h2>
            <p className="mt-4 leading-7 text-civic-muted">{group.summary}</p>
            <h3 className="mt-6 font-bold text-civic-ink">{partiesText.figuresTitle}</h3>
            <ul className="mt-3 grid gap-2">
              {group.figures.map((figure) => (
                <li key={figure} className="rounded-lg bg-white px-4 py-3 text-civic-muted">
                  {figure}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 text-civic-muted shadow-soft">
        {partiesText.note}
      </div>
    </section>
  )
}
