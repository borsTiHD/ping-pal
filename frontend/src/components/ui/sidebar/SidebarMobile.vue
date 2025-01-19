<script setup lang="ts">
import type { NavigationItem, TeamItem } from '@/types/sidebar'
import { useRouteHelper } from '@/composables/route-helper'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { Settings, X } from 'lucide-vue-next'

interface Props {
  navigation: NavigationItem[]
  teams: TeamItem[]
}

const props = defineProps<Props>()
const sidebarOpen = defineModel<boolean>('sidebarOpen')

const { isActiveRoute } = useRouteHelper()
</script>

<template>
  <!-- Small/mobile sidebar -->
  <TransitionRoot as="template" :show="sidebarOpen">
    <Dialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
      <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-surface-900/80 dark:bg-surface-900/80" />
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
            <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-surface-0 dark:bg-surface-900 px-6 pb-4">
              <div class="flex h-16 shrink-0 items-center">
                <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
              </div>
              <nav class="flex flex-1 flex-col">
                <ul role="list" class="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" class="-mx-2 space-y-1">
                      <li v-for="item in props.navigation" :key="item.name">
                        <RouterLink
                          :to="item.path"
                          class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                          :class="[isActiveRoute(item.path)
                            ? 'bg-surface-50 dark:bg-surface-800 text-primary-600 dark:text-primary-400'
                            : 'text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-800 hover:text-primary-400']"
                        >
                          <component
                            :is="item.icon"
                            class="size-6 shrink-0"
                            :class="[isActiveRoute(item.path)
                              ? 'text-primary-600 dark:text-primary-400'
                              : 'text-surface-400 dark:text-surface-400 group-hover:text-primary-400']"
                            aria-hidden="true"
                          />
                          {{ item.name }}
                        </RouterLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div class="text-xs/6 font-semibold text-surface-400 dark:text-surface-400">
                      Your teams
                    </div>
                    <ul role="list" class="-mx-2 mt-2 space-y-1">
                      <li v-for="team in props.teams" :key="team.name">
                        <RouterLink
                          :to="team.path"
                          class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                          :class="[isActiveRoute(team.path)
                            ? 'bg-surface-50 dark:bg-surface-800 text-primary-600 dark:text-primary-400'
                            : 'text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-800 hover:text-primary-400']"
                        >
                          <span
                            class="flex size-6 shrink-0 items-center justify-center rounded-lg border bg-surface-0 dark:bg-surface-900 text-[0.625rem] font-medium"
                            :class="[isActiveRoute(team.path)
                              ? 'border-primary-600 text-primary-600 dark:text-primary-400'
                              : 'border-surface-200 dark:border-surface-600 text-surface-400 dark:text-surface-400 group-hover:border-primary-600 group-hover:text-primary-400']"
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
                      :class="[isActiveRoute('/settings')
                        ? 'bg-surface-50 dark:bg-surface-800 text-primary-600 dark:text-primary-400'
                        : 'text-surface-700 dark:text-surface-300 hover:bg-surface-50 dark:hover:bg-surface-800 hover:text-primary-400']"
                    >
                      <Settings
                        class="size-6 shrink-0"
                        :class="[isActiveRoute('/settings')
                          ? 'text-primary-600 dark:text-primary-400'
                          : 'text-surface-400 dark:text-surface-400 group-hover:text-primary-400']"
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
</template>
