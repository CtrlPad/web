import { Button } from "@/components/ui/button";
import Bubble from "@/components/common/Bubble";

export default function Features() {
  return (
    <section className="border-border border-t" id="features">
      <div className="w-full flex flex-col items-center gap-6 py-10">
        <h1 className="text-2xl font-medium">Features</h1>
        <div className="grid grid-cols-3 gap-4 h-100 w-full max-w-5xl px-5 *:relative *:overflow-hidden *:rounded-md *:border-2 *:border-border *:h-full *:grid-bg *:px-6">
          <div>
            <Bubble className="size-40 bg-[#858AE3]/50 top-[-15%] left-[-15%]" />
            <div className="relative z-2 flex items-center justify-center text-center flex-col h-full">
              <h1 className="text-2xl font-medium">Lightweight</h1>
              <h2 className="text-lg">Runs quietly in the background, using almost no resources</h2>
            </div>
          </div>
          <div className="col-span-2">
            <Bubble className="size-48 bg-[#FFB700]/50 top-[-20%] left-[10%] [animation-delay:1s]" />
            <Bubble className="size-48 bg-[#34D399]/50 bottom-[-20%] right-[10%] [animation-duration:6s] [animation-delay:2s]" />
            <div className="relative z-2 flex items-center justify-center text-center flex-col h-full">
              <h1 className="text-2xl font-medium">Opensource</h1>
              <h2 className="text-lg">Every single file is public. Want to contribute?</h2>
              <Button className="size-lg w-32 h-9 text-lg m-2  bg-[#10B981] hover:bg-[#10B981]/80 rounded-md">Github</Button>
            </div>
          </div>
          <div className="col-span-2">
            <Bubble className="size-48 bg-[#F44491]/50 top-[-20%] right-[10%] [animation-duration:5.5s] [animation-delay:0.8s]" />
            <Bubble className="size-48 bg-[#AACC00]/50 bottom-[-20%] left-[10%] [animation-duration:6.5s] [animation-delay:2.2s]" />
            <div className="relative z-2 flex items-center justify-center text-center flex-col h-full">
              <h1 className="text-2xl font-medium">Easy installation</h1>
              <h2 className="text-lg">Installed in 5 minutes. Done in the browser</h2>
              <div className="flex flex-row gap-2 m-2">
                <Button className="size-lg w-32 h-9 text-lg bg-[#858AE3] hover:bg-[#858AE3]/80 rounded-md">Installation</Button>
                <Button className="size-lg w-32 h-9 text-lg bg-[#FFB700] hover:bg-[#FFB700]/80 rounded-md">Docs</Button>
              </div>
            </div>
          </div>
          <div>
            <Bubble className="size-40 bg-[#34D399]/50 bottom-[-15%] right-[-15%] [animation-duration:7s] [animation-delay:1.5s]" />
            <div className="relative z-2 flex items-center justify-center text-center flex-col h-full">
              <h1 className="text-2xl font-medium">100% free</h1>
              <h2 className="text-lg">No payment. Everything is free</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
