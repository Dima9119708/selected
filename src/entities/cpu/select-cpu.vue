<script lang="ts" setup="">
import { useQuery } from '@tanstack/vue-query'

import { queryCPU } from '@/entities/cpu/queries'

import Label from '@/shared/ui/ui-label.vue'
import { selectGroupBy } from '@/shared/ui/ui-select/lib/selectGroupBy.ts'
import MultiSelect from '@/shared/ui/ui-select/ui-multi-select.vue'

const model = defineModel<{ name: string; id: number; group: string }[]>()

const { data, isLoading, refetch } = useQuery({
    ...queryCPU(),
    enabled: false,
})
</script>

<template>
    <div>
        <Label>
            {{ $t('CPU') }}
        </Label>
        <MultiSelect
            v-model="model"
            :loading="isLoading"
            @before-show="refetch()"
            :options="selectGroupBy(data, (item) => item.group)"
            :placeholder="$t('All CPU')"
            option-label="name"
            option-group-label="label"
            option-group-children="items"
        />
    </div>
</template>

<style scoped></style>
