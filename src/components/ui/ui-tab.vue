<script lang="ts" setup="">
import Tab, { type TabProps } from 'primevue/tab'

defineProps<TabProps>()
</script>

<template>
    <Tab v-bind="$props">
        <slot />
    </Tab>
</template>
