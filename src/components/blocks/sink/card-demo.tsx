import { Avatar } from '@/registry/minimal/ui/avatar'
import { Badge } from '@/registry/minimal/ui/badge'
import { Button } from '@/registry/minimal/ui/button'
import { Card } from '@/registry/minimal/ui/card'
import { Input } from '@/registry/minimal/ui/input'
import { Label } from '@/registry/minimal/ui/label'
import { IconBath, IconBed, IconRulerMeasure } from '@tabler/icons-react'

export function CardDemo() {
  return (
    <div className="flex flex-col items-start gap-4">
      <Card className="w-full max-w-sm">
        <Card.Header>
          <Card.Title>Login to your account</Card.Title>
          <Card.Description>
            Enter your email below to login to your account
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                />
              </div>
            </div>
          </form>
        </Card.Content>
        <Card.Footer className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full"
          >
            Login
          </Button>
          <Button
            variant="outline"
            className="w-full"
          >
            Login with Google
          </Button>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <a
              href="#"
              className="underline underline-offset-4"
            >
              Sign up
            </a>
          </div>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Header>
          <Card.Title>Meeting Notes</Card.Title>
          <Card.Description>
            Transcript from the meeting with the client.
          </Card.Description>
        </Card.Header>
        <Card.Content className="text-sm">
          <p>
            Client requested dashboard redesign with focus on mobile
            responsiveness.
          </p>
          <ol className="mt-4 flex list-decimal flex-col gap-2 pl-6">
            <li>New analytics widgets for daily/weekly metrics</li>
            <li>Simplified navigation menu</li>
            <li>Dark mode support</li>
            <li>Timeline: 6 weeks</li>
            <li>Follow-up meeting scheduled for next Tuesday</li>
          </ol>
        </Card.Content>
        <Card.Footer>
          <div className="*:data-[scope=avatar]:ring-background flex -space-x-2 *:data-[scope=avatar]:ring-2 *:data-[scope=avatar]:grayscale">
            <Avatar>
              <Avatar.Image
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar>
            <Avatar>
              <Avatar.Image
                src="https://github.com/leerob.png"
                alt="@leerob"
              />
              <Avatar.Fallback>LR</Avatar.Fallback>
            </Avatar>
            <Avatar>
              <Avatar.Image
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <Avatar.Fallback>ER</Avatar.Fallback>
            </Avatar>
          </div>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Header>
          <Card.Title>Is this an image?</Card.Title>
          <Card.Description>This is a card with an image.</Card.Description>
        </Card.Header>
        <Card.Content className="px-0">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            className="aspect-video object-cover"
            width={500}
            height={500}
          />
        </Card.Content>
        <Card.Footer className="flex items-center gap-2">
          <Badge variant="outline">
            <IconBed /> 4
          </Badge>
          <Badge variant="outline">
            <IconBath /> 2
          </Badge>
          <Badge variant="outline">
            <IconRulerMeasure /> 350m²
          </Badge>
          <div className="ml-auto font-medium tabular-nums">$135,000</div>
        </Card.Footer>
      </Card>
      <div className="flex w-full flex-wrap items-start gap-8 md:*:data-[scope=card]:basis-1/4">
        <Card>
          <Card.Content className="text-sm">Content Only</Card.Content>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Header Only</Card.Title>
            <Card.Description>
              This is a card with a header and a description.
            </Card.Description>
          </Card.Header>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Header and Content</Card.Title>
            <Card.Description>
              This is a card with a header and a content.
            </Card.Description>
          </Card.Header>
          <Card.Content className="text-sm">Content</Card.Content>
        </Card>
        <Card>
          <Card.Footer className="text-sm">Footer Only</Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Header + Footer</Card.Title>
            <Card.Description>
              This is a card with a header and a footer.
            </Card.Description>
          </Card.Header>
          <Card.Footer className="text-sm">Footer</Card.Footer>
        </Card>
        <Card>
          <Card.Content className="text-sm">Content</Card.Content>
          <Card.Footer className="text-sm">Footer</Card.Footer>
        </Card>
        <Card>
          <Card.Header>
            <Card.Title>Header + Footer</Card.Title>
            <Card.Description>
              This is a card with a header and a footer.
            </Card.Description>
          </Card.Header>
          <Card.Content className="text-sm">Content</Card.Content>
          <Card.Footer className="text-sm">Footer</Card.Footer>
        </Card>
      </div>
    </div>
  )
}
