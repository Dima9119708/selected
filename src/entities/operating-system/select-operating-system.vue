<script lang="ts" setup="">
import { useQuery } from '@tanstack/vue-query'

import Label from '@/shared/ui/ui-label.vue'
import UiSelect from '@/shared/ui/ui-select/ui-select.vue'

import { DEFAULT_OPTION } from './cons'
import { queryOperatingSystem } from './queries'

const model = defineModel<{ name: string; id: number; group: string }[]>()

const { data, isLoading, refetch } = useQuery({
    ...queryOperatingSystem(),
    enabled: false,
})
</script>

<template>
    <div>
        <Label>
            {{ $t('Operating system') }}
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
