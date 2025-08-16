<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const loading = ref(false)

watchEffect((onCleanup) => {
    const timeout = setTimeout(() => {
        loading.value = true
    }, 500)

    onCleanup(() => {
        clearTimeout(timeout)
    })
})
</script>
<template>
    <div
        class="h-[1em] w-[1em]"
        :class="{ loader: loading }"
    ></div>
</template>
<style scoped>
.loader {
    background-color: var(--color_05);
    border-radius: 2px;
}
</style>
