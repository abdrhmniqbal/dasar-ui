import { createFileRoute } from '@tanstack/react-router'

import { ButtonDemo } from '@/components/blocks/sink/button-demo'
import { ComponentWrapper } from '@/components/blocks/sink/component-wrapper'

export const Route = createFileRoute('/sink')({
  component: SinkPage,
})

function SinkPage() {
  return (
    <div className="@container grid flex-1 gap-4 p-4">
      <ComponentWrapper name="Button">
        <ButtonDemo />
      </ComponentWrapper>
    </div>
  )
}
