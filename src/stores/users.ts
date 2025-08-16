import { defineStore } from 'pinia'
import { ref } from 'vue'

import { USERS } from '@/config/constants/users'

export const useUsersStore = defineStore('users', () => {
    const users = ref(USERS)

    return {
        users,
    }
})