import { config } from '@/apis/config.ts'
import { DEFAULT_OPTION } from '@/config/constants/operating-system.ts'

export const queryKey = 'OPERATING_SYSTEM'

export const queryOperatingSystem = () => ({
    queryKey: [queryKey],
    queryFn: () => config.get('/operating-system').then((res) => [DEFAULT_OPTION, ...res.data]),
})