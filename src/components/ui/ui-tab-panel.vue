<script lang="ts" setup="">
import TabPanel, { type TabPanelProps } from 'primevue/tabpanel'

defineProps<TabPanelProps>()
</script>

<template>
    <TabPanel v-bind="$props">
        <slot />
    </TabPanel>
</template>
