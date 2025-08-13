import { createFileRoute } from '@tanstack/react-router'

import { AccordionDemo } from '@/components/blocks/sink/accordion-demo'
import { AlertDemo } from '@/components/blocks/sink/alert-demo'
import { AspectRatioDemo } from '@/components/blocks/sink/aspect-ratio-demo'
import { ButtonDemo } from '@/components/blocks/sink/button-demo'
import { CardDemo } from '@/components/blocks/sink/card-demo'
import { ComponentWrapper } from '@/components/blocks/sink/component-wrapper'
import { SpinnerDemo } from '@/components/blocks/sink/spinner-demo'

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
      <ComponentWrapper name="Aspect Ratio">
        <AspectRatioDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Button">
        <ButtonDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Card">
        <CardDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Spinner">
        <SpinnerDemo />
      </ComponentWrapper>
    </div>
  )
}
