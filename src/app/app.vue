<script lang="ts" setup="">
import { storeToRefs } from 'pinia'
import { computed, defineAsyncComponent, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/components/containers/auth/use-auth'

import SelectUsersByRoles from '@/components/containers/select-users-by-roles/select-users-by-roles.vue'

import { loadLocaleMessages } from '@/config/i18n/i18n'
import { ROUTE_PATHS } from '@/config/routes/routes'
import Header from '@/components/containers/header/ui-header.vue'
import { useHeaderConfig } from '@/components/containers/header/use-header-config'
import type { ToRoute } from '@/components/containers/navbar/types'
import Navbar from '@/components/containers/navbar/ui-navbar.vue'
import { useNavbarConfig } from '@/components/containers/navbar/use-navbar-config'

const router = useRouter()
const i18n = useI18n({
    useScope: 'global',
})

const appLoading = ref(true)
const authStore = useAuthStore()
const { data, navigationItems, actionItems, permissionByRole } = storeToRefs(authStore)

const navbarConfig = useNavbarConfig(navigationItems)

const headerConfig = useHeaderConfig(actionItems, {
    balance: {
        component: defineAsyncComponent(() => import('@/components/containers/balance/balance.vue')),
    },
    notices: {
        component: defineAsyncComponent(() => import('@/components/containers/notices/notices.vue')),
    },
    profile: {
        component: defineAsyncComponent(() => import('@/components/containers/profile/profile.vue')),
    },
})

const activeRouteName = computed(() => {
    if (typeof router.currentRoute.value.name === 'string') {
        return router.currentRoute.value.name
    }

    return ''
})

const toRoute: ToRoute = (routeName) => {
    switch (routeName) {
        case ROUTE_PATHS.SERVERS_ORDER_PRE_BUILT.name:
            return { name: routeName, params: { id: 'd736d7f16ae64eeb9b8047d03f38e74f' } }

        default: {
            return { name: routeName }
        }
    }
}

watch(
    data,
    async () => {
        if (data.value) {
            console.log('data.value', data.value)
            const hasAccess = permissionByRole.value.some((route) => route.name === router.currentRoute.value.name)

            if (!hasAccess) {
                await router.push(toRoute(permissionByRole.value[0].name))
            }

            await loadLocaleMessages((messages) => {
                i18n.setLocaleMessage(i18n.locale.value, messages)
            }, i18n.locale.value)

            appLoading.value = false
        }
    },
    { immediate: true }
)
</script>

<template>
    <div
        v-if="appLoading"
        class="h-[100vh] w-[100vh] flex items-center justify-center"
    >
        AppLoading...
    </div>
    <div v-else class="grid grid-cols-[auto_1fr] grid-rows-[auto_64px_1fr] h-[100vh] overflow-hidden">
        <div class="col-span-full flex items-center justify-center p-[14px]">
            <strong>Sing in as</strong>
            <SelectUsersByRoles
                :model-value="data"
                class="w-[310px] ml-[15px]"
                @update:model-value="authStore.onSingInAs"
            />
        </div>
        <Header :config="headerConfig">
            <template #logo> {{ $t('logo') }}</template>
        </Header>

        <Navbar
            :active-route-name="activeRouteName"
            :to-route="toRoute"
            :config="navbarConfig"
        >
        </Navbar>

        <main
            id="main"
            class="p-[24px] relative overflow-auto"
        >
            <RouterView />
        </main>
    </div>
</template>

<style scoped></style>
