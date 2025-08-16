import { config } from '@/apis/config.ts'
import { DEFAULT_OPTION } from '@/config/constants/billing-option.ts'

export const queryKey = 'billingOptions'
export const queryBillingOptions = () => ({
    queryKey: [queryKey],
    queryFn: () => config.get('/billing-option').then((res) => [DEFAULT_OPTION, ...res.data]),
})