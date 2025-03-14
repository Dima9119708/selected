<script lang="ts" setup="">
import MultiSelect, { type MultiSelectEmitsOptions, type MultiSelectProps } from 'primevue/multiselect'

import Checkbox from '@/shared/ui/ui-checkbox.vue'
import Spinner from '@/shared/ui/ui-spinner.vue'

withDefaults(defineProps<MultiSelectProps>(), {
    placeholder: ' ',
})

const emit = defineEmits<MultiSelectEmitsOptions>()

const model = defineModel()
</script>

<template>
    <MultiSelect
        v-bind="$props"
        v-model="model"
        @show="emit('show')"
        @hide="emit('hide')"
        @before-show="emit('before-show')"
    >
        <template #headercheckboxicon />
        <template #itemcheckboxicon="slotProps">
            <Checkbox
                :model-value="slotProps.checked"
                readonly
            />
        </template>
        <template #dropdownicon>
            <div
                class="dropdown-icon"
                aria-hidden="true"
            />
        </template>
        <template #loadingicon>
            <Spinner size="small" />
        </template>
    </MultiSelect>
</template>

<style src="./style.css"></style>
