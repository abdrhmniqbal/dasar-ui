// @ts-nocheck
import { z } from 'zod'

export const registryItemSchema = z.object({
  $schema: z.string().optional(),
  name: z.string(),
  title: z.string(),
  description: z.string(),
  type: z.enum([
    'registry:block',
    'registry:component',
    'registry:lib',
    'registry:hook',
    'registry:ui',
    'registry:page',
    'registry:file',
    'registry:style',
    'registry:theme',
    'registry:example',
  ]),
  author: z.string().optional(),
  dependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
  files: z.array(
    z.object({
      path: z.string(),
      type: z.string(),
      target: z.string().optional(),
    })
  ),
  cssVars: z
    .object({
      theme: z.record(z.string()).optional(),
      light: z.record(z.string()).optional(),
      dark: z.record(z.string()).optional(),
    })
    .optional(),
  css: z.record(z.union([z.string(), z.record(z.any())])).optional(),
  docs: z.string().optional(),
  categories: z.array(z.string()).optional(),
  meta: z.record(z.unknown()).optional(),
})

export type RegistryItem = z.infer<typeof registryItemSchema>

export const registrySchema = z.array(registryItemSchema)

export type Registry = z.infer<typeof registrySchema>
