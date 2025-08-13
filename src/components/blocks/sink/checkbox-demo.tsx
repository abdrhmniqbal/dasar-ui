'use client'

import { Checkbox } from '@/registry/minimal/ui/checkbox'
import { Label } from '@/registry/minimal/ui/label'

export function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Checkbox>
        <Checkbox.Control />
        <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
      </Checkbox>
      <Checkbox defaultChecked>
        <Checkbox.Control />
        <div className="grid gap-2">
          <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
          <p className="text-muted-foreground text-sm">
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </Checkbox>
      <div className="flex items-start gap-3">
        <Checkbox disabled>
          <Checkbox.Control />
          <Label>Enable notifications</Label>
        </Checkbox>
      </div>
      <Checkbox
        className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[data-state=checked]]:border-blue-600 has-[[data-state=checked]]:bg-blue-50 dark:has-[[data-state=checked]]:border-blue-900 dark:has-[[data-state=checked]]:bg-blue-950"
        defaultChecked
      >
        <Checkbox.Control
          id="toggle-2"
          className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
        />
        <div className="grid gap-1.5 font-normal">
          <p className="text-sm leading-none font-medium">
            Enable notifications
          </p>
          <p className="text-muted-foreground text-sm">
            You can enable or disable notifications at any time.
          </p>
        </div>
      </Checkbox>
      <Checkbox.Group>
        <Label>Settings</Label>
        <Checkbox value="notifications">
          <Checkbox.Control />
          <Checkbox.Label>Enable notifications</Checkbox.Label>
        </Checkbox>

        <Checkbox value="auto_update">
          <Checkbox.Control />
          <Checkbox.Label>Auto-update applications</Checkbox.Label>
        </Checkbox>
        <Checkbox value="dark_mode">
          <Checkbox.Control />
          <Checkbox.Label>Enable dark mode</Checkbox.Label>
        </Checkbox>
        <Checkbox value="location_access">
          <Checkbox.Control />
          <Checkbox.Label>Allow location access</Checkbox.Label>
        </Checkbox>
        <Checkbox value="two_factor_auth">
          <Checkbox.Control />
          <Checkbox.Label>Enable two-factor authentication</Checkbox.Label>
        </Checkbox>
      </Checkbox.Group>
    </div>
  )
}
