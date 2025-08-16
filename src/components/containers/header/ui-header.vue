<script lang="ts" setup="">
import type { Config } from './types'

const { config } = defineProps<{
    config: Config
}>()
</script>

<template>
    <header class="header flex items-center justify-between col-span-full p-[16px]">
        <slot name="logo" />

        <div class="flex gap-[4px]">
            <template v-for="item in config">
                <component :is="item.component" />
            </template>
        </div>
    </header>
</template>

<style scoped>
.header {
    border: 1px solid var(--sui-header-border_color);
    background-color: var(--sui-header_background);
}
</style>
