<script lang="ts" setup="" generic="T extends Array<Record<string, any>>">
import { provide, ref, useTemplateRef, watchEffect } from 'vue'

defineProps()

const dropdownRef = useTemplateRef('dropdown')

const open = ref(false)

const positionItems = ref({
    x: 0,
    y: 0,
    width: 0,
})

watchEffect((onCleanup) => {
    let raf: number

    const callback = () => {
        if (open.value) {
            if (dropdownRef.value instanceof HTMLDivElement) {
                const rect = dropdownRef.value.getBoundingClientRect()
                positionItems.value.x = rect.x
                positionItems.value.y = rect.y + rect.height + 10
                positionItems.value.width = rect.width
            }
        }

        requestAnimationFrame(callback)
    }

    raf = requestAnimationFrame(callback)

    onCleanup(() => {
        cancelAnimationFrame(raf)
    })
})

const onToggle = () => {
    open.value = !open.value
}

provide('dropdown', {
    onToggle,
})
</script>

<template>
    <div
        class="dropdown flex justify-between"
        ref="dropdown"
        tabindex="0"
        @click="open = !open"
    >
        <slot name="value" />
        <div
            class="checkbox-icon"
            aria-hidden="true"
        />
    </div>

    <Teleport to="body">
        <ul
            v-if="open"
            class="dropdown-options"
            :style="{
                top: `${positionItems.y}px`,
                left: `${positionItems.x}px`,
                width: `${positionItems.width}px`,
            }"
        >
            <slot name="menu-items" />
        </ul>
    </Teleport>
</template>

<style scoped>
.dropdown {
    position: relative;
    font-size: 13px;
    padding: 3px 12px 3px 12px;
    margin: 0;
    outline: none;
    color: var(--sui-select_text__filled);
    background: transparent;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    box-shadow: none;
    border-radius: 6px;

    &:hover {
        background-color: var(--sui-dropdown-button_background_hover);
    }
}

.checkbox-icon {
    position: relative;

    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        right: 0;
        width: 7px;
        height: 7px;
        border: 1px solid var(--sui-select_arrow__base);
        border-top: 0;
        border-right: 0;
        transform: rotate(-45deg) translateY(-100%);
        pointer-events: none;
        z-index: 2;
    }
}

.dropdown-options {
    position: absolute;
    z-index: var(--popper);
    max-height: 270px;
    box-shadow:
        0 8px 16px var(--sui-select_dropdown_shadow__first),
        0 0 2px var(--sui-select_dropdown_shadow__second);
    overflow-y: auto;
    border-radius: 6px;
    background: var(--sui-global_background);
}

.select-group-name {
    color: var(--sui-select_option_text__secondary);
    font-size: 16px;
    padding: 16px;
    font-weight: 500;
}
</style>
