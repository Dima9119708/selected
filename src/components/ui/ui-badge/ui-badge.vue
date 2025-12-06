<script lang="ts" setup="">
import type { TBadge } from './types.ts'

import Chip, { type ChipProps } from 'primevue/chip'

console.log('==== STAGE ====')
console.log('==== STAGE ====')
console.log('==== STAGE ====')
console.log('==== STAGE ====')
console.log('==== STAGE ====')
console.log('==== STAGE ====')

const { variant } = defineProps<ChipProps & TBadge>()
</script>

<template>
    <Chip
        v-bind="$props"
        class="badge"
        :class="{ purple: variant === 'purple' }"
    />
</template>

<style scoped>
.badge {
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
    padding: 0 8px;
    font-size: var(--sui-typography_tablet_small_fontsize);
    color: var(--sui-badge_text__geekblue);
    background-color: var(--sui-badge_background__geekblue);
}

.purple {
    background-color: var(--sui-badge_background__purple);
    color: var(--sui-badge_text__purple);
}
</style>
