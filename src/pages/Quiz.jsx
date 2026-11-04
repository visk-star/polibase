import { useEffect, useMemo, useState } from 'react'
import { partyQuizQuestions, partyResources } from '../data/partyQuizData.js'
import { quizQuestions } from '../data/quizData.js'

const STORAGE_KEY = 'polibase-completed-quiz-questions'

function readCompletedIds() {
  try {
    const savedIds = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    return Array.isArray(savedIds) ? savedIds : []
  } catch {
    return []
  }
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5)
}

function chooseQuestions(completedIds) {
  const completed = new Set(completedIds)
  const unseen = quizQuestions.filter((question) => !completed.has(question.id))
  const pool = unseen.length >= 5 ? unseen : [...unseen, ...quizQuestions]
  return shuffle(pool).slice(0, 5)
}

export default function Quiz({ text }) {
  const [mode, setMode] = useState(null)
  const quizText = text.quiz

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {mode === null ? (
        <QuizChoices quizText={quizText} onChoose={setMode} />
      ) : mode === 'knowledge' ? (
        <KnowledgeQuiz quizText={quizText} onBack={() => setMode(null)} />
      ) : (
        <PartyQuiz quizText={quizText} onBack={() => setMode(null)} />
      )}
    </section>
  )
}

function QuizChoices({ quizText, onChoose }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase text-civic-blue">{quizText.badge}</p>
      <h1 className="mt-3 text-4xl font-black text-civic-ink">{quizText.title}</h1>
      <p className="mt-4 leading-7 text-civic-muted">{quizText.intro}</p>
      <h2 className="mt-10 text-2xl font-bold text-civic-ink">{quizText.modesTitle}</h2>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <ModeCard
          title={quizText.knowledgeMode}
          description={quizText.knowledgeModeText}
          buttonLabel={quizText.startKnowledge}
          color="blue"
          onClick={() => onChoose('knowledge')}
        />
        <ModeCard
          title={quizText.partyMode}
          description={quizText.partyModeText}
          buttonLabel={quizText.startParty}
          color="purple"
          onClick={() => onChoose('party')}
        />
      </div>
    </div>
  )
}

function ModeCard({ title, description, buttonLabel, color, onClick }) {
  const colorClasses = color === 'blue'
    ? 'border-blue-100 bg-blue-50 text-civic-blue'
    : 'border-violet-100 bg-violet-50 text-civic-purple'

  return (
    <article className={`rounded-xl border p-6 shadow-soft ${colorClasses}`}>
      <h3 className="text-xl font-bold text-civic-ink">{title}</h3>
      <p className="mt-3 min-h-20 leading-7 text-civic-muted">{description}</p>
      <button
        onClick={onClick}
        className="mt-5 rounded-lg bg-slate-900 px-4 py-3 font-bold text-white transition hover:bg-slate-700"
      >
        {buttonLabel}
      </button>
    </article>
  )
}

function KnowledgeQuiz({ quizText, onBack }) {
  const [answers, setAnswers] = useState({})
  const [completedIds, setCompletedIds] = useState(readCompletedIds)
  const [questions, setQuestions] = useState(() => chooseQuestions(readCompletedIds()))
  const [showResult, setShowResult] = useState(false)
  const isComplete = Object.keys(answers).length === questions.length
  const hasCompletedAllQuestions = completedIds.length >= quizQuestions.length
  const correctCount = Object.values(answers).filter((answer) => answer.isCorrect).length

  useEffect(() => {
    if (!isComplete || showResult) {
      return
    }

    const updatedIds = [...new Set([...completedIds, ...questions.map((question) => question.id)])]
    setCompletedIds(updatedIds)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedIds))
    setShowResult(true)
  }, [completedIds, isComplete, questions, showResult])

  const resetQuiz = () => {
    setAnswers({})
    setShowResult(false)
    setQuestions(chooseQuestions(completedIds))
  }

  return (
    <div>
      <QuizHeader
        quizText={quizText}
        eyebrow={quizText.knowledgeMode}
        progress={quizText.progress.replace('{count}', completedIds.length).replace('{total}', quizQuestions.length)}
        onBack={onBack}
      />

      <div className="mt-8 grid gap-5">
        {questions.map((question, questionIndex) => {
          const answer = answers[question.id]
          return (
            <fieldset key={question.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
              <legend className="text-lg font-bold text-civic-ink">
                {questionIndex + 1}. {question.question}
              </legend>
              <div className="mt-4 grid gap-3">
                {question.options.map((option) => {
                  const selected = answer?.text === option.text
                  return (
                    <label
                      key={option.text}
                      className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition ${
                        selected
                          ? option.isCorrect
                            ? 'border-emerald-300 bg-emerald-50'
                            : 'border-rose-300 bg-rose-50'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <input
                        className="mt-1 h-4 w-4 accent-civic-blue"
                        type="radio"
                        name={`question-${question.id}`}
                        checked={selected}
                        onChange={() => setAnswers((current) => ({ ...current, [question.id]: option }))}
                      />
                      <span className="font-semibold text-civic-ink">{option.text}</span>
                    </label>
                  )
                })}
              </div>
              {answer && (
                <p className={`mt-4 rounded-lg p-3 text-sm font-bold ${
                  answer.isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'
                }`}>
                  {answer.isCorrect
                    ? quizText.correct
                    : `${quizText.incorrect}. ${quizText.correctAnswer}: ${question.options.find((option) => option.isCorrect).text}`}
                </p>
              )}
            </fieldset>
          )
        })}
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
        {showResult ? (
          <div>
            <p className="text-sm font-bold uppercase text-civic-purple">{quizText.knowledgeScore}</p>
            <p className="mt-2 text-2xl font-black text-civic-ink">
              {quizText.knowledgeResult.replace('{correct}', correctCount).replace('{total}', questions.length)}
            </p>
            {hasCompletedAllQuestions && (
              <p className="mt-4 rounded-lg bg-violet-50 p-4 font-semibold leading-6 text-civic-purple">
                {quizText.completionNotice}
              </p>
            )}
            <button
              onClick={resetQuiz}
              className="mt-5 rounded-lg border border-slate-300 px-4 py-2 font-bold text-civic-ink hover:bg-slate-50"
            >
              {quizText.retake}
            </button>
          </div>
        ) : (
          <p className="font-semibold text-civic-muted">
            {quizText.incomplete.replace('{count}', questions.length).replace('{completed}', Object.keys(answers).length)}
          </p>
        )}
      </div>
    </div>
  )
}

function PartyQuiz({ quizText, onBack }) {
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)

  const selectedPartyKeys = useMemo(() => [...new Set(Object.values(answers))], [answers])
  const isComplete = Object.keys(answers).length === partyQuizQuestions.length
  const profiles = selectedPartyKeys
    .map((partyKey) => ({
      key: partyKey,
      relatedAnswers: partyQuizQuestions
        .filter((question) => answers[question.id] === partyKey)
        .map((question) => question.options.find((option) => option.party === partyKey)?.text)
        .filter(Boolean),
      ...quizText.partyProfiles[partyKey]
    }))
    .filter((profile) => profile.name)

  const resetQuiz = () => {
    setAnswers({})
    setShowResult(false)
  }

  return (
    <div>
      <QuizHeader
        quizText={quizText}
        eyebrow={quizText.partyMode}
        progress={`${Object.keys(answers).length}/${partyQuizQuestions.length}`}
        onBack={onBack}
      />
      <p className="mt-4 rounded-xl border border-violet-100 bg-violet-50 p-4 text-sm leading-6 text-civic-muted">
        {quizText.partyIntro}
      </p>

      <div className="mt-8 grid gap-5">
        {partyQuizQuestions.map((question, questionIndex) => (
          <fieldset key={question.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
            <legend className="text-lg font-bold text-civic-ink">
              {questionIndex + 1}. {question.question}
            </legend>
            <div className="mt-4 grid gap-3">
              {question.options.map((option) => {
                const selected = answers[question.id] === option.party
                return (
                  <label
                    key={option.text}
                    className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition ${
                      selected ? 'border-civic-purple bg-violet-50' : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <input
                      className="mt-1 h-4 w-4 accent-civic-purple"
                      type="radio"
                      name={`party-question-${question.id}`}
                      checked={selected}
                      onChange={() => setAnswers((current) => ({ ...current, [question.id]: option.party }))}
                    />
                    <span className="font-semibold text-civic-ink">{option.text}</span>
                  </label>
                )
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
        {isComplete && showResult ? (
          <PartyResult profiles={profiles} quizText={quizText} onReset={resetQuiz} />
        ) : (
          <div>
            <p className="font-semibold text-civic-muted">
              {quizText.partyProgress.replace('{answered}', Object.keys(answers).length).replace('{total}', partyQuizQuestions.length)}
            </p>
            {isComplete && (
              <button
                onClick={() => setShowResult(true)}
                className="mt-5 rounded-lg bg-civic-purple px-4 py-3 font-bold text-white hover:bg-violet-700"
              >
                {quizText.showPartyResult}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function PartyResult({ profiles, quizText, onReset }) {
  const [expandedIndex, setExpandedIndex] = useState(0)
  const activeProfile = profiles[expandedIndex]

  return (
    <div>
      <p className="text-sm font-bold uppercase text-civic-purple">{quizText.partyResultLabel}</p>
      <h2 className="mt-2 text-3xl font-black text-civic-ink">{quizText.partyPerspectivesTitle}</h2>
      <p className="mt-3 leading-7 text-civic-muted">{quizText.partyResultIntro}</p>

      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {profiles.map((profile, index) => (
          <button
            key={profile.name}
            type="button"
            onClick={() => setExpandedIndex(index)}
            aria-expanded={expandedIndex === index}
            className={`rounded-lg border p-4 text-left font-bold transition ${
              expandedIndex === index
                ? 'border-civic-purple bg-violet-50 text-civic-purple'
                : 'border-slate-200 bg-white text-civic-ink hover:bg-slate-50'
            }`}
          >
            {profile.name}
          </button>
        ))}
      </div>

      {activeProfile && (
        <article className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-xl font-bold text-civic-ink">{activeProfile.name}</h3>
          <div className="mt-4 grid gap-4">
            <AnswerConnectionBlock
              title={quizText.partyWhyTitle}
              intro={quizText.partyWhyIntro.replace('{party}', activeProfile.name)}
              answers={activeProfile.relatedAnswers}
            />
            <ResultBlock title={quizText.partyFounded} text={activeProfile.founded} />
            <ResultBlock title={quizText.partyRepresents} text={activeProfile.representation} />
            <ResultBlock title={quizText.partyLeaders} text={activeProfile.leaders} />
            <ResultBlock title={quizText.partyCurrentLeadership} text={activeProfile.currentLeadership} />
            <ResultBlock title={quizText.partyRegionalPresence} text={activeProfile.regionalPresence} />
            <ResultBlock title={quizText.partyIdentification} text={activeProfile.identificationNote} />
            {partyResources[activeProfile.key] && (
              <ResourceBlock title={quizText.partyResources} resources={partyResources[activeProfile.key]} />
            )}
          </div>
        </article>
      )}

      <button
        onClick={onReset}
        className="mt-6 rounded-lg border border-slate-300 px-4 py-3 font-bold text-civic-ink hover:bg-slate-50"
      >
        {quizText.partyRetake}
      </button>
    </div>
  )
}

function ResultBlock({ title, text }) {
  return (
    <div className="rounded-lg bg-slate-50 p-4">
      <h3 className="font-bold text-civic-ink">{title}</h3>
      <p className="mt-2 leading-7 text-civic-muted">{text}</p>
    </div>
  )
}

function AnswerConnectionBlock({ title, intro, answers }) {
  return (
    <div className="rounded-lg border border-violet-100 bg-white p-4">
      <h3 className="font-bold text-civic-ink">{title}</h3>
      <p className="mt-2 leading-7 text-civic-muted">{intro}</p>
      <ul className="mt-3 grid gap-2">
        {answers.slice(0, 6).map((answer) => (
          <li key={answer} className="rounded-lg bg-violet-50 px-3 py-2 text-sm font-semibold leading-6 text-civic-purple">
            {answer}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ResourceBlock({ title, resources }) {
  return (
    <div className="rounded-lg bg-slate-50 p-4">
      <h3 className="font-bold text-civic-ink">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {resources.map((resource) => (
          <a
            key={resource.url}
            href={resource.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-civic-purple transition hover:border-civic-purple hover:bg-violet-50"
          >
            {resource.label}
          </a>
        ))}
      </div>
    </div>
  )
}

function QuizHeader({ quizText, eyebrow, progress, onBack }) {
  return (
    <div>
      <button
        onClick={onBack}
        className="text-sm font-bold text-civic-purple hover:text-violet-700"
      >
        ← {quizText.backToQuizChoices}
      </button>
      <p className="mt-6 text-sm font-bold uppercase text-civic-blue">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-black text-civic-ink">{quizText.title}</h1>
      <p className="mt-3 text-sm font-semibold text-civic-purple">{progress}</p>
    </div>
  )
}
