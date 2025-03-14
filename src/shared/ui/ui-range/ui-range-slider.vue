<script lang="ts" setup>
import { computed, defineProps, ref, useTemplateRef } from 'vue'

import type { RangeSliderSteps } from '@/shared/ui/ui-range/types'

const props = defineProps<{
    steps: Array<RangeSliderSteps>
}>()

const sliderBarRef = useTemplateRef('rz-bar')
const model = defineModel<{ min: RangeSliderSteps | null; max: RangeSliderSteps | null } | null>()

const DEFAULT_MIN = 0
const DEFAULT_MAX = 100
const steps = props.steps

const selectedMin = ref(DEFAULT_MIN)
const selectedMax = ref(DEFAULT_MAX)
const minLabel = ref(steps[0].label)
const maxLabel = ref(steps[steps.length - 1].label)

const minPointerRef = useTemplateRef('rz-pointer-min')
const maxPointerRef = useTemplateRef('rz-pointer-max')

let activePointerType: 'min' | 'max' | null = null

const stepPositions = computed(() => {
    const stepInterval = DEFAULT_MAX / (steps.length - 1)
    const stepRadius = stepInterval / 2

    return steps.map(({ label }, index) => ({
        label,
        position: index * stepInterval,
        minBound: index * stepInterval - stepRadius,
        maxBound: index * stepInterval + stepRadius,
    }))
})

const calculatePositionPercentage = (clientX: number, barElement: HTMLElement) => {
    const { x: barX, width: barWidth } = barElement.getBoundingClientRect()
    const relativeX = clientX - barX
    const clampedX = Math.max(0, Math.min(relativeX, barWidth))
    return (clampedX / barWidth) * 100
}

const updateSelection = (percentage: number, target: 'min' | 'max') => {
    const activeStep = stepPositions.value.find(({ minBound, maxBound }) => percentage >= minBound && percentage <= maxBound)

    if (!activeStep) return

    if (target === 'min') {
        selectedMin.value = Math.min(selectedMax.value, activeStep.position)
        minLabel.value = selectedMin.value === selectedMax.value ? maxLabel.value : activeStep.label
    } else {
        selectedMax.value = Math.max(selectedMin.value, activeStep.position)
        maxLabel.value = selectedMax.value === selectedMin.value ? minLabel.value : activeStep.label
    }
}

const handlePointerMove = (event: PointerEvent) => {
    if (!sliderBarRef.value || !activePointerType) return

    const percentage = calculatePositionPercentage(event.x, sliderBarRef.value)
    updateSelection(percentage, activePointerType)
}

const handlePointerInteractionStart = (target: 'min' | 'max') => {
    activePointerType = target
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerInteractionEnd)
}

const handleBarClick = (event: PointerEvent) => {
    if (!sliderBarRef.value) return

    const percentage = calculatePositionPercentage(event.x, sliderBarRef.value)
    const minPointerRect = minPointerRef.value!.getBoundingClientRect()
    const maxPointerRect = maxPointerRef.value!.getBoundingClientRect()

    const closestPointer = Math.abs(event.x - minPointerRect.x) < Math.abs(event.x - maxPointerRect.x) ? 'min' : 'max'

    const shouldUpdateMax = selectedMin.value === selectedMax.value && event.x > Math.max(minPointerRect.x, maxPointerRect.x)

    updateSelection(percentage, shouldUpdateMax ? 'max' : closestPointer)
}

const handlePointerInteractionEnd = () => {
    activePointerType = null

    const min = props.steps.find((value) => value.label === minLabel.value)
    const max = props.steps.find((value) => value.label === maxLabel.value)

    model.value = { min: min ?? null, max: max ?? null }
    window.removeEventListener('pointermove', handlePointerMove)
    window.removeEventListener('pointerup', handlePointerInteractionEnd)
}

const maxLabelTranslateX = computed(() => {
    if (Math.floor(selectedMax.value) === 100) {
        return `translateX(calc(-50% + 3.5px))`
    }

    if (Math.floor(selectedMax.value) === 0) {
        return `translateX(calc(50% - 3.5px))`
    }

    return `translateX(0)`
})

const minLabelTranslateX = computed(() => {
    if (Math.floor(selectedMin.value) === 100) {
        return `translateX(calc(-50% + 3.5px))`
    }

    if (Math.floor(selectedMin.value) === 0) {
        return `translateX(calc(50% - 3.5px))`
    }

    return `translateX(0)`
})
</script>

<template>
    <div class="slider-container">
        <div
            ref="rz-bar"
            class="slider-bar"
            @pointerdown="handleBarClick"
        >
            <div
                class="selection-range"
                :style="{
                    left: `${selectedMin}%`,
                    width: `${selectedMax - selectedMin}%`,
                }"
            />

            <div
                class="slider-handle min-handle"
                ref="rz-pointer-min"
                :style="{ left: `${selectedMin}%` }"
                @pointerdown="handlePointerInteractionStart('min')"
            >
                <span class="handle-label min-label">
                    {{ minLabel }}
                </span>
            </div>

            <div
                class="slider-handle max-handle"
                ref="rz-pointer-max"
                :style="{ left: `${selectedMax}%` }"
                @pointerdown="handlePointerInteractionStart('max')"
            >
                <span class="handle-label max-label">
                    {{ maxLabel }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.slider-container {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 4px;
    margin: 25px 0;
    padding: 0 7px;
    vertical-align: middle;
    user-select: none;
}

.slider-bar {
    position: relative;
    height: inherit;
    border-radius: 2px;
    background-color: var(--sui-slider_rail_color__base);
}

.selection-range {
    position: absolute;
    z-index: 1;
    height: 100%;
    border-radius: 2px;
    background-color: var(--sui-slider_track_background_color__base);
}

.slider-handle {
    position: absolute;
    width: 14px;
    height: 14px;
    top: 50%;
    cursor: pointer;
    transform: translate(-50%, -50%);
    z-index: 3;
    border-radius: 16px;
    background-color: var(--sui-global_control-background);
    border: 2px solid var(--sui-slider_handle_border);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: var(--sui-slider_handle_background_color__hover);
    }
}

.handle-label {
    position: absolute;
    white-space: nowrap;
    color: var(--sui-slider-handle_text_color__base);
}

.min-label {
    top: -24px;
    transform: v-bind(minLabelTranslateX);
}

.max-label {
    bottom: -24px;
    transform: v-bind(maxLabelTranslateX);
}
</style>
