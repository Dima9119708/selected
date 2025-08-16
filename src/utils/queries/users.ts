import { config } from '@/apis/config';

const usersQueryKey = 'users'

export const usersQuery = () => ({
    queryKey: [usersQueryKey],
    queryFn: async () => {
        return config.get('/users').then((res) => res.data)
    },
})