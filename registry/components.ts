import { Registry } from './schema'

const ui: Registry = [
  {
    name: 'accordion',
    title: 'Accordion',
    description:
      'A collapsible component that displays content in a vertical stack',
    type: 'registry:ui',
    files: [
      {
        path: 'ui/accordion.tsx',
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
  {
    name: 'aspect-ratio',
    title: 'Aspect Ratio',
    description: 'Displays content within a desired ratio.',
    type: 'registry:ui',
    files: [
      {
        path: 'ui/aspect-ratio.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'avatar',
    title: 'Avatar',
    description:
      'A graphical representation of the user, often used in profile sections.',
    type: 'registry:ui',
    files: [
      {
        path: 'ui/avatar.tsx',
        type: 'registry:ui',
      },
    ],
  },
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
    name: 'card',
    title: 'Card',
    description:
      'A container component that displays content in a compact and organized way.',
    type: 'registry:ui',
    files: [
      {
        path: 'ui/card.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'input',
    title: 'Input',
    description:
      'A field that allows user input, often used for forms or search functionality.',
    type: 'registry:ui',
    files: [
      {
        path: 'ui/input.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'label',
    title: 'Label',
    description:
      'A text component that provides information about another component.',
    type: 'registry:ui',
    files: [
      {
        path: 'ui/label.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'spinner',
    title: 'Spinner',
    description: 'An animated loading spinner.',
    type: 'registry:ui',
    files: [
      {
        path: 'ui/spinner.tsx',
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
