"use client"

import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import { GlassAvatar, GlassAvatarImage, GlassAvatarFallback } from "@/registry/liquid-glass/glass-avatar"

const basicAvatarCode = `<GlassAvatar>
  <GlassAvatarImage src="/avatar.jpg" alt="User" />
  <GlassAvatarFallback>JD</GlassAvatarFallback>
</GlassAvatar>`

const sizesAvatarCode = `<GlassAvatar className="h-8 w-8">
  <GlassAvatarFallback className="text-xs">SM</GlassAvatarFallback>
</GlassAvatar>
<GlassAvatar className="h-10 w-10">
  <GlassAvatarFallback className="text-sm">MD</GlassAvatarFallback>
</GlassAvatar>
<GlassAvatar className="h-14 w-14">
  <GlassAvatarFallback className="text-base">LG</GlassAvatarFallback>
</GlassAvatar>
<GlassAvatar className="h-20 w-20">
  <GlassAvatarFallback className="text-xl">XL</GlassAvatarFallback>
</GlassAvatar>`

const groupAvatarCode = `<div className="flex -space-x-3">
  <GlassAvatar className="h-10 w-10 border-2 border-slate-900">
    <GlassAvatarFallback>A</GlassAvatarFallback>
  </GlassAvatar>
  <GlassAvatar className="h-10 w-10 border-2 border-slate-900">
    <GlassAvatarFallback>B</GlassAvatarFallback>
  </GlassAvatar>
  <GlassAvatar className="h-10 w-10 border-2 border-slate-900">
    <GlassAvatarFallback>C</GlassAvatarFallback>
  </GlassAvatar>
  <GlassAvatar className="h-10 w-10 border-2 border-slate-900">
    <GlassAvatarFallback>+5</GlassAvatarFallback>
  </GlassAvatar>
</div>`

export default function AvatarPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Avatar"
        description="Circular profile images with gradient glow effects and fallback initials for user representation."
      />

      <CLIInstall componentName="glass-avatar" />

      <ComponentPreview
        title="Basic Avatar"
        description="Display user profile images with a fallback when the image is unavailable."
        preview={
          <div className="flex items-center gap-6">
            <GlassAvatar className="h-12 w-12">
              <GlassAvatarImage src="/professional-headshot.png" alt="User" />
              <GlassAvatarFallback>JD</GlassAvatarFallback>
            </GlassAvatar>
            <GlassAvatar className="h-12 w-12">
              <GlassAvatarFallback>AB</GlassAvatarFallback>
            </GlassAvatar>
          </div>
        }
        code={basicAvatarCode}
      />

      <ComponentPreview
        title="Sizes"
        description="Avatars support multiple sizes from small to extra large."
        preview={
          <div className="flex items-end gap-4">
            <GlassAvatar className="h-8 w-8">
              <GlassAvatarFallback className="text-xs">SM</GlassAvatarFallback>
            </GlassAvatar>
            <GlassAvatar className="h-10 w-10">
              <GlassAvatarFallback className="text-sm">MD</GlassAvatarFallback>
            </GlassAvatar>
            <GlassAvatar className="h-14 w-14">
              <GlassAvatarFallback className="text-base">LG</GlassAvatarFallback>
            </GlassAvatar>
            <GlassAvatar className="h-20 w-20">
              <GlassAvatarFallback className="text-xl">XL</GlassAvatarFallback>
            </GlassAvatar>
          </div>
        }
        code={sizesAvatarCode}
      />

      <ComponentPreview
        title="Avatar Group"
        description="Stack avatars together to show multiple users with overlap effect."
        preview={
          <div className="flex -space-x-3">
            <GlassAvatar className="h-10 w-10">
              <GlassAvatarFallback>A</GlassAvatarFallback>
            </GlassAvatar>
            <GlassAvatar className="h-10 w-10">
              <GlassAvatarFallback>B</GlassAvatarFallback>
            </GlassAvatar>
            <GlassAvatar className="h-10 w-10">
              <GlassAvatarFallback>C</GlassAvatarFallback>
            </GlassAvatar>
            <GlassAvatar className="h-10 w-10">
              <GlassAvatarFallback className="text-xs">+5</GlassAvatarFallback>
            </GlassAvatar>
          </div>
        }
        code={groupAvatarCode}
      />
    </div>
  )
}
