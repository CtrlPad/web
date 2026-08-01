import { Separator } from "@/components/ui/separator";
import { Heart, Copyright } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-border border-t py-10">
      <div className="flex w-7xl mx-auto flex-col">
        <div className="grid grid-cols-3 py-3">
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold">Ctrlpad</h4>
            <p>Make controls fast, launch apps instantly.</p>
          </div>
          <Produkt />
          <Community />
        </div>
        <Separator />
        <div className="flex justify-between py-3">
          <div className="flex items-center flex-row space-x-2">
            <p className="flex items-center gap-1.5">
              <Copyright size={13} /> 2026 Ctrlpad
            </p>
            <Separator orientation="vertical" />
            <Button variant="link" className="justify-start">
              <Link href="#">Imprint</Link>
            </Button>
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

function Produkt() {
  return (
    <div className="flex flex-col">
      <h4 className="text-lg font-semibold">Product</h4>
      <Button variant="link" className="justify-start p-0">
        <Link href="#">Documentation</Link>
      </Button>
      <Button variant="link" className="justify-start p-0">
        <Link href="#">Ctrlpad-Desktop Installation</Link>
      </Button>
      <Button variant="link" className="justify-start p-0">
        <Link href="#">Releases</Link>
      </Button>
      <Button variant="link" className="justify-start p-0">
        <Link href="#">Requirements</Link>
      </Button>
    </div>
  );
}

function Community() {
  return (
    <div className="flex flex-col">
      <h4 className="text-lg font-semibold">Community</h4>
      <Button variant="link" className="justify-start p-0">
        <Link href="#">GitHub</Link>
      </Button>
      <Button variant="link" className="justify-start p-0">
        <Link href="#">Discord</Link>
      </Button>
      <Button variant="link" className="justify-start p-0">
        <Link href="#">X</Link>
      </Button>
      <Button variant="link" className="justify-start p-0">
        <Link href="#">Instagram</Link>
      </Button>
      <Button variant="link" className="justify-start p-0">
        <Link href="#">Reddit</Link>
      </Button>
    </div>
  );
}
