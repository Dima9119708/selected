import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import PrimeVue, { type PrimeVueConfiguration } from 'primevue/config'
import { createApp } from 'vue'

import { router } from '@/app/router'
import '@/app/styles.css'

import { setupI18n } from '@/config/i18n/i18n'
import '@/config/vee-validate/global-validate'

import App from './App.vue'

const pinia = createPinia()

const app = createApp(App)

const i18n = setupI18n({
    locale: 'en',
    missingWarn: false,
    silentTranslationWarn: true,
    numberFormats: {
        en: {
            currency: {
                style: 'currency',
                currency: 'USD',
                notation: 'standard',
            },
        },
        ru: {
            currency: {
                style: 'currency',
                currency: 'RUB',
                notation: 'standard',
            },
        },
    },
})

app.config.errorHandler = (err, instance, info) => {
    console.log('errorHandler => err, instance, info =>', err, instance, info)
}

app.use(PrimeVue, {
    unstyled: true,
} satisfies PrimeVueConfiguration)

app.use(VueQueryPlugin)
app.use(i18n)
app.use(pinia)

app.use(router)

app.mount('#app')
