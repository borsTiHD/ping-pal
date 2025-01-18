import type { LucideIcon } from 'lucide-vue-next'

export interface NavigationItem {
  name: string
  path: string
  icon: LucideIcon
}

export interface UserNavigationItem {
  name: string
  path: string
}

export interface TeamItem {
  name: string
  initial: string
  path: string
}
