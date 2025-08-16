<script lang="ts" setup="">
import { useQuery } from '@tanstack/vue-query'

import Label from '@/components/ui/ui-label.vue'
import { selectGroupBy } from '@/components/ui/ui-select/lib/select-group-by'
import MultiSelect from '@/components/ui/ui-select/ui-multi-select.vue'
import Select from '@/components/ui/ui-select/ui-select.vue'

import { queryPool, queryRegion } from '@/utils/queries/region-and-pool'
import { DEFAULT_OPTION } from '@/config/constants/regions-and-pools'

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
