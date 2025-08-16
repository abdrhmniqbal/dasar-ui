import type { RegistryItem } from '@/lib/schema'

const config: RegistryItem = {
  name: 'button',
  title: 'Button',
  description: 'An interactive element used to trigger actions.',
  type: 'registry:ui',
  files: [
    {
      path: 'registry/minimal/ui/button/button.tsx',
      type: 'registry:ui',
    },
  ],
}

export default config
