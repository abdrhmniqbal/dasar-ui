import type { RegistryItem } from '@/lib/schema'

const config: RegistryItem = {
  name: 'button-sizes',
  title: 'Button Sizes',
  type: 'registry:example',
  files: [
    {
      path: 'registry/default/examples/button-sizes/button-sizes.tsx',
      type: 'registry:example',
    },
  ],
}

export default config
