<script lang="ts" setup="">
import { storeToRefs } from 'pinia'
import { computed, defineAsyncComponent, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import { loadLocaleMessages } from '@/config/i18n/i18n'
import { ROUTE_PATHS } from '@/config/routes/routes'

import { useAuthStore } from '@/components/containers/auth/use-auth'
import Header from '@/components/containers/header/ui-header.vue'
import { useHeaderConfig } from '@/components/containers/header/use-header-config'
import type { ToRoute } from '@/components/containers/navbar/types'
import Navbar from '@/components/containers/navbar/ui-navbar.vue'
import { useNavbarConfig } from '@/components/containers/navbar/use-navbar-config'
import SelectUsersByRoles from '@/components/containers/select-users-by-roles/select-users-by-roles.vue'

<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
||||||| ancestor
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('222222222222SAVASVSAV22222222222222222222')

console.log('1111111111111111111111111111')
||||||| ancestor
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('222222222222SAVASVSAV22222222222222222222')

console.log('1111111111111111111111111111')
=======
console.log('!!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!asvasv')
console.log('!!!!!ggggggggggggggg!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!ggggggggggggggg!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!222222222222SAVASVSAV22222222222222222222')

console.log('!!!!!!!!!!!!!!!!!!!!!!1111111111111111111111111111')
>>>>>>> theirs
||||||| ancestor
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('222222222222SAVASVSAV22222222222222222222')

console.log('1111111111111111111111111111')
=======
console.log('!!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!asvasv')
console.log('!!!!!ggggggggggggggg!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!ggggggggggggggg!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!222222222222SAVASVSAV22222222222222222222')

console.log('!!!!!!!!!!!!!!!!!!!!!!1111111111111111111111111111')
>>>>>>> theirs

console.log('55555555555555555555555555555555')

console.log('9933333333333333333333999999999999999333333333333333333339999999999999999999999999999999')

<<<<<<< ours
<<<<<<< ours
=======
console.log('!!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!asvasv')
console.log('!!!!!ggggggggggggggg!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!ggggggggggggggg!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!222222222222SAVASVSAV22222222222222222222')
||||||| ancestor
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('222222222222SAVASVSAV22222222222222222222')

console.log('1111111111111111111111111111')
=======
console.log('!!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!asvasv')
console.log('!!!!!ggggggggggggggg!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!ggggggggggggggg!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!222222222222SAVASVSAV22222222222222222222')

console.log('!!!!!!!!!!!!!!!!!!!!!!1111111111111111111111111111')
>>>>>>> theirs
||||||| ancestor
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('222222222222SAVASVSAV22222222222222222222')

console.log('1111111111111111111111111111')
=======
console.log('!!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!asvasv')
console.log('!!!!!ggggggggggggggg!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!ggggggggggggggg!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!222222222222SAVASVSAV22222222222222222222')

console.log('!!!!!!!!!!!!!!!!!!!!!!1111111111111111111111111111')
>>>>>>> theirs
||||||| ancestor
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('222222222222SAVASVSAV22222222222222222222')

console.log('1111111111111111111111111111')
=======
console.log('!!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!asvasv')
console.log('!!!!!ggggggggggggggg!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!ggggggggggggggg!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!222222222222SAVASVSAV22222222222222222222')

console.log('!!!!!!!!!!!!!!!!!!!!!!1111111111111111111111111111')
>>>>>>> theirs
||||||| ancestor
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('asvasv asvasv asvasv asvasvasvasv')
console.log('222222222222SAVASVSAV22222222222222222222')

console.log('1111111111111111111111111111')
=======
console.log('!!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!asvasv')
console.log('!!!!!ggggggggggggggg!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!ggggggggggggggg!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!ggggggggggggggg!!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asv!!!!!!!!!!!!!!!!!!!!!!asv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!asvasv asvasv asvasv asvasvasvasv')
console.log('!!!!!!!!!!!!!!!!!!!!!!222222222222SAVASVSAV22222222222222222222')

console.log('!!!!!!!!!!!!!!!!!!!!!!1111111111111111111111111111')
>>>>>>> theirs

console.log('55555555555555555555555555555555')

console.log('9933333333333333333333999999999999999333333333333333333339999999999999999999999999999999')

const router = useRouter()
const i18n = useI18n({
    useScope: 'global',
    
})

console.log('8888888888888888888')

const appLoading = ref(true)
const appLoading1 = ref(true)
const appLoading2 = ref(true)
const appLoading3 = ref(true)
const appLoading4 = ref(true)
const authStore = useAuthStore()
const { data, navigationItems, actionItems, permissionByRole } = storeToRefs(authStore)
const navbarConfig = useNavbarConfig(navigationItems)

const headerConfig = useHeaderConfig(actionItems, {
    balance: {
        component: defineAsyncComponent(() => import('@/components/containers/balance/balance.vue')),
    },
    notices: {
        component: defineAsyncComponent(() => import('@/components/containers/notices/notices.vue')),
    },
    profile: {
        component: defineAsyncComponent(() => import('@/components/containers/profile/profile.vue')),
    },
})
<<<<<<< ours
||||||| ancestor
console.log('999999999999999999999')
console.log('999999999999999999999')
console.log('999999999999999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('999999999999999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('999999999999999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('999999999999999999999')
console.log('999999999VVSASAVVSAVSAV999999999999')
console.log('999999999999999999999')
console.log('9999999999SAVSA99999999999')
console.log('999999999999999999999')
console.log('999999999999999999999')
=======
>>>>>>> theirs
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
<<<<<<< ours
console.log('9999999999999999STAGEEEEEEEEE99999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999999999999STAGEEEEEEEEE99999')
console.log('9999999999VSSSSSTAGEEEEEEEEESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999999999999STAGEEEEEEEEE99999')
console.log('999999999VVSASAVSTAGEEEEEEEEEVSAVSAV999999999999')
console.log('999999999999999STAGEEEEEEEEE999999')
console.log('9999999999SAVSASTAGEEEEEEEEE99999999999')
console.log('99999999999999STAGEEEEEEEEE9999999')
console.log('99999999999999STAGEEEEEEEEE9999999')
console.log('9999999999SAVSSTAGEEEEEEEEEA99999999999')
console.log('999999999VSAASSTAGEEEEEEEEEV999999999999')
console.log('999999999999999999999')
console.log('99999999999999STAGEEEEEEEEE9999999')
console.log('99999999SAVSA9STAGEEEEEEEEE999999999999')
console.log('99999999999999STAGEEEEEEEEE9999999')
console.log('9999999SAVSAV99STAGEEEEEEEEE999999999999')
console.log('999999999999999STAGEEEEEEEEE999999')
console.log('9999999999VSSSSSTAGEEEEEEEEESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999999VSSSSSTAGEEEEEEEEESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999999VSSSTAGEEEEEEEEESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('99999999ASVSAV9STAGEEEEEEEEE999999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999ASFVSAVSAVSVSA99999999999999')
console.log('9999999VSAV99999999999999')
console.log('999999999999999999999')
console.log('99999999SAVSAV9999999999999')
console.log('999999999SAVSAV999999999999')
<<<<<<< ours
console.log(
    '!=============!!!!MAIN!!!!=======!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!STAGEEEEEEEEE=!!!!!!!!!!!!!!!!!!!===99999999999999999ASFVSAVSAVSA9999!========================'
)
console.log(
    '!===============!!!!MAIN!!!!=====!!!!!!!!!!!!!!!!!!!=!!!!!!!!!!!!!!!!!!!===99999999999999999SAVSAVVSA9999!========================'
)
console.log('!====STAGEEEEEEEEE========!!!!MAIN!!!!========!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=========!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=========!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!=====STAGEEEEEEEEE====!!!!MAIN!!!! !!!!!!STAGEEEEEEEEE!!!!!STAGEEEEEEEEE!!!!!!!!===============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!! !!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!NOOOOO STAGEEEEEEEEE!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)

console.log('!=============!!!!MAIN!!!!===GGGGGG====!!!!!!!!!!!!!!!!!!!=!!!!!!!!!!!!!!!!!!!===99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!===============!!!!MAIN!!!!==GGGGGG===!!!!!!!!!!!!!!!!!!!=!!!!!!!!!!!!!!!!!!!===99999999999999999SAVSAVVSA9999!========================')
console.log('!============!!!!MAIN!!!!===GGGGGG=====!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!====GGGGGG=====!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!====GGGGGG=====!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!=========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!=======GGGGGG========99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!======GGGGGG=======99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')

console.log('!=============!!!!MAIN!!!!===========99999999999999999SAVSAVVSA9999!========================')
=======
console.log('999999999999999999999')
console.log('999999999999999999999')
console.log('999999999999999999999')
console.log('999999999999999999999')
||||||| ancestor
=======
console.log('9999999999SAVSA99999999999')
>>>>>>> theirs
console.log('999999999999999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
<<<<<<< ours
console.log('999999999999999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('999999999999999999999')
<<<<<<< ours
console.log('9999999999SAVSA99999999999')
console.log('999999999VSAASV999999999999')
||||||| ancestor
=======
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
>>>>>>> theirs
console.log('999999999999999999999')
console.log('999999999VVSASAVVSAVSAV999999999999')
console.log('999999999999999999999')
<<<<<<< ours
console.log('99999999SAVSA9999999999999')
||||||| ancestor
=======
console.log('9999999999SAVSA99999999999')
>>>>>>> theirs
console.log('999999999999999999999')
console.log('9999999SAVSAV99999999999999')
console.log('999999999999999999999')
console.log('9999999999SAVSA99999999999')
console.log('999999999VSAASV999999999999')
console.log('999999999999999999999')
console.log('999999999999999999999')
console.log('99999999SAVSA9999999999999')
console.log('999999999999999999999')
console.log('9999999SAVSAV99999999999999')
console.log('999999999999999999999')
||||||| ancestor
console.log('999999999999999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('999999999999999999999')
||||||| ancestor
console.log('999999999999999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('999999999999999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('999999999999999999999')
console.log('999999999VVSASAVVSAVSAV999999999999')
console.log('999999999999999999999')
console.log('9999999999SAVSA99999999999')
console.log('999999999999999999999')
console.log('999999999999999999999')
console.log('9999999999SAVSA99999999999')
console.log('999999999VSAASV999999999999')
console.log('999999999999999999999')
console.log('999999999999999999999')
console.log('99999999SAVSA9999999999999')
console.log('999999999999999999999')
console.log('9999999SAVSAV99999999999999')
console.log('999999999999999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
=======
console.log('9999999999999999STAGEEEEEEEEE99999')
>>>>>>> theirs
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
<<<<<<< ours
console.log('999999999999999999999')
console.log('999999999VVSASAVVSAVSAV999999999999')
console.log('999999999999999999999')
console.log('9999999999SAVSA99999999999')
console.log('999999999999999999999')
console.log('999999999999999999999')
console.log('9999999999SAVSA99999999999')
console.log('999999999VSAASV999999999999')
console.log('999999999999999999999')
console.log('999999999999999999999')
console.log('99999999SAVSA9999999999999')
console.log('999999999999999999999')
console.log('9999999SAVSAV99999999999999')
console.log('999999999999999999999')
||||||| ancestor
console.log('999999999999999999999')
||||||| ancestor
=======
console.log('9999999999999999STAGEEEEEEEEE99999')
console.log('9999999999VSSSSSTAGEEEEEEEEESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999999999999STAGEEEEEEEEE99999')
console.log('999999999VVSASAVSTAGEEEEEEEEEVSAVSAV999999999999')
console.log('999999999999999STAGEEEEEEEEE999999')
console.log('9999999999SAVSASTAGEEEEEEEEE99999999999')
console.log('99999999999999STAGEEEEEEEEE9999999')
console.log('99999999999999STAGEEEEEEEEE9999999')
console.log('9999999999SAVSSTAGEEEEEEEEEA99999999999')
console.log('999999999VSAASSTAGEEEEEEEEEV999999999999')
console.log('999999999999999999999')
console.log('99999999999999STAGEEEEEEEEE9999999')
console.log('99999999SAVSA9STAGEEEEEEEEE999999999999')
console.log('99999999999999STAGEEEEEEEEE9999999')
console.log('9999999SAVSAV99STAGEEEEEEEEE999999999999')
console.log('999999999999999STAGEEEEEEEEE999999')
console.log('9999999999VSSSSSTAGEEEEEEEEESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
>>>>>>> theirs
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
<<<<<<< ours
console.log('999999999999999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('999999999999999999999')
console.log('999999999VVSASAVVSAVSAV999999999999')
console.log('999999999999999999999')
console.log('9999999999SAVSA99999999999')
console.log('999999999999999999999')
console.log('999999999999999999999')
console.log('9999999999SAVSA99999999999')
console.log('999999999VSAASV999999999999')
console.log('999999999999999999999')
console.log('999999999999999999999')
console.log('99999999SAVSA9999999999999')
console.log('999999999999999999999')
console.log('9999999SAVSAV99999999999999')
console.log('999999999999999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
=======
console.log('9999999999999999STAGEEEEEEEEE99999')
>>>>>>> theirs
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
<<<<<<< ours
=======
console.log('9999999999999999STAGEEEEEEEEE99999')
>>>>>>> theirs
||||||| ancestor
=======
console.log('9999999999999999STAGEEEEEEEEE99999')
console.log('9999999999VSSSSSTAGEEEEEEEEESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999999999999STAGEEEEEEEEE99999')
console.log('999999999VVSASAVSTAGEEEEEEEEEVSAVSAV999999999999')
console.log('999999999999999STAGEEEEEEEEE999999')
console.log('9999999999SAVSASTAGEEEEEEEEE99999999999')
console.log('99999999999999STAGEEEEEEEEE9999999')
console.log('99999999999999STAGEEEEEEEEE9999999')
console.log('9999999999SAVSSTAGEEEEEEEEEA99999999999')
console.log('999999999VSAASSTAGEEEEEEEEEV999999999999')
console.log('999999999999999999999')
console.log('99999999999999STAGEEEEEEEEE9999999')
console.log('99999999SAVSA9STAGEEEEEEEEE999999999999')
console.log('99999999999999STAGEEEEEEEEE9999999')
console.log('9999999SAVSAV99STAGEEEEEEEEE999999999999')
console.log('999999999999999STAGEEEEEEEEE999999')
console.log('9999999999VSSSSSTAGEEEEEEEEESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
>>>>>>> theirs
||||||| ancestor
=======
console.log('9999999999VSSSSSTAGEEEEEEEEESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999999VSSSTAGEEEEEEEEESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
>>>>>>> theirs
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('99999999ASVSAV9STAGEEEEEEEEE999999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999999VSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS99999999999')
console.log('9999999ASFVSAVSAVSVSA99999999999999')
console.log('9999999VSAV99999999999999')
console.log('999999999999999999999')
console.log('99999999SAVSAV9999999999999')
console.log('999999999SAVSAV999999999999')
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
<<<<<<< ours
||||||| ancestor
<<<<<<< ours
=======
>>>>>>> theirs
console.log(
    '!=============!!!!MAIN!!!!=======!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!STAGEEEEEEEEE=!!!!!!!!!!!!!!!!!!!===99999999999999999ASFVSAVSAVSA9999!========================'
)
console.log(
    '!===============!!!!MAIN!!!!=====!!!!!!!!!!!!!!!!!!!=!!!!!!!!!!!!!!!!!!!===99999999999999999SAVSAVVSA9999!========================'
)
console.log('!====STAGEEEEEEEEE========!!!!MAIN!!!!========!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=========!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=========!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!=====STAGEEEEEEEEE====!!!!MAIN!!!! !!!!!!STAGEEEEEEEEE!!!!!STAGEEEEEEEEE!!!!!!!!===============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!! !!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!NOOOOO STAGEEEEEEEEE!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)

console.log('!=============!!!!MAIN!!!!===GGGGGG====!!!!!!!!!!!!!!!!!!!=!!!!!!!!!!!!!!!!!!!===99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!===============!!!!MAIN!!!!==GGGGGG===!!!!!!!!!!!!!!!!!!!=!!!!!!!!!!!!!!!!!!!===99999999999999999SAVSAVVSA9999!========================')
console.log('!============!!!!MAIN!!!!===GGGGGG=====!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!====GGGGGG=====!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!====GGGGGG=====!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!=========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!=======GGGGGG========99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!======GGGGGG=======99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')

console.log('!=============!!!!MAIN!!!!===========99999999999999999SAVSAVVSA9999!========================')
>>>>>>> theirs

<<<<<<< ours
console.log('========================999999999999999999999========================')
console.log('99999999SAVSAV9999999999999')
console.log('999999999SAVSAV999999999999')
||||||| ancestor
=======
console.log(
    '!=============!!!!MAIN!!!!=======!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!STAGEEEEEEEEE=!!!!!!!!!!!!!!!!!!!===99999999999999999ASFVSAVSAVSA9999!========================'
)
console.log(
    '!===============!!!!MAIN!!!!=====!!!!!!!!!!!!!!!!!!!=!!!!!!!!!!!!!!!!!!!===99999999999999999SAVSAVVSA9999!========================'
)
console.log('!====STAGEEEEEEEEE========!!!!MAIN!!!!========!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=========!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=========!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!=====STAGEEEEEEEEE====!!!!MAIN!!!! !!!!!!STAGEEEEEEEEE!!!!!STAGEEEEEEEEE!!!!!!!!===============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!! !!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!NOOOOO STAGEEEEEEEEE!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)

console.log('!=============!!!!MAIN!!!!===GGGGGG====!!!!!!!!!!!!!!!!!!!=!!!!!!!!!!!!!!!!!!!===99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!===============!!!!MAIN!!!!==GGGGGG===!!!!!!!!!!!!!!!!!!!=!!!!!!!!!!!!!!!!!!!===99999999999999999SAVSAVVSA9999!========================')
console.log('!============!!!!MAIN!!!!===GGGGGG=====!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!====GGGGGG=====!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!====GGGGGG=====!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!=========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!=======GGGGGG========99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!======GGGGGG=======99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')

console.log('!=============!!!!MAIN!!!!===========99999999999999999SAVSAVVSA9999!========================')

console.log('========================999999999999999999999========================')
console.log('99999999SAVSAV9999999999999')
console.log('999999999SAVSAV999999999999')
>>>>>>> theirs
console.log('!=============!!!!MAIN!!!!===========99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!===============!!!!MAIN!!!!=========99999999999999999SAVSAVVSA9999!========================')
console.log('!============!!!!MAIN!!!!============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!=========!!!!MAIN!!!!===============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!!================99999999999999999SAVSAVVSA9999!========================')
||||||| ancestor
console.log('!=============!!!!MAIN!!!!===========99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!===============!!!!MAIN!!!!=========99999999999999999SAVSAVVSA9999!========================')
console.log('!============!!!!MAIN!!!!============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!=========!!!!MAIN!!!!===============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!!================99999999999999999SAVSAVVSA9999!========================')
=======
<<<<<<< ours
console.log(
    '!=============!!!!MAIN!!!!=======!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!STAGEEEEEEEEE=!!!!!!!!!!!!!!!!!!!===99999999999999999ASFVSAVSAVSA9999!========================'
)
console.log(
    '!===============!!!!MAIN!!!!=====!!!!!!!!!!!!!!!!!!!=!!!!!!!!!!!!!!!!!!!===99999999999999999SAVSAVVSA9999!========================'
)
console.log('!====STAGEEEEEEEEE========!!!!MAIN!!!!========!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=========!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=========!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!=====STAGEEEEEEEEE====!!!!MAIN!!!! !!!!!!STAGEEEEEEEEE!!!!!STAGEEEEEEEEE!!!!!!!!===============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!! !!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!NOOOOO STAGEEEEEEEEE!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)

console.log('!=============!!!!MAIN!!!!===GGGGGG====!!!!!!!!!!!!!!!!!!!=!!!!!!!!!!!!!!!!!!!===99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!===============!!!!MAIN!!!!==GGGGGG===!!!!!!!!!!!!!!!!!!!=!!!!!!!!!!!!!!!!!!!===99999999999999999SAVSAVVSA9999!========================')
console.log('!============!!!!MAIN!!!!===GGGGGG=====!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!====GGGGGG=====!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!====GGGGGG=====!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!=========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!=======GGGGGG========99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!======GGGGGG=======99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')

>>>>>>> theirs
console.log('!=============!!!!MAIN!!!!===========99999999999999999SAVSAVVSA9999!========================')

<<<<<<< ours
console.log('========================999999999999999999999========================')
console.log('99999999SAVSAV9999999999999')
console.log('999999999SAVSAV999999999999')
console.log('!=============98484===========99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!===============98484=========99999999999999999SAVSAVVSA9999!========================')
console.log('!============98484============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========98484=============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========98484=============99999999999999999SAVSAVVSA9999!========================')
console.log('!=========98484===============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========98484=============99999999999999999SAVSAVVSA9999!========================')
console.log('!========98484================99999999999999999SAVSAVVSA9999!========================')
console.log('!=============98484===========99999999999999999SAVSAVVSA9999!========================')
console.log('99999999SAVSAV9999999999999')
console.log('999999999SAVSAV999999999999')

console.log('!=============!!!!MAIN!!!!===========99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!===============!!!!MAIN!!!!=========99999999999999999SAVSAVVSA9999!========================')
console.log('!============!!!!MAIN!!!!============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!==!!!===========99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!====!!!!=========99999999999999999SAVSAVVSA9999!========================')
console.log('!=========!!!!MAIN!!!!======!!!!!=========99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!======!!!!=======99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!!========!!!========99999999999999999SAVSAVVSA9999!========================')
console.log('!=============!!!!MAIN!!!!===========99999999999999999SAVSAVVSA9999!========================')

console.log('!=============!!!!MAIN!!!!===========99999999999999999SAVSAVVSA9999!========================')

||||||| ancestor
=======
console.log('99999999SAVSAV9999999999999')
console.log('999999999SAVSAV999999999999')
console.log('!=============STAGE===========99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!===============STAGE=========99999999999999999SAVSAVVSA9999!========================')
console.log('!============STAGE============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========STAGE=============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========STAGE=============99999999999999999SAVSAVVSA9999!========================')
console.log('!=========STAGE===============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========STAGE=============99999999999999999SAVSAVVSA9999!========================')
console.log('!========STAGE================99999999999999999SAVSAVVSA9999!========================')
console.log('!=============STAGE===========99999999999999999SAVSAVVSA9999!========================')
>>>>>>> theirs
||||||| ancestor
=======
console.log('========================999999999999999999999========================')
console.log('99999999SAVSAV9999999999999')
console.log('999999999SAVSAV999999999999')
console.log('!=============!!!!MAIN!!!!===========99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!===============!!!!MAIN!!!!=========99999999999999999SAVSAVVSA9999!========================')
console.log('!============!!!!MAIN!!!!============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!=========!!!!MAIN!!!!===============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!!================99999999999999999SAVSAVVSA9999!========================')
||||||| ancestor
console.log('!=============!!!!MAIN!!!!===========99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!===============!!!!MAIN!!!!=========99999999999999999SAVSAVVSA9999!========================')
console.log('!============!!!!MAIN!!!!============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!=========!!!!MAIN!!!!===============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!!================99999999999999999SAVSAVVSA9999!========================')
=======
<<<<<<< ours
||||||| ancestor
<<<<<<< ours
=======
>>>>>>> theirs
console.log(
    '!=============!!!!MAIN!!!!=======!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!STAGEEEEEEEEE=!!!!!!!!!!!!!!!!!!!===99999999999999999ASFVSAVSAVSA9999!========================'
)
console.log(
    '!===============!!!!MAIN!!!!=====!!!!!!!!!!!!!!!!!!!=!!!!!!!!!!!!!!!!!!!===99999999999999999SAVSAVVSA9999!========================'
)
console.log('!====STAGEEEEEEEEE========!!!!MAIN!!!!========!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=========!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=========!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!=====STAGEEEEEEEEE====!!!!MAIN!!!! !!!!!!STAGEEEEEEEEE!!!!!STAGEEEEEEEEE!!!!!!!!===============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!! !!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!NOOOOO STAGEEEEEEEEE!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)

console.log('!=============!!!!MAIN!!!!===GGGGGG====!!!!!!!!!!!!!!!!!!!=!!!!!!!!!!!!!!!!!!!===99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!===============!!!!MAIN!!!!==GGGGGG===!!!!!!!!!!!!!!!!!!!=!!!!!!!!!!!!!!!!!!!===99999999999999999SAVSAVVSA9999!========================')
console.log('!============!!!!MAIN!!!!===GGGGGG=====!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!====GGGGGG=====!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!====GGGGGG=====!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!=========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!=======GGGGGG========99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!======GGGGGG=======99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')

>>>>>>> theirs
console.log('!=============!!!!MAIN!!!!===========99999999999999999SAVSAVVSA9999!========================')

<<<<<<< ours
>>>>>>> theirs
||||||| ancestor
=======
console.log('========================999999999999999999999========================')
console.log('99999999SAVSAV9999999999999')
console.log('999999999SAVSAV999999999999')
console.log('!=============!!!!MAIN!!!!===========99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!===============!!!!MAIN!!!!=========99999999999999999SAVSAVVSA9999!========================')
console.log('!============!!!!MAIN!!!!============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!=========!!!!MAIN!!!!===============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!!================99999999999999999SAVSAVVSA9999!========================')
||||||| ancestor
console.log('!=============!!!!MAIN!!!!===========99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!===============!!!!MAIN!!!!=========99999999999999999SAVSAVVSA9999!========================')
console.log('!============!!!!MAIN!!!!============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!=========!!!!MAIN!!!!===============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!!================99999999999999999SAVSAVVSA9999!========================')
=======
<<<<<<< ours
console.log(
    '!=============!!!!MAIN!!!!=======!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!STAGEEEEEEEEE=!!!!!!!!!!!!!!!!!!!===99999999999999999ASFVSAVSAVSA9999!========================'
)
console.log(
    '!===============!!!!MAIN!!!!=====!!!!!!!!!!!!!!!!!!!=!!!!!!!!!!!!!!!!!!!===99999999999999999SAVSAVVSA9999!========================'
)
console.log('!====STAGEEEEEEEEE========!!!!MAIN!!!!========!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=========!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=========!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!=====STAGEEEEEEEEE====!!!!MAIN!!!! !!!!!!STAGEEEEEEEEE!!!!!STAGEEEEEEEEE!!!!!!!!===============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!! !!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!!!! !!!!!!!!STAGEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)
console.log(
    '!========!!!!MAIN!NOOOOO STAGEEEEEEEEE!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================'
)

console.log('!=============!!!!MAIN!!!!===GGGGGG====!!!!!!!!!!!!!!!!!!!=!!!!!!!!!!!!!!!!!!!===99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!===============!!!!MAIN!!!!==GGGGGG===!!!!!!!!!!!!!!!!!!!=!!!!!!!!!!!!!!!!!!!===99999999999999999SAVSAVVSA9999!========================')
console.log('!============!!!!MAIN!!!!===GGGGGG=====!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!====GGGGGG=====!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!====GGGGGG=====!!!!!!!!!!!!!!!!!!!====99999999999999999SAVSAVVSA9999!========================')
console.log('!=========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!=======GGGGGG========99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!======GGGGGG=======99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!================99999999999999999SAVSAVVSA9999!========================')

>>>>>>> theirs
console.log('!=============!!!!MAIN!!!!===========99999999999999999SAVSAVVSA9999!========================')

console.log('========================999999999999999999999========================')
<<<<<<< ours
||||||| ancestor
||||||| ancestor
console.log('99999999SAVSAV9999999999999')
console.log('999999999SAVSAV999999999999')
console.log('!========================99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!========================10000000009984219999SAVSAVVSA9999!========================')
=======
console.log('99999999SAVSAV9999999999999')
console.log('999999999SAVSAV999999999999')
console.log('!=============98484===========99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!===============98484=========99999999999999999SAVSAVVSA9999!========================')
console.log('!============98484============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========98484=============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========98484=============99999999999999999SAVSAVVSA9999!========================')
console.log('!=========98484===============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========98484=============99999999999999999SAVSAVVSA9999!========================')
console.log('!========98484================99999999999999999SAVSAVVSA9999!========================')
console.log('!=============98484===========99999999999999999SAVSAVVSA9999!========================')

>>>>>>> theirs
=======
||||||| ancestor
console.log('99999999SAVSAV9999999999999')
console.log('999999999SAVSAV999999999999')
<<<<<<< ours
console.log('!=============!!!!MAIN!!!!===========99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!===============!!!!MAIN!!!!=========99999999999999999SAVSAVVSA9999!========================')
console.log('!============!!!!MAIN!!!!============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!==!!!===========99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!====!!!!=========99999999999999999SAVSAVVSA9999!========================')
console.log('!=========!!!!MAIN!!!!======!!!!!=========99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!======!!!!=======99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!!========!!!========99999999999999999SAVSAVVSA9999!========================')
console.log('!=============!!!!MAIN!!!!===========99999999999999999SAVSAVVSA9999!========================')

||||||| ancestor
console.log('!=============!!!!MAIN!!!!===========99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!===============!!!!MAIN!!!!=========99999999999999999SAVSAVVSA9999!========================')
console.log('!============!!!!MAIN!!!!============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!=========!!!!MAIN!!!!===============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========!!!!MAIN!!!!=============99999999999999999SAVSAVVSA9999!========================')
console.log('!========!!!!MAIN!!!!================99999999999999999SAVSAVVSA9999!========================')
console.log('!=============!!!!MAIN!!!!===========99999999999999999SAVSAVVSA9999!========================')

=======
console.log('!========================99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!========================10000000009984219999SAVSAVVSA9999!========================')
=======
console.log('99999999SAVSAV9999999999999')
console.log('999999999SAVSAV999999999999')
console.log('!=============STAGE===========99999999999999999ASFVSAVSAVSA9999!========================')
console.log('!===============STAGE=========99999999999999999SAVSAVVSA9999!========================')
console.log('!============STAGE============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========STAGE=============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========STAGE=============99999999999999999SAVSAVVSA9999!========================')
console.log('!=========STAGE===============99999999999999999SAVSAVVSA9999!========================')
console.log('!===========STAGE=============99999999999999999SAVSAVVSA9999!========================')
console.log('!========STAGE================99999999999999999SAVSAVVSA9999!========================')
console.log('!=============STAGE===========99999999999999999SAVSAVVSA9999!========================')

>>>>>>> theirs
>>>>>>> theirs
const activeRouteName = computed(() => {
    if (typeof router.currentRoute.value.name === 'string') {
        return router.currentRoute.value.name
    }

    return ''
})

function calc(a, b) {
    return a + b // upstream версия
}

function calc2(a, b) {
    return a + b // upstream версия
}

function calc3(a, b) {
    return a + b // upstream версия
}

function calc4(a, b) {
    return a + b // upstream версия
}

const toRoute: ToRoute = (routeName) => {
    switch (routeName) {
        case ROUTE_PATHS.SERVERS_ORDER_PRE_BUILT.name:
            return { name: routeName, params: { id: 'd736d7f16ae64eeb9b8047d03f38e74f' } }

        default: {
            return { name: routeName }
        }
    }
}

watch(
    data,
    async () => {
        if (data.value) {
            console.log('data.value', data.value)
            const hasAccess = permissionByRole.value.some((route) => route.name === router.currentRoute.value.name)

            if (!hasAccess) {
                await router.push(toRoute(permissionByRole.value[0].name))
            }

            await loadLocaleMessages((messages) => {
                i18n.setLocaleMessage(i18n.locale.value, messages)
            }, i18n.locale.value)

            appLoading.value = false
        }
    },
    { immediate: true }
)
</script>

<template>
    <div
        v-if="appLoading"
        class="h-[100vh] w-[100vh] flex items-center justify-center"
    >
        AppLoading...
    </div>
    <div
        v-else
        class="grid grid-cols-[auto_1fr] grid-rows-[auto_64px_1fr] h-[100vh] overflow-hidden"
    >
        <div class="col-span-full flex items-center justify-center p-[14px]">
            <strong>Sing in as</strong>
            <SelectUsersByRoles
                :model-value="data"
                class="w-[310px] ml-[15px]"
                @update:model-value="authStore.onSingInAs"
            />
        </div>
        <Header :config="headerConfig">
            <template #logo> {{ $t('logo') }}</template>
        </Header>

        <Navbar
            :active-route-name="activeRouteName"
            :to-route="toRoute"
            :config="navbarConfig"
        >
        </Navbar>

        <main
            id="main"
            class="p-[24px] relative overflow-auto"
        >
            <RouterView />
        </main>
    </div>
</template>

<style scoped></style>
