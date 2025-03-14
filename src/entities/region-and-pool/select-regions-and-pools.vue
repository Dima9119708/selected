<script lang="ts" setup="">
import { useQuery } from '@tanstack/vue-query'

import Label from '@/shared/ui/ui-label.vue'
import { selectGroupBy } from '@/shared/ui/ui-select/lib/selectGroupBy'
import MultiSelect from '@/shared/ui/ui-select/ui-multi-select.vue'
import Select from '@/shared/ui/ui-select/ui-select.vue'

import { DEFAULT_OPTION } from './cons'
import { queryPool, queryRegion } from './queries'

const modelRegions = defineModel<{ name: string; id: number }[]>('regions')
const modelPools = defineModel<{ name: string; id: number; group: string }[]>('pools')

const {
    data: dataRegion,
    isLoading: isLoadingRegion,
    refetch: refetchRegion,
} = useQuery({
    ...queryRegion(),
    enabled: false,
})

const {
    data: dataPool,
    isLoading: isLoadingPool,
    refetch: refetchPools,
} = useQuery({
    ...queryPool(),
    enabled: false,
})
</script>

<template>
    <div class="grid gap-[8px]">
        <Label class="!mb-0">
            {{ $t('Region') }}
        </Label>
        <Select
            :loading="isLoadingRegion"
            v-model="modelRegions"
            :options="dataRegion"
            option-label="name"
            @before-show="refetchRegion()"
            :placeholder="DEFAULT_OPTION.name"
        />

        <MultiSelect
            :loading="isLoadingPool"
            v-model="modelPools"
            @before-show="refetchPools()"
            :options="selectGroupBy(dataPool, (item) => item.group)"
            option-label="name"
            option-group-label="label"
            option-group-children="items"
            :placeholder="$t('All pool')"
        />
    </div>
</template>

<style scoped></style>
