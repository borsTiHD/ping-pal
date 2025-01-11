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
  <div class="flex flex-col items-center p-4 gap-4">
    <h1 className="text-3xl font-bold underline text-blue-500">
      Hello world!
    </h1>

    <div class="flex items-center gap-1">
      <InputText v-model="input" name="username" type="text" placeholder="Enter your name" @keyup.enter="onClick" />
      <Button label="Submit" @click="onClick" />
    </div>

    <div class="flex flex-col items-center p-4">
      <p class="text-lg font-semibold text-green-500">
        {{ response }}
      </p>
    </div>
  </div>
</template>
