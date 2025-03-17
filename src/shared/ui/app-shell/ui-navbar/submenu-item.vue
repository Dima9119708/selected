<script lang="ts">
import { type PropType } from 'vue'

import Icon from '@/shared/ui/ui-icon/ui-icon.vue'

import Badge from '../../ui-badge/ui-badge.vue'
import type { NavigationItemConfig, ToRoute } from './types.ts'

export default {
    components: { Badge, Icon },
    inject: {
        toRoute: {
            type: Function as PropType<ToRoute>,
        },
    },
    props: {
        icon: {
            type: String as PropType<NavigationItemConfig['icon']>,
        },
        name: {
            type: String as PropType<NavigationItemConfig['name']>,
        },
        badge: {
            type: Object as PropType<NavigationItemConfig['badge']>,
        },
        routeName: {
            type: String as PropType<NavigationItemConfig['routeName']>,
        },
    },
    methods: {
        to() {
            if (typeof this.toRoute === 'function') {
                const routeLocationRaw = this.toRoute(this.routeName)

                if (routeLocationRaw) {
                    return routeLocationRaw
                }

                return { name: this.routeName }
            }

            return { name: this.routeName }
        },
    },
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
