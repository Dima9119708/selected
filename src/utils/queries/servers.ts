import type { MaybeRefOrGetter } from 'vue'
import type { QueryFunction, QueryKey } from '@tanstack/vue-query'
import type { Servers } from '@/entities/servers'
import { config } from '@/apis/config'

const queryKey = 'SERVERS'
export const queryServers = (
    formState: MaybeRefOrGetter<Record<string, any>>,
): { queryKey: QueryKey; queryFn: QueryFunction<Servers[]> } => ({
    queryKey: [queryKey, formState],
    queryFn: ({ signal, pageParam }) =>
        config
            .get<{ items: Servers[] }>(`/servers?page=${pageParam}&limit=${3}`, {
                signal,
            })
            .then((res) => res.data.items),
})