import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { LayoutProvider } from '@/hooks/use-layout'

import { getThemeServerFn } from '@/lib/theme'
import { ThemeProvider, useTheme } from '@/components/theme-provider'
import appCss from '@/styles/globals.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Dasar UI',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  loader: () => getThemeServerFn(),
  shellComponent: RootComponent,
})

function RootComponent() {
  const theme = Route.useLoaderData()
  return (
    <ThemeProvider theme={theme}>
      <LayoutProvider>
        <RootDocument>
          <Outlet />
        </RootDocument>
      </LayoutProvider>
    </ThemeProvider>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  return (
    <html
      lang="en"
      className={theme}
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
      </head>
      <body className="text-foreground group/body overscroll-none font-sans antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]">
        {children}
        <TanStackRouterDevtools />
        <Scripts />
      </body>
    </html>
  )
}
