<script lang="ts" setup="">
import { useQuery } from '@tanstack/vue-query'

import Label from '@/shared/ui/ui-label.vue'
import Select from '@/shared/ui/ui-select/ui-select.vue'

import { DEFAULT_OPTION } from './cons.ts'
import { queryBillingOptions } from './queries.ts'

const model = defineModel<{ name: string; id: number }>()

const { data, isLoading, refetch } = useQuery({
    ...queryBillingOptions(),
    enabled: false,
})
</script>

<template>
    <div>
        <Label>
            {{ $t('Billing option') }}
        </Label>
        <Select
            v-model="model"
            :options="data"
            @before-show="() => refetch()"
            option-label="name"
            :loading="isLoading"
            :placeholder="DEFAULT_OPTION.name"
        />
    </div>
</template>

<style scoped></style>
