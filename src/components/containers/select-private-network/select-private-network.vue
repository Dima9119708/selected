<script lang="ts" setup="">
import { useQuery } from '@tanstack/vue-query'

import Label from '@/components/ui/ui-label.vue'
import UiSelect from '@/components/ui/ui-select/ui-select.vue'
import { queryOperatingSystem } from '@/utils/queries/private-network.ts'

const model = defineModel<{ name: string; id: number; group: string }[]>()

const { data, isLoading, refetch } = useQuery({
    ...queryOperatingSystem(),
    enabled: false,
})
</script>

<template>
    <div>
        <Label>
            {{ $t('Private network') }}
        </Label>
        <UiSelect
            v-model="model"
            :loading="isLoading"
            :options="data"
            @before-show="refetch()"
            :placeholder="$t('Select network')"
            option-label="name"
        />
    </div>
</template>

<style scoped></style>
