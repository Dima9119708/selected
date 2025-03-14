<script lang="ts" setup="">
import { storeToRefs } from 'pinia'
import { computed, defineAsyncComponent, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/features/auth/use-auth.ts'

import SelectUsersByRoles from '@/entities/users/select-users-by-roles.vue'

import { loadLocaleMessages } from '@/shared/configs/i18n/i18n'
import { ROUTE_PATHS } from '@/shared/configs/routes/routes'
import AppShell from '@/shared/ui/app-shell/ui-app-shell.vue'
import Header from '@/shared/ui/app-shell/ui-header/ui-header.vue'
import { useHeaderConfig } from '@/shared/ui/app-shell/ui-header/use-header-config.ts'
import Main from '@/shared/ui/app-shell/ui-main.vue'
import type { ToRoute } from '@/shared/ui/app-shell/ui-navbar/types.ts'
import Navbar from '@/shared/ui/app-shell/ui-navbar/ui-navbar.vue'
import { useNavbarConfig } from '@/shared/ui/app-shell/ui-navbar/use-navbar-config.ts'

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
        component: defineAsyncComponent(() => import('@/widgets/balance/balance.vue')),
    },
    notices: {
        component: defineAsyncComponent(() => import('@/widgets/notices/notices.vue')),
    },
    profile: {
        component: defineAsyncComponent(() => import('@/widgets/profile/profile.vue')),
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
    <AppShell v-else>
        <div class="col-span-full flex items-center justify-center p-[14px]">
            <strong>Sing in as</strong>
            <SelectUsersByRoles
                :model-value="data"
                @update:modelValue="authStore.onSingInAs"
                class="w-[310px] ml-[15px]"
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

        <Main>
            <RouterView />
        </Main>
    </AppShell>
</template>

<style scoped></style>
