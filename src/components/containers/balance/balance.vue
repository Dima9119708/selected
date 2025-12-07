<script lang="ts" setup="">
import { ref, useTemplateRef } from 'vue'

import ComingSoon from '@/components/containers/сoming-soon/сoming-soon.vue'
import Button from '@/components/ui/ui-button.vue'
import Popover from '@/components/ui/ui-popover/ui-popover.vue'

const op = useTemplateRef('op')
const aaa = ref(false)

const onclick = () => {
  
}

const toggle = (event: Event) => {
    op.value!.toggle(event)
}
</script>

<template>
    <Button
        type="button"
        variant="text"
        left-icon="credit-card"
        @click="toggle"
    >
        {{ $n(50, 'currency') }}
    </Button>

    <Popover
        ref="op"
        class="bg-white border-1"
    >
        <ComingSoon />
    </Popover>
</template>

<style scoped></style>
