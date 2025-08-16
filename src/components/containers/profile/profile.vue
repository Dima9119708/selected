<script lang="ts" setup="">
import Popover from 'primevue/popover'
import { useTemplateRef } from 'vue'

import { useAuthStore } from '@/components/containers/auth/use-auth.ts'

import Button from '@/components/ui/ui-button.vue'

const op = useTemplateRef('op')
const authStore = useAuthStore()
</script>

<template>
    <Button
        type="button"
        class="panel-profile-button"
        variant="text"
        left-icon="user"
        @click="op?.toggle"
    >
        <div class="flex flex-col text-left">
            <div class="panel-profile-button-label-email">{{ authStore.data.email }}</div>
            <div
                v-if="authStore.data.accountId"
                class="panel-profile-button-label-account"
            >
                {{ $t('Account') }} {{ authStore.data.accountId }}
            </div>
        </div>
    </Button>

    <Popover
        ref="op"
        class="min-w-[200px] border-1"
    >
        <div
            @click="authStore.onLogout"
            class="bg-white p-[14px] text-right cursor-pointer"
        >
            {{ $t('Logout') }}
        </div>
    </Popover>
</template>

<style scoped>
.panel-profile-button {
    padding: 0 8px;
}
.panel-profile-button-label-email {
    color: var(--panel-profile-button_color__base);
}
.panel-profile-button-label-account {
    color: var(--panel-profile-button_second-color__base);
}
</style>
