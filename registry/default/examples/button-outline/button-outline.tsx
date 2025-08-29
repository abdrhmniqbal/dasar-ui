import { Button } from '@/registry/minimal/ui/button/button'

export function Page() {
  return (
    <div className="flex gap-x-2">
      <Button appearance="outline">Click me</Button>
      <Button
        appearance="outline"
        color="secondary"
      >
        Click me
      </Button>
      <Button
        appearance="outline"
        color="destructive"
      >
        Click me
      </Button>
    </div>
  )
}
