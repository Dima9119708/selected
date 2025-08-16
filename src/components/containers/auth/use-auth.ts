import { keepPreviousData, useQuery } from '@tanstack/vue-query'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { ACTION_ITEMS, NAVIGATION_ITEMS, PERMISSION_BY_ROLE } from '@/components/containers/auth/config/role-сonfig'

import type { HeaderConfig } from '@/components/containers/header/types'
import type { NavigationConfig } from '@/components/containers/navbar/types'
import type { TUser } from '@/entities/users'
import { usersQuery } from '@/utils/queries/users'

export const useAuthStore = defineStore('auth', () => {
    const session = ref<TUser['id'] | null>(localStorage.getItem('ACCESS_TOKEN'))

    const query = useQuery({
        queryKey: ['user', session],
        queryFn: async () => {
            if (session.value) {
                return await usersQuery().queryFn()
            }

            return null
        },
        select(data) {
            const userID = session.value

            if (userID && data) {
                return data.find((user: TUser) => user.id === userID)
            }

            return null
        },
        placeholderData: keepPreviousData,
    })

    const navigationItems = computed<NavigationConfig>(() => {
        if (!query.data.value) return []

        return NAVIGATION_ITEMS[query.data.value.role] ?? []
    })
    const actionItems = computed<HeaderConfig>(() => {
        if (!query.data.value) return []
        return ACTION_ITEMS[query.data.value.role] ?? []
    })

    const permissionByRole = computed<{ name: string; path: string }[]>(() => {
        if (!query.data.value) return []
        return PERMISSION_BY_ROLE[query.data.value.role] ?? []
    })

    const onLogout = () => {
        localStorage.removeItem('ACCESS_TOKEN')
        session.value = null
    }

    const onLogin = (user: TUser) => {
        localStorage.setItem('ACCESS_TOKEN', `${user.id}`)

        session.value = user.id
    }

    const onSingInAs = async (user: TUser) => {
        onLogout()
        onLogin(user)
    }

    return {
        ...query,
        navigationItems,
        actionItems,
        permissionByRole,
        onLogout,
        onLogin,
        onSingInAs,
    }
})
