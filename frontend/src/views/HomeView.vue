<script setup lang="ts">
import { ref } from 'vue'
import TheWelcome from '@/components/TheWelcome.vue'
import { Greet } from 'wailsjs/go/backend/App'

const input = ref('')

const onClick = async () => {
  const greeting = await Greet(input.value)
  alert(greeting)
}
</script>

<template>
  <main>
    <input v-model="input" type="text" placeholder="Enter your name" />
    <button @click="onClick">Greetings</button>

    <TheWelcome />
  </main>
</template>
