"use client"

import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import { GlassButton } from "@/registry/liquid-glass/glass-button"
import { Mail, ArrowRight, Loader2, Plus, Download, Heart } from "lucide-react"

const variantsCode = `<GlassButton variant="default">Default</GlassButton>
<GlassButton variant="primary">Primary</GlassButton>
<GlassButton variant="outline">Outline</GlassButton>
<GlassButton variant="ghost">Ghost</GlassButton>
<GlassButton variant="destructive">Destructive</GlassButton>`

const sizesCode = `<GlassButton size="sm">Small</GlassButton>
<GlassButton size="default">Default</GlassButton>
<GlassButton size="lg">Large</GlassButton>
<GlassButton size="icon"><Plus /></GlassButton>`

const withIconsCode = `<GlassButton variant="primary">
  <Mail className="mr-2 h-4 w-4" /> Email
</GlassButton>
<GlassButton variant="outline">
  Continue <ArrowRight className="ml-2 h-4 w-4" />
</GlassButton>`

const glowCode = `<GlassButton variant="primary" glow>
  Glow Effect
</GlassButton>`

export default function ButtonsPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Buttons"
        description="Interactive button components with multiple variants, sizes, and optional glow effects."
      />

      <CLIInstall componentName="glass-button" />

      <ComponentPreview
        title="Variants"
        description="Different button styles for various use cases."
        preview={
          <div className="flex flex-wrap gap-4">
            <GlassButton variant="default">Default</GlassButton>
            <GlassButton variant="primary">Primary</GlassButton>
            <GlassButton variant="outline">Outline</GlassButton>
            <GlassButton variant="ghost">Ghost</GlassButton>
            <GlassButton variant="destructive">Destructive</GlassButton>
          </div>
        }
        code={variantsCode}
      />

      <ComponentPreview
        title="Sizes"
        description="Buttons come in small, default, large, and icon sizes."
        preview={
          <div className="flex flex-wrap items-center gap-4">
            <GlassButton size="sm">Small</GlassButton>
            <GlassButton size="default">Default</GlassButton>
            <GlassButton size="lg">Large</GlassButton>
            <GlassButton size="icon">
              <Plus className="h-4 w-4" />
            </GlassButton>
          </div>
        }
        code={sizesCode}
      />

      <ComponentPreview
        title="With Icons"
        description="Buttons can include icons before or after the label."
        preview={
          <div className="flex flex-wrap gap-4">
            <GlassButton variant="primary">
              <Mail className="mr-2 h-4 w-4" /> Email
            </GlassButton>
            <GlassButton variant="outline">
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </GlassButton>
            <GlassButton variant="default">
              <Download className="mr-2 h-4 w-4" /> Download
            </GlassButton>
            <GlassButton variant="ghost">
              <Heart className="mr-2 h-4 w-4" /> Like
            </GlassButton>
          </div>
        }
        code={withIconsCode}
      />

      <ComponentPreview
        title="Glow Effect"
        description="Add a glow effect to make buttons more prominent."
        preview={
          <div className="flex flex-wrap gap-4">
            <GlassButton variant="primary">
              Glow Effect
            </GlassButton>
            <GlassButton variant="default">
              Default Glow
            </GlassButton>
          </div>
        }
        code={glowCode}
      />

      <ComponentPreview
        title="Loading & Disabled"
        description="States for disabled and loading buttons."
        preview={
          <div className="flex flex-wrap gap-4">
            <GlassButton disabled>Disabled</GlassButton>
            <GlassButton variant="primary" disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading
            </GlassButton>
          </div>
        }
        code={`<GlassButton disabled>Disabled</GlassButton>
<GlassButton variant="primary" disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading
</GlassButton>`}
      />
    </div>
  )
}
