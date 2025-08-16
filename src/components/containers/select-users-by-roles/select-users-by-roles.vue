<script lang="ts" setup="">
import { storeToRefs } from 'pinia'

import { selectGroupBy } from '@/components/ui/ui-select/lib/select-group-by.ts'
import Select from '@/components/ui/ui-select/ui-select.vue'
import { useUsersStore } from '@/stores/users.ts'

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
