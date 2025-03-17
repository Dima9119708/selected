<script lang="ts">
import { mapActions, mapState } from 'pinia'
import { defineAsyncComponent } from 'vue'

import { useAuthStore } from '@/features/auth/use-auth.ts'

import SelectUsersByRoles from '@/entities/users/select-users-by-roles.vue'

import { loadLocaleMessages } from '@/shared/configs/i18n/i18n'
import { ROUTE_PATHS } from '@/shared/configs/routes/routes'
import AppShell from '@/shared/ui/app-shell/ui-app-shell.vue'
import Header from '@/shared/ui/app-shell/ui-header/ui-header.vue'
import Main from '@/shared/ui/app-shell/ui-main.vue'
import { mergeConfig } from '@/shared/ui/app-shell/ui-navbar/merge-config.ts'
import Navbar from '@/shared/ui/app-shell/ui-navbar/ui-navbar.vue'

export default {
    components: {
        AppShell,
        Header,
        Main,
        Navbar,
        SelectUsersByRoles,
    },
    data() {
        return {
            appLoading: true,
        }
    },
    computed: {
        ...mapState(useAuthStore, ['isLoading', 'navigationItems', 'actionItems', 'permissionByRole', 'data']),
        activeRouteName() {
            if (typeof this.$router.currentRoute.value.name === 'string') {
                return this.$router.currentRoute.value.name
            }

            return ''
        },
        navbarConfig() {
            return mergeConfig(this.navigationItems, {})
        },
        headerConfig() {
            return mergeConfig(this.actionItems, {
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
        },
    },
    watch: {
        data: {
            async handler() {
                if (this.data) {
                    const hasAccess = this.permissionByRole.some((route) => route.name === this.$router.currentRoute.value.name)

                    if (!hasAccess) {
                        await this.$router.push(this.toRoute(this.permissionByRole[0].name))
                    }

                    await loadLocaleMessages((messages) => {
                        this.$i18n.setLocaleMessage(this.$i18n.locale, messages)
                    }, this.$i18n.locale)

                    this.appLoading = false
                }
            },

            immediate: true,
        },
    },
    methods: {
        toRoute(routeName) {
            switch (routeName) {
                case ROUTE_PATHS.SERVERS_ORDER_PRE_BUILT.name:
                    return { name: routeName, params: { id: 'd736d7f16ae64eeb9b8047d03f38e74f' } }

                default: {
                    return { name: routeName }
                }
            }
        },
        ...mapActions(useAuthStore, ['onSingInAs']),
    },
}
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
                @update:modelValue="onSingInAs"
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
