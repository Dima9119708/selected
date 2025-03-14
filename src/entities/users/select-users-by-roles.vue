<script lang="ts" setup="">
import { storeToRefs } from 'pinia'

import { useUsersStore } from '@/entities/users/use-users-store.ts'

import { selectGroupBy } from '@/shared/ui/ui-select/lib/selectGroupBy.ts'
import Select from '@/shared/ui/ui-select/ui-select.vue'

const modelValue = defineModel()

const { users } = storeToRefs(useUsersStore())
</script>

<template>
    <Select
        v-model="modelValue"
        :options="selectGroupBy(users, (item) => item.role)"
        option-label="name"
        option-group-children="items"
        option-group-label="label"
    />
</template>

<style scoped></style>
