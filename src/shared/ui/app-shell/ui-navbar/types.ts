import type { Component } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

import type { TBadge } from '@/shared/ui/ui-badge/types'
import type { TIcons } from '@/shared/ui/ui-icon/types'

export type NavigationItemConfigChildren = Array<NavigationItemConfig | NavigationItemConfig[]>

export type NavigationItemConfig = {
    routeName?: string
    name?: string
    icon?: TIcons
    badge?: {
        text: string
        variant: TBadge['variant']
    }
    component?: Component
    children?: NavigationItemConfigChildren
}

export type NavigationConfig = Array<NavigationItemConfig | [string, NavigationItemConfig[]]>

export type NavigationConfigOverrides = Record<string, Partial<NavigationItemConfig>>

export type ToRoute = (routeName: string) => RouteLocationRaw
