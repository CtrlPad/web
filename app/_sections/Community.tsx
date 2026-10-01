import { Badge } from "@/components/ui/badge";
import { SiDiscord } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";

export default function Community() {
  return (
    <section className="border-border border-t bg-[#F8FAFC]" id="features">
      <div className="w-full flex flex-col items-center gap-6 py-10">
        <div className="flex flex-col py-5 items-center space-y-2">
          <Badge className="bg-[#10B981] text-base">Community</Badge>
          <h1 className="text-4xl font-semibold">Join a great Community and grow together</h1>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <SiDiscord size={64} color="#5865F2" />
          <Button size="lg" variant="outline" className="border-[#10B981] border-2 text-lg rounded-sm">
            Join us on Discord
          </Button>
        </div>
      </div>
    </section>
  );
}
