"use client"

import { useState, useEffect } from "react"
import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import { GlassProgress } from "@/registry/liquid-glass/glass-progress"
import { GlassButton } from "@/registry/liquid-glass/glass-button"

const basicProgressCode = `<GlassProgress value={60} />`

const sizesProgressCode = `<GlassProgress value={75} className="h-2" />
<GlassProgress value={75} className="h-3" />
<GlassProgress value={75} className="h-4" />`

const animatedProgressCode = `const [progress, setProgress] = useState(0)

useEffect(() => {
  const timer = setInterval(() => {
    setProgress(prev => prev >= 100 ? 0 : prev + 10)
  }, 500)
  return () => clearInterval(timer)
}, [])

<GlassProgress value={progress} />`

export default function ProgressPage() {
  const [progress, setProgress] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!isAnimating) return
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsAnimating(false)
          return 100
        }
        return prev + 5
      })
    }, 100)
    return () => clearInterval(timer)
  }, [isAnimating])

  const startAnimation = () => {
    setProgress(0)
    setIsAnimating(true)
  }

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Progress"
        description="Visual indicators for task completion with animated gradient fill and glow effects."
      />

      <CLIInstall componentName="glass-progress" />

      <ComponentPreview
        title="Basic Progress"
        description="A simple progress bar showing completion percentage."
        preview={
          <div className="w-full max-w-md space-y-4">
            <GlassProgress value={25} />
            <GlassProgress value={50} />
            <GlassProgress value={75} />
            <GlassProgress value={100} />
          </div>
        }
        code={basicProgressCode}
      />

      <ComponentPreview
        title="Sizes"
        description="Progress bars in different heights for various use cases."
        preview={
          <div className="w-full max-w-md space-y-6">
            <div>
              <p className="text-white/60 text-sm mb-2">Small</p>
              <GlassProgress value={75} className="h-2" />
            </div>
            <div>
              <p className="text-white/60 text-sm mb-2">Medium (default)</p>
              <GlassProgress value={75} className="h-3" />
            </div>
            <div>
              <p className="text-white/60 text-sm mb-2">Large</p>
              <GlassProgress value={75} className="h-4" />
            </div>
          </div>
        }
        code={sizesProgressCode}
      />

      <ComponentPreview
        title="Animated Progress"
        description="Interactive progress with smooth animation for loading states."
        preview={
          <div className="w-full max-w-md space-y-4">
            <GlassProgress value={progress} />
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-sm">{progress}% complete</span>
              <GlassButton size="sm" onClick={startAnimation} disabled={isAnimating}>
                {isAnimating ? "Loading..." : "Start"}
              </GlassButton>
            </div>
          </div>
        }
        code={animatedProgressCode}
      />
    </div>
  )
}
