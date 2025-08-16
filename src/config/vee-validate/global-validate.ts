import { email, required } from '@vee-validate/rules'
import { defineRule } from 'vee-validate'

defineRule('required', required)
defineRule('email', email)
