import type { RegistryItem } from '@/lib/schema'

const config: RegistryItem = {
  name: 'button-ghost',
  title: 'Ghost Button',
  type: 'registry:example',
  files: [
    {
      path: 'registry/default/examples/button-ghost/button-ghost.tsx',
      type: 'registry:example',
    },
  ],
}

export default config
