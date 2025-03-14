import { DEFAULT_OPTION } from '@/entities/region-and-pool/cons'

import { api } from '@/shared/configs/api/api'

export const queryKeyRegion = 'REGION'
export const queryKeyPool = 'POOL'

export const queryRegion = () => ({
    queryKey: [queryKeyRegion],
    queryFn: () => api.get('/region').then((res) => [DEFAULT_OPTION, ...res.data]),
})

export const queryPool = () => ({
    queryKey: [queryKeyPool],
    queryFn: () => api.get('/pools').then((res) => res.data),
})
