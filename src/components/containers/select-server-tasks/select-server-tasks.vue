<script lang="ts" setup="">
import { useQuery } from '@tanstack/vue-query'

import Label from '@/components/ui/ui-label.vue'
import UiSelect from '@/components/ui/ui-select/ui-select.vue'

import { queryServerTasks } from '@/utils/queries/server-tasks.ts'
import { DEFAULT_OPTION } from '@/config/constants/server-tasks.ts'

const model = defineModel<{ name: string; id: number }[]>()

const { data, isLoading, refetch } = useQuery({
    ...queryServerTasks(),
    enabled: false,
})
</script>

<template>
    <div>
        <Label>
            {{ $t('Server for your tasks') }}
        </Label>
        <UiSelect
            v-model="model"
            :loading="isLoading"
            :options="data"
            option-label="name"
            @before-show="refetch()"
            :placeholder="DEFAULT_OPTION.name"
        />
    </div>
</template>

<style scoped></style>
