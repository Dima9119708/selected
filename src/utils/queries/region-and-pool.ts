import { config } from '@/apis/config.ts'
import { DEFAULT_OPTION } from '@/config/constants/regions-and-pools.ts'

export const queryKeyRegion = 'REGION'
export const queryKeyPool = 'POOL'
export const queryRegion = () => ({
    queryKey: [queryKeyRegion],
    queryFn: () => config.get('/region').then((res) => [DEFAULT_OPTION, ...res.data]),
})
export const queryPool = () => ({
    queryKey: [queryKeyPool],
    queryFn: () => config.get('/pools').then((res) => res.data),
})