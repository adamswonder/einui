"use client"

import { useState } from "react"
import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import { GlassSwitch } from "@/registry/liquid-glass/glass-switch"
import { Label } from "@/components/ui/label"

const basicSwitchCode = `<GlassSwitch />
<GlassSwitch defaultChecked />`

const labeledSwitchCode = `<div className="flex items-center gap-3">
  <GlassSwitch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>`

const settingsSwitchCode = `<div className="space-y-4">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-white font-medium">Dark Mode</p>
      <p className="text-white/50 text-sm">Use dark theme</p>
    </div>
    <GlassSwitch defaultChecked />
  </div>
  <div className="flex items-center justify-between">
    <div>
      <p className="text-white font-medium">Notifications</p>
      <p className="text-white/50 text-sm">Receive push notifications</p>
    </div>
    <GlassSwitch />
  </div>
</div>`

export default function SwitchPage() {
  const [isEnabled, setIsEnabled] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Switch"
        description="Toggle controls for binary options with smooth transitions and glow effects when activated."
      />

      <CLIInstall componentName="glass-switch" />

      <ComponentPreview
        title="Basic Switch"
        description="Simple toggle switches in off and on states."
        preview={
          <div className="flex items-center gap-6">
            <GlassSwitch />
            <GlassSwitch defaultChecked />
          </div>
        }
        code={basicSwitchCode}
      />

      <ComponentPreview
        title="With Label"
        description="Switches with associated labels for better accessibility."
        preview={
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <GlassSwitch id="notifications" checked={isEnabled} onCheckedChange={setIsEnabled} />
              <Label htmlFor="notifications" className="text-white/80">
                Enable notifications {isEnabled ? "(On)" : "(Off)"}
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <GlassSwitch id="marketing" defaultChecked />
              <Label htmlFor="marketing" className="text-white/80">
                Marketing emails
              </Label>
            </div>
          </div>
        }
        code={labeledSwitchCode}
      />

      <ComponentPreview
        title="Settings Panel"
        description="Multiple switches in a settings-style layout with descriptions."
        preview={
          <div className="w-full max-w-md space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Dark Mode</p>
                <p className="text-white/50 text-sm">Use dark theme across the app</p>
              </div>
              <GlassSwitch defaultChecked />
            </div>
            <div className="h-px bg-white/10" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Push Notifications</p>
                <p className="text-white/50 text-sm">Receive push notifications</p>
              </div>
              <GlassSwitch />
            </div>
            <div className="h-px bg-white/10" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Auto Updates</p>
                <p className="text-white/50 text-sm">Keep app up to date automatically</p>
              </div>
              <GlassSwitch defaultChecked />
            </div>
          </div>
        }
        code={settingsSwitchCode}
      />
    </div>
  )
}
