import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center bg-[#F9FAFB] overflow-hidden">
            <Bubbles />
            <div className="z-2">
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
    );
}

function Bubbles() {
    return (
        <>
            <div className="absolute size-100 bg-[#858AE3]/50 top-[5%] left-[5%] rounded-full blur-3xl animate-pulse [animation-duration:5s]" />
            <div className="absolute size-82 bg-[#FFB700]/50 bottom-[5%] right-[5%] rounded-full blur-3xl animate-pulse [animation-duration:6s] [animation-delay:1.5s]" />
            <div className="absolute size-82 bg-[#34D399]/50 top-[30%] left-[30%] rounded-full blur-3xl animate-pulse z-1 [animation-duration:7s] [animation-delay:3s]" />

            <div className="absolute size-64 bg-[#F44491]/50 top-[40%] right-[20%] rounded-full blur-3xl animate-pulse z-1 [animation-duration:5.5s] [animation-delay:0.8s]" />
            <div className="absolute size-128 bg-[#AACC00]/50 bottom-[-10%] left-[-10%] rounded-full blur-3xl animate-pulse z-1 [animation-duration:6.5s] [animation-delay:2.2s]" />
            <div className="absolute size-82 bg-[#34D399]/50 top-[0%] right-[-10%] rounded-full blur-3xl animate-pulse z-1 [animation-duration:8s] [animation-delay:4s]" />
        </>
    );
}
