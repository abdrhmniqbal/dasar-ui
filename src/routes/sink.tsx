import { createFileRoute } from '@tanstack/react-router'

import { AccordionDemo } from '@/components/blocks/sink/accordion-demo'
import { AlertDemo } from '@/components/blocks/sink/alert-demo'
import { ButtonDemo } from '@/components/blocks/sink/button-demo'
import { ComponentWrapper } from '@/components/blocks/sink/component-wrapper'

export const Route = createFileRoute('/sink')({
  component: SinkPage,
})

function SinkPage() {
  return (
    <div className="@container grid flex-1 gap-4 p-4">
      <ComponentWrapper name="Accordion">
        <AccordionDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Alert">
        <AlertDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Button">
        <ButtonDemo />
      </ComponentWrapper>
    </div>
  )
}
