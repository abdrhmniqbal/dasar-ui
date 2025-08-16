#!/usr/bin/env node
import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import { Command } from 'commander'

type Category =
  | 'lib'
  | 'block'
  | 'component'
  | 'ui'
  | 'hook'
  | 'page'
  | 'file'
  | 'theme'
  | 'style'
  | 'item'
  | 'example'
  | 'internal'

const ALLOWED: Category[] = [
  'lib',
  'block',
  'component',
  'ui',
  'hook',
  'page',
  'file',
  'theme',
  'style',
  'item',
  'example',
  'internal',
]

const FOLDER_BY_CATEGORY: Record<Category, string> = {
  lib: 'lib',
  block: 'blocks',
  component: 'components',
  ui: 'ui',
  hook: 'hooks',
  page: 'pages',
  file: 'files',
  theme: 'themes',
  style: 'style',
  item: 'items',
  example: 'examples',
  internal: 'internal',
}

const CATEGORY_ALIASES: Record<string, Category> = {
  libs: 'lib',
  library: 'lib',
  libraries: 'lib',
  blocks: 'block',
  components: 'component',
  hooks: 'hook',
  pages: 'page',
  files: 'file',
  themes: 'theme',
  items: 'item',
  examples: 'example',
  internals: 'internal',
  lib: 'lib',
  block: 'block',
  component: 'component',
  ui: 'ui',
  hook: 'hook',
  page: 'page',
  file: 'file',
  theme: 'theme',
  style: 'style',
  item: 'item',
  example: 'example',
  internal: 'internal',
}

function toTitleCase(input: string) {
  return input
    .split(/[-\s_]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function normalizeName(s: string) {
  return s.trim().replace(/\s+/g, '-').toLowerCase()
}

function resolveCategory(input: string): Category {
  const key = input.trim().toLowerCase()
  const resolved = CATEGORY_ALIASES[key]
  if (!resolved || !ALLOWED.includes(resolved)) {
    throw new Error(
      `Invalid category "${input}". Allowed: ${ALLOWED.join(', ')}`
    )
  }
  return resolved
}

function template({
  name,
  title,
  category,
}: {
  name: string
  title: string
  category: Category
}) {
  const type = `registry:${category}`
  return `import type { RegistryItem } from '@/lib/schema'

const config: RegistryItem = {
  name: '${name}',
  title: '${title}',
  type: '${type}',
  files: [],
}

export default config
`
}

async function ensureDir(dir: string) {
  await fsp.mkdir(dir, { recursive: true })
}

async function writeFileIfAllowed(
  filePath: string,
  content: string,
  force: boolean
) {
  const exists = fs.existsSync(filePath)
  if (exists && !force) {
    throw new Error(
      `File already exists: ${filePath}. Use --force to overwrite.`
    )
  }
  await ensureDir(path.dirname(filePath))
  await fsp.writeFile(filePath, content, 'utf8')
}

async function run(spec: string, opts: { force: boolean }) {
  const parts = spec.split(':')
  if (parts.length !== 3) {
    throw new Error(
      `Invalid spec "${spec}". Expected format: <style>:<category>:<name> (e.g., minimal:ui:button)`
    )
  }

  const [styleRaw, categoryRaw, nameRaw] = parts
  const style = normalizeName(styleRaw)
  const category = resolveCategory(categoryRaw)
  const name = normalizeName(nameRaw)
  const title = toTitleCase(name)

  const root = process.cwd()
  const registryRoot = path.join(root, 'registry')

  let filePath: string

  if (category === 'style') {
    filePath = path.join(registryRoot, style, 'config.ts')
  } else {
    const folder = FOLDER_BY_CATEGORY[category]
    filePath = path.join(registryRoot, style, folder, name, 'config.ts')
  }

  const content = template({ name, title, category })
  await writeFileIfAllowed(filePath, content, opts.force)

  console.log(`${styleRaw}:${categoryRaw}:${nameRaw}`)
  console.log(`Saved to ${path.relative(root, filePath)}`)
}

const program = new Command()
  .name('create-registry')
  .description(
    'Create a new registry config file from "<style>:<category>:<name>"'
  )
  .argument('<spec>', 'e.g., minimal:ui:button')
  .option('-f, --force', 'overwrite if the file already exists', false)
  .action(async (spec: string, options: { force: boolean }) => {
    try {
      await run(spec, options)
    } catch (err) {
      console.error((err as Error).message)
      process.exit(1)
    }
  })

program.parseAsync(process.argv)
