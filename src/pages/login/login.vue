<script lang="ts" setup="">
import { ErrorMessage, useForm } from 'vee-validate'
import { ref, watch } from 'vue'

import { useAuthStore } from '@/components/containers/auth/use-auth'

import SelectUsersByRoles from '@/components/containers/select-users-by-roles/select-users-by-roles.vue'

import Button from '@/components/ui/ui-button.vue'
import InputText from '@/components/ui/ui-input/ui-input-text.vue'
import Password from '@/components/ui/ui-input/ui-password.vue'
import Label from '@/components/ui/ui-label.vue'
import type { TUser } from '@/entities/users.ts'

const { onLogin, data } = useAuthStore()

const user = ref<TUser | null>(null)

const { defineField, handleSubmit, setValues, errors, setErrors } = useForm({
    validationSchema: {
        email: 'required|email',
        password: 'required',
    },
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

watch(user, () => {
    if (user.value) {
        setValues({
            ...user.value,
            password: 'ABC',
        })
    }
})

const onSubmit = handleSubmit((values) => {
    if ('id' in values) {
        return onLogin(values as TUser)
    }

    setErrors({
        userNotFound: 'User not found',
    })
})
</script>

<template>
    <div>
        <div class="text-center">Logo</div>
        <div class="mt-[44px] mb-[30px] text-center">Log in to the control panel</div>

        <div class="min-w-[450px]">
            <div class="col-span-full flex items-center justify-center mb-[30px]">
                <strong>Sing in as</strong>
                <SelectUsersByRoles
                    :model-value="data"
                    @update:modelValue="user = $event"
                    class="w-[310px] ml-[15px]"
                />
            </div>

            <div class="mb-[30px]">
                <Label for="email">Email</Label>
                <InputText
                    id="email"
                    v-model="email"
                    v-bind="emailAttrs"
                />
                <ErrorMessage
                    v-if="errors.email"
                    name="email"
                />
            </div>

            <div class="mb-[30px]">
                <Label for="password">Password</Label>
                <Password
                    id="password"
                    v-model="password"
                    v-bind="passwordAttrs"
                />
                <ErrorMessage
                    v-if="errors.password"
                    name="password"
                />
            </div>

            <Button
                class="w-full"
                size="large"
                @click="onSubmit"
            >
                Log in
            </Button>

            <div
                v-if="errors.userNotFound"
                class="mt-[20px] user-not-found text-center"
            >
                {{ errors.userNotFound }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.panel-profile-button {
    padding: 0 8px;
}
.panel-profile-button-label-email {
    color: var(--panel-profile-button_color__base);
}

.user-not-found {
    color: var(--color_10);
}
</style>
