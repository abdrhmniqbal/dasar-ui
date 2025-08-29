import type { RegistryItem } from '@/lib/schema'

const config: RegistryItem = {
  name: 'button-demo',
  title: 'Button Demo',
  description: 'An interactive element used to trigger actions.',
  type: 'registry:example',
  files: [
    {
      path: 'registry/default/examples/button-demo/button-demo.tsx',
      type: 'registry:example',
    },
  ],
}

export default config
