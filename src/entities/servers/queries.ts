import { type QueryFunction, type QueryKey } from '@tanstack/vue-query'
import { type MaybeRefOrGetter } from 'vue'

import { api } from '@/shared/configs/api/api'

import type { Servers } from './types'

const queryKey = 'SERVERS'

export const queryServers = (
    formState: MaybeRefOrGetter<Record<string, any>>
): { queryKey: QueryKey; queryFn: QueryFunction<Servers[]> } => ({
    queryKey: [queryKey, formState],
    queryFn: ({ signal, pageParam }) =>
        api
            .get<{ items: Servers[] }>(`/servers?page=${pageParam}&limit=${3}`, {
                signal,
            })
            .then((res) => res.data.items),
})
