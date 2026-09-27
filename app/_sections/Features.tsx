import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <section className="border-border border-t" id="features">
      <div className="w-full flex flex-col items-center gap-6 py-10">
        <div className="grid grid-cols-3 gap-4 h-100 w-full max-w-5xl px-5 *:rounded-md *:border-2 *:border-border *:h-full *:grid-bg *:px-6">
          <div className="flex items-center justify-center text-center flex-col">
            <h1 className="text-2xl font-medium">Lightweight</h1>
            <h2 className="text-lg">Runs quietly in the background, using almost no resources</h2>
          </div>
          <div className="flex items-center justify-center text-center flex-col col-span-2">
            <h1 className="text-2xl font-medium">Opensource</h1>
            <h2 className="text-lg">Every single file is public. Want to contribute?</h2>
            <Button className="size-lg w-32 h-9 text-lg m-2  bg-[#10B981] hover:bg-[#10B981]/80 rounded-md">Github</Button>
          </div>
          <div className="flex items-center justify-center text-center flex-col col-span-2">
            <h1 className="text-2xl font-medium">Easy installation</h1>
            <h2 className="text-lg">Installed in 5 minutes. Done in the browser</h2>
            <div className="flex flex-row gap-2 m-2">
              <Button className="size-lg w-32 h-9 text-lg bg-[#858AE3] hover:bg-[#858AE3]/80 rounded-md">Installation</Button>
              <Button className="size-lg w-32 h-9 text-lg bg-[#FFB700] hover:bg-[#FFB700]/80 rounded-md">Docs</Button>
            </div>
          </div>
          <div className="flex items-center justify-center text-center flex-col">
            <h1 className="text-2xl font-medium">100% free</h1>
            <h2 className="text-lg">No payment. Everything is free</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
