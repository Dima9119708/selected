<script lang="ts" setup=""></script>

<template>
    <label class="label">
        <slot />
    </label>
</template>

<style scoped>
.label {
    display: block;
    color: var(--sui-label);
    margin-bottom: 5px;
}
</style>
