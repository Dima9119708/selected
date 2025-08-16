<script lang="ts" setup="">
import Password from 'primevue/password'
</script>

<template>
    <Password
        input-class="p-input"
        :feedback="false"
        v-bind="$props"
    />
</template>

<style src="./style.css"></style>
