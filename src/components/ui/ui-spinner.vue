<script setup lang="ts">
defineProps<{ size?: 'small' | 'normal' | 'large' }>()
</script>
<template>
    <div
        class="spinner"
        :class="{
            'spinner-size-small': size === 'small',
            'spinner-size-normal': size === 'normal',
            'spinner-size-large': size === 'large',
        }"
    ></div>
</template>
<style>
.spinner {
    border-radius: 50%;
    position: relative;
    animation: rotate 1s linear infinite;
}
.spinner::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid var(--sui-avatar_text__base);
    animation: prixClipFix 2s linear infinite;
}

.spinner-size-small {
    width: 24px;
    height: 24px;

    &.spinner::before {
        border-width: 3px;
    }
}

.spinner-size-normal {
    width: 32px;
    height: 32px;
}

.spinner-size-large {
    width: 48px;
    height: 48px;
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes prixClipFix {
    0% {
        clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
}
</style>
