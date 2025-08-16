import { config } from '@/apis/config.ts'
import { DEFAULT_OPTION } from '@/config/constants/server-tasks.ts'

export const queryKey = 'SERVER_TASKS'
export const queryServerTasks = () => ({
    queryKey: [queryKey],
    queryFn: () => config.get('/server-tasks').then((res) => [DEFAULT_OPTION, ...res.data]),
})