const leaningStyles = {
  democratic: 'border-blue-200 bg-blue-50 text-civic-blue',
  republican: 'border-rose-200 bg-rose-50 text-civic-red',
  competitive: 'border-violet-200 bg-violet-50 text-civic-purple'
}

export default function StateCard({ mapText, state }) {
  if (!state) {
    return (
      <section className="rounded-xl border border-dashed border-slate-300 bg-white p-6 text-civic-muted">
        {mapText.emptyState}
      </section>
    )
  }

  const translatedLeaning = mapText.leanings[state.colorCategory]

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
      <div>
        <p className="text-sm font-semibold uppercase text-civic-muted">{mapText.snapshot}</p>
        <h2 className="mt-1 text-2xl font-bold text-civic-ink">{state.name}</h2>
        <p className={`mt-3 inline-flex rounded-lg border px-3 py-1 text-sm font-bold ${leaningStyles[state.colorCategory]}`}>
          {mapText.recentVotingTrend}: {translatedLeaning}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm font-bold text-civic-ink">
          <span>{mapText.electoralVotes}: {state.electoralVotes}</span>
          <span className="group relative inline-flex">
            <button
              type="button"
              className="grid h-5 w-5 place-items-center rounded-full border border-slate-300 bg-white text-xs font-black text-civic-muted outline-none transition hover:border-civic-purple hover:text-civic-purple focus-visible:border-civic-purple focus-visible:ring-2 focus-visible:ring-civic-purple/30"
              aria-describedby={`electoral-tooltip-${state.abbreviation}`}
              aria-label={mapText.electoralVotesTooltip}
            >
              i
            </button>
            <span
              id={`electoral-tooltip-${state.abbreviation}`}
              role="tooltip"
              className="pointer-events-none absolute left-1/2 top-7 z-10 hidden w-64 -translate-x-1/2 rounded-lg border border-slate-200 bg-white p-3 text-left text-xs font-semibold leading-5 text-civic-muted shadow-soft group-hover:block group-focus-within:block sm:left-0 sm:translate-x-0"
            >
              {mapText.electoralVotesTooltip}
            </span>
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <InfoItem label={mapText.lastMajorElection} value={state.lastMajorElection} />
        <InfoItem label={mapText.nextMajorElection} value={state.nextMajorElection} />
        <InfoItem label={mapText.registrationDeadline} value={state.registrationDeadline} />
        <InfoItem label={mapText.officialElectionSite} value={state.officialElectionSite} isLink />
      </div>

      <div className="mt-6 grid gap-5">
        <DetailBlock title={mapText.keyOffices} items={state.keyOffices} />
        <div>
          <h3 className="font-bold text-civic-ink">{mapText.whyStateMatters}</h3>
          <p className="mt-2 leading-7 text-civic-muted">{state.whyItMatters}</p>
        </div>
      </div>
    </section>
  )
}

function InfoItem({ label, value, isLink = false }) {
  return (
    <div className="rounded-lg bg-slate-50 p-4">
      <p className="text-xs font-bold uppercase text-civic-muted">{label}</p>
      {isLink ? (
        <a className="mt-1 block break-words font-semibold text-civic-blue underline-offset-4 hover:underline" href={value} target="_blank" rel="noreferrer">
          {value}
        </a>
      ) : (
        <p className="mt-1 font-semibold text-civic-ink">{value}</p>
      )}
    </div>
  )
}

function DetailBlock({ title, items }) {
  return (
    <div>
      <h3 className="font-bold text-civic-ink">{title}</h3>
      <ul className="mt-2 grid gap-2 text-civic-muted">
        {items.map((item) => (
          <li key={item} className="rounded-lg bg-slate-50 px-4 py-3">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
