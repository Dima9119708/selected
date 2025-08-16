<script lang="ts" setup="">

import { queryBillingOptions } from '@/utils/queries/billing-option.ts'

import Label from '@/components/ui/ui-label.vue'
import Select from '@/components/ui/ui-select/ui-select.vue'

import { useQuery } from '@tanstack/vue-query'
import { DEFAULT_OPTION } from '@/config/constants/billing-option.ts'

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
            option-label="name"
            :loading="isLoading"
            :placeholder="DEFAULT_OPTION.name"
            @before-show="() => refetch()"
        />
    </div>
</template>

<style scoped></style>
