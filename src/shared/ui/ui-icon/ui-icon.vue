<script lang="ts" setup="">
import { defineAsyncComponent } from 'vue'

import type { TIcons } from '@/shared/ui/ui-icon/types'

import ErrorComponent from './icon-error.vue'
import loadingComponent from './icon-loading.vue'

const { name, size = 'normal' } = defineProps<{ name: TIcons; size?: 'small' | 'normal' | 'large' }>()

const DELAY = 0
const LoadingComponent = loadingComponent

const IconComponent = defineAsyncComponent({
    loader: () => import(`./icons/${name}.vue`),
    loadingComponent: LoadingComponent,
    delay: DELAY,
    errorComponent: ErrorComponent,
})
</script>

<template>
    <component
        :is="IconComponent"
        :class="{
            'w-[16px] h-[16px]': size === 'small',
            'w-[24px] h-[24px]': size === 'normal',
            'w-[32px] h-[32px]': size === 'large',
        }"
    />
</template>
