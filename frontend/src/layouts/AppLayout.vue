<script setup>
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  Bell,
  ChevronDown,
  FolderClosed,
  House,
  Menu as MenuIcon,
  Search,
  Settings,
  Users,
  X,
} from 'lucide-vue-next'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
function isActiveRoute(path) {
  return route.path === path
}

const navigation = [
  { name: 'Dashboard', path: '/', icon: House },
  { name: 'Team', path: '#', icon: Users },
  { name: 'Projects', path: '#', icon: FolderClosed },
]
const teams = [
  { id: 1, name: 'Heroicons', path: '#', initial: 'H' },
  { id: 2, name: 'Tailwind Labs', path: '#', initial: 'T' },
  { id: 3, name: 'Workcation', path: '#', initial: 'W' },
]
const userNavigation = [
  { name: 'Your profile', path: '#' },
  { name: 'Sign out', path: '#' },
]

const sidebarOpen = ref(false)
</script>

<template>
  <div class="h-full flex overflow-hidden text-gray-900 dark:text-gray-100">
    <!-- Small/mobile sidebar -->
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80 dark:bg-neutral-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute top-0 left-full flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <X class="size-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-neutral-800 px-6 pb-4">
                <div class="flex h-16 shrink-0 items-center">
                  <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <RouterLink
                            :to="item.path"
                            class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                            :class="[isActiveRoute(item.path) ? 'bg-gray-50 dark:bg-neutral-700 text-indigo-600' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700 hover:text-indigo-600']"
                          >
                            <component
                              :is="item.icon"
                              class="size-6 shrink-0"
                              :class="[isActiveRoute(item.path) ? 'text-indigo-600' : 'text-gray-400 dark:text-gray-400 group-hover:text-indigo-600']"
                              aria-hidden="true"
                            />
                            {{ item.name }}
                          </RouterLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div class="text-xs/6 font-semibold text-gray-400 dark:text-gray-400">
                        Your teams
                      </div>
                      <ul role="list" class="-mx-2 mt-2 space-y-1">
                        <li v-for="team in teams" :key="team.name">
                          <RouterLink
                            :to="team.path"
                            class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                            :class="[isActiveRoute(team.path) ? 'bg-gray-50 dark:bg-neutral-700 text-indigo-600' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700 hover:text-indigo-600']"
                          >
                            <span
                              class="flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white dark:bg-neutral-800 text-[0.625rem] font-medium"
                              :class="[isActiveRoute(team.path) ? 'border-indigo-600 text-indigo-600' : 'border-gray-200 dark:border-neutral-600 text-gray-400 dark:text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600']"
                            >
                              {{ team.initial }}
                            </span>
                            <span class="truncate">{{ team.name }}</span>
                          </RouterLink>
                        </li>
                      </ul>
                    </li>
                    <li class="mt-auto">
                      <RouterLink
                        to="/settings"
                        class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                        :class="[isActiveRoute('/settings') ? 'bg-gray-50 dark:bg-neutral-700 text-indigo-600' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700 hover:text-indigo-600']"
                      >
                        <Settings
                          class="size-6 shrink-0"
                          :class="[isActiveRoute('/settings') ? 'text-indigo-600' : 'text-gray-400 dark:text-gray-400 group-hover:text-indigo-600']"
                          aria-hidden="true"
                        />
                        Settings
                      </RouterLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 dark:border-neutral-600 bg-white dark:bg-neutral-800 px-6 pb-4">
        <div class="flex h-16 shrink-0 items-center">
          <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <RouterLink
                    :to="item.path"
                    class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                    :class="[isActiveRoute(item.path) ? 'bg-gray-50 dark:bg-neutral-700 text-indigo-600' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700 hover:text-indigo-600']"
                  >
                    <component
                      :is="item.icon"
                      class="size-6 shrink-0"
                      :class="[isActiveRoute(item.path) ? 'text-indigo-600' : 'text-gray-400 dark:text-gray-400 group-hover:text-indigo-600']"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li>
              <div class="text-xs/6 font-semibold text-gray-400 dark:text-gray-400">
                Your teams
              </div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
                <li v-for="team in teams" :key="team.name">
                  <RouterLink
                    :to="team.path"
                    class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                    :class="[isActiveRoute(team.path) ? 'bg-gray-50 dark:bg-neutral-700 text-indigo-600' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700 hover:text-indigo-600']"
                  >
                    <span
                      class="flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white dark:bg-neutral-800 text-[0.625rem] font-medium"
                      :class="[isActiveRoute(team.path) ? 'border-indigo-600 text-indigo-600' : 'border-gray-200 dark:border-neutral-600 text-gray-400 dark:text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600']"
                    >
                      {{ team.initial }}
                    </span>
                    <span class="truncate">{{ team.name }}</span>
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li class="mt-auto">
              <RouterLink
                to="/settings"
                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                :class="[isActiveRoute('/settings') ? 'bg-gray-50 dark:bg-neutral-700 text-indigo-600' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700 hover:text-indigo-600']"
              >
                <Settings
                  class="size-6 shrink-0"
                  :class="[isActiveRoute('/settings') ? 'text-indigo-600' : 'text-gray-400 dark:text-gray-400 group-hover:text-indigo-600']"
                  aria-hidden="true"
                />
                Settings
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <!-- Main content area -->
    <div class="lg:pl-72 w-full">
      <!-- Top bar -->
      <header class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 dark:border-neutral-600 bg-white dark:bg-neutral-800 px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
        <button type="button" class="-m-2.5 p-2.5 text-gray-700 dark:text-gray-300 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <MenuIcon class="size-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-200 dark:bg-neutral-600 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form class="grid flex-1 grid-cols-1" action="#" method="GET">
            <input type="search" name="search" aria-label="Search" class="col-start-1 row-start-1 block size-full bg-white dark:bg-neutral-800 pl-8 text-base text-gray-900 dark:text-gray-100 outline-hidden placeholder:text-gray-400 dark:placeholder:text-gray-400 sm:text-sm/6" placeholder="Search">
            <Search class="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400 dark:text-gray-400" aria-hidden="true" />
          </form>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <button type="button" class="-m-2.5 p-2.5 text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400">
              <span class="sr-only">View notifications</span>
              <Bell class="size-6" aria-hidden="true" />
            </button>

            <!-- Separator -->
            <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200 dark:bg-neutral-600" aria-hidden="true" />

            <!-- Profile dropdown -->
            <Menu as="div" class="relative">
              <MenuButton class="-m-1.5 flex items-center p-1.5">
                <span class="sr-only">Open user menu</span>
                <img class="size-8 rounded-full bg-gray-50 dark:bg-neutral-700" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                <span class="hidden lg:flex lg:items-center">
                  <span class="ml-4 text-sm/6 font-semibold text-gray-900 dark:text-gray-100" aria-hidden="true">Tom Cook</span>
                  <ChevronDown class="ml-2 size-5 text-gray-400 dark:text-gray-400" aria-hidden="true" />
                </span>
              </MenuButton>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white dark:bg-neutral-800 py-2 ring-1 shadow-lg ring-gray-900/5 focus:outline-hidden">
                  <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <RouterLink :to="item.path" class="block px-3 py-1 text-sm/6 text-gray-900 dark:text-gray-100" :class="[active ? 'bg-gray-50 dark:bg-neutral-700 outline-hidden' : '']">
                      {{ item.name }}
                    </RouterLink>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </header>

      <!-- App Content -->
      <main class="py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<style>
html, body {
  @apply bg-gray-50 dark:bg-neutral-700 h-full;
}
</style>
