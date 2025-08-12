import { Spinner } from '@/registry/minimal/ui/spinner'

export function SpinnerDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Spinner />
      </div>
    </div>
  )
}
