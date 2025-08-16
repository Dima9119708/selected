<script lang="ts" setup="">
import { ref } from 'vue'

import TabList from '@/components/ui/ui-tab-list.vue'
import TabPanel from '@/components/ui/ui-tab-panel.vue'
import TabPanels from '@/components/ui/ui-tab-panels.vue'
import Tab from '@/components/ui/ui-tab.vue'
import Tabs from '@/components/ui/ui-tabs.vue'

import FSTECServers from './ui/tabs/fstec-servers.vue'
import GPUServerConfigurator from './ui/tabs/gpu-server-configurator.vue'
import PrebuiltServers from './ui/tabs/prebuilt-servers/prebuilt-servers.vue'
import ServerConfigurator from './ui/tabs/server-configurator.vue'

const tabModel = ref('0')
</script>

<template>
    <Tabs v-model:value="tabModel">
        <TabList>
            <Tab value="0">
                {{ $t('prebuilt_servers') }}
            </Tab>
            <Tab value="1">
                {{ $t('server_configurator') }}
            </Tab>
            <Tab value="2">
                {{ $t('gpu_server_configurator') }}
            </Tab>
            <Tab value="3">
                {{ $t('fstec_servers') }}
            </Tab>
        </TabList>

        <TabPanels>
            <TabPanel value="0">
                <PrebuiltServers />
            </TabPanel>
            <TabPanel value="1">
                <ServerConfigurator />
            </TabPanel>
            <TabPanel value="2">
                <GPUServerConfigurator />
            </TabPanel>
            <TabPanel value="3">
                <FSTECServers />
            </TabPanel>
        </TabPanels>
    </Tabs>
</template>

<style scoped></style>
