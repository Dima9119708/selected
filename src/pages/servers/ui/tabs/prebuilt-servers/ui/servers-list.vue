<script lang="ts" setup="">
import { useInfiniteQuery } from '@tanstack/vue-query'
import { useIntersectionObserver } from '@vueuse/core'
import { type Ref, inject, useTemplateRef, watch } from 'vue'

import Button from '@/components/ui/ui-button.vue'
import Spinner from '@/components/ui/ui-spinner.vue'

import ServersListItem from './servers-list-item.vue'
import { queryServers } from '@/utils/queries/servers.ts'

const props = defineProps<{ formState: Record<string, any> }>()

const availableServersAmount = inject('AVAILABLE_SERVERS_AMOUNT') as Ref<number>

const target = useTemplateRef<HTMLDivElement>('target')

const { isLoading, data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    ...queryServers(props.formState),
    enabled: true,
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => (lastPage?.length > 0 ? lastPageParam + 3 : undefined),
})

useIntersectionObserver(
    target,
    ([entry]) => {
        if (entry?.isIntersecting) {
            if (hasNextPage) {
                fetchNextPage()
            }
        }
    },
    {
        threshold: 1,
    }
)

watch(data, () => {
    if (data.value) {
        availableServersAmount.value = data.value.pages.reduce((acc, page) => acc + page.length, 0)
    }
})
</script>

<template>
    <div class="grid gap-[15px]">
        <template v-if="data">
            <template
                v-for="(group, index) in data.pages"
                :key="index"
            >
                <ServersListItem
                    v-for="server in group"
                    :key="server.uuid"
                    v-bind="server"
                />
            </template>
        </template>

        <Button
            ref="target"
            variant="outlined"
            @click="() => fetchNextPage()"
            :disabled="!hasNextPage || isFetchingNextPage"
        >
            <span v-if="isLoading || isFetchingNextPage"><Spinner size="small" /></span>
            <span v-else>Nothing more to load</span>
        </Button>
    </div>
</template>

<style scoped></style>
