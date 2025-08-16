<script setup lang="ts">
import Button from 'primevue/button'

import type { TIcons } from '@/components/ui/ui-icon/types.ts'
import Icon from '@/components/ui/ui-icon/ui-icon.vue'

export interface ButtonProps {
    variant?: 'outlined' | 'base' | 'text'
    size?: 'small' | 'large' | 'normal'
    rightIcon?: TIcons
    leftIcon?: TIcons
}

const { variant = 'base', rightIcon, size = 'normal' } = defineProps<ButtonProps>()
</script>

<template>
    <Button
        class="btn-base"
        :class="{
            'btn-outlined': variant === 'outlined',
            'btn-large': size === 'large',
            'btn-normal': size === 'normal',
            'btn-small': size === 'small',
            'btn-text': variant === 'text',
        }"
    >
        <Icon
            v-if="leftIcon"
            :name="leftIcon"
            :size="size"
        />
        <slot />
        <Icon
            v-if="rightIcon"
            :name="rightIcon"
            v-bind="iconProps"
            :size="size"
        />
    </Button>
</template>

<style scoped>
.btn-base {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 34px;
    text-align: center;
    padding: 0 16px;
    border-radius: 6px;
    color: var(--sui-button_primary-color__base);
    background: var(--sui-button_primary-background__base);
    border: 1px solid transparent;
    border-color: var(--sui-button_primary-border__base);
    transition:
        box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
        background-color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
        color: var(--sui-button_primary-color__hover);
        background: var(--sui-button_primary-background__hover);
        border-color: var(--sui-button_primary-border__hover);
    }
}

.btn-large {
    font-size: 16px;
}

.btn-normal {
    font-size: 14px;
}

.btn-small {
    font-size: 13px;
}

.btn-outlined {
    color: var(--sui-button_secondary-color__base);
    background: var(--sui-button_secondary-background__base);
    border-color: var(--sui-button_secondary-border__base);

    &:hover {
        background: var(--sui-button_secondary-background__hover);
        color: var(--sui-button_secondary-color__hover);
        border-color: var(--sui-button_secondary-border__hover);
    }
}

.btn-text {
    padding: 0 12px;
    border: none;
    background: transparent;
    color: var(--sui-typography_base);

    &:hover {
        background-color: var(--panel-header-button_background_hover);
        color: var(--sui-typography_base);
    }
}
</style>
