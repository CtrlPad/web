import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F9FAFB]">
      <div>
        <h1 className="text-8xl font-semibold text-center">CtrlPad</h1>
        <h2 className="text-3xl text-center">Make controls fast, launch apps instantly.</h2>
        <div className="flex justify-center items-center space-x-5 p-5">
          <Button size="lg" className="w-48 h-12 text-xl bg-[#10B981] hover:bg-[#10B981]/80 rounded-md">
            Get started <ArrowRight size={16} strokeWidth={3} />
          </Button>
          <Button size="lg" variant="outline" className="w-48 h-12 text-xl rounded-md">
            Github <Star size={16} strokeWidth={3} />
          </Button>
        </div>
      </div>
    </section>
  )
}
