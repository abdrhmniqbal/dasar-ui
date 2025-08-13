import { RadioGroup } from '@/registry/minimal/ui/radio-group'

const plans = [
  {
    id: 'starter',
    name: 'Starter Plan',
    description:
      'Perfect for small businesses getting started with our platform',
    price: '$10',
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    description: 'Advanced features for growing businesses with higher demands',
    price: '$20',
  },
] as const

export function RadioGroupDemo() {
  return (
    <div className="flex flex-col gap-6">
      <RadioGroup defaultValue="comfortable">
        <RadioGroup.Label>Size</RadioGroup.Label>
        <RadioGroup.Item
          value="default"
          id="r1"
        >
          <RadioGroup.Control />
          <RadioGroup.ItemText>Default</RadioGroup.ItemText>
        </RadioGroup.Item>

        <RadioGroup.Item
          value="comfortable"
          id="r2"
        >
          <RadioGroup.Control />
          <RadioGroup.ItemText>Comfortable</RadioGroup.ItemText>
        </RadioGroup.Item>

        <RadioGroup.Item
          value="compact"
          id="r3"
        >
          <RadioGroup.Control />
          <RadioGroup.ItemText>Compact</RadioGroup.ItemText>
        </RadioGroup.Item>
      </RadioGroup>

      <RadioGroup
        defaultValue="starter"
        className="max-w-sm"
      >
        {plans.map((plan) => (
          <RadioGroup.Item
            className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-4 has-[[data-state=checked]]:border-green-600 has-[[data-state=checked]]:bg-green-50 dark:has-[[data-state=checked]]:border-green-900 dark:has-[[data-state=checked]]:bg-green-950"
            key={plan.id}
            value={plan.id}
          >
            <RadioGroup.Control
              id={plan.name}
              className="shadow-none data-[state=checked]:border-green-600 *:data-[part=indicator]:[&>svg]:fill-white *:data-[part=indicator]:[&>svg]:stroke-white"
            />
            <div className="grid gap-1 font-normal">
              <div className="font-medium">{plan.name}</div>
              <div className="text-muted-foreground leading-snug">
                {plan.description}
              </div>
            </div>
          </RadioGroup.Item>
        ))}
      </RadioGroup>
    </div>
  )
}
