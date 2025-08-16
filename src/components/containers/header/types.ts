import type { Component } from 'vue'

export type ItemConfig = {
    name?: string
    component?: Component
}

export type HeaderConfig = ItemConfig[]

export type HeaderConfigOverrides = Record<string, Partial<ItemConfig>>
