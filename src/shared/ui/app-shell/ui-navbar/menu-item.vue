<script lang="ts">
import { type PropType } from 'vue'

import Badge from '@/shared/ui/ui-badge/ui-badge.vue'
import Icon from '@/shared/ui/ui-icon/ui-icon.vue'

import { type NavigationItemConfig, type ToRoute } from './types'

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
        active: {
            type: Boolean,
        },
    },
    data() {
        return {
            propsComponent: this.routeName
                ? {
                      to: this.to(),
                  }
                : null,
        }
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
    <component
        :is="$props.routeName ? 'RouterLink' : 'div'"
        v-bind="propsComponent"
        class="menu-item flex items-center gap-x-[12px] leading-[1.2] text-[16px]"
    >
        <div
            v-if="$props.active"
            class="menu-item--active"
        />
        <Icon
            class="shrink-0"
            v-if="$props.icon"
            :name="$props.icon"
            size="small"
        />
        <div class="flex items-center leading-[1.4]">
            <span> {{ $t($props.name ?? '') }}</span>

            <Badge
                class="ml-[8px]"
                v-if="$props.badge"
                :variant="$props.badge.variant"
                :label="$t($props.badge.text)"
            />
        </div>
    </component>
</template>
<style scoped>
.menu-item {
    position: relative;

    &::before {
        content: '';
        position: absolute;
        inset: -8px -16px;
        z-index: -1;
    }

    &:hover::before {
        background-color: var(--sui-menu-item__background__hover);
    }
}

.menu-item--active {
    position: absolute;
    inset: -8px -16px;
    z-index: -1;
    background-color: var(--panel-unified-menu-item__background__active);

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 2px;
        background-color: var(--sui-submenu-item_color__active);
    }
}
</style>
