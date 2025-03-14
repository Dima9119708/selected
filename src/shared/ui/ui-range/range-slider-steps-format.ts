export const rangeStepsFormat = (
    steps: Array<string | number | Record<'label' | string | number, any>>
): Record<'label' | string | number, any> => {
    return steps.reduce<Array<Record<'label' | string | number, any>>>((acc, item) => {
        if (typeof item === 'string' || typeof item === 'number') {
            acc.push({ label: item })
        }

        if (typeof item === 'object' && 'label' in item) {
            acc.push(item)
        }

        return acc
    }, [])
}
