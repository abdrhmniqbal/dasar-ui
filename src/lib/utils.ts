import React from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isElementWithAttr<
  T extends Record<string, unknown> = Record<string, unknown>,
>(
  node: React.ReactNode,
  attr: string,
  value?: unknown
): node is React.ReactElement<T> {
  return (
    React.isValidElement<T>(node) &&
    Object.prototype.hasOwnProperty.call(node.props, attr) &&
    (value === undefined || node.props[attr] === value)
  )
}

export function splitByChar(input: string, separator: string): string[] {
  return input.split(separator).filter(Boolean)
}

export function absoluteUrl(path: string) {
  return `${import.meta.env.VITE_PUBLIC_APP_URL}${path}`
}

export function normalizePath(path: string): string {
  return path === '/' ? path : path.replace(/\/+$/, '')
}

export function shouldRedirect(
  currentPath: string,
  targets: string | string[]
): boolean {
  const list = Array.isArray(targets) ? targets : [targets]

  const normalizedCurrent = normalizePath(currentPath)
  return list.some((t) => {
    const normalizedTarget = normalizePath(t)
    // match either exact or with/without trailing slash
    return normalizedCurrent === normalizedTarget
  })
}
