import { Button } from '@/registry/minimal/ui/button/button'
import { IconArrowRight, IconHeart, IconSend } from '@tabler/icons-react'

export function ButtonDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button size="xs">Extra Small</Button>
        <Button
          variant="outline"
          size="xs"
        >
          Outline
        </Button>
        <Button
          variant="ghost"
          size="xs"
        >
          Ghost
        </Button>
        <Button
          variant="destructive"
          size="xs"
        >
          Destructive
        </Button>
        <Button
          variant="secondary"
          size="xs"
        >
          Secondary
        </Button>
        <Button
          variant="link"
          size="xs"
        >
          Link
        </Button>
        <Button
          variant="outline"
          size="xs"
        >
          <IconSend /> Send
        </Button>
        <Button
          variant="outline"
          size="xs"
        >
          Learn More <IconArrowRight />
        </Button>
        <Button
          size="xs"
          variant="outline"
          iconOnly
        >
          <IconHeart />
        </Button>
        <Button
          size="xs"
          variant="outline"
        >
          Please wait
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button size="sm">Small</Button>
        <Button
          variant="outline"
          size="sm"
        >
          Outline
        </Button>
        <Button
          variant="ghost"
          size="sm"
        >
          Ghost
        </Button>
        <Button
          variant="destructive"
          size="sm"
        >
          Destructive
        </Button>
        <Button
          variant="secondary"
          size="sm"
        >
          Secondary
        </Button>
        <Button
          variant="link"
          size="sm"
        >
          Link
        </Button>
        <Button
          variant="outline"
          size="sm"
        >
          <IconSend /> Send
        </Button>
        <Button
          variant="outline"
          size="sm"
        >
          Learn More <IconArrowRight />
        </Button>
        <Button
          size="sm"
          variant="outline"
          iconOnly
        >
          <IconHeart />
        </Button>
        <Button
          disabled
          size="sm"
          variant="outline"
        >
          Please wait
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button>Medium</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline">
          <IconSend /> Send
        </Button>
        <Button variant="outline">
          Learn More <IconArrowRight />
        </Button>
        <Button
          variant="outline"
          iconOnly
        >
          <IconHeart />
        </Button>
        <Button
          disabled
          variant="outline"
        >
          Please wait
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button size="lg">Large</Button>
        <Button
          variant="outline"
          size="lg"
        >
          Outline
        </Button>
        <Button
          variant="ghost"
          size="lg"
        >
          Ghost
        </Button>
        <Button
          variant="destructive"
          size="lg"
        >
          Destructive
        </Button>
        <Button
          variant="secondary"
          size="lg"
        >
          Secondary
        </Button>
        <Button
          variant="link"
          size="lg"
        >
          Link
        </Button>
        <Button
          variant="outline"
          size="lg"
        >
          <IconSend /> Send
        </Button>
        <Button
          variant="outline"
          size="lg"
        >
          Learn More <IconArrowRight />
        </Button>
        <Button
          size="lg"
          variant="outline"
          iconOnly
        >
          <IconHeart />
        </Button>
        <Button
          disabled
          size="lg"
          variant="outline"
        >
          Please wait
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button size="xl">Extra Large</Button>
        <Button
          variant="outline"
          size="xl"
        >
          Outline
        </Button>
        <Button
          variant="ghost"
          size="xl"
        >
          Ghost
        </Button>
        <Button
          variant="destructive"
          size="xl"
        >
          Destructive
        </Button>
        <Button
          variant="secondary"
          size="xl"
        >
          Secondary
        </Button>
        <Button
          variant="link"
          size="xl"
        >
          Link
        </Button>
        <Button
          variant="outline"
          size="xl"
        >
          <IconSend /> Send
        </Button>
        <Button
          variant="outline"
          size="xl"
        >
          Learn More <IconArrowRight />
        </Button>
        <Button
          size="xl"
          variant="outline"
          iconOnly
        >
          <IconHeart />
        </Button>
        <Button
          disabled
          size="xl"
          variant="outline"
        >
          Please wait
        </Button>
      </div>
    </div>
  )
}
