import { type MaybeRefOrGetter, computed, toValue } from 'vue'

import { type Overrides, mergeConfig } from '@/utils/helpers/merge-config'
import type { NavigationConfig } from './types'

export const useNavbarConfig = (config: MaybeRefOrGetter<NavigationConfig>, overrides?: Overrides) => {
    return computed(() => {
        if (!overrides) return toValue(config)

        return mergeConfig(toValue(config), overrides)
    })
}
