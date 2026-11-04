export default function ExplainerCard({ title, description, label, accent = 'blue' }) {
  const accents = {
    blue: 'border-civic-blue/20 bg-blue-50 text-civic-blue',
    red: 'border-civic-red/20 bg-rose-50 text-civic-red',
    purple: 'border-civic-purple/20 bg-violet-50 text-civic-purple',
    slate: 'border-slate-200 bg-slate-50 text-slate-700'
  }

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className={`mb-4 inline-flex rounded-lg border px-3 py-1 text-xs font-bold ${accents[accent]}`}>
        {label}
      </div>
      <h3 className="text-lg font-bold text-civic-ink">{title}</h3>
      <p className="mt-3 leading-7 text-civic-muted">{description}</p>
    </article>
  )
}
