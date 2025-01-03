<template>
  <img :class="className" :src="src" alt="" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ImageSizes } from '../types/quizType'

type ImageProps = {
  src: string
  size: ImageSizes
  isReactLogo: boolean
}

const { size, isReactLogo } = defineProps<ImageProps>()

const imageSizeClasses = {
  [ImageSizes.small]: 'h-20',
  [ImageSizes.medium]: 'h-20 md:h-32',
  [ImageSizes.large]: 'h-40 md:h-52',
}

const className = computed(() => {
  return `${imageSizeClasses[size]} ${
    isReactLogo && size !== ImageSizes.large ? 'spin-animation animate-spin' : ''
  }`
})
</script>
