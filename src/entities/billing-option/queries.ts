import { api } from '@/shared/configs/api/api'

import { DEFAULT_OPTION } from './cons.ts'

export const queryKey = 'billingOptions'

export const queryBillingOptions = () => ({
    queryKey: [queryKey],
    queryFn: () => api.get('/billing-option').then((res) => [DEFAULT_OPTION, ...res.data]),
})
