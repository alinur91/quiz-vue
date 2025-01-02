<template>
  <div
    :class="[
      'bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl',
      countdownClass,
    ]"
  >
    {{ formatTime(timeInSeconds) }}
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watchEffect, onUnmounted } from 'vue'
import { useQuiz } from '@/composables/useQuiz'

type CountdownTimerProps = {
  seconds: number
  shakeThreshold?: number
}

const { finishQuiz } = useQuiz()

const props = defineProps<CountdownTimerProps>()

const timeInSeconds = ref(props.seconds || 0)
const shakeThreshold = props.shakeThreshold || 7

// Computed property to format time as minutes:seconds
const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60)
  const remainingSeconds = time % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

// Computed property to determine the countdown animation class
const countdownClass = computed(() => {
  return timeInSeconds.value <= shakeThreshold
    ? 'from-red-600 via-red-700 to-red-800 animate-shake'
    : 'from-blue-200 via-indigo-400 to-blue-400'
})

// Effect to start countdown timer when component is mounted and update the time
onMounted(() => {
  if (timeInSeconds.value > 0) {
    const intervalId = setInterval(() => {
      timeInSeconds.value--
    }, 1000)

    // Stop the countdown when the time reaches 0 and call finishQuiz
    watchEffect(() => {
      if (timeInSeconds.value <= 0) {
        clearInterval(intervalId)
        finishQuiz() // Finish the quiz when countdown reaches zero
      }
    })

    // Cleanup interval on component unmount
    onUnmounted(() => {
      clearInterval(intervalId)
    })
  } else {
    finishQuiz() // Call finishQuiz immediately if countdown starts at 0
  }
})
</script>
