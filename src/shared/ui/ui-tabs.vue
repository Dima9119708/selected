<script lang="ts" setup="">
import Tabs, { type TabsProps } from 'primevue/tabs'

withDefaults(defineProps<TabsProps>(), {
    scrollable: true,
    showNavigators: true,
})
</script>

<template>
    <Tabs v-bind="$props">
        <slot />
    </Tabs>
</template>

<style>
.p-tabs {
    .p-tab {
        flex-shrink: 0;
        color: var(--sui-tabs_tab-color);
        font-size: var(--sui-typography_desktop_body_fontsize);
        line-height: 24px;
        padding: 10px 4px;
        border-radius: 6px;
        border: 0;

        &[aria-selected='true'] {
            color: var(--sui-tabs_tab-color__hover);
        }

        &:hover {
            color: var(--sui-tabs_tab-color__hover);
        }
    }

    .p-tablist-tab-list {
        gap: 15px;
        border: 0;
    }

    .p-tablist-nav-button {
        background-color: rgba(255, 255, 255, 0.8);
    }

    .p-tablist-active-bar {
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
