import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

type Config = {
  style: 'minimal'
  packageManager: 'npm' | 'yarn' | 'pnpm' | 'bun'
  installationType: 'cli' | 'manual'
}

const configAtom = atomWithStorage<Config>('config', {
  style: 'minimal',
  packageManager: 'bun',
  installationType: 'cli',
})

export function useConfig() {
  return useAtom(configAtom)
}
