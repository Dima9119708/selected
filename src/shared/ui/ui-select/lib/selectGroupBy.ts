type GroupedItems<T, K extends string | number | symbol> = {
    label: K
    items: T[]
}[]

export function selectGroupBy<T, K extends string | number | symbol>(items?: T[], getKey: (item: T[K]) => K): GroupedItems<T, K> {
    if (!items) return []

    const grouped = Object.groupBy(items, getKey)

    return Object.entries(grouped).map(([label, items]) => ({ label: label, items }))
}
