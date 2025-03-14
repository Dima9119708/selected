type ItemConfig = {
    name?: string
    children?: ItemConfig[]
}

type Config = Array<ItemConfig | [string, ItemConfig[]]>

type ConfigOverrides = Record<string, ItemConfig>

function mergeItemConfig<Item extends ItemConfig>(item: Item, overrides: ConfigOverrides): Item {
    const override = item.name ? overrides[item.name] : undefined

    const mergedItem = override ? { ...item, ...override } : item

    if (mergedItem.children) {
        mergedItem.children = mergeItemConfigChildren(mergedItem.children, overrides)
    }
    return mergedItem
}

function mergeItemConfigChildren<Children extends ItemConfig[]>(children: Children, overrides: ConfigOverrides): Children {
    return children.map<ItemConfig>((child) => {
        if (Array.isArray(child)) {
            return child.map((subChild) => mergeItemConfig(subChild, overrides))
        } else {
            return mergeItemConfig(child, overrides)
        }
    })
}

export function mergeConfig<C extends Config>(config: C, overrides: ConfigOverrides): C {
    return config.map<ItemConfig | [string, ItemConfig[]]>((item) => {
        if (Array.isArray(item)) {
            const [title, items] = item
            return [title, items.map((subItem) => mergeItemConfig(subItem, overrides))]
        } else {
            return mergeItemConfig(item, overrides)
        }
    })
}
