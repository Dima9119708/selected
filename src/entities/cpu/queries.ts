import { api } from '@/shared/configs/api/api'

export const queryKey = 'CPU'

export const queryCPU = () => ({
    queryKey: [queryKey],
    queryFn: () => api.get('/cpu').then((res) => res.data),
})
