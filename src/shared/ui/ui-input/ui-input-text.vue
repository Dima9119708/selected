<script lang="ts" setup="">
import InputText from 'primevue/inputtext'

const model = defineModel<string>()
defineProps()
</script>

<template>
    <InputText
        class="p-input"
        v-bind="$props"
        v-model="model"
    />
</template>

<style src="./style.css"></style>
