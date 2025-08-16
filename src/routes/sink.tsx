import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sink')({
  component: SinkPage,
})

function SinkPage() {
  return (
    <div className="@container grid flex-1 gap-4 p-4">
      {/* <ComponentWrapper name="Accordion">
        <AccordionDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Alert">
        <AlertDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Aspect Ratio">
        <AspectRatioDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Avatar">
        <AvatarDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Badge">
        <BadgeDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Button">
        <ButtonDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Card">
        <CardDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Checkbox">
        <CheckboxDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Input">
        <InputDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Label">
        <LabelDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Radio Group">
        <RadioGroupDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Spinner">
        <SpinnerDemo />
      </ComponentWrapper> */}
    </div>
  )
}
