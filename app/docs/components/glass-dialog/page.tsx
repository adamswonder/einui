"use client"

import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CLIInstall } from "@/components/docs/cli-install"
import {
  GlassDialog,
  GlassDialogTrigger,
  GlassDialogContent,
  GlassDialogHeader,
  GlassDialogTitle,
  GlassDialogDescription,
  GlassDialogFooter,
} from "@/registry/liquid-glass/glass-dialog"
import { GlassButton } from "@/registry/liquid-glass/glass-button"
import { GlassInput } from "@/registry/liquid-glass/glass-input"
import { Label } from "@/components/ui/label"
import { AlertTriangle } from "lucide-react"
import React from "react"

const basicDialogCode = `<GlassDialog>
  <GlassDialogTrigger asChild>
    <GlassButton>Open Dialog</GlassButton>
  </GlassDialogTrigger>
  <GlassDialogContent>
    <GlassDialogHeader>
      <GlassDialogTitle>Dialog Title</GlassDialogTitle>
      <GlassDialogDescription>
        This is a description of the dialog content.
      </GlassDialogDescription>
    </GlassDialogHeader>
    <GlassDialogFooter>
      <GlassButton variant="outline">Cancel</GlassButton>
      <GlassButton variant="primary">Confirm</GlassButton>
    </GlassDialogFooter>
  </GlassDialogContent>
</GlassDialog>`

const formDialogCode = `<GlassDialog>
  <GlassDialogTrigger asChild>
    <GlassButton variant="primary">Edit Profile</GlassButton>
  </GlassDialogTrigger>
  <GlassDialogContent>
    <GlassDialogHeader>
      <GlassDialogTitle>Edit Profile</GlassDialogTitle>
      <GlassDialogDescription>
        Update your profile information.
      </GlassDialogDescription>
    </GlassDialogHeader>
    <div className="flex flex-col gap-4 py-4">
      <div className="flex flex-col gap-2">
        <Label>Name</Label>
        <GlassInput placeholder="John Doe" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Email</Label>
        <GlassInput placeholder="john@example.com" />
      </div>
    </div>
    <GlassDialogFooter>
      <GlassButton variant="outline">Cancel</GlassButton>
      <GlassButton variant="primary">Save Changes</GlassButton>
    </GlassDialogFooter>
  </GlassDialogContent>
</GlassDialog>`

export default function DialogsPage() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Dialogs"
        description="Modal dialog components with backdrop blur and smooth animations for confirmations and forms."
      />

      <CLIInstall componentName="glass-dialog" />

      <ComponentPreview
        title="Basic Dialog"
        description="A simple dialog with title, description, and action buttons."
        preview={
          <GlassDialog open={open} onOpenChange={setOpen}>
            <GlassDialogTrigger asChild>
              <GlassButton>Open Dialog</GlassButton>
            </GlassDialogTrigger>
            <GlassDialogContent>
              <GlassDialogHeader>
                <GlassDialogTitle>Dialog Title</GlassDialogTitle>
                <GlassDialogDescription>
                  This is a description of the dialog content. Add any relevant information here.
                </GlassDialogDescription>
              </GlassDialogHeader>
              <GlassDialogFooter>
                <GlassButton onClick={() => setOpen(false)} variant="outline">Cancel</GlassButton>
                <GlassButton onClick={() => setOpen(false)} variant="primary">Confirm</GlassButton>
              </GlassDialogFooter>
            </GlassDialogContent>
          </GlassDialog>
        }
        code={basicDialogCode}
      />

      <ComponentPreview
        title="Form Dialog"
        description="A dialog containing a form for editing profile information."
        preview={
          <GlassDialog>
            <GlassDialogTrigger asChild>
              <GlassButton variant="primary">Edit Profile</GlassButton>
            </GlassDialogTrigger>
            <GlassDialogContent>
              <GlassDialogHeader>
                <GlassDialogTitle>Edit Profile</GlassDialogTitle>
                <GlassDialogDescription>Update your profile information below.</GlassDialogDescription>
              </GlassDialogHeader>
              <div className="flex flex-col gap-4 py-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-white/80">Name</Label>
                  <GlassInput placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-white/80">Email</Label>
                  <GlassInput placeholder="john@example.com" />
                </div>
              </div>
              <GlassDialogFooter>
                <GlassButton onClick={() => setOpen(false)} variant="outline">Cancel</GlassButton>
                <GlassButton onClick={() => setOpen(false)} variant="primary">Save Changes</GlassButton>
              </GlassDialogFooter>
            </GlassDialogContent>
          </GlassDialog>
        }
        code={formDialogCode}
      />

      <ComponentPreview
        title="Confirmation Dialog"
        description="A destructive action confirmation dialog."
        preview={
          <GlassDialog>
            <GlassDialogTrigger asChild>
              <GlassButton variant="destructive">Delete Account</GlassButton>
            </GlassDialogTrigger>
            <GlassDialogContent>
              <GlassDialogHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-red-500/20">
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                  </div>
                  <GlassDialogTitle>Delete Account</GlassDialogTitle>
                </div>
                <GlassDialogDescription>
                  Are you sure you want to delete your account? This action cannot be undone.
                </GlassDialogDescription>
              </GlassDialogHeader>
              <GlassDialogFooter>
                <GlassButton onClick={() => setOpen(false)} variant="outline">Cancel</GlassButton>
                <GlassButton onClick={() => setOpen(false)} variant="destructive">Delete</GlassButton>
              </GlassDialogFooter>
            </GlassDialogContent>
          </GlassDialog>
        }
        code={`<GlassDialog>
  <GlassDialogTrigger asChild>
    <GlassButton variant="destructive">Delete Account</GlassButton>
  </GlassDialogTrigger>
  <GlassDialogContent>
    <GlassDialogHeader>
      <GlassDialogTitle>Delete Account</GlassDialogTitle>
      <GlassDialogDescription>
        Are you sure you want to delete your account? This action cannot be undone.
      </GlassDialogDescription>
    </GlassDialogHeader>
    <GlassDialogFooter>
      <GlassButton variant="outline">Cancel</GlassButton>
      <GlassButton variant="destructive">Delete</GlassButton>
    </GlassDialogFooter>
  </GlassDialogContent>
</GlassDialog>`}
      />
    </div>
  )
}
