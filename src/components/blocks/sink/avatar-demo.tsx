import { Avatar } from '@/registry/minimal/ui/avatar'
import { IconUser } from '@tabler/icons-react'

export function AvatarDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row flex-wrap items-center gap-4">
        <Avatar size="xs">
          <Avatar.Image
            src="https://github.com/abdrhmniqbal.png"
            alt="@abdrhmniqbal"
          />
          <Avatar.Fallback>IA</Avatar.Fallback>
        </Avatar>
        <Avatar size="sm">
          <Avatar.Fallback>IA</Avatar.Fallback>
        </Avatar>
        <Avatar size="md">
          <Avatar.Fallback>
            <IconUser />
          </Avatar.Fallback>
        </Avatar>
        <Avatar size="lg">
          <Avatar.Image
            src="https://github.com/abdrhmniqbal.png"
            alt="@abdrhmniqbal"
          />
          <Avatar.Fallback>IA</Avatar.Fallback>
        </Avatar>
        <Avatar size="xl">
          <Avatar.Fallback>IA</Avatar.Fallback>
        </Avatar>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-4">
        <Avatar>
          <Avatar.Image
            src="https://github.com/abdrhmniqbal.png"
            alt="@abdrhmniqbal"
          />
          <Avatar.Fallback>IA</Avatar.Fallback>
        </Avatar>
        <Avatar>
          <Avatar.Fallback>IA</Avatar.Fallback>
        </Avatar>
        <Avatar className="size-12">
          <Avatar.Image
            src="https://github.com/abdrhmniqbal.png"
            alt="@abdrhmniqbal"
          />
          <Avatar.Fallback>IA</Avatar.Fallback>
        </Avatar>
        <Avatar className="rounded-lg">
          <Avatar.Image
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar>
        <div className="*:data-[scope=avatar]:ring-background flex -space-x-2 *:data-[scope=avatar]:ring-2 *:data-[scope=avatar]:grayscale">
          <Avatar>
            <Avatar.Image
              src="https://github.com/abdrhmniqbal.png"
              alt="@abdrhmniqbal"
            />
            <Avatar.Fallback>IA</Avatar.Fallback>
          </Avatar>
          <Avatar>
            <Avatar.Image
              src="https://github.com/chakra-ui.png"
              alt="@chakra-ui"
            />
            <Avatar.Fallback>CU</Avatar.Fallback>
          </Avatar>
          <Avatar>
            <Avatar.Image
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <Avatar.Fallback>CN</Avatar.Fallback>
          </Avatar>
        </div>
        <div className="*:data-[scope=avatar]:ring-background flex -space-x-2 *:data-[scope=avatar]:size-12 *:data-[scope=avatar]:ring-2 *:data-[scope=avatar]:grayscale">
          <Avatar>
            <Avatar.Image
              src="https://github.com/abdrhmniqbal.png"
              alt="@abdrhmniqbal"
            />
            <Avatar.Fallback>IA</Avatar.Fallback>
          </Avatar>
          <Avatar>
            <Avatar.Image
              src="https://github.com/chakra-ui.png"
              alt="@chakra-ui"
            />
            <Avatar.Fallback>CU</Avatar.Fallback>
          </Avatar>
          <Avatar>
            <Avatar.Image
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <Avatar.Fallback>CN</Avatar.Fallback>
          </Avatar>
        </div>
        <div className="*:data-[scope=avatar]:ring-background flex -space-x-2 hover:space-x-1 *:data-[scope=avatar]:size-12 *:data-[scope=avatar]:ring-2 *:data-[scope=avatar]:grayscale *:data-[scope=avatar]:transition-all *:data-[scope=avatar]:duration-300 *:data-[scope=avatar]:ease-in-out">
          <Avatar>
            <Avatar.Image
              src="https://github.com/abdrhmniqbal.png"
              alt="@abdrhmniqbal"
            />
            <Avatar.Fallback>IA</Avatar.Fallback>
          </Avatar>
          <Avatar>
            <Avatar.Image
              src="https://github.com/chakra-ui.png"
              alt="@chakra-ui"
            />
            <Avatar.Fallback>CU</Avatar.Fallback>
          </Avatar>
          <Avatar>
            <Avatar.Image
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <Avatar.Fallback>CN</Avatar.Fallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}
