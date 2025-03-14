<script setup lang="ts">
import Checkbox, { type CheckboxProps } from 'primevue/checkbox'
import { onUpdated, useId } from 'vue'

const props = withDefaults(defineProps<CheckboxProps & { checked?: boolean }>(), {
    binary: true,
})

const modelChecked = defineModel<boolean>()

const id = useId()
</script>
<template>
    <div class="flex gap-2">
        <Checkbox
            class="checkbox"
            v-model="modelChecked"
            v-bind="$props"
            :input-id="id"
        >
            <template #icon="{ checked }">
                <div
                    class="checkbox-icon"
                    aria-hidden="true"
                >
                    <div
                        class="checked"
                        :style="{ display: checked ? 'block' : 'none' }"
                    />
                </div>
            </template>
        </Checkbox>

        <label
            class="label"
            :for="id"
        >
            <slot />
        </label>
    </div>
</template>
<style scoped>
.checkbox {
    position: relative;
}

.label {
    display: flex;
    align-items: center;
    gap: 5px;
}

.checkbox-icon {
    position: relative;
    height: 20px;
    width: 20px;
    border-radius: 4px;
    background: var(--sui-checkbox_background__unchecked);
    border: 1px solid var(--sui-checkbox_border__unchecked);
}

.checked {
    position: absolute;
    inset: -1px;
    border-radius: 4px;
    background: var(--sui-checkbox_background__checked);
    border-color: var(--sui-checkbox_border__checked);

    &::after {
        box-sizing: border-box;
        position: absolute;
        display: table;
        width: 6.66667px;
        height: 13.33333px;
        border-width: 2px;
        border-style: solid;
        border-top: 0;
        border-left: 0;
        content: '';
        left: 6.8px;
        top: 2.4px;
        border-color: var(--sui-checkbox_check__checked);
        border-radius: 0 0 2px 0;
        transform: rotate(45deg) translateZ(1px);
    }
}
</style>
