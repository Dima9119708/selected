import { api } from '@/shared/configs/api/api'

export const queryKeyPrivateNetwork = 'PRIVATE_NETWORK'

export const queryOperatingSystem = () => ({
    queryKey: [queryKeyPrivateNetwork],
    queryFn: () => api.get('/private-network').then((res) => res.data),
})
