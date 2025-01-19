<script setup lang="ts">
import type { NavigationItem, TeamItem, UserNavigationItem } from '@/types/sidebar'
import Navbar from '@/components/ui/Navbar.vue'
import SidebarDesktop from '@/components/ui/sidebar/SidebarDesktop.vue'
import SidebarMobile from '@/components/ui/sidebar/SidebarMobile.vue'
import { FolderClosed, House, Users } from 'lucide-vue-next'
import { ref } from 'vue'

const sidebarOpen = ref(false)

const navigation: NavigationItem[] = [
  { name: 'Dashboard', path: '/', icon: House },
  { name: 'Team', path: '#', icon: Users },
  { name: 'Projects', path: '#', icon: FolderClosed },
]

const teams: TeamItem[] = [
  { name: 'Heroicons', path: '#', initial: 'H' },
  { name: 'Tailwind Labs', path: '#', initial: 'T' },
  { name: 'Workcation', path: '#', initial: 'W' },
]

const userNavigation: UserNavigationItem[] = [
  { name: 'Your profile', path: '#' },
  { name: 'Sign out', path: '#' },
]
</script>

<template>
  <div class="h-full flex overflow-hidden text-surface-700 dark:text-surface-0">
    <!-- Small/mobile sidebar -->
    <SidebarMobile v-model:sidebar-open="sidebarOpen" :navigation :teams />

    <!-- Static sidebar for desktop -->
    <SidebarDesktop :navigation :teams />

    <!-- Main content area -->
    <div class="lg:pl-72 w-full">
      <!-- Top bar -->
      <Navbar v-model:sidebar-open="sidebarOpen" :user-navigation="userNavigation" />

      <!-- App Content -->
      <main class="py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
