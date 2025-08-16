<script lang="ts" setup="">
import { useQuery } from '@tanstack/vue-query'

import Label from '@/components/ui/ui-label.vue'
import { selectGroupBy } from '@/components/ui/ui-select/lib/select-group-by.ts'
import MultiSelect from '@/components/ui/ui-select/ui-multi-select.vue'
import { queryCPU } from '@/utils/queries/cpu.ts'

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
