<script setup lang="ts">
import { ref } from 'vue'
import { Greet } from 'wailsjs/go/backend/App'

const input = ref('')
const response = ref('')

async function onClick() {
  const greeting = await Greet(input.value)
  response.value = greeting
}
</script>

<template>
  <main>
    <div class="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <input v-model="input" type="text" placeholder="Enter your name">
      <button class="p-4 dark:bg-red-400" @click="onClick">
        Greetings
      </button>
    </div>

    <div class="flex flex-col items-center p-4">
      <h2 class="text-2xl font-bold underline text-blue-500">
        Response
      </h2>
      <p class="text-lg font-semibold text-green-500">
        {{ response }}
      </p>
    </div>
  </main>
</template>
