import { useState } from 'react'
import usa from '@svg-maps/usa'
import StateCard from '../components/StateCard.jsx'
import { statesData } from '../data/statesData.js'

const stateColors = {
  democratic: 'fill-blue-200 hover:fill-blue-300',
  republican: 'fill-rose-200 hover:fill-rose-300',
  competitive: 'fill-violet-200 hover:fill-violet-300'
}

export default function Map({ text }) {
  const [selectedState, setSelectedState] = useState('CA')
  const [hoveredState, setHoveredState] = useState(null)
  const mapText = text.map
  const state = statesData[selectedState]

  const handleKeyDown = (event, abbreviation) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setSelectedState(abbreviation)
    }
  }

  return (
    <section className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase text-civic-purple">{mapText.badge}</p>
        <h1 className="mt-3 text-4xl font-black text-civic-ink">{mapText.title}</h1>
        <p className="mt-4 leading-7 text-civic-muted">
          {mapText.intro}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
        <span className="rounded-lg bg-blue-100 px-3 py-2 text-blue-900">{mapText.legendDemocratic}</span>
        <span className="rounded-lg bg-rose-100 px-3 py-2 text-rose-900">{mapText.legendRepublican}</span>
        <span className="rounded-lg bg-violet-100 px-3 py-2 text-violet-900">{mapText.legendCompetitive}</span>
      </div>
      <p className="mt-4 max-w-3xl rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-civic-muted shadow-soft">
        {mapText.disclaimer}
      </p>

      <div className="mt-10 grid gap-8">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-soft sm:p-5 lg:p-6">
          <div className="mb-4 flex min-h-8 flex-wrap items-center justify-between gap-3 text-sm font-semibold text-civic-muted">
            <span>{mapText.hoverHint}</span>
            <span className="rounded-lg bg-slate-100 px-3 py-1 text-civic-ink">
              {hoveredState ? `${hoveredState.abbreviation} - ${hoveredState.name}` : `${state.abbreviation} - ${state.name}`}
            </span>
          </div>
          <div className="overflow-x-auto">
            <svg
              className="mx-auto min-w-[780px] max-w-6xl xl:min-w-0"
              viewBox={usa.viewBox}
              role="img"
              aria-label={mapText.mapAria}
            >
              {usa.locations.map((location) => {
                const abbreviation = location.id.toUpperCase()
                const mapState = statesData[abbreviation]

                if (!mapState) {
                  return null
                }

                const isSelected = selectedState === abbreviation

                return (
                  <path
                    key={location.id}
                    d={location.path}
                    className={`cursor-pointer stroke-white stroke-[1.4] outline-none transition ${stateColors[mapState.colorCategory]} ${
                      isSelected ? 'stroke-civic-ink' : 'focus-visible:stroke-civic-ink focus-visible:stroke-[3]'
                    }`}
                    style={isSelected ? { fill: '#192033' } : undefined}
                    tabIndex="0"
                    role="button"
                    aria-label={`${mapState.name}. ${mapText.recentVotingTrend}: ${mapText.leanings[mapState.colorCategory]}`}
                    aria-pressed={isSelected}
                    onClick={() => setSelectedState(abbreviation)}
                    onFocus={() => setHoveredState(mapState)}
                    onBlur={() => setHoveredState(null)}
                    onMouseEnter={() => setHoveredState(mapState)}
                    onMouseLeave={() => setHoveredState(null)}
                    onKeyDown={(event) => handleKeyDown(event, abbreviation)}
                  >
                    <title>{`${mapState.abbreviation} - ${mapState.name}`}</title>
                  </path>
                )
              })}
            </svg>
          </div>
        </div>

        <StateCard mapText={mapText} state={state} />
      </div>
    </section>
  )
}
