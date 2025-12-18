"use client"

import { useState } from "react"
import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import { GlassSlider } from "@/registry/liquid-glass/glass-slider"
import { Volume2, Sun } from "lucide-react"

const basicSliderCode = `<GlassSlider defaultValue={[50]} max={100} step={1} />`

const rangeSliderCode = `const [value, setValue] = useState([50])

<div className="space-y-2">
  <GlassSlider value={value} onValueChange={setValue} max={100} />
  <p className="text-white/60 text-sm">Value: {value[0]}</p>
</div>`

const volumeSliderCode = `<div className="flex items-center gap-4">
  <Volume2 className="h-5 w-5 text-white/60" />
  <GlassSlider defaultValue={[75]} max={100} className="flex-1" />
</div>`

export default function SliderPage() {
  const [value, setValue] = useState([50])
  const [brightness, setBrightness] = useState([80])

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Slider"
        description="Range input controls with gradient track, glow effects, and smooth thumb interaction."
      />

      <CLIInstall componentName="glass-slider" />

      <ComponentPreview
        title="Basic Slider"
        description="A simple range slider with default styling."
        preview={
          <div className="w-full max-w-md">
            <GlassSlider defaultValue={[50]} max={100} step={1} />
          </div>
        }
        code={basicSliderCode}
      />

      <ComponentPreview
        title="Controlled Slider"
        description="Slider with controlled value and live display."
        preview={
          <div className="w-full max-w-md space-y-4">
            <GlassSlider value={value} onValueChange={setValue} max={100} step={1} />
            <div className="flex justify-between text-white/60 text-sm">
              <span>0</span>
              <span className="text-white font-medium">{value[0]}%</span>
              <span>100</span>
            </div>
          </div>
        }
        code={rangeSliderCode}
      />

      <ComponentPreview
        title="With Icons"
        description="Sliders paired with icons for volume, brightness, and other controls."
        preview={
          <div className="w-full max-w-md space-y-6">
            <div className="flex items-center gap-4">
              <Volume2 className="h-5 w-5 text-white/60 shrink-0" />
              <GlassSlider defaultValue={[75]} max={100} className="flex-1" />
            </div>
            <div className="flex items-center gap-4">
              <Sun className="h-5 w-5 text-white/60 shrink-0" />
              <GlassSlider value={brightness} onValueChange={setBrightness} max={100} className="flex-1" />
              <span className="text-white/60 text-sm w-12">{brightness[0]}%</span>
            </div>
          </div>
        }
        code={volumeSliderCode}
      />
    </div>
  )
}
