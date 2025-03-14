import type { MaybeRefOrGetter } from 'vue'
import { computed, toValue } from 'vue'

import { mergeConfig } from '@/shared/ui/app-shell/ui-navbar/merge-config'

import type { HeaderConfig, HeaderConfigOverrides } from './types'

export const useHeaderConfig = (config: MaybeRefOrGetter<HeaderConfig>, overrides?: HeaderConfigOverrides) => {
    return computed(() => {
        if (!overrides) return toValue(config)

        return mergeConfig(toValue(config), overrides)
    })
}
