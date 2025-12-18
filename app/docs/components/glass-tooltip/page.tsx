"use client"

import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import {
  GlassTooltip,
  GlassTooltipTrigger,
  GlassTooltipContent,
  GlassTooltipProvider,
} from "@/registry/liquid-glass/glass-tooltip"
import { GlassButton } from "@/registry/liquid-glass/glass-button"
import { Info, HelpCircle, Settings } from "lucide-react"

const basicTooltipCode = `<GlassTooltipProvider>
  <GlassTooltip>
    <GlassTooltipTrigger asChild>
      <GlassButton>Hover me</GlassButton>
    </GlassTooltipTrigger>
    <GlassTooltipContent>
      <p>This is a tooltip</p>
    </GlassTooltipContent>
  </GlassTooltip>
</GlassTooltipProvider>`

const positionsTooltipCode = `<GlassTooltip>
  <GlassTooltipTrigger asChild>
    <GlassButton>Top</GlassButton>
  </GlassTooltipTrigger>
  <GlassTooltipContent side="top">Tooltip on top</GlassTooltipContent>
</GlassTooltip>

<GlassTooltip>
  <GlassTooltipTrigger asChild>
    <GlassButton>Bottom</GlassButton>
  </GlassTooltipTrigger>
  <GlassTooltipContent side="bottom">Tooltip on bottom</GlassTooltipContent>
</GlassTooltip>`

const iconTooltipCode = `<GlassTooltip>
  <GlassTooltipTrigger asChild>
    <button className="p-2 rounded-full hover:bg-white/10">
      <Info className="h-5 w-5 text-white/60" />
    </button>
  </GlassTooltipTrigger>
  <GlassTooltipContent>
    More information
  </GlassTooltipContent>
</GlassTooltip>`

export default function TooltipPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Tooltip"
        description="Contextual information popups with glass morphism styling and smooth animations on hover."
      />

      <CLIInstall componentName="glass-tooltip" />

      <ComponentPreview
        title="Basic Tooltip"
        description="Simple tooltip that appears on hover."
        preview={
          <GlassTooltipProvider>
            <GlassTooltip>
              <GlassTooltipTrigger asChild>
                <GlassButton>Hover me</GlassButton>
              </GlassTooltipTrigger>
              <GlassTooltipContent>
                <p>This is a helpful tooltip</p>
              </GlassTooltipContent>
            </GlassTooltip>
          </GlassTooltipProvider>
        }
        code={basicTooltipCode}
      />

      <ComponentPreview
        title="Positions"
        description="Tooltips can appear on different sides of the trigger element."
        preview={
          <GlassTooltipProvider>
            <div className="flex flex-wrap items-center gap-4">
              <GlassTooltip>
                <GlassTooltipTrigger asChild>
                  <GlassButton variant="outline" size="sm">
                    Top
                  </GlassButton>
                </GlassTooltipTrigger>
                <GlassTooltipContent side="top">Tooltip on top</GlassTooltipContent>
              </GlassTooltip>
              <GlassTooltip>
                <GlassTooltipTrigger asChild>
                  <GlassButton variant="outline" size="sm">
                    Bottom
                  </GlassButton>
                </GlassTooltipTrigger>
                <GlassTooltipContent side="bottom">Tooltip on bottom</GlassTooltipContent>
              </GlassTooltip>
              <GlassTooltip>
                <GlassTooltipTrigger asChild>
                  <GlassButton variant="outline" size="sm">
                    Left
                  </GlassButton>
                </GlassTooltipTrigger>
                <GlassTooltipContent side="left">Tooltip on left</GlassTooltipContent>
              </GlassTooltip>
              <GlassTooltip>
                <GlassTooltipTrigger asChild>
                  <GlassButton variant="outline" size="sm">
                    Right
                  </GlassButton>
                </GlassTooltipTrigger>
                <GlassTooltipContent side="right">Tooltip on right</GlassTooltipContent>
              </GlassTooltip>
            </div>
          </GlassTooltipProvider>
        }
        code={positionsTooltipCode}
      />

      <ComponentPreview
        title="Icon Tooltips"
        description="Tooltips on icon buttons for contextual help."
        preview={
          <GlassTooltipProvider>
            <div className="flex items-center gap-4">
              <GlassTooltip>
                <GlassTooltipTrigger asChild>
                  <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                    <Info className="h-5 w-5 text-white/60" />
                  </button>
                </GlassTooltipTrigger>
                <GlassTooltipContent>More information</GlassTooltipContent>
              </GlassTooltip>
              <GlassTooltip>
                <GlassTooltipTrigger asChild>
                  <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                    <HelpCircle className="h-5 w-5 text-white/60" />
                  </button>
                </GlassTooltipTrigger>
                <GlassTooltipContent>Get help</GlassTooltipContent>
              </GlassTooltip>
              <GlassTooltip>
                <GlassTooltipTrigger asChild>
                  <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                    <Settings className="h-5 w-5 text-white/60" />
                  </button>
                </GlassTooltipTrigger>
                <GlassTooltipContent>Settings</GlassTooltipContent>
              </GlassTooltip>
            </div>
          </GlassTooltipProvider>
        }
        code={iconTooltipCode}
      />
    </div>
  )
}
