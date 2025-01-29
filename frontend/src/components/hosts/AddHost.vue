<script setup lang="ts">
import type { hosts } from 'wailsjs/go/models'
import { useFormHelper } from '@/composables/form-helper'
import { useToast } from '@/composables/toast'
import { mutateHosts } from '@/queries/hosts'
import { toTypedSchema } from '@vee-validate/zod'
import { ErrorMessage, useForm } from 'vee-validate'
import { z } from 'zod'

const { mutateAsync } = mutateHosts()
const { onInvalidSubmit } = useFormHelper()

const { success } = useToast()

const addHostSchema = toTypedSchema(
  z.object({
    name: z.string().nonempty('Name is required'),
    address: z.string().nonempty('Address is required'),
  }),
)

const { handleSubmit, defineField, isSubmitting, resetForm } = useForm({
  name: 'AddHostForm',
  validationSchema: addHostSchema,
})

const [nameValue, nameAttrs] = defineField('name')
const [addressValue, addressAttrs] = defineField('address')

const onSubmit = handleSubmit(async (values) => {
  const { name, address } = values

  const newHost: hosts.HostItem = {
    name,
    address,
  }

  await mutateAsync(newHost)
  resetForm()

  success('New Host', 'Host added successfully')
}, onInvalidSubmit)
</script>

<template>
  <form @submit="onSubmit">
    <div class="flex items-start gap-1">
      <div class="flex flex-col gap-1">
        <InputText v-model="nameValue" v-bind="nameAttrs" name="name" type="text" placeholder="Enter host name" :disabled="isSubmitting" />
        <ErrorMessage name="name">
          <template #default="{ message }">
            <span class="text-sm text-red-400 truncate w-fit" :title="message">{{ message }}</span>
          </template>
        </ErrorMessage>
      </div>
      <div class="flex flex-col gap-1">
        <InputText v-model="addressValue" v-bind="addressAttrs" name="address" type="text" placeholder="Enter host address" :disabled="isSubmitting" />
        <ErrorMessage name="address">
          <template #default="{ message }">
            <span class="text-sm text-red-400 truncate w-fit" :title="message">{{ message }}</span>
          </template>
        </ErrorMessage>
      </div>
      <Button label="Add Host" :disabled="isSubmitting" :loading="isSubmitting" type="submit" />
    </div>
  </form>
</template>
