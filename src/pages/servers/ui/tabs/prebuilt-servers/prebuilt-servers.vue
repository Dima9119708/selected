<script lang="ts" setup="">
import ServersList from '@/pages/servers/ui/tabs/prebuilt-servers/ui/servers-list.vue'
import { provide, reactive, ref, toRaw, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import SelectBillingOption from '@/entities/billing-option/select-billing-option.vue'
import SelectCPU from '@/entities/cpu/select-cpu.vue'
import SelectOperatingSystem from '@/entities/operating-system/select-operating-system.vue'
import SelectPrivateNetwork from '@/entities/private-network/select-private-network.vue'
import SelectRegionsAndPools from '@/entities/region-and-pool/select-regions-and-pools.vue'
import SelectServerTasks from '@/entities/server-tasks/select-server-tasks.vue'

import Badge from '@/shared/ui/ui-badge/ui-badge.vue'
import Button from '@/shared/ui/ui-button.vue'
import Checkbox from '@/shared/ui/ui-checkbox.vue'
import Label from '@/shared/ui/ui-label.vue'
import RangeSlider from '@/shared/ui/ui-range/ui-range-slider.vue'
import Select from '@/shared/ui/ui-select/ui-select.vue'

const availableServersAmount = ref(0)

const formState = reactive({
    cpu: [],
    numberOfCores: null,
    cpuFrequency: null,
    ramSize: null,
    orderFilterKvm: false,
    hddSata: false,
    ssdNvme: false,
    ssdSata: false,
    gpu: false,
    psu: false,
    kvmConsole: false,
    privateNetwork: [],
    operatingSystem: [],
    regions: [],
    pools: [],
    serverTasks: [],
    inStock: false,
    sort: { label: 'By popularity', value: 'by_popularity' },
})

provide('AVAILABLE_SERVERS_AMOUNT', availableServersAmount)

watch(formState, () => {
    toRaw(formState)
})
</script>

<template>
    <div class="form grid grid-cols-3 gap-[24px]">
        <div class="h-max grid grid-cols-1 gap-[12px]">
            <SelectCPU v-model="formState.cpu" />

            <div>
                <Label>
                    {{ $t('Number of cores') }}
                </Label>
                <RangeSlider
                    v-model="formState.numberOfCores"
                    :steps="[
                        { label: '2' },
                        { label: '4' },
                        { label: '6' },
                        { label: '8' },
                        { label: '10' },
                        { label: '12' },
                        { label: '14' },
                        { label: '16' },
                        { label: '18' },
                        { label: '20' },
                        { label: '24' },
                        { label: '28' },
                        { label: '32' },
                        { label: '36' },
                        { label: '48' },
                        { label: '64' },
                        { label: '72' },
                        { label: '128' },
                    ]"
                />
            </div>

            <div>
                <Label>
                    {{ $t('CPU frequency, GHz') }}
                </Label>
                <RangeSlider
                    v-model="formState.cpuFrequency"
                    :steps="[
                        { label: '1.5' },
                        { label: '1.8' },
                        { label: '2' },
                        { label: '2.5' },
                        { label: '3' },
                        { label: '3.5' },
                        { label: '4' },
                        { label: '4.5' },
                    ]"
                />
            </div>

            <div>
                <Label>
                    {{ $t('RAM size, GB') }}
                </Label>
                <RangeSlider
                    v-model="formState.ramSize"
                    :steps="[
                        { label: '4' },
                        { label: '8' },
                        { label: '16' },
                        { label: '32' },
                        { label: '64' },
                        { label: '128' },
                        { label: '192' },
                        { label: '256' },
                        { label: '384' },
                        { label: '512' },
                        { label: '768' },
                        { label: '1024' },
                    ]"
                />
            </div>

            <Checkbox v-model="formState.orderFilterKvm">
                {{ $t('Block storage can be connected') }}
                <Badge
                    variant="standard"
                    label="New"
                />
            </Checkbox>
        </div>

        <div class="h-max grid grid-cols-1 gap-[12px]">
            <div>
                <Label>
                    {{ $t('Disks') }}
                </Label>
                <Checkbox v-model="formState.hddSata">
                    {{ $t('HDD SATA') }}
                </Checkbox>
                <RangeSlider
                    v-if="formState.hddSata"
                    :steps="[{ label: '2 x 240' }, { label: '2 x 480' }, { label: '2 x 800' }, { label: '2 x 960' }, { label: '2 x 1960' }]"
                />
                <Checkbox v-model="formState.ssdNvme">
                    {{ $t('SSD NVMe') }}
                </Checkbox>
                <RangeSlider
                    v-if="formState.ssdNvme"
                    :steps="[
                        { label: '2 x 2000' },
                        { label: '2 x 4000' },
                        { label: '2 x 8000' },
                        { label: '2 x 10000' },
                        { label: '4 x 24000' },
                    ]"
                />
                <Checkbox v-model="formState.ssdSata">
                    {{ $t('SSD SATA') }}
                </Checkbox>
                <RangeSlider
                    v-if="formState.ssdSata"
                    :steps="[
                        { label: '1 x 500' },
                        { label: '1 x 10000' },
                        { label: '2 x 960' },
                        { label: '2 x 1000' },
                        { label: '2 x 1920' },
                        { label: '2 x 2000' },
                        { label: '2 x 3840' },
                    ]"
                />
            </div>

            <SelectOperatingSystem v-model="formState.operatingSystem" />

            <div>
                <Label>
                    {{ $t('Configuration features') }}
                </Label>
                <Checkbox v-model="formState.gpu">
                    {{ $t('GPU') }}
                </Checkbox>
                <Checkbox v-model="formState.psu">
                    {{ $t('2+ PSU') }}
                </Checkbox>
                <Checkbox v-model="formState.kvmConsole">
                    {{ $t('KVM-console') }}
                </Checkbox>
            </div>

            <SelectPrivateNetwork v-model="formState.privateNetwork" />
        </div>

        <div class="h-max grid grid-cols-1 gap-[12px]">
            <SelectServerTasks v-model="formState.serverTasks" />

            <SelectRegionsAndPools
                v-model:regions="formState.regions"
                v-model:pools="formState.pools"
            />

            <SelectBillingOption v-model="formState.pools" />

            <Button
                variant="outlined"
                class="w-full mt-[30px]"
            >
                Reset
            </Button>
        </div>
    </div>

    <div class="flex justify-between mb-[25px]">
        <Select
            class="w-[200px]"
            :options="[
                { label: 'By popularity', value: 'by_popularity' },
                { label: 'By ascending price', value: 'by_ascending_price' },
                { label: 'By descending price', value: 'by_descending_price' },
            ]"
            option-label="label"
            v-model="formState.sort"
        />

        <div class="flex items-center gap-[24px] available-servers-amount">
            <span>{{ $t('available_servers_amount', { count: availableServersAmount }) }}</span>

            <Checkbox v-model="formState.inStock">
                {{ $t('In stock') }}
            </Checkbox>
        </div>
    </div>

    <ServersList :form-state="formState" />
</template>

<style scoped>
.form {
    padding-bottom: 25px;
    margin-bottom: 25px;
    border-bottom: 1px solid #d1d1d1;
}

.available-servers-amount {
    color: var(--sui-typography_low-emphasis);
}
</style>
