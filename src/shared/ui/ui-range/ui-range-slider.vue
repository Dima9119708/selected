<script lang="ts">
import { type PropType } from 'vue'

import type { RangeSliderSteps } from './types'

const DEFAULT_MIN = 0
const DEFAULT_MAX = 100
let activePointerType: 'min' | 'max' | null = null

export default {
    props: {
        steps: {
            type: Array as PropType<Array<RangeSliderSteps>>,
            required: true,
        },
        modelValue: {
            type: Object as PropType<{ min: RangeSliderSteps | null; max: RangeSliderSteps | null } | null>,
        },
    },
    emits: {
        'update:modelValue': (payload: { min: RangeSliderSteps | null; max: RangeSliderSteps | null }) => {
            return 'min' in payload && 'max' in payload
        },
    },
    data() {
        return {
            selectedMin: DEFAULT_MIN,
            selectedMax: DEFAULT_MAX,
            minLabel: this.steps[0].label,
            maxLabel: this.steps[this.steps.length - 1].label,
        }
    },
    computed: {
        stepPositions() {
            const stepInterval = DEFAULT_MAX / (this.steps.length - 1)
            const stepRadius = stepInterval / 2

            return this.steps.map(({ label }, index) => ({
                label,
                position: index * stepInterval,
                minBound: index * stepInterval - stepRadius,
                maxBound: index * stepInterval + stepRadius,
            }))
        },
        maxLabelTranslateX() {
            if (Math.floor(this.selectedMax) === 100) {
                return `translateX(calc(-50% + 3.5px))`
            }

            if (Math.floor(this.selectedMax) === 0) {
                return `translateX(calc(50% - 3.5px))`
            }

            return `translateX(0)`
        },
        minLabelTranslateX() {
            if (Math.floor(this.selectedMin) === 100) {
                return `translateX(calc(-50% + 3.5px))`
            }

            if (Math.floor(this.selectedMin) === 0) {
                return `translateX(calc(50% - 3.5px))`
            }

            return `translateX(0)`
        },
    },
    methods: {
        calculatePositionPercentage(clientX: number, barElement: HTMLElement) {
            const { x: barX, width: barWidth } = barElement.getBoundingClientRect()
            const relativeX = clientX - barX
            const clampedX = Math.max(0, Math.min(relativeX, barWidth))
            return (clampedX / barWidth) * 100
        },
        updateSelection(percentage: number, target: 'min' | 'max') {
            const activeStep = this.stepPositions.find(({ minBound, maxBound }) => percentage >= minBound && percentage <= maxBound)

            if (!activeStep) return

            if (target === 'min') {
                this.selectedMin = Math.min(this.selectedMax, activeStep.position)
                this.minLabel = this.selectedMin === this.selectedMax ? this.maxLabel : activeStep.label
            } else {
                this.selectedMax = Math.max(this.selectedMin, activeStep.position)
                this.maxLabel = this.selectedMax === this.selectedMin ? this.minLabel : activeStep.label
            }
        },
        handlePointerMove(event: PointerEvent) {
            if (!this.$refs['rz-bar'] || !activePointerType) return

            const percentage = this.calculatePositionPercentage(event.x, this.$refs['rz-bar'])
            this.updateSelection(percentage, activePointerType)
        },
        handlePointerInteractionStart(target: 'min' | 'max') {
            activePointerType = target
            window.addEventListener('pointermove', this.handlePointerMove)
            window.addEventListener('pointerup', this.handlePointerInteractionEnd)
        },
        handlePointerInteractionEnd() {
            activePointerType = null

            const min = this.steps.find((value) => value.label === this.minLabel)
            const max = this.steps.find((value) => value.label === this.maxLabel)

            this.$emit('update:modelValue', { min: min ?? null, max: max ?? null })

            window.removeEventListener('pointermove', this.handlePointerMove)
            window.removeEventListener('pointerup', this.handlePointerInteractionEnd)
        },
        handleBarClick(event: PointerEvent) {
            if (!this.$refs['rz-bar']) return

            const percentage = this.calculatePositionPercentage(event.x, this.$refs['rz-bar'])
            const minPointerRect = this.$refs['rz-pointer-min'].getBoundingClientRect()
            const maxPointerRect = this.$refs['rz-pointer-max'].getBoundingClientRect()

            const closestPointer = Math.abs(event.x - minPointerRect.x) < Math.abs(event.x - maxPointerRect.x) ? 'min' : 'max'

            const shouldUpdateMax = this.selectedMin === this.selectedMax && event.x > Math.max(minPointerRect.x, maxPointerRect.x)

            this.updateSelection(percentage, shouldUpdateMax ? 'max' : closestPointer)
        },
    },
}
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
