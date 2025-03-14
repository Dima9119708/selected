import { defineStore } from 'pinia'
import { ref } from 'vue'

import { api } from '@/shared/configs/api/api.ts'

import { USERS } from './users'

const usersQueryKey = 'users'

export const usersQuery = () => ({
    queryKey: [usersQueryKey],
    queryFn: async () => {
        return api.get('/users').then((res) => res.data)
    },
})

export const useUsersStore = defineStore('users', () => {
    const users = ref(USERS)

    return {
        users,
    }
})
