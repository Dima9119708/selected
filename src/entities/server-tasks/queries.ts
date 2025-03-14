import { api } from '@/shared/configs/api/api'

import { DEFAULT_OPTION } from './cons'

export const queryKey = 'SERVER_TASKS'

export const queryServerTasks = () => ({
    queryKey: [queryKey],
    queryFn: () => api.get('/server-tasks').then((res) => [DEFAULT_OPTION, ...res.data]),
})
