"use client"

import Script from 'next/script'
import { Button } from "@/components/ui/button";
import { Callout } from "nextra/components";
import { Zap } from "lucide-react";


export default function FlashButton() {
  return (
    <div className="pt-5">
      <Script type="module" src="https://unpkg.com/esp-web-tools@10/dist/web/install-button.js?module" />
      <esp-web-install-button manifest="/manifest.json">
        <Button slot="activate" size="lg" className="w-48 h-12 text-xl rounded-md bg-[#10B981] hover:bg-[#10B981]/80">
          <p>Flash</p>
          <Zap size={16} strokeWidth={3} />
        </Button>
        <div slot="unsupported">
          <Callout type="error">
            Your browser does not support flashing devices. Please use <b>Google Chrome</b> or <b>Microsoft Edge</b>.
          </Callout>
        </div>
      </esp-web-install-button>
    </div>
  )
}
