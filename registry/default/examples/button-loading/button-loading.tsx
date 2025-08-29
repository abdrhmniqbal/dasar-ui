import { Button } from '@/registry/minimal/ui/button/button'
import { IconLoader2 } from '@tabler/icons-react'

export function Page() {
  return (
    <Button disabled>
      <IconLoader2 className="animate-spin" />
      Please wait
    </Button>
  )
}
