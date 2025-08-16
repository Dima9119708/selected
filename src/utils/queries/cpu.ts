import { config } from '@/apis/config.ts'

export const queryKey = 'CPU'
export const queryCPU = () => ({
    queryKey: [queryKey],
    queryFn: () => config.get('/cpu').then((res) => res.data),
})