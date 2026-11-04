export default function Footer({ text }) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-civic-muted sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>{text.sampleData}</p>
        <p>{text.officialInfo}</p>
      </div>
    </footer>
  )
}
