<script setup lang="ts">
import type { UserNavigationItem } from '@/types/sidebar'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bell, ChevronDown, Menu as MenuIcon, Search } from 'lucide-vue-next'

interface Props { userNavigation: UserNavigationItem[] }
const props = defineProps<Props>()
const sidebarOpen = defineModel<boolean>('sidebarOpen')
</script>

<template>
  <!-- Top bar -->
  <header class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-surface-200 dark:border-surface-600 bg-surface-0 dark:bg-surface-900 px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
    <button type="button" class="-m-2.5 p-2.5 text-surface-700 dark:text-surface-300 lg:hidden" @click="sidebarOpen = true">
      <span class="sr-only">Open sidebar</span>
      <MenuIcon class="size-6" aria-hidden="true" />
    </button>

    <!-- Separator -->
    <div class="h-6 w-px bg-surface-200 dark:bg-surface-600 lg:hidden" aria-hidden="true" />

    <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
      <form class="grid flex-1 grid-cols-1" action="#" method="GET">
        <input type="search" name="search" aria-label="Search" class="col-start-1 row-start-1 block size-full bg-surface-0 dark:bg-surface-900 pl-8 text-base text-surface-900 dark:text-surface-100 outline-hidden placeholder:text-surface-400 dark:placeholder:text-surface-400 sm:text-sm/6" placeholder="Search">
        <Search class="pointer-events-none col-start-1 row-start-1 size-5 self-center text-surface-400 dark:text-surface-400" aria-hidden="true" />
      </form>
      <div class="flex items-center gap-x-4 lg:gap-x-6">
        <button type="button" class="-m-2.5 p-2.5 text-surface-400 dark:text-surface-300 hover:text-surface-500 dark:hover:text-surface-400">
          <span class="sr-only">View notifications</span>
          <Bell class="size-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-surface-200 dark:bg-surface-600" aria-hidden="true" />

        <!-- Profile dropdown -->
        <Menu as="div" class="relative">
          <MenuButton class="-m-1.5 flex items-center p-1.5">
            <span class="sr-only">Open user menu</span>
            <img class="size-8 rounded-full bg-surface-50 dark:bg-surface-700" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <span class="hidden lg:flex lg:items-center">
              <span class="ml-4 text-sm/6 font-semibold text-surface-900 dark:text-surface-100" aria-hidden="true">Tom Cook</span>
              <ChevronDown class="ml-2 size-5 text-surface-400 dark:text-surface-400" aria-hidden="true" />
            </span>
          </MenuButton>
          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-surface-0 dark:bg-surface-900 py-2 ring-1 shadow-lg ring-surface-900/5 focus:outline-hidden">
              <MenuItem v-for="item in props.userNavigation" :key="item.name" v-slot="{ active }">
                <RouterLink
                  :to="item.path"
                  class="block px-3 py-1 text-sm/6 text-surface-900 dark:text-surface-100"
                  :class="[active ? 'bg-surface-50 dark:bg-surface-800 outline-hidden' : '']"
                >
                  {{ item.name }}
                </RouterLink>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
  </header>
</template>
