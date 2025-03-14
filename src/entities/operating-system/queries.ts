import { DEFAULT_OPTION } from '@/entities/operating-system/cons.ts'

import { api } from '@/shared/configs/api/api'

export const queryKey = 'OPERATING_SYSTEM'

export const queryOperatingSystem = () => ({
    queryKey: [queryKey],
    queryFn: () => api.get('/operating-system').then((res) => [DEFAULT_OPTION, ...res.data]),
})
