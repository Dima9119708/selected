<script lang="ts" setup="">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import type { Servers } from '@/entities/servers/types'

import Icon from '@/shared/ui/ui-icon/ui-icon.vue'

const props = defineProps<{
    name: Servers['name']
    cpu: Servers['cpu']
    ram: Servers['ram']
    disk: Servers['disk']
    available: Servers['available']
    gpu: Servers['gpu']
    price_collection: Servers['price_collection']
}>()

const availableCount = computed(() => {
    return props.available.reduce((acc, item) => acc + item.count, 0)
})

const disk = computed(() => {
    const [disk1, disk2] = props.disk

    return [
        disk1 && (disk1.count > 1 ? `${disk1.count} × ${disk1.size} ${disk1.type}` : `${disk1.size} ${disk1.type}`),
        disk2 && (disk2.count > 1 ? `${disk2.count} × ${disk2.size} ${disk2.type}` : `${disk2.size} ${disk2.type}`),
    ].filter(Boolean)
})

const raw = computed(() => {
    const [ram1] = props.ram

    return `${ram1.size * ram1.count} ${ram1.type}`
})

const priceCollection = computed(() => {
    return props.price_collection.USD
})
</script>

<template>
    <div class="order-list-item">
        <div class="order-list-item-name col-span-3">{{ $props.name }}</div>
        <div class="order-list-item-count flex justify-end">
            ● {{ availableCount > 0 ? $t('server_available', { count: availableCount }) : $t('Temporarily out of stock') }}
        </div>
        <div>{{ $props.cpu.name }}</div>
        <div>{{ raw }}</div>
        <div>{{ disk[0] }}</div>
        <div class="flex justify-end font-bold">{{ $n(priceCollection.month, 'currency') }}/month</div>
        <div>{{ $props.cpu.base_freq }} {{ $t('GHz') }}, {{ $props.cpu.cores_per_cpu }} {{ $t('cores') }}</div>
        <div>{{ $props.gpu.name }}</div>
        <div>{{ disk[1] }}</div>
        <div class="flex justify-end">
            <template v-if="priceCollection.day"> {{ $n(priceCollection.day, 'currency') }}/day </template>
        </div>
        <div class="flex gap-[10px] col-span-3">
            <div class="flex items-center">
                <Icon
                    name="private-network"
                    size="small"
                />
                {{ $t('Private network') }}
            </div>
            <div class="flex items-center">
                <Icon
                    name="kvm"
                    size="small"
                />
                {{ $t('KVM-console') }}
            </div>
            <div class="flex items-center">
                <Icon
                    name="two-psu"
                    size="small"
                />
                {{ $t('2+ PSU') }}
            </div>
        </div>
        <div class="flex justify-end">action</div>
    </div>
</template>

<style scoped>
.order-list-item {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 15px;
    border: 1px solid var(--order-list-item-border);
    padding: 16px;
    border-radius: 6px;

    &:hover {
        background-color: #f7f7f7;
    }
}

.order-list-item-name {
    font-size: 20px;
    color: var(--sui-typography_base);
}

.order-list-item-count {
    color: v-bind(availableCount > 0 ? '#52990b': '#696969');
}
</style>
