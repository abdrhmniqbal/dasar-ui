import { Registry } from './schema'

const ui: Registry = [
  {
    name: 'button',
    title: 'Button',
    description: 'An interactive element used to trigger actions.',
    type: 'registry:ui',
    files: [
      {
        path: 'ui/button.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'alert',
    title: 'Alert',
    description:
      'A component that displays a brief, important message to the user.',
    type: 'registry:ui',
    files: [
      {
        path: 'ui/alert.tsx',
        type: 'registry:ui',
      },
    ],
  },
]

const example: Registry = [
  {
    name: 'button-demo',
    title: 'Button Demo',
    description: '',
    type: 'registry:example',
    files: [
      {
        path: 'example/button-demo.tsx',
        type: 'registry:example',
      },
    ],
  },
  {
    name: 'button-press-example',
    title: 'Button Press Example',
    description: '',
    type: 'registry:example',
    files: [
      {
        path: 'example/button-press-example.tsx',
        type: 'registry:example',
      },
    ],
  },
  {
    name: 'button-variant-example',
    title: 'Button Variant Example',
    description: '',
    type: 'registry:example',
    files: [
      {
        path: 'example/button-variant-example.tsx',
        type: 'registry:example',
      },
    ],
  },
]

export const registry: Registry = [...ui, ...example]
