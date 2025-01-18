<script setup lang="ts">
import type { NavigationItem, TeamItem } from '@/types/sidebar'
import { useRouteHelper } from '@/composables/route-helper'
import { Settings } from 'lucide-vue-next'

interface Props {
  navigation: NavigationItem[]
  teams: TeamItem[]
}
const props = defineProps<Props>()

const { isActiveRoute } = useRouteHelper()
</script>

<template>
  <!-- Static sidebar for desktop -->
  <!-- Sidebar component, swap this element with another sidebar if you like -->
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 dark:border-neutral-600 bg-white dark:bg-neutral-800 px-6 pb-4">
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
              <li v-for="team in props.teams" :key="team.name">
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
</template>
