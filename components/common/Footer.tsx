import { Separator } from "@/components/ui/separator";
import { Heart, Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-border border-t py-10">
      <div className="flex w-7xl mx-auto flex-col">
        <div className="grid grid-cols-3 py-3">
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold">Ctrlpad</h4>
            <p>Make controls fast, launch apps instantly.</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">Product</h4>
            <p>Documentation</p>
            <p>Installation</p>
            <p>Releases</p>
            <p>Requirements</p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">Community</h4>
            <a>GitHub</a>
            <a>Discord</a>
            <a>X</a>
            <a>Instagram</a>
            <a>Reddit</a>
          </div>
        </div>
        <Separator />
        <div className="flex justify-between py-3">
          <div className="flex items-center flex-row space-x-2">
            <p className="flex items-center gap-1.5">
              <Copyright size={13} /> 2026 Ctrlpad
            </p>
            <Separator orientation="vertical" />
            <a>Imprint</a>
            <Separator orientation="vertical" />
            <p>MIT License</p>
          </div>
          <p className="flex items-center gap-1.5">
            Made with
            <span className="text-red-800">
              <Heart size={16} strokeWidth={3} />
            </span>
            by brainlesslukaks
          </p>
        </div>
      </div>
    </footer>
  );
}
