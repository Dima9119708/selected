<script setup lang="ts">
import { inject } from 'vue'

import Badge from '../../ui-badge/ui-badge.vue'
import type { NavigationItemConfig, ToRoute } from './types.ts'

const props = defineProps<Partial<Pick<NavigationItemConfig, 'icon' | 'name' | 'badge' | 'routeName'>>>()

const value = inject('NAVBAR_PROVIDE') as { toRoute?: ToRoute }

const to = () => {
    if (typeof value.toRoute === 'function') {
        const routeLocationRaw = value.toRoute(props.routeName)

        if (routeLocationRaw) {
            return routeLocationRaw
        }

        return { name: props.routeName }
    }

    return { name: props.routeName }
}
</script>
<template>
    <RouterLink
        :to="to()"
        class="submenu flex items-center leading-[1.2] text-[14px] p-[8px_0_8px_16px]"
        active-class="submenu-active"
    >
        <div>{{ $t($props.name ?? '') }}</div>

        <Badge
            class="ml-[8px]"
            v-if="$props.badge"
            :label="$t($props.badge?.text)"
            :variant="$props.badge?.variant"
        />
    </RouterLink>
</template>
<style scoped>
.submenu:hover {
    color: var(--sui-submenu-item_color__hover);
}

.submenu-active {
    color: var(--sui-submenu-item_color__active);
}
</style>
