/// <reference types="vite/client" />
import { RouteLocationNormalizedLoadedGeneric, Router } from 'vue-router'

declare module 'vue' {
    interface ComponentCustomProperties {
        $router: Router
        $route: RouteLocationNormalizedLoadedGeneric
        $t: (key: string, options?: Record<string, string>) => string
    }
}
export {}
