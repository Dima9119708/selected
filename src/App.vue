<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { storeToRefs } from 'pinia'
import { defineAsyncComponent, watch } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/components/containers/auth/use-auth'

const router = useRouter()

const authStore = useAuthStore()
const { isLoading: isAuthLoading, data } = storeToRefs(authStore)

const AppComponent = defineAsyncComponent(() => import('@/app/app.vue'))

watch(data, () => {
    if (!data.value) {
        router.replace('/login')
    }
})
</script>

<template>
    <div
        v-if="isAuthLoading"
        class="h-[100vh] w-[100vh] flex items-center justify-center"
    >
        Loading...
    </div>
    <template v-else-if="data">
        <AppComponent />
    </template>

    <div
        v-else
        class="flex justify-center max-w-[1200px] m-[0_auto] mt-[88px]"
    >
        <RouterView />
    </div>

    <VueQueryDevtools />
</template>
