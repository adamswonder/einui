"use client"

import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import { GlassBadge } from "@/registry/liquid-glass/glass-badge"

const basicBadgeCode = `<GlassBadge>Default</GlassBadge>
<GlassBadge variant="primary">Primary</GlassBadge>
<GlassBadge variant="success">Success</GlassBadge>
<GlassBadge variant="warning">Warning</GlassBadge>
<GlassBadge variant="destructive">Error</GlassBadge>
<GlassBadge variant="outline">Outline</GlassBadge>`

const statusBadgeCode = `<div className="flex items-center gap-3">
  <GlassBadge variant="success">
    <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2" />
    Online
  </GlassBadge>
  <GlassBadge variant="warning">
    <span className="w-2 h-2 rounded-full bg-amber-400 mr-2" />
    Away
  </GlassBadge>
  <GlassBadge variant="destructive">
    <span className="w-2 h-2 rounded-full bg-red-400 mr-2" />
    Offline
  </GlassBadge>
</div>`

const tagBadgeCode = `<div className="flex flex-wrap gap-2">
  <GlassBadge variant="primary">React</GlassBadge>
  <GlassBadge variant="primary">TypeScript</GlassBadge>
  <GlassBadge variant="primary">Tailwind CSS</GlassBadge>
  <GlassBadge variant="primary">Next.js</GlassBadge>
</div>`

export default function BadgePage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Badge"
        description="Small visual indicators for status, labels, or categories with frosted glass styling and color variants."
      />

      <CLIInstall componentName="glass-badge" />

      <ComponentPreview
        title="Variants"
        description="Badges come in multiple color variants to represent different states and purposes."
        preview={
          <div className="flex flex-wrap items-center gap-3">
            <GlassBadge>Default</GlassBadge>
            <GlassBadge variant="primary">Primary</GlassBadge>
            <GlassBadge variant="success">Success</GlassBadge>
            <GlassBadge variant="warning">Warning</GlassBadge>
            <GlassBadge variant="destructive">Error</GlassBadge>
            <GlassBadge variant="outline">Outline</GlassBadge>
          </div>
        }
        code={basicBadgeCode}
      />

      <ComponentPreview
        title="Status Indicators"
        description="Combine badges with status dots to create clear status indicators."
        preview={
          <div className="flex flex-wrap items-center gap-3">
            <GlassBadge variant="success" className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2" />
              Online
            </GlassBadge>
            <GlassBadge variant="warning" className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-400 mr-2" />
              Away
            </GlassBadge>
            <GlassBadge variant="destructive" className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-400 mr-2" />
              Offline
            </GlassBadge>
          </div>
        }
        code={statusBadgeCode}
      />

      <ComponentPreview
        title="Tags"
        description="Use badges as tags for categorization or skill representation."
        preview={
          <div className="flex flex-wrap gap-2">
            <GlassBadge variant="primary">React</GlassBadge>
            <GlassBadge variant="primary">TypeScript</GlassBadge>
            <GlassBadge variant="primary">Tailwind CSS</GlassBadge>
            <GlassBadge variant="primary">Next.js</GlassBadge>
          </div>
        }
        code={tagBadgeCode}
      />
    </div>
  )
}
