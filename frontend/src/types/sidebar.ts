export interface NavigationItem {
  name: string
  path: string
  icon: any // You can replace 'any' with the specific type if you know it
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
