import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sink')({
  component: SinkPage,
})

function SinkPage() {
  return (
    <div className="@container grid flex-1 gap-4 p-4">Not yet implemented.</div>
  )
}
