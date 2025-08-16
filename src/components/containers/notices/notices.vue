<script lang="ts" setup="">
import Popover from 'primevue/popover'
import { useTemplateRef } from 'vue'

import ComingSoon from '@/components/containers/сoming-soon/сoming-soon.vue'
import Button from '@/components/ui/ui-button.vue'

const op = useTemplateRef('op')

const toggle = (event: Event) => {
    op.value?.toggle(event)
}
</script>

<template>
    <Button
        type="button"
        variant="text"
        left-icon="bell"
        @click="toggle"
    />

    <Popover
        ref="op"
        class="bg-white border-1"
    >
        <ComingSoon />
    </Popover>
</template>

<style scoped></style>
