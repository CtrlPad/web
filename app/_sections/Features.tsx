export default function Features() {
  return (
    <section className="border-border border-t" id="features">
      <div className="w-full flex flex-col items-center gap-6 py-10">
        <div className="grid grid-cols-3 gap-4 h-100 w-full max-w-5xl px-5">
          <div className="h-full bg-green-400" />
          <div className="h-full bg-red-400 col-span-2" />
          <div className="h-full bg-green-400 col-span-2" />
          <div className="h-full bg-blue-400" />
        </div>
      </div>
    </section>
  )
}
