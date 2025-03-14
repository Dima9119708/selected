import type { NavigationConfig, NavigationItemConfig, NavigationItemConfigChildren } from './types.ts'

export function findParentChildrenByActiveRouteName(
    config: NavigationConfig,
    activeRouteName: string
): NavigationItemConfigChildren | undefined {
    for (const item of config) {
        if (Array.isArray(item)) {
            const [, children] = item
            for (const child of children) {
                if (containsActivePath(child, activeRouteName)) {
                    return getChildrenOfParentContainingPath(children, activeRouteName)
                }
            }
        } else {
            if (item.children) {
                for (const child of item.children) {
                    if (containsActivePath(child, activeRouteName)) {
                        return item.children
                    }
                }
            }
        }
    }

    return undefined
}

function containsActivePath(item: NavigationItemConfig | NavigationItemConfig[], activeRouteName: string): boolean {
    if (Array.isArray(item)) {
        return item.some((subItem) => containsActivePath(subItem, activeRouteName))
    }

    if (item.routeName === activeRouteName) {
        return true
    }
    if (item.children) {
        return item.children.some((child) => containsActivePath(child, activeRouteName))
    }
    return false
}

function getChildrenOfParentContainingPath(
    children: NavigationItemConfig[],
    activeRouteName: string
): NavigationItemConfigChildren | undefined {
    for (const child of children) {
        if (child.children && child.children.some((subChild) => containsActivePath(subChild, activeRouteName))) {
            return child.children
        }
    }
    return undefined
}

export function filterItemsWithName(config: NavigationConfig): NavigationConfig {
    return config.filter((item) => Array.isArray(item) || item.name !== undefined)
}

export function getStartingRouteName(config: NavigationConfig, defaultRouteName: string = ''): string {
    if (!config.length) {
        return defaultRouteName
    }

    const firstItem = config[0]

    function findStartingPath(item: NavigationItemConfig): string {
        if (item.routeName && item.name) {
            return item.routeName
        }

        if (item.children?.length) {
            for (const child of item.children) {
                if (Array.isArray(child)) {
                    for (const subChild of child) {
                        const result = findStartingPath(subChild)
                        if (result !== defaultRouteName) {
                            return result
                        }
                    }
                } else {
                    const result = findStartingPath(child)
                    if (result !== defaultRouteName) {
                        return result
                    }
                }
            }
        }

        return defaultRouteName
    }

    if (Array.isArray(firstItem)) {
        const [, items] = firstItem
        for (const item of items) {
            const result = findStartingPath(item)
            if (result !== defaultRouteName) {
                return result
            }
        }
    } else {
        const result = findStartingPath(firstItem)
        if (result !== defaultRouteName) {
            return result
        }
    }

    return defaultRouteName
}
