<script lang="ts" setup="">
import TabList, { type TabListProps } from 'primevue/tablist'

defineProps<TabListProps>()
</script>

<template>
    <TabList v-bind="$props">
        <slot />
    </TabList>
</template>
