<script lang="ts" setup="">
import Tabs, { type TabsProps } from 'primevue/tabs'

withDefaults(defineProps<TabsProps>(), {
    scrollable: true,
})
</script>

<template>
    <Tabs v-bind="$props">
        <slot />
    </Tabs>
</template>

<style>
.p-tabs {
    & button {
        flex-shrink: 0;
        color: var(--sui-tabs_tab-color);
        font-size: var(--sui-typography_desktop_body_fontsize);
        line-height: 24px;
        padding: 10px 4px;
        border-radius: 6px;

        &[aria-selected='true'] {
            color: var(--sui-tabs_tab-color__hover);
        }

        &:hover {
            color: var(--sui-tabs_tab-color__hover);
        }
    }

    [data-pc-section='tablist'] {
        overflow-x: auto;
        display: flex;
        gap: 20px;
        position: relative;
        margin-bottom: 10px;
        border-bottom: 1px solid var(--sui-tabs_content-border-color);
        border-radius: 1px;
    }

    [data-pc-section='activebar'] {
        position: absolute;
        top: calc(100% - 2px);
        height: 2px;
        z-index: 1;
        background: var(--sui-tabs_active-bar-color);
        border-radius: 1px;
        transition:
            left 0.3s ease,
            width 0.3s ease;
    }
}
</style>
