import { Button } from '@/registry/minimal/ui/button/button'

export function Page() {
  return (
    <div className="flex gap-x-2">
      <Button appearance="ghost">Click me</Button>
      <Button
        appearance="ghost"
        color="secondary"
      >
        Click me
      </Button>
      <Button
        appearance="ghost"
        color="destructive"
      >
        Click me
      </Button>
    </div>
  )
}
