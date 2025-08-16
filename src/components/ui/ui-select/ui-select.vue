<script lang="ts" setup="">
import type { MultiSelectSlots } from 'primevue/multiselect'
import Select, { type SelectEmitsOptions, type SelectProps, type SelectSlots } from 'primevue/select'

import Spinner from '@/components/ui/ui-spinner.vue'

const model = defineModel()
defineProps<SelectProps>()
const slots = defineSlots<SelectSlots>()
const emit = defineEmits<SelectEmitsOptions>()

const selectSlotNames = Object.keys(slots as MultiSelectSlots) as (keyof MultiSelectSlots)[]
</script>

<template>
    <Select
        v-model="model"
        v-bind="$props"
        :emptyMessage="$props.loading ? $t('Loading...') : $props.emptyMessage"
        @show="emit('show')"
        @hide="emit('hide')"
        @before-show="emit('before-show')"
    >
        <template #dropdownicon>
            <div
                class="dropdown-icon"
                aria-hidden="true"
            />
        </template>

        <template #loadingicon>
            <Spinner size="small" />
        </template>
    </Select>
</template>

<style src="./style.css"></style>
