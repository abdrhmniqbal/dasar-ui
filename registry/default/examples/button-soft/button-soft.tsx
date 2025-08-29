import { Button } from '@/registry/minimal/ui/button/button'

export function Page() {
  return (
    <div className="flex gap-x-2">
      <Button appearance="soft">Click me</Button>
      <Button
        appearance="soft"
        color="secondary"
      >
        Click me
      </Button>
      <Button
        appearance="soft"
        color="destructive"
      >
        Click me
      </Button>
    </div>
  )
}
