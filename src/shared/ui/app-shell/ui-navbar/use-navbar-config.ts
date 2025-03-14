import { type MaybeRefOrGetter, computed, toValue } from 'vue'

import { type Overrides, mergeConfig } from './merge-config.ts'
import type { NavigationConfig } from './types.ts'

export const useNavbarConfig = (config: MaybeRefOrGetter<NavigationConfig>, overrides?: Overrides) => {
    return computed(() => {
        if (!overrides) return toValue(config)

        return mergeConfig(toValue(config), overrides)
    })
}
