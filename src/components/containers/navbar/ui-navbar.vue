<script lang="ts" setup="">
import { computed, provide } from 'vue'
import { useRouter } from 'vue-router'

import { filterItemsWithName, findParentChildrenByActiveRouteName, getStartingRouteName } from './libs'
import MenuItem from './menu-item.vue'
import SubMenuItem from './submenu-item.vue'
import type { NavigationConfig, NavigationItemConfig, ToRoute } from './types'

const router = useRouter()

const { config, activeRouteName, toRoute } = defineProps<{
    config: NavigationConfig
    activeRouteName: string
    toRoute?: ToRoute
}>()

provide('NAVBAR_PROVIDE', {
    toRoute,
})

const menu = computed(() => filterItemsWithName(config))
const subMenu = computed(() => findParentChildrenByActiveRouteName(config, activeRouteName))

const isActive = (children?: NavigationItemConfig[], routeName?: string) => {
    if (Array.isArray(children) && Array.isArray(subMenu.value)) {
        return children === subMenu.value
    }

    return routeName === activeRouteName
}

const onMenuClick = (menuItem: NavigationItemConfig) => {
    const startingRouteName = getStartingRouteName([menuItem])

    if (typeof toRoute === 'function') {
        const data = toRoute(startingRouteName)

        if (!data) {
            router.push({ name: startingRouteName })
        } else {
            router.push(data)
        }
    } else {
        router.push({ name: startingRouteName })
    }
}

const getMenuKey = (item: NavigationItemConfig | [string, NavigationItemConfig[]]) => {
    if (Array.isArray(item)) {
        return `group-${item[0]}`
    }

    return item.routeName || item.name
}

const getSubMenuKey = (subMenuItem: NavigationItemConfig | NavigationItemConfig[]) => {
    if (Array.isArray(subMenuItem)) {
        return subMenuItem[0].routeName
    }

    return subMenuItem.routeName
}
</script>

<template>
    <nav
        class="flex overflow-y-auto"
        :class="{ 'w-[415px]': subMenu, 'w-[215px]': !subMenu }"
    >
        <div
            class="menu"
            :class="{ 'basis-[52%]': subMenu, 'basis-full': !subMenu }"
        >
            <template
                v-for="item in menu"
                :key="getMenuKey(item)"
            >
                <div
                    class="menu-group"
                    v-if="Array.isArray(item)"
                >
                    <div class="menu-group-name">{{ item[0] }}</div>
                    <div
                        v-for="menuItem in item[1]"
                        :key="menuItem.routeName"
                        class="menu-group-item"
                    >
                        <template v-if="menuItem.component">
                            <component :is="menuItem.component" />
                        </template>
                        <template v-else>
                            <MenuItem
                                :name="menuItem.name"
                                :icon="menuItem.icon"
                                :badge="menuItem.badge"
                                :routeName="menuItem.routeName"
                                :active="isActive(menuItem.children, menuItem.routeName)"
                                @click="onMenuClick(menuItem)"
                            />
                        </template>
                    </div>
                </div>
                <template v-else>
                    <component
                        v-if="item.component"
                        :is="item.component"
                    />
                    <MenuItem
                        v-else
                        :name="item.name"
                        :icon="item.icon"
                        :badge="item.badge"
                        :active="isActive(item.children, item.routeName)"
                        @click="onMenuClick(item)"
                    />
                </template>
            </template>
        </div>
        <div
            v-if="subMenu"
            class="subMenu"
        >
            <div
                class="subMenu-group"
                v-for="item in subMenu"
                :key="getSubMenuKey(item)"
            >
                <template v-if="Array.isArray(item)">
                    <template
                        v-for="subMenu in item"
                        :key="subMenu.routeName"
                    >
                        <component
                            v-if="subMenu.component"
                            :is="subMenu.component"
                        />
                        <SubMenuItem
                            v-else
                            :routeName="subMenu.routeName"
                            :badge="subMenu.badge"
                            :name="subMenu.name"
                        />
                    </template>
                </template>
                <template v-else>
                    <component
                        v-if="item.component"
                        :is="item.component"
                    />
                    <SubMenuItem
                        v-else
                        :routeName="item.routeName"
                        :badge="item.badge"
                        :name="item.name"
                    />
                </template>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.menu {
    @apply flex flex-col gap-[16px] overflow-y-auto p-[16px];

    border-right: 1px solid var(--sui-menu-border_color);
}

.menu-group {
    @apply flex flex-col gap-[16px] pt-[8px];
}

.menu-group-item {
    @apply flex flex-col gap-[16px];
}

.menu-group-name {
    font-size: 12px;
    color: var(--sui-typography_low-emphasis);
}

.subMenu {
    @apply basis-[48%] overflow-y-auto;

    border-right-color: var(--sui-header-border_color);
    border-right-width: 1px;
    border-right-style: solid;
}
.subMenu-group {
    border-bottom: 1px solid var(--sui-submenu-border_color);
}
</style>
