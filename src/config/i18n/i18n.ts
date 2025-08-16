import { type WritableComputedRef, nextTick } from 'vue'
import { type I18n, type I18nOptions, createI18n } from 'vue-i18n'

export function setupI18n(options: I18nOptions = { locale: 'en' }) {
    const i18n = createI18n(options)
    setI18nLanguage(i18n, options.locale)
    return i18n
}

export function setI18nLanguage(i18n: I18n, locale?: string) {
    if (!locale) return

    if (i18n.mode === 'legacy') {
        i18n.global.locale = locale
    } else {
        ;(i18n.global.locale as WritableComputedRef<string>).value = locale
    }
}

export async function loadLocaleMessages(success: (messages: Record<string, any>) => void, locale: string) {
    try {
        const messages = await import(`./locales/${locale}.json`)

        success(messages.default)

        return nextTick()
    } catch (e) {}
}
