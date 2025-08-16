<script lang="ts" setup="">
import { inject } from 'vue'

defineProps()

const dropdown = inject<{ onToggle: () => void }>('dropdown')
</script>

<template>
    <li
        class="dropdown-option"
        @click="dropdown?.onToggle"
    >
        <slot />
    </li>
</template>

<style scoped>
.dropdown-option {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    width: auto;
    transition: background 0.15s linear;
    padding: 8px 16px;

    &:hover {
        background-color: var(--sui-dropdown-menu-item-hover_background);
    }
}
</style>
