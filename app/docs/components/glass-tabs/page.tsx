"use client"

import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import { GlassTabs, GlassTabsList, GlassTabsTrigger, GlassTabsContent } from "@/registry/liquid-glass/glass-tabs"
import { GlassInput } from "@/registry/liquid-glass/glass-input"
import { GlassButton } from "@/registry/liquid-glass/glass-button"
import { Label } from "@/components/ui/label"
import { User, Settings, Bell } from "lucide-react"

const basicTabsCode = `<GlassTabs defaultValue="account">
  <GlassTabsList>
    <GlassTabsTrigger value="account">Account</GlassTabsTrigger>
    <GlassTabsTrigger value="password">Password</GlassTabsTrigger>
    <GlassTabsTrigger value="settings">Settings</GlassTabsTrigger>
  </GlassTabsList>
  <GlassTabsContent value="account">
    <p>Account settings content</p>
  </GlassTabsContent>
  <GlassTabsContent value="password">
    <p>Password settings content</p>
  </GlassTabsContent>
  <GlassTabsContent value="settings">
    <p>General settings content</p>
  </GlassTabsContent>
</GlassTabs>`

const withIconsCode = `<GlassTabs defaultValue="profile">
  <GlassTabsList>
    <GlassTabsTrigger value="profile">
      <User className="mr-2 h-4 w-4" /> Profile
    </GlassTabsTrigger>
    <GlassTabsTrigger value="notifications">
      <Bell className="mr-2 h-4 w-4" /> Notifications
    </GlassTabsTrigger>
    <GlassTabsTrigger value="settings">
      <Settings className="mr-2 h-4 w-4" /> Settings
    </GlassTabsTrigger>
  </GlassTabsList>
</GlassTabs>`

export default function TabsPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Tabs"
        description="Tabbed interface components with smooth transitions and glass morphism styling."
      />

      <CLIInstall componentName="glass-tabs" />

      <ComponentPreview
        title="Basic Tabs"
        description="Simple tabbed interface with text labels."
        preview={
          <GlassTabs defaultValue="account" className="w-full max-w-lg">
            <GlassTabsList>
              <GlassTabsTrigger value="account">Account</GlassTabsTrigger>
              <GlassTabsTrigger value="password">Password</GlassTabsTrigger>
              <GlassTabsTrigger value="settings">Settings</GlassTabsTrigger>
            </GlassTabsList>
            <GlassTabsContent value="account">
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-white/80">Manage your account settings and preferences.</p>
              </div>
            </GlassTabsContent>
            <GlassTabsContent value="password">
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-white/80">Update your password and security settings.</p>
              </div>
            </GlassTabsContent>
            <GlassTabsContent value="settings">
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-white/80">Configure general application settings.</p>
              </div>
            </GlassTabsContent>
          </GlassTabs>
        }
        code={basicTabsCode}
      />

      <ComponentPreview
        title="With Icons"
        description="Tabs with icons alongside text labels."
        preview={
          <GlassTabs defaultValue="profile" className="w-full max-w-lg">
            <GlassTabsList>
              <GlassTabsTrigger value="profile">
                <User className="mr-2 h-4 w-4" /> Profile
              </GlassTabsTrigger>
              <GlassTabsTrigger value="notifications">
                <Bell className="mr-2 h-4 w-4" /> Notifications
              </GlassTabsTrigger>
              <GlassTabsTrigger value="settings">
                <Settings className="mr-2 h-4 w-4" /> Settings
              </GlassTabsTrigger>
            </GlassTabsList>
            <GlassTabsContent value="profile">
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-white/80">Your profile information and public details.</p>
              </div>
            </GlassTabsContent>
            <GlassTabsContent value="notifications">
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-white/80">Manage your notification preferences.</p>
              </div>
            </GlassTabsContent>
            <GlassTabsContent value="settings">
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-white/80">Application settings and configuration.</p>
              </div>
            </GlassTabsContent>
          </GlassTabs>
        }
        code={withIconsCode}
      />

      <ComponentPreview
        title="Settings Panel"
        description="A complete settings panel with form content in each tab."
        preview={
          <GlassTabs defaultValue="general" className="w-full">
            <GlassTabsList className="w-full">
              <GlassTabsTrigger value="general" className="flex-1">
                General
              </GlassTabsTrigger>
              <GlassTabsTrigger value="notifications" className="flex-1">
                Notifications
              </GlassTabsTrigger>
              <GlassTabsTrigger value="security" className="flex-1">
                Security
              </GlassTabsTrigger>
            </GlassTabsList>
            <GlassTabsContent value="general">
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-white/80 text-sm">Display Name</Label>
                  <GlassInput placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-white/80 text-sm">Email</Label>
                  <GlassInput placeholder="john@example.com" />
                </div>
                <GlassButton variant="primary">Save Changes</GlassButton>
              </div>
            </GlassTabsContent>
            <GlassTabsContent value="notifications">
              <div className="space-y-4">
                <p className="text-white/60 text-sm">Configure how you receive notifications.</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <span className="text-white/80 text-sm">Email notifications</span>
                    <div className="w-10 h-6 bg-cyan-500/50 rounded-full" />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <span className="text-white/80 text-sm">Push notifications</span>
                    <div className="w-10 h-6 bg-white/20 rounded-full" />
                  </div>
                </div>
              </div>
            </GlassTabsContent>
            <GlassTabsContent value="security">
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-white/80 text-sm">Current Password</Label>
                  <GlassInput type="password" placeholder="Enter current password" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-white/80 text-sm">New Password</Label>
                  <GlassInput type="password" placeholder="Enter new password" />
                </div>
                <GlassButton variant="primary">Update Password</GlassButton>
              </div>
            </GlassTabsContent>
          </GlassTabs>
        }
        code={`<GlassTabs defaultValue="general">
  <GlassTabsList className="w-full">
    <GlassTabsTrigger value="general" className="flex-1">General</GlassTabsTrigger>
    <GlassTabsTrigger value="notifications" className="flex-1">Notifications</GlassTabsTrigger>
    <GlassTabsTrigger value="security" className="flex-1">Security</GlassTabsTrigger>
  </GlassTabsList>
  <GlassTabsContent value="general">
    {/* Form content */}
  </GlassTabsContent>
</GlassTabs>`}
      />
    </div>
  )
}
