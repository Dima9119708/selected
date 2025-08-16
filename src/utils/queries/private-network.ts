import { config } from '@/apis/config.ts'

export const queryKeyPrivateNetwork = 'PRIVATE_NETWORK'

export const queryOperatingSystem = () => ({
    queryKey: [queryKeyPrivateNetwork],
    queryFn: () => config.get('/private-network').then((res) => res.data),
})