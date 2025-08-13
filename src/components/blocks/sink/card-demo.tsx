import { Card } from '@/registry/minimal/ui/card'

export function CardDemo() {
  return (
    <div className="flex flex-col items-start gap-4">
      <Card>
        <Card.Header>
          <Card.Title>Meeting Notes</Card.Title>
          <Card.Description>
            Transcript from the meeting with the client.
          </Card.Description>
        </Card.Header>
        <Card.Content className="text-sm">
          <p>
            Client requested dashboard redesign with focus on mobile
            responsiveness.
          </p>
          <ol className="mt-4 flex list-decimal flex-col gap-2 pl-6">
            <li>New analytics widgets for daily/weekly metrics</li>
            <li>Simplified navigation menu</li>
            <li>Dark mode support</li>
            <li>Timeline: 6 weeks</li>
            <li>Follow-up meeting scheduled for next Tuesday</li>
          </ol>
        </Card.Content>
      </Card>
    </div>
  )
}
