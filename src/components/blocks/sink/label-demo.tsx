import { Input } from '@/registry/minimal/ui/input'
import { Label } from '@/registry/minimal/ui/label'

export function LabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <div className="grid gap-3">
        <Label htmlFor="label-demo-username">Username</Label>
        <Input
          id="label-demo-username"
          placeholder="Username"
        />
      </div>
      <div
        className="group grid gap-3"
        data-disabled={true}
      >
        <Label htmlFor="label-demo-disabled">Disabled</Label>
        <Input
          id="label-demo-disabled"
          placeholder="Disabled"
          disabled
        />
      </div>
    </div>
  )
}
